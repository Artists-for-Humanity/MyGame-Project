export default class MicroGame31 extends Phaser.Scene {
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
    }

    update() {
    }

    setText() {
        this.myText = this.add.text(250, 275, '')
        this.myText.setStyle({
            fontSize: '100px',
            fill: '#000000',
            align: 'center',
        });
        this.myText.setText('DETHAGEDDON');
    }
}