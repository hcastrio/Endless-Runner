class Load extends Phaser.Scene {
    constructor() {
        super('loadScene');
    }

    preload() {
        // loading bar
        // see: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/loader/
        let loadingBar = this.add.graphics();
        this.load.on('progress', (value) => {
            loadingBar.clear();                                 // reset fill/line style
            loadingBar.fillStyle(0xFFFFFF, 1);                  // (color, alpha)
            loadingBar.fillRect(0, centerY, w * value, 5);  // (x, y, w, h)
        });
        this.load.on('complete', () => {
            loadingBar.destroy();
        });

        this.load.path = './assets/';
        // load graphics assets
        this.load.image('Robot', 'Robot.png');
        this.load.image('LowOb', 'LowOb.png');
        this.load.image('RobotIdle', 'Robot_Idle.png');
        this.load.image('RobotRun', 'Robot_Run.png');
        this.load.image('Grass', 'Grass.png');

        // load spritesheet
        this.load.spritesheet('Running', 'Robot_Run.png', {frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 10});
        this.load.spritesheet('Idling', 'Robot_Idle.png', {frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 8});


        // load audio assets
        
        // load font

    }

    create() {
        // check for local storage browser support
        if(window.localStorage) {
            console.log('Local storage supported');
        } else {
            console.log('Local storage not supported');
        }


        // create animations
        this.anims.create({
            key: 'Run',
            frames: this.anims.generateFrameNumbers('Running', { start: 0, end: 10, first: 0}),
            frameRate: 30
        });

        this.anims.create({
            key: 'Idle',
            frames: this.anims.generateFrameNumbers('Idling', { start: 0, end: 8, first: 0}),
            frameRate: 30
        });

        // go to Title scene
        this.scene.start('menuScene');
    }
}

// Copied from Nathan Altice PaddleParkourP3 on GitHub