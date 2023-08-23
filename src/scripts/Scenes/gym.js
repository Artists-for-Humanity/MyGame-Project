
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
        this.gtd;
        this.bench;
        this.energy = {
            level: 70,
            bar: null,
        };
        this.energyText;
        this.strength = {
            level: 50,
            bar: null,
        };
        this.strengthText;
    }

    preload() {
        this.load.image(
            "gbg",
            new URL("/scripts/Assets/gymAssets/gymBackground.png", import.meta.url).href
        );
        this.load.image(
            "bench",
            new URL("/scripts/Assets/gymAssets/bench.png", import.meta.url).href
        );
        this.load.image(
            "gtb",
            new URL("/scripts/Assets/gymAssets/gtb.png", import.meta.url).href
        );
        this.load.image(
            "gth",
            new URL("/scripts/Assets/gymAssets/gth.png", import.meta.url).href
            );
        this.load.image(
            "gtd",
            new URL("/scripts/Assets/gymAssets/gtd.png", import.meta.url).href
            );
        this.load.image(
            "deadlift",
            new URL("/scripts/Assets/gymAssets/deadlift.png", import.meta.url).href
            );
        this.load.image(
            "gmirror",
            new URL("/scripts/Assets/gymAssets/gymMirror.png", import.meta.url).href
        );  
    }

    create() {
        this.add.image(540, 360,'gbg');
        this.add.image(280, 245,'bench');
        this.add.image(752, 548,'deadlift');
        // this.bench.setImmovable();
        // this.add.image(660, 85,'gmirror');
        this.anims.create({
            key:"walk",
            frames: [ 
                {key:'sprite'}, 
                {key:'sprite2'}, 
                ],
            frameRate: 4, 
            repeat: -1,
        });
        this.gtb = this.physics.add.sprite(330, 150,'gtb');
        this.gtb.setInteractive();
        this.gth = this.physics.add.sprite(980, 60,'gth');
        this.gth.setInteractive();
        this.gtd = this.physics.add.sprite(770, 450,"gtd");
        this.gtd.setInteractive();
        this.cat = this.physics.add.sprite(950, 200, "sprite");
        this.barC = this.add.image(110, 640, "barC");
        this.barO = this.add.image(387.5, 640, "barO").setVisible(false);
        this.energy.bar = this.add.rectangle( 296.5, 639.5, 182, 45, 0x63EA24).setVisible(false);
        this.strength.bar = this.add.rectangle( 578, 639.5, 182, 45, 0x63EA24).setVisible(false);
        this.energyText = this.add.text(270, 634, this.globalState.energy+"/50").setVisible(false);
        this.strengthText = this.add.text(560, 634, this.globalState.strength+"/50").setVisible(false);
        this.barC.setInteractive();
        this.barO.setInteractive();
        this.barC.on("pointerup", ()=>{
            this.barC.setVisible(false);
            this.barO.setVisible(true);
            this.energy.bar.setVisible(true);
            this.strength.bar.setVisible(true);
            this.energyText.setVisible(true);
            this.strengthText.setVisible(true);

        });
        this.barO.on("pointerup", ()=>{
            this.barC.setVisible(true);
            this.barO.setVisible(false);
            this.energy.bar.setVisible(false);
            this.strength.bar.setVisible(false);
            this.energyText.setVisible(false);
            this.strengthText.setVisible(false);
        });
        this.strength.bar.width = 182 *(this.globalState.strength/50);
        this.energy.bar.width = 182 *(this.globalState.energy/50);
        this.gtb.on("pointerup",  ()=>{
            //make sprite walk to the bag
            //also add some walking animation
            // this.cat.anims.play("walk");
            this.scene.start('bench');
            this.scene.stop('gym');
            // this.physics.moveTo(this.cat, 475, 195, 150);
            // this.physics.add.collider(this.cat, this.bench, ()=>{
            // });
        });
        this.gtd.on("pointerup", ()=>{
            this.scene.start('deadlift');
            this.scene.stop('gym');
        })
        this.gth.on("pointerup",  ()=>{
            //make sprite walk to the bag
            //also add some walking animation
            this.scene.start('home');
            this.scene.stop('gym');
        });
    }
    
    update() {
    }
}