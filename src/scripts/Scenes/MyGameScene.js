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
        this.player;
    }

    preload() {
        console.log('heloooo')
        this.load.image('player', new URL('../assets/swissguy_test.png', import.meta.url).href);
    }

    create() {
        console.log('helo agan')
        this.setText();
        this.add.image(180,600, 'player')
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