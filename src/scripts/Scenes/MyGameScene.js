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
        this.text
        this.fretspic;
        this.timer;
        this.start;
        //sprites 
        this.pick_player;
        this.posVal;
        this.pickPosVal = [393, 451, 510, 568, 627, 685];
        this.pickIndex = 0;
        this.numNotes = 5;
        this.noteSpeed = 600;
            //at  600 it takes about 1:50s to get a score of 500
        this.notes;
        //health
        this.health = 3;
        this.healthText;
        //score
        this.scoreText;
        
        //movement
        this.cursors;
        
    }

    preload() {
        this.load.image('frets', new URL('../assets/frets.png', import.meta.url).href);
        this.load.image('pick_player', new URL('../assets/pick_player.png', import.meta.url).href);
        this.load.image('noteone', new URL('../assets/noteone.png', import.meta.url).href);
        this.load.image('heart', new URL('../assets/heart.png', import.meta.url).href);
    }

    create() {

        this.start = 0;

        
        //background
        this.fretspic = this.add.image(540,360,'frets');
        //player
        this.pick_player = this.physics.add.sprite(393,670,'pick_player');
        this.pick_player.setCollideWorldBounds(true);
        //keyboard
        this.cursors = this.input.keyboard.createCursorKeys();
        //score
        this.scoreText = this.add.text(16, 16, 'Score: 0pts', {
            fontSize: '35px',
            fill: '#FFFFFF',
        });
        this.scoreText.visible = true;
        //health
        this.healthText = this.add.text(913 ,16,' Health',{
            fontSize: '35px',
            fill: '#FFFFFF'
        })
        this.heart1 = this.add.image(877,31,'heart')
        this.heart2 = this.add.image(822,31,'heart')
        this.heart3 = this.add.image(767,31,'heart')
        this.healthText.visible = true;
        //notes
        this.notes = this.physics.add.group({collideWorldBounds: true});

        // this.countDown();
        // }

        // this.initialTime = 150;

        // let text = this.add.text(32, 32, 'Countdown: ' + this.formatTime(this.initialTime));
    
        // // Each 1000 ms call onEvent
        // timedEvent = this.time.addEvent({ delay: 1000, callback: this.onEvent, callbackScope: this, loop: true });

        // let t = 0;
        // console.log('reachme04');

        //     this.time.delayedCall(5000, () => {
        //         console.log(t);
        //         t++;

        this.timer = this.time.addEvent({
            delay: 3000,
            paused: false
          });
          
        //   this.input.on('pointerdown', function () {
        //     timer.paused = !timer.paused;
        //   });
            
          this.text = this.add.text(20, 30, '5', { font: 'bold 72px system-ui' })
        



        this.notes.visible = true;

    }

    update() {

        this.text.setText(this.timer.getRemainingSeconds().toFixed(1));
        // console.log(this.timer);


        if(this.timer.elapsed === 3000){

            if (this.start === 0){
                this.createNotes();
                this.start++
            }

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
                this.globalState.score++
                // this.score++

                this.scoreText.setText(`Score: ${this.globalState.score}pts`)
            };
        });
        //health
        if (this.health===0){
            this.gameOver();
        }
        //win
        if (this.globalState.score === 300){
            this.gameWin();
            this.globalState.score = 0
        }

        }
        
    }

    // formatTime(seconds){
    //     // Minutes
    //     var minutes = Math.floor(seconds/60);
    //     // Seconds
    //     var partInSeconds = seconds%60;
    //     // Adds left zeros to seconds
    //     partInSeconds = partInSeconds.toString().padStart(2,'0');
    //     // Returns formated time
    //     return `${minutes}:${partInSeconds}`;
    // }

    // onEvent (){
    // this.initialTime -= 1; // One second
    // text.setText('Countdown: ' + formatTime(this.initialTime));
    // }

    // countDown(){
    //     console.log('reachme01');
        // let x = 0;
        // // this.scene.pause('MyGameScene');
        // // this.physics.pause();
        // for (let index = 0; index < 3; index++) {
        //     this.time.delayedCall(1000, () => {
        //         console.log(x);
        //         x++;
        //     }, [], this);            
        // }
        // this.scene.resume();
        // this.physics.resume();
        // this.createNotes();


        
    // }

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

        console.log('reachme02');


       
        this.globalState.score = 0;

        this.posVal = [393, 451, 510, 568, 627, 685]
        let nums = [0, 1, 2, 3, 4, 5]

        for(let i = 0; i < 5; i++){
            var x = nums.splice(Phaser.Math.Between(0, nums.length - 1), 1);
            this.notes.create(this.posVal[x],30, 'noteone')
        };
        this.notes.setVelocityY(this.noteSpeed)
        this.physics.add.collider(this.pick_player, this.notes, this.onPlayerHitNote, null, this);
    }

    onPlayerHitNote() {
        this.respawnNote();
        this.health--;
        if(this.health === 2){
            this.heart3.destroy();
        }else if(this.health === 1){
            this.heart2.destroy();
        }else if(this.health === 0){
            this.heart1.destroy();
        }
    }

    gameOver(){
        this.health = 3;
        this.scene.start('GameOverScene');

    }
    
    gameWin(){
        this.physics.pause();
        this.lyfText();
        //despawning sprites
        this.pick_player.disableBody(true,true)
        this.scoreText.visible = false;
        this.healthText.visible = false;
        this.fretspic.destroy();
        this.heart1.destroy();
        this.heart2.destroy();
        this.heart3.destroy();
        this.notes.clear(true);
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