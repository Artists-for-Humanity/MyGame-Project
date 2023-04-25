export default class MainMenuScene extends Phaser.Scene {
    // Game Class Constructor
    constructor() {
        super({
            active: false,
            visible: false,
            key: 'MainMenuScene',
        });

        // Game Object Declarations
        this.myText;
    }

    preload() {
        this.load.image('start-button', new URL('../assets/start-button.png', import.meta.url).href);   
        
    }

    create() {
        //start button
        const gameStartBtnX = this.game.config.width / 2;
        const gameStartBtnY = this.game.config.height / 2;
        const startButton = this.add
        .image(gameStartBtnX, gameStartBtnY, 'start-button')
        .setInteractive({
          useHandCursor: true,
        })
        .on('pointerdown', () => {
          this.scene.start('MyGameScene', MainMenuScene);
        });
  
    }

    update() {
    }

}