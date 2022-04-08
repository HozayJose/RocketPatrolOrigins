class Menu extends Phaser.Scene {
    constructor() {
        super("menu");
    }

    create() {
        let menuText = this.add.text(20,20,"Main Menu");
        menuText.setOrigin(0.5, 0.5);
    }
};