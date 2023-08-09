
import Phaser from 'phaser';
export default class gym extends Phaser.Scene {
    // Game Class Constructor
    constructor() {
        super({
            active: false,
            visible: false,
            key: 'gym',
        });

        // Game Object Declarations
        this.cat;
        this.lights;
        this.gtb;
        this.gth;
        this.bench
    }

    preload() {
        this.load.image(
            "gbg",
            new URL("/scripts/gymAssets/gymBackground.png", import.meta.url).href
        );
        this.load.image(
            "bench",
            new URL("/scripts/gymAssets/bench.png", import.meta.url).href
        );
        this.load.image(
            "gtb",
            new URL("/scripts/gymAssets/gtb.png", import.meta.url).href
        );
        this.load.image(
            "gth",
            new URL("/scripts/gymAssets/gth.png", import.meta.url).href
            );
        this.load.image(
            "gmirror",
            new URL("/scripts/gymAssets/gymMirror.png", import.meta.url).href
        );
    }

    create() {
        this.add.image(540, 360,'gbg');
        this.bench = this.physics.add.sprite(280, 245,'bench');
        this.bench.setImmovable();
        this.add.image(660, 85,'gmirror');
        this.gtb = this.physics.add.sprite(330, 150,'gtb');
        this.gtb.setInteractive();
        this.gth = this.physics.add.sprite(980, 60,'gth');
        this.gth.setInteractive();
        this.cat = this.physics.add.sprite(950, 200, "sprite");
        this.gtb.on("pointerup",  ()=>{
            //make sprite walk to the bag
            //also add some walking animation
            this.physics.moveTo(this.cat, 475, 195, 150);
            this.physics.add.collider(this.cat, this.bench, ()=>{
                this.cat.destroy();
                this.scene.start('bench');
                this.scene.stop('gym');
                
            });
        });
        this.gth.on("pointerup",  ()=>{
            //make sprite walk to the bag
            //also add some walking animation
            this.scene.start('home');
            this.scene.stop('gym');
        });
    }

    update() {
    }

    setText() {
        
    }
}