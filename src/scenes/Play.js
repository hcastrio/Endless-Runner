class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    create() {
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
        

        // add physics collider
        this.physics.add.collider(this.Robot, this.ground);

        // Define Keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    
        // animation config DOESN'T WORK
        // this.anims.create({
        //     key: 'Run',
        //     frames: this.anims.generateFrameNumbers('Robot_Run', { start: 0, end: 10, first: 0}),
        //     frameRate: 30
        // });
    

    }

    update() {

        // Sprite Update
        this.Robot.update();    // updates Robot for movement

        //Makes the floor move
        this.GrassMov.tilePositionX +=6;
    }
}