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

        //sprites 
        this.pick_player;
        this.noteone;
        this.posVal = [393, 451, 510, 568, 627, 685]
        this.pickIndex = 0;
        this.notePos = 0;
        this.numNotes = 2;
        this.noteSpeed = 500;

        //movement
        this.cursors;
        
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
        //keyboard
        this.cursors = this.input.keyboard.createCursorKeys();
        //colliding
        this.physics.add.collider(this.pick_player, this.noteone, this.onPlayerHitNote, null, this);
        //notes
        for (let i = 0; i < this.numNotes; i++){
            this.createNotes();
        }
    }

    update() {
        //movement
         if (Phaser.Input.Keyboard.JustDown(this.cursors.left)) {
            this.pickIndex--;

        }
        if (Phaser.Input.Keyboard.JustDown(this.cursors.right)) {
            this.pickIndex++; 

        }
        if (this.pickIndex < 0) {this.pickIndex = 0;}
        else if (this.pickIndex > 5) {this.pickIndex = 5;}

        this.pick_player.x = this.posVal[this.pickIndex];

        //colliding
        if(this.noteone.y === 695){this.spawnNote()};
    }

    spawnNote(){
        this.noteone.y = 25;
        this.noteone.x = this.posVal[(Phaser.Math.Between(0,5))]
        this.noteone.setVelocityY(this.noteSpeed);
    }

    createNotes(){
        this.noteone = this.physics.add.sprite(this.posVal[(Phaser.Math.Between(0,5))],25, 'noteone');
        this.noteone.setCollideWorldBounds(true);
        this.noteone.setVelocityY(this.noteSpeed)
        this.physics.add.collider(this.pick_player, this.noteone, this.onPlayerHitNote, null, this);
    }

    onPlayerHitNote(player) {
        //player.setTint(0xff0000);
        console.log("player hit 0000")
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