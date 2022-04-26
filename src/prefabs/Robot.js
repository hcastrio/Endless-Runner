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
    
        // Create variable for when robot is on ground
        this.isGrounded = this.body.touching.down;


    // JUMPING
        // Not Jumping if on ground or resetting if holding up
        if(this.isGrounded && !keyUP.isDown) {
	    	this.isJumping = false;
        }
        if(keyUP.isDown && this.isJumping == false) {
            this.body.velocity.y = this.JUMP_VELOCITY;
	        this.isJumping = true;
        }
    

    // SLIDING 
        //check if grounded


    // DODGE
        //check if grounded


    }
}