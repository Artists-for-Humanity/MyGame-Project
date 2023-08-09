export default class PlatGameOverScene extends Phaser.Scene {
    // Game Class Constructor
    constructor() {
        super({
            active: false,
            visible: false,
            key: 'PlatGameOverScene',
        });

        // Game Object Declarations
        this.myText;
        
    }

    preload() {
        this.load.image('start-button', new URL('../assets/start-button.png', import.meta.url).href);
    }

    create() {
        this.scoreText();
        this.dethText();
        this.retry();
        
        const startButton = this.add
        .image(this.game.config.width / 2, 500, 'start-button')
        .setInteractive({
          useHandCursor: true,
        })
        .on('pointerdown', () => {
          this.scene.start('Level1Scene');
        });
    }

    update() {
    }
    scoreText(){
        this.myText = this.add.text(233, 150, 'myText')
        this.myText.setStyle({
            fontSize: '50px',
            fill: '#3EFF00',
            align: 'center',
        });
        this.myText.setText(`Score: ${this.score}pts`);
        
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