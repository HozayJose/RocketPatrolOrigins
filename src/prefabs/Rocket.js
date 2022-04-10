class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        //adding object to the scene
        scene.add.existing(this);
        this.isFiring = false;
        this.moveSpeed = 2;
    }

    update() {
        //left right controls
        if(!this.isFiring) {
            if(keyLEFT.isDown && this.x >= borderUIsize + this.width) {
                this.x -= this.moveSpeed;
                
            } else if(keyRIGHT.isDown && this.x <= game.config.width - borderUIsize - this.width) {
                this.x += this.moveSpeed;
                
            }
        }

        //fire button
        if(Phaser.Input.Keyboard.JustDown(keyF)) {
            this.isFiring = true;
            //console.log("fire");
        }
        //if rocket fired, move up
        if(this.isFiring && this.y >= borderUIsize*3 + borderPadding) {
            this.y -= this.moveSpeed;
        }

        //if miss reset Y position
        if(this.y <= borderUIsize*3 + borderPadding) {
            this.isFiring = false;
            this.y = game.config.height - borderUIsize - borderPadding;
        }
    }
}