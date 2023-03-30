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
        this.posVal = [393, 451, 510, 568, 627, 685]
        this.pickPosVal = [393, 451, 510, 568, 627, 685]
        this.pickIndex = 0;
        this.notePos = 0;
        this.numNotes = 5;
        this.noteSpeed = 500;
        this.notes;

        //movement
        this.cursors;
        
    }

    preload() {
        this.load.image('frets', new URL('../assets/frets.png', import.meta.url).href);
        this.load.image('pick_player', new URL('../assets/pick_player.png', import.meta.url).href);
        this.load.image('noteone', new URL('../assets/noteone.png', import.meta.url).href);
    }

    create() {
        //this.setText();
        //background
        this.add.image(540,360,'frets');
        //player
        this.pick_player = this.physics.add.sprite(393,670,'pick_player');
        this.pick_player.setCollideWorldBounds(true);
        //keyboard
        this.cursors = this.input.keyboard.createCursorKeys();
        //colliding
        // this.physics.add.collider(this.pick_player, this.notes, this.onPlayerHitNote, null, this);
        //notes
        this.notes = this.physics.add.group({collideWorldBounds: true});
        this.createNotes();
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

        this.pick_player.x = this.pickPosVal[this.pickIndex];

        //colliding 
        this.notes.children.iterate((notes) => {
            // const body = notes.body;
            // console.log(notes.body.y);

            if (notes.body.y === 670){
                this.respawnNote();
            };
        });
    }

    respawnNote(){
        console.log('reachme 02');

        this.posVal = [393, 451, 510, 568, 627, 685]
        this.notes.setY(25);
        this.notes.children.iterate((notes) => {
            const body = notes.body;
            
            

            
            if(this.posVal.length === 6){
                let temp = (Phaser.Math.Between(0,5));
                notes.body.x = this.posVal[temp] - 10;
                this.posVal.splice(temp, 1);
            }
            else if (this.posVal.length === 5){
                let temp = (Phaser.Math.Between(0,4));
                notes.body.x = this.posVal[temp] - 10;
                this.posVal.splice(temp, 1);
            }
            else if (this.posVal.length === 4){
                let temp = (Phaser.Math.Between(0,3));
                notes.body.x = this.posVal[temp] - 10;
                this.posVal.splice(temp, 1);
            }
            else if (this.posVal.length === 3){
                let temp = (Phaser.Math.Between(0,2));
                notes.body.x = this.posVal[temp] - 10;
                this.posVal.splice(temp, 1);
            }
            else if (this.posVal.length === 2){
                let temp = (Phaser.Math.Between(0,1));
                notes.body.x = this.posVal[temp] - 10;
                this.posVal.splice(temp, 1);
            }


        });
        this.notes.setVelocityY(this.noteSpeed);
    }

    createNotes(){
        for(let i = 0; i < this.numNotes; i++){
            this.notes.create(this.posVal[(Phaser.Math.Between(0,5))],25, 'noteone')
        };


        console.log('reachme 00');

        this.respawnNote();
        this.notes.children.iterate((notes) => {
            console.log(notes.x)
        });

        console.log('reachme 01');


        //this.notes.setCollideWorldBounds(true);
        this.notes.setVelocityY(this.noteSpeed)
        this.physics.add.collider(this.pick_player, this.notes, this.onPlayerHitNote, null, this);
    }

    onPlayerHitNote(player) {
        //player.setTint(0xff0000);
        // console.log("player hit 0000")
        this.respawnNote();
        // this.physics.pause();
    }

    /* setText() {
        this.myText = this.add.text(30, 50, 'myText')
        this.myText.setStyle({
            fontSize: '50px',
            fill: '#FFFFFF',
            align: 'center',
        });
        this.myText.setText('DETHAGEDDON');
    } */
}