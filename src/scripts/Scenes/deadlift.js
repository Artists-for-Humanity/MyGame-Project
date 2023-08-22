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
        // this.load.image(
        //     "bbg",
        //     new URL("/scripts/Assets/benchAssets/benchBackground.png", import.meta.url).href
        // );
        // this.load.spritesheet(
        //     "bench_victory_sheet",
        //     new URL("/scripts/Assets/benchAssets/bench-victory-sheet.png", import.meta.url).href, {
        //         frameHeight: 448,
        //         frameWidth: 854,
        //       }
        // );
    }
    create(){

    }
    update(){
        
    }


}