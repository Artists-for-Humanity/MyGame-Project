export default class BetScene extends Phaser.Scene {
    // Game Class Constructor
    constructor() {
        super({
            active: false,
            visible: false,
            key: 'BetScene',
        });

        // Game Object Declarations
        this.myText; 
        console.log('constructor');
        this.startButton;
        
    }

    preload() {
        console.log('Preload START')
        this.load.image('background', new URL('../../myAssets/blackJackBackground.jpeg', import.meta.url).href);
        this.load.image('betBox', new URL('../../myAssets/square.png', import.meta.url).href);
        this.load.image('jack', new URL('../../myAssets/Jack Card.png', import.meta.url).href);
        console.log('preload END')
    }

    create() {
        this.add.image(540, 360, 'background');
        this.add.image(690,350,'betBox')
        this.setText();
    }

    update() {
    }

    setText() {
        this.myText = this.add.text(320, 300, '')
        this.myText.setStyle({
            fontSize: '100px',
            fill: '#000000',
            align: 'center',
        });
        this.myText.setText('Bet:');        
        this.myText.setInteractive()
        .on('pointerdown', () => {
            this.scene.start('MyGameScene');
        });
    }

}