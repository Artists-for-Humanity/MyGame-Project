export default class MyGameScene extends Phaser.Scene {
    // Game Class Constructor
    constructor() {
        super({
            active: false,
            visible: false,
            key: 'MyGameScene',
        });

        // Game Object Declarations
        this.myText;

    }

    preload() {
    }

    create() {
        this.setText();
        this.add.image(480, 360, 'background');
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
        this.myText.setText('MyGame');
    }
}