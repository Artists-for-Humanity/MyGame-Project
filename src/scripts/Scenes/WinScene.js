export default class WinScene extends Phaser.Scene {
    // Game Class Constructor
    constructor() {
        super({
            active: false,
            visible: false,
            key: 'WinScene',
        });

        // Game Object Declarations
        this.myText;
        this.thumb;
    }

    preload() {
        this.load.image('thumb', new URL('../assets/thumb.png', import.meta.url).href)
    }

    create() {
        this.lyfText();
        //this.thumb = this.add.image(590,500,'thumb') 
        const thumb = this.add
        .image(this.game.config.width / 2, 500, 'thumb')
        .setInteractive({
          useHandCursor: true,
        })
        .on('pointerdown', () => {
          this.scene.start('Level1Scene');
        });
    }

    update() {
    }
    

    lyfText(){
        this.myText = this.add.text(350, 100, 'myText')
        this.myText.setStyle({
            fontSize: '100px',
            fill: '#FFF200',
            align: 'center',
        });
        this.myText.setText('YOU WIN');
    }
}