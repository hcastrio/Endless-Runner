class Highscores extends Phaser.Scene {
    constructor() {
        super("scoreScene");
    }

    preload() {
        // load audio
        
    }

    create() {
        this.add.text(20, 20, "ROBO RUNNER HIGHSCORES");

        this.add.text(20, 40, "Work in Progress");

        this.add.text(20, 60, "Press ← to go back to Menu");

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            // ScoreBoard (WiP)
            this.scene.start('menuScene');    
          }
        
    }
}