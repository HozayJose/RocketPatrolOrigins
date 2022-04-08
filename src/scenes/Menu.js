class Menu extends Phaser.Scene {
    constructor() {
        super("menu");
    }

    create() {
        let menuText = this.add.text(game.config.width/2,game.config.height/2,"Main Menu");
        menuText.setOrigin(0.5, 0.5);
        
        this.scene.start("play");
    }
};