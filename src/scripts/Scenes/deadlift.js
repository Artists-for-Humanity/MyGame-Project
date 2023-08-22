import Phaser from 'phaser';
import GlobalState from '../GlobalState';
export default class deadlift extends Phaser.Scene {
    constructor () {
    super({
        active: false,
        visible: false,
        key: 'deadlift',
    });

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
        this.add.image(540,360, "bbg");
        this.anims.create({
            key: "deadlift",
            frames: [{key:"deadlift-sheet", frame:0},{key:"deadlift-sheet", frame:1},{key:"deadlift-sheet", frame:2},{key:"deadlift-sheet", frame:3},{key:"deadlift-sheet", frame:4},{key:"deadlift-sheet", frame:5},{key:"deadlift-sheet", frame:6},{key:"deadlift-sheet", frame:7},{key:"deadlift-sheet", frame:8},{key:"deadlift-sheet", frame:9},{key:"deadlift-sheet", frame:10},{key:"deadlift-sheet", frame:11},{key:"deadlift-sheet", frame:13},{key:"deadlift-sheet", frame:14}],
            // frameRate: 7
            duration: 1000
        });
        let x = this.physics.add.sprite(540,360,"sprite");
        x.anims.play("deadlift");
    }
    update(){

    }


}