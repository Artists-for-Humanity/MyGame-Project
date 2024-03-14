export default class MyGameScene extends Phaser.Scene {
    // Game Class Constructor
    constructor() {
        super({
            active: false,
            visible: false,
            key: 'MyGameScene',
        });

        // Game Object Declarations
  this.arr;
    }

    preload() {
    }

    create() {
       var x = this.matter.add.rectangle(400, 360, 200, 200);
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