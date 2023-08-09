import Phaser from 'phaser';
export default class home extends Phaser.Scene {
    // Game Class Constructor
    constructor() {
        super({
            active: false,
            visible: false,
            key: 'home',
        });

        // Game Object Declarations
        
        this.htg;
        this.cat;
    }

    preload() {
        this.load.image(
            "hbg",
            new URL("/scripts/homeAssets/homeBackground.png", import.meta.url).href
        );
        this.load.image(
            "bed",
            new URL("/scripts/homeAssets/bed.png", import.meta.url).href
        );
        this.load.image(
            "nightstand",
            new URL("/scripts/homeAssets/nightstand.png", import.meta.url).href
        );
        this.load.image(
            "dresser",
            new URL("/scripts/homeAssets/dresser.png", import.meta.url).href
            );
        this.load.image(
            "dumbbells",
            new URL("/scripts/homeAssets/dumbbells.png", import.meta.url).href
        );
        this.load.image(
            "hmirror",
            new URL("/scripts/homeAssets/mirror.png", import.meta.url).href
        );
        this.load.image(
            "gymbag",
            new URL("/scripts/homeAssets/gymBag.png", import.meta.url).href
            );
        this.load.image(
            "htg",
            new URL("/scripts/homeAssets/htg.png", import.meta.url).href
        );
        this.load.image(
            "sprite",
            new URL("/scripts/homeAssets/sprite.png", import.meta.url).href
        );
    }

    create() {
        this.add.image(540, 360, "hbg");
        this.add.image(910, 275, "bed");
        this.add.image(760, 140, "nightstand");
        this.add.image(575, 140, "dresser");
        this.add.image(280, 130 , "dumbbells");
        this.add.image(80, 235, "hmirror");
        this.add.image(160, 415, "gymbag");
        this.htg = this.physics.add.sprite(265,420, "htg");
        this.htg.setImmovable();
        this.cat = this.physics.add.sprite(660, 345, "sprite");
        this.htg.setInteractive();
        this.htg.on("pointerup",  ()=>{
            //make sprite walk to the bag
            //also add some walking animation
            this.physics.moveTo(this.cat, 385, 405, 150);
            this.physics.add.collider(this.cat, this.htg, ()=>{
                this.cat.destroy();
                this.scene.start('gym');
                this.scene.stop('home');
                
            });
        });
        
    }

    update() {
    }

    setText() {
        
    }
}