class Play extends Phaser.Scene {
    constructor() {
        super("play");
    }

    preload() {
        this.load.image('starfield','assets/starfield.png');
    }

    create() {
        //starfield background 
        this.starfield = this.add.tileSprite(0,0,640,480, 'starfield').setOrigin(0,0);

        //green rectangle
        this.add.rectangle(0, borderPadding + borderUIsize, game.config.width, borderUIsize*2, 0x00FF00).setOrigin(0,0);
    
        //white borders for background
        this.add.rectangle(0,0, game.config.width, borderUIsize, 0xFFFFFF).setOrigin(0,0);
        this.add.rectangle(0, game.config.height - borderUIsize, game.config.width, borderUIsize, 0xFFFFFF).setOrigin(0 ,0);
        this.add.rectangle(0, 0, borderUIsize, game.config.height, 0xFFFFFF).setOrigin(0 ,0);
        this.add.rectangle(game.config.width - borderUIsize, 0, borderUIsize, game.config.height, 0xFFFFFF).setOrigin(0 ,0);
    
    }

    udpate() {
        this.starfield.tilePositionX -= 4;
    }
}