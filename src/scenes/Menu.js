class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        //load images
        this.load.image('Robot', './assets/Robot.png');
        this.load.image('Grass', './assets/Grass.png');
        // load audio
        
    }

    create() {
        // menu text configuration
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#03d5ff',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        
        // show menu text
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'ROBOT RUNNER', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, 'Use ↑ to jump, ↓ to slide, and ← to dodge', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#6edbdb';
        menuConfig.color = '#000';
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press ← for Highscores or → to Start Game', menuConfig).setOrigin(0.5);


        // set bg color
        this.cameras.main.setBackgroundColor('#416282');

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    
        // make ground tiles group
        this.ground = this.add.group();
        for(let i = 0; i < game.config.width; i += tileSize) {
            let groundTile = this.physics.add.sprite(i, game.config.height - tileSize, 'Grass').setScale(SCALE).setOrigin(0);
            groundTile.body.immovable = true;
            groundTile.body.allowGravity = false;
            this.ground.add(groundTile);
        }

        // animation config DOESN'T WORK
        // this.anims.create({
        //     key: 'Idle',
        //     frames: this.anims.generateFrameNumbers('Robot_Idle', { start: 0, end: 8, first: 0}),
        //     frameRate: 30
        // });

        // add Robot
        this.Robot = new Robot(this, game.config.width/5, game.config.height-125, 'Robot').setScale(0.25);

        // add physics collider
        this.physics.add.collider(this.Robot, this.ground);
        
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
          // ScoreBoard (WiP)
          this.scene.start('scoreScene');    
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
          // Playgame
          this.scene.start('playScene');
        }
    }
}