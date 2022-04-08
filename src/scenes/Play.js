class Play extends Phaser.Scene {
    constructor() {
        super("play");
    }

    create() {
        //green rectangle
        this.add.rectangle(0, borderPadding + borderUIsize, game.config.width, borderUIsize*2, 0x00FF00).setOrigin(0,0);
    }
}