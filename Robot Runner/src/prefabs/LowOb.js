// Rolling Obstacle prefab
class LowOb extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);   // add to existing scene
        scene.physics.add.existing(this);

    }

    update() {
        // move obstacle left
        this.x -= 2;
        // wrap around from left edge to right edge
        if(this.x <= 0 - this.width) {
            console.log("Reached Here");
            this.reset();
        }
    }

    reset() {
        this.x = game.config.width;
        console.log("Reset");

    }
}