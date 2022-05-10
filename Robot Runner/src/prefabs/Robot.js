// Rocket prefab
class Robot extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
  
      // add object to existing scene
      scene.add.existing(this);
      scene.physics.add.existing(this);

      
      //this.setCollideWorldBounds(true);
      //this.setMaxVelocity(this.MAX_X_VEL, this.MAX_Y_VEL);

      // Robot Variables
      this.isJumping = false;
      this.isSliding = false;
      this.isDodging = false;

      // variables and settings
      this.ACCELERATION = 1500;
      this.MAX_X_VEL = 500;   // pixels/second
      this.MAX_Y_VEL = 5000;
      this.DRAG = 600;    // DRAG < ACCELERATION = icy slide
      this.JUMP_VELOCITY = -700;
      //add robot sounds

    }


    update() {
    

    // JUMPING
        // Not Jumping if on ground or resetting if holding up
        try{
            if(this.body.touching.down && !keyUP.isDown) {
                this.isJumping = false;
                // this.anims.play('Run', true);
            }
        }catch(NullPointerException){};
        
        if(keyUP.isDown && this.isJumping == false) {
            this.body.velocity.y = this.JUMP_VELOCITY;
	        this.isJumping = true;
        }

    // MOVEMENT
        // Left and Right movement
        if(keyRIGHT.isDown){
            this.body.velocity.x= this.ACCELERATION;
            } else if(keyLEFT.isDown){
                this.body.velocity.x= -(this.ACCELERATION);
            } else{
                this.body.velocity.x= 0;
        }
        
    


    }
}