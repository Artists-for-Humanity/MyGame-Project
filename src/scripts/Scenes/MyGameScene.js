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
        this.noteone;
        this.cursors;
        this.pos = ["ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX"]
        this.posIndex = 0;
        
    }

    preload() {
        this.load.image('frets', new URL('../assets/frets.png', import.meta.url).href);
        this.load.image('pick_player', new URL('../assets/pick_player.png', import.meta.url).href);
        this.load.image('noteone', new URL('../assets/noteone.png', import.meta.url).href);
    }

    create() {
        this.setText();
        //background
        this.add.image(540,360,'frets');
        //player
        this.pick_player = this.physics.add.sprite(393,670,'pick_player');
        this.pick_player.setCollideWorldBounds(true);
        //notes
        this.noteone = this.physics.add.sprite(393,25, 'noteone');
        this.noteone.setCollideWorldBounds(true);
        this.noteone.setVelocityY(500)
        //keyboard
        this.cursors = this.input.keyboard.createCursorKeys();
        //colliding
        this.physics.add.collider(this.pick_player, this.noteone, this.onPlayerHitNote, null, this);

    }

    update() {

         if (Phaser.Input.Keyboard.JustDown(this.cursors.left)) {
            this.posIndex--;

        }
        if (Phaser.Input.Keyboard.JustDown(this.cursors.right)) {
            this.posIndex++; 

        }
        if (this.posIndex < 0) {this.posIndex = 0;}
        else if (this.posIndex > 5) {this.posIndex = 5;}

        if (this.pos[this.posIndex] === "ONE"){
            this.pick_player.x = 393;
        }else if(this.pos[this.posIndex] === "TWO"){
            this.pick_player.x = 451;
        }else if(this.pos[this.posIndex] === "THREE"){
            this.pick_player.x = 510;
        }else if(this.pos[this.posIndex] === "FOUR"){
            this.pick_player.x = 568;
        }else if(this.pos[this.posIndex] === "FIVE"){
            this.pick_player.x = 627;
        }else if(this.pos[this.posIndex] === "SIX"){
            this.pick_player.x = 685;
        }

        if(this.noteone.y === 695){
            this.spawnNote();
        }
    }

    spawnNote(){
        this.noteone.y = 25;
        //this.noteone.x +=60
        this.noteone.setVelocityY(500);
    }

    onPlayerHitNote(player) {
        //player.setTint(0xff0000);
        console.log("player hit")
        this.spawnNote();
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