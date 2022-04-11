class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);
        
        scene.add.existing(this);                               //adds the sprite to the existing scene
        this.points = pointValue;                               //storing point value
        this.moveSpeed = game.settings.spaceshipSpeed;          //spaceship move speed in pixels per frame
    }

    update() {
        //move left
        this.x -= this.moveSpeed;

        //wrapping from left edge to the right
        if(this.x <= 0 - this.width) {
            this.x = game.config.width;
        }
    }

    reset() {
        //position reset
        this.x = game.config.width;
    }
}