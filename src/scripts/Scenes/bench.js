
import Phaser from 'phaser';
import GlobalState from '../GlobalState';
export default class bench extends Phaser.Scene {
    // Game Class Constructor
    constructor() {
        super({
            active: false,
            visible: false,
            key: 'bench',
        });
        
        // Game Object Declarations
        this.arms;
        this.tic;
        this.goodArea;
        this.badArea;
        this.reps;
        // this.clicks;
        this.repText;
        this.ticSpeed;
        this.missed;
        this.missedText;

    }

    preload() {
        this.load.image(
            "bbg",
            new URL("/scripts/Assets/benchAssets/benchBackground.png", import.meta.url).href
        );
        this.load.image(
            "rack",
            new URL("/scripts/Assets/benchAssets/rack.png", import.meta.url).href
        );
        this.load.image(
            "body",
            new URL("/scripts/Assets/benchAssets/catBody.png", import.meta.url).href
        );
        this.load.image(
            "spts",
            new URL("/scripts/Assets/benchAssets/sPts.png", import.meta.url).href
        ); 
        this.load.image(
            "bad",
            new URL("/scripts/Assets/benchAssets/badArea.png", import.meta.url).href
        );
        this.load.image(
            "good",
            new URL("/scripts/Assets/benchAssets/hitArea.png", import.meta.url).href
        );
        this.load.image(
            "tic",
            new URL("/scripts/Assets/benchAssets/tic3.png", import.meta.url).href
        );
        this.load.image(
            "up",
            new URL("/scripts/Assets/benchAssets/up.png", import.meta.url).href
        );
        this.load.image(
            "mid",
            new URL("/scripts/Assets/benchAssets/mid.png", import.meta.url).href
        );
        this.load.image(
            "down",
            new URL("/scripts/Assets/benchAssets/down.png", import.meta.url).href
        );
    }

    create() {
        this.reps = 0;
        this.missed = 0;
        this.ticSpeed = 500;
        this.add.image(540,360,"bbg");
        this.add.image(460, 410, "rack");
        this.arms = this.physics.add.sprite(460, 390, 'up');
        this.repText = this.add.text(950, 50, this.reps + "/10").setFontSize(40);
        this.missedText = this.add.text(250, 75, "",).setFontSize(100);
        this.add.image(460, 550, "body");
        this.add.image(915, 520, "bad");
        this.add.image(960, 566, "good");
        this.tic = this.physics.add.sprite(915 , 518, "tic");
        this.anims.create({
            key:"bench",
            frames: [ 
                {key:'mid'}, 
                {key:'down'}, 
                {key:'up'}
            ],
            frameRate: 3, 
            repeat: 0,
        });
        this.tic.setOrigin(0, .5);
        this.tic.setAngularVelocity(this.ticSpeed);
        this.input.keyboard.on('keydown-SPACE', () => {
            if(this.tic.angle>=0 && this.tic.angle<=90){
                this.arms.anims.play("bench", true);
                this.reps++;
                this.globalState.incScore1();
                this.repText.text = this.reps+ "/10";
                this.tic.angle = Math.random()*270 + 90;
                this.ticSpeed *= (-1);
                this.tic.setAngularVelocity(this.ticSpeed);
                let spts = this.physics.add.sprite(915, 295, "spts").setVelocityY(-50).setVelocityX(Math.random()*20-10);
                this.time.delayedCall(2000, ()=>{
                    spts.destroy();
                });
            } else {
                this.missed++;
                this.missedText.setText(this.missedText.text += " X");
            }
        });
    }
    update() {
        // console.log(this.globalState.strength);
        this.globalState.playerWinCheck();
        console.log(this.globalState.energy +" "+ this.globalState.strength);
        if(this.reps === 10){ 
            this.tic.setVisible(false);
            this.time.delayedCall(2000, ()=>{
                this.globalState.energy-=5;
                this.scene.start('gym');
                this.scene.stop('bench');
            });
        }
        if(this.missed === 3){
            this.tic.setVisible(false);
            this.time.delayedCall(2000, ()=>{
            this.scene.start('gym');
            this.scene.stop('bench');
            });
        }
        

    }
}