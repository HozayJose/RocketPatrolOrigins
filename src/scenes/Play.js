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
        this.add.rectangle(0, game.config.height - borderUIsize, game.config.width, borderUIsize, 0xFFFFFF).setOrigin(0,0);
        this.add.rectangle(0, 0, borderUIsize, game.config.height, 0xFFFFFF).setOrigin(0,0);
        this.add.rectangle(game.config.width - borderUIsize, 0, borderUIsize, game.config.height, 0xFFFFFF).setOrigin(0,0);
    
        //add the rocket(this, x, y, name)
        this.p1rocket = new Rocket(this, game.config.width/2, game.config.height - borderUIsize - borderPadding, 'rocket').setOrigin(0.5,0);
    
        //adding spaceships 3x (currentScene, x, y pos, keyName, frameNumb, custom parameter)
        this.ship01 = new Spaceship(this, game.config.width + borderUIsize*6, borderUIsize*4, 'spaceship', 0, 30).setOrigin(0,0);
        this.ship02 = new Spaceship(this, game.config.width + borderUIsize*3, borderUIsize*5 + borderPadding*2, 'spaceship', 0, 20).setOrigin(0,0);
        this.ship03 = new Spaceship(this, game.config.width, borderUIsize*6 + borderPadding*4, 'spaceship', 0, 10).setOrigin(0,0);

        //define key binds
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        //moves the bg sprite right
        this.starfield.tilePositionX -= 4;

        //updates rocket pos and action
        this.p1rocket.update();

        //updates ship movement
        this.ship01.update();
        this.ship02.update();
        this.ship03.update();

        //checking rocket to ship collisions
        if(this.checkCollision(this.p1rocket,this.ship03)) {
            this.p1rocket.reset();
            this.ship03.reset();
        }
        if(this.checkCollision(this.p1rocket,this.ship02)) {
            this.p1rocket.reset();
            this.ship02.reset();
        }
        if(this.checkCollision(this.p1rocket,this.ship01)) {
            this.p1rocket.reset();
            this.ship01.reset();
        }
    }

    checkCollision(rocket, ship) {
        //AABB check
        if(rocket.x < ship.x + ship.width && rocket.x + rocket.width > ship.x && rocket.y < ship.y + ship.height && rocket.height + rocket.y > ship.y) {
            return true;
        } else {
            return false;
        }
    }
}