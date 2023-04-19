export default class GameOverScene extends Phaser.Scene {
    // Game Class Constructor
    constructor() {
        super({
            active: false,
            visible: false,
            key: 'GameOverScene',
        });

        // Game Object Declarations
        this.myText;
        
    }

    preload() {
        this.load.image('start-button', new URL('../assets/start-button.png', import.meta.url).href);
    }

    create() {
        console.log(this.globalState.score);
        this.dethText();
        this.retry();
        //try again
        const startButton = this.add
        .image(this.game.config.width / 2, 500, 'start-button')
        .setInteractive({
          useHandCursor: true,
        })
        .on('pointerdown', () => {
          this.scene.start('MyGameScene');
        });
    }

    update() {
    }

    dethText() {
        this.myText = this.add.text(250, 200, 'myText')
        this.myText.setStyle({
            fontSize: '100px',
            fill: '#FF1100',
            align: 'center',
        });
        this.myText.setText('DESECRATED');
    } 
    retry(){
        this.myText = this.add.text(415, 290, 'myText')
        this.myText.setStyle({
            fontSize: '50px',
            fill: '#FFFFFF',
            align: 'center',
        });
        this.myText.setText('Try again?');
    }
}