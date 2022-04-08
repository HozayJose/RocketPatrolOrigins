class Play extends Phaser.Scene {
    constructor() {
        super("play");
    }

    preload() {
        //loading sprites/images(name, fileLocation)
        this.load.image('rocket','assets/rocket.png');
        this.load.image('spaceship','assets/spaceship.png');
        this.load.image('starfield','assets/starfield.png');
    }

    create() {
        //starfield (x, y, width, height, nameofObject)
        this.starfield = this.add.tileSprite(0,0,640,480, 'starfield').setOrigin(0,0);

        //green rectangle
        this.add.rectangle(0, borderPadding + borderUIsize, game.config.width, borderUIsize*2, 0x00FF00).setOrigin(0,0);
    
        //white borders for background(x, y, width, height, color)
        this.add.rectangle(0,0, game.config.width, borderUIsize, 0xFFFFFF).setOrigin(0,0);
        this.add.rectangle(0, game.config.height - borderUIsize, game.config.width, borderUIsize, 0xFFFFFF).setOrigin(0 ,0);
        this.add.rectangle(0, 0, borderUIsize, game.config.height, 0xFFFFFF).setOrigin(0 ,0);
        this.add.rectangle(game.config.width - borderUIsize, 0, borderUIsize, game.config.height, 0xFFFFFF).setOrigin(0 ,0);
    
        //add the rocket(this, x, y, name)
        this.p1rocket = new Rocket(this, game.config.width/2, game.config.height - borderUIsize - borderPadding, 'rocket').setOrigin(0.5,0);
    
        //define key binds
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        this.starfield.tilePositionX -= 4;
    }
}