export default class MenuScene extends Phaser.Scene {
    // Game Class Constructor
    constructor() {
        super({
            active: false,
            visible: false,
            key: 'MenuScene',
        });

        // Game Object Declarations
        this.myText; 
        
    }

    preload() {
        console.log('Preload START')
        this.load.image('background', new URL('../../myAssets/blackJackBackground.jpeg', import.meta.url).href);
        console.log('preload END')
    }

    create() {
        this.setText();
        this.add.image(540, 360, 'background');
    }

    update() {
    }

    setText() {
        this.myText = this.add.text(400, 360, '')
        this.myText.setStyle({
            fontSize: '100px',
            fill: '#000000',
            align: 'center',
        });
        this.myText.setText('Start');
        this.myText.setInteractive()
        .on('pointerdown', () => {
            this.scene.start('MyGameScene');
        });
    }

    
}


