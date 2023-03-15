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
        this.pick_player;
        this.cursors;
        this.pos = 0;
    }

    preload() {
        this.load.image('frets', new URL('../assets/frets.png', import.meta.url).href);
        this.load.image('pick_player', new URL('../assets/pick_player.png', import.meta.url).href);
    }

    create() {
        this.setText();
        //background
        this.add.image(540,360,'frets');
        //player
        this.pick_player = this.physics.add.sprite(393,670,'pick_player');
        this.pick_player.setCollideWorldBounds(true);
        //keyboard
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        if (this.cursors.left.isDown) {
            // this.pos --;
            this.pick_player.x = 393;
            //console.log(this.pick_player.x)
            console.log(this.pos)
            this.pos = 0;
            this.setPosition(0);
        }
        if (this.cursors.right.isDown) {
            this.pick_player.x = 451;
            console.log(this.pos);
            this.pos = 1; 
            this.setPosition(1);
            
        }
        

    }

    setPosition(pos){
        while (pos >= 0 && pos <=5) {
            break
            
        }

    }

    setText() {
        this.myText = this.add.text(30, 50, 'myText')
        this.myText.setStyle({
            fontSize: '50px',
            fill: '#FFFFFF',
            align: 'center',
        });
        this.myText.setText('DETHAGEDDON');
    }
}