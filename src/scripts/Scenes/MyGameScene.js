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
        this.fretspic;
        //sprites 
        this.pick_player;
        this.posVal = [393, 451, 510, 568, 627, 685]
        this.pickPosVal = [393, 451, 510, 568, 627, 685]
        this.pickIndex = 0;
        this.numNotes = 5;
        this.noteSpeed = 600;
            //at  600 it takes about 1:50s to get a score of 500
        this.notes;
        //health
        this.health = 3;
        this.healthText;
        //score
        this.score = 0
        this.scoreText;
        
        //movement
        this.cursors;
        
    }

    preload() {
        this.load.image('frets', new URL('../assets/frets.png', import.meta.url).href);
        this.load.image('pick_player', new URL('../assets/pick_player.png', import.meta.url).href);
        this.load.image('noteone', new URL('../assets/noteone.png', import.meta.url).href);
    }

    create() {
        //background
        this.fretspic = this.add.image(540,360,'frets');
        //player
        this.pick_player = this.physics.add.sprite(393,670,'pick_player');
        this.pick_player.setCollideWorldBounds(true);
        //keyboard
        this.cursors = this.input.keyboard.createCursorKeys();
        //score
        this.scoreText = this.add.text(16, 65, 'Score: 0', {
            fontSize: '45px',
            fill: '#FFFFFF',
        });
        this.scoreText.visible = true;
        //health
        this.healthText = this.add.text(16,16,'Health: 3',{
            fontSize: '45px',
            fill: '#FFFFFF'
        })
        this.healthText.visible = true;
        //notes
        this.notes = this.physics.add.group({collideWorldBounds: true});
        this.createNotes();
        this.notes.visible = true;
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
                this.score++
                this.scoreText.setText(`Score: ${this.score}`)
            };
        });
        //health
        if (this.health===0){
            this.gameOver();
        }
        //win
        if (this.score === 5){
            this.gameWin();
            this.score = 0
        }
    }

    respawnNote(){
        this.posVal = [393, 451, 510, 568, 627, 685]
        this.notes.setY(30);
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
        let nums = [0, 1, 2, 3, 4, 5]
        for(let i = 0; i < 5; i++){
            var x = nums.splice(Phaser.Math.Between(0, nums.length - 1), 1);
            this.notes.create(this.posVal[x[0]],30, 'noteone')
        };
        this.notes.setVelocityY(this.noteSpeed)
        this.physics.add.collider(this.pick_player, this.notes, this.onPlayerHitNote, null, this);
    }

    onPlayerHitNote(player) {
        this.respawnNote();
        this.health--;
        this.healthText.setText(`Health: ${this.health}`)
    }

    gameOver(){
        this.physics.pause();
        this.dethText();
        //despawning sprites
        this.pick_player.disableBody(true,true)
        this.scoreText.visible = false;
        this.healthText.visible = false;
        this.fretspic.destroy();
        //find a way to remove the notes
        
    }
    
    gameWin(){
        this.physics.pause();
        this.lyfText();
        //despawning sprites
        this.pick_player.disableBody(true,true)
        this.scoreText.visible = false;
        this.healthText.visible = false;
        this.fretspic.destroy();
        //find a way to remove the notes
    }

    dethText() {
        this.myText = this.add.text(250, 330, 'myText')
        this.myText.setStyle({
            fontSize: '100px',
            fill: '#A20000',
            align: 'center',
        });
        this.myText.setText('DESECRATED');
    } 
    lyfText(){
        this.myText = this.add.text(350, 330, 'myText')
        this.myText.setStyle({
            fontSize: '100px',
            fill: '#FFF200',
            align: 'center',
        });
        this.myText.setText('YOU WIN');
    }
}