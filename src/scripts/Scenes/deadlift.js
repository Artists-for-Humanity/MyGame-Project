import Phaser from 'phaser';
import GlobalState from '../GlobalState';
export default class deadlift extends Phaser.Scene {
    constructor () {
    super({
        active: false,
        visible: false,
        key: 'deadlift',
    });
    this.sprite;
    this.frame;
    this.started;
    this.executed;
    this.timer;
    this.reps;
    this.lost;
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
        this.load.image(
            "sprite",
            new URL("/scripts/Assets/homeAssets/sprite.png", import.meta.url).href
        );
    }
    create(){
        this.timer = 0;
        this.frame = 0;
        this.started = false;
        this.executed = false;
        this.lose = false;
        this.add.image(540,360, "bbg");
        this.anims.create({
            key: "dropbar",
            // frames: "deadlift-sheet",
            frames: [{key:"deadlift-sheet", frame:11},{key:"deadlift-sheet", frame:6},{key:"deadlift-sheet", frame:0}],
            // frameRate: 9 
            duration: 500
        });
        this.sprite = this.physics.add.sprite(540,360,"deadlift-sheet", 0);
        // x.anims.play("deadlift");
        
        this.input.keyboard.on("keydown-SPACE", ()=>{
            this.started = true;
            if (this.frame<12){
                this.frame++;   
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
    makeharder(){

    }
    settimer(){
        // this.time.
        // console.log("you are awesome >:(");
    }
    update(time, delta){
        this.timer+= delta;
        if (this.started){
            while(this.timer>500 && this.frame<12){
            this.dropbar();
            this.timer-=500;
            this.time.delayedCall(500, ()=>{
                if (this.frame === 0 && this.started){
                    console.log("no completed rep");
                }
            });
           
        }
        }
        if(this.frame===12){
            this.started= false;
            this.time.delayedCall(1000, ()=>{
                this.sprite.anims.play("dropbar");
                this.time.delayedCall(500, ()=>{
                    this.frame = 0;
                })
            });
            
        }
    }


}