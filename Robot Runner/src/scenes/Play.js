class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    create() {

        // Create scoreConfig
        let scoreConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
              top: 5,
              bottom: 5,
            },
            fixedWidth: 100
        }

        // initialize score
        this.score = 0;

        // initialize Game Over
        this.gameOver = false; 

        // set bg color
        this.cameras.main.setBackgroundColor('#416282');

        // Create Floor
        // make ground tiles group COLLISIONs
        this.ground = this.add.group();
        for(let i = 0; i < game.config.width; i += tileSize) {
            let groundTile = this.physics.add.sprite(i, game.config.height - tileSize, 'Grass').setScale(SCALE).setOrigin(0);
            groundTile.body.immovable = true;
            groundTile.body.allowGravity = false;
            this.ground.add(groundTile);
        }

        // add moving ground VISUAL
        this.GrassMov = this.add.tileSprite(0, 420, 80000, 800, 'Grass').setOrigin(0, 0).setScale(0.1);

        // add Robot
        this.Robot = new Robot(this, game.config.width/5, game.config.height-125, 'Robot').setScale(0.25);
        
        // SAYS THIS IS NOT A FUNCTION!?!?!?!?!?!?!
        //this.Robot.setCollideWorldBounds(true);

        // add Obstacles
        this.LowOb = new LowOb(this, game.config.width, game.config.height-140, 'LowOb', 0, 0).setOrigin(0, 0).setScale(0.25);

        // add physics colliders
        this.physics.add.collider(this.Robot, this.ground);
        this.physics.add.collider(this.LowOb, this.ground);
        
        this.physics.add.overlap(this.Robot, this.LowOb, this.killBot, null, this);


        // Define Keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    

    }

    update() {

        // Sprite Update
        if(!this.gameOver){
            this.Robot.update();    // updates Robot for movement
            this.LowOb.update();    // updates Low Obstacle
            //Makes the floor move
            this.GrassMov.tilePositionX +=6;
        }
        
        //Game Over Screen
        if(this.gameOver==true){
            this.add.text(game.config.width/2, game.config.height/2, 'GAME OVER').setOrigin(0.5);
            this.add.text(game.config.width/2, game.config.height/2 + 20, 'Press ← to restart').setOrigin(0.5);
        }

        // check key input for replay
        if (this.gameOver && keyLEFT.isDown) {
            this.scene.restart();
        }

        // GET FROM GAME OVER TO MENU WIP
        // if (this.gameOver && keyUP.isDown) {
        //     this.scene.start("menuScene");
        // }
            
        
    }

    killBot(Robot) {
        Robot.destroy();
        this.gameOver = true; 
    }


}