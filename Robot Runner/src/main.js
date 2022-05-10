let config = {
    type: Phaser.AUTO,
    width: 960,
    height: 480,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: { 
                x: 0,
                y: 1200 
            }
        }
    },
    scene: [ Load, Menu, Play, Highscores ]
}

let game = new Phaser.Game(config);
// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard vars
let keyUP, keyDOWN, keyLEFT, keyRIGHT;

// reserve other variables
let centerX = game.config.width/2;
let centerY = game.config.height/2;
let w = game.config.width;
let h = game.config.height;

const SCALE = 0.1;
const tileSize = 60;
