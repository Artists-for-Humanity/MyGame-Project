import Phaser from 'phaser';
import GlobalState from '../GlobalState';
export default class deadlift extends Phaser.Scene {
    constructor () {
    super({
        active: false,
        visible: false,
        key: 'deadlift',
    });
    this.clicks;
    this.sprite;
    this.frame;
    this.started;
    this.executed;
    this.timer;
    this.reps;
    this.repText;
    this.lost;
    this.incremented;
    this.missed;
    this.missedText;
    this.diffFactor;
    }
    preload(){
        this.load.image(
            "bbg",
            new URL("/scripts/Assets/benchAssets/benchBackground.png", import.meta.url).href
        );
        this.load.spritesheet(
            "deadlift-sheet",
            new URL("/scripts/Assets/deadliftAssets/deadlift-sheet.png", import.meta.url).href, {
                frameHeight: 535,
                frameWidth: 991,
            }
        );
        this.load.spritesheet(
            "deadlift-getup",
            new URL("/scripts/Assets/deadliftAssets/deadlift-getup.png", import.meta.url).href, {
                frameHeight: 535,
                frameWidth: 991,
            }
        );
        this.load.spritesheet(
            "deadlift-sweat",
            new URL("/scripts/Assets/deadliftAssets/deadlift-sweat.png", import.meta.url).href, {
                frameHeight: 535,
                frameWidth: 991,
            }
        );
        this.load.image(
            "sprite",
            new URL("/scripts/Assets/homeAssets/sprite.png", import.meta.url).href
        );
    }
    create(){
        this.diffFactor = 1.0;
        this.clicks = 0;
        this.timer = 0;
        this.frame = 0;
        this.reps = 0;
        this.missed = 0;
        this.incremented = false;
        this.started = false;
        this.executed = false;
        this.lose = false;
        this.add.image(540,360, "bbg");
        this.repText = this.add.text(950, 50, this.reps + "/5").setFontSize(40);
        this.missedText = this.add.text(360, 45, "",).setFontSize(100);
        this.add.text(270, 675, "Spam the spacebar to pull the bar up", {fontSize:25});
        this.anims.create({
            key: "dropbar",
            // frames: "deadlift-sheet",
            frames: [{key:"deadlift-sheet", frame:11},
            {key:"deadlift-sheet", frame:6},
            {key:"deadlift-sheet", frame:0}],
            // frameRate: 9 
            duration: 500
        });
        this.anims.create({
            key:"getup",
            frames: "deadlift-getup",
            duration:1000
        });
        this.anims.create({
            key:"sweat",
            frames: "deadlift-sweat",
            duration:1000
        });
        this.sprite = this.physics.add.sprite(540,360,"deadlift-sheet", 0);
        // x.anims.play("deadlift");
        this.input.keyboard.on("keydown-SPACE", ()=>{
            this.clicks++;
            this.started = true;
            this.executed = false;
            if (this.clicks%5===0){
                this.globalState.decEnergy1();
                this.globalState.incStrength1();
            }
            if (this.frame<12){
                this.frame++;
            } 
            if(this.frame===12 && !this.incremented){
                this.reps++;
                this.diffFactor+=.5;
                this.repText.setText(this.reps+"/5");
                this.incremented=true;
            }
            this.sprite.setFrame(this.frame);
        })
    }
    dropbar(){
        if(this.frame<=0){
            this.frame = 0;
        } else {
            this.frame--;
        }
        this.sprite.setFrame(this.frame);
        // console.log("dropping...");
    }
   
    flashX(){
        this.missedText.setTint(0xff0000);
        for (let i= 1; i<=3; i++){
            this.time.delayedCall(i*1000, ()=>{
                this.missedText.setVisible(false);
            });
            this.time.delayedCall(i*1000+500, ()=>{
                this.missedText.setVisible(true);
            });
        }
    }

    update(time, delta){
        this.timer+= delta;
        if (this.started){
            while(this.timer>1000/this.diffFactor && this.frame<12){
            this.dropbar();
            this.timer-=1000/this.diffFactor;
            this.time.delayedCall(1000, ()=>{
                if (this.frame <= 0 && this.started && !this.executed){
                    console.log("no completed rep");
                    if(this.missed<=3){
                    this.missed++;
                    this.missedText.setText(this.missedText.text+="X ");
                    this.executed = true;
                    }
                }
            });
        }
        }
        if(this.frame===12){
            this.started= false;
            this.input.keyboard.off("keydow-SPACE")
            this.sprite.anims.play("dropbar");
            this.time.delayedCall(1000, ()=>{
                this.frame = 0;
                this.incremented = false;
            });
        }
        if(this.missed === 3){
            this.started = false;
            this.flashX();
            this.missed++
            this.time.delayedCall(5000, ()=>{
                this.scene.start('gym');
                this.scene.stop('deadlift');
            });
        }
        if(this.reps===5){
            this.missedText.setVisible(false);
            this.time.delayedCall(1000, ()=>{
            this.sprite.anims.play("getup");
            this.sprite.anims.playAfterDelay("sweat", 500);
            });
            this.time.delayedCall(3000, ()=>{
                this.scene.start('gym');
                this.scene.stop('deadlift');
            });
            this.reps++;
        }
    }
}