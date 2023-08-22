import Phaser from 'phaser';
import GlobalState from '../GlobalState';
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
        this.barO;
        this.barC; 
        this.energy = {
            level: 70,
            bar: null,
        };
        this.strength = {
            level: 50,
            bar: null,
        };
        this.energyText;
        this.strengthText;
    }

    preload() {
        this.load.image(
            "hbg",
            new URL("/scripts/Assets/homeAssets/homeBackground.png", import.meta.url).href
        );
        this.load.image(
            "bed",
            new URL("/scripts/Assets/homeAssets/bed.png", import.meta.url).href
        );
        this.load.image(
            "nightstand",
            new URL("/scripts/Assets/homeAssets/nightstand.png", import.meta.url).href
        );
        this.load.image(
            "dresser",
            new URL("/scripts/Assets/homeAssets/dresser.png", import.meta.url).href
            );
        this.load.image(
            "dumbbells",
            new URL("/scripts/Assets/homeAssets/dumbbells.png", import.meta.url).href
        ); 
        this.load.image(
            "hmirror",
            new URL("/scripts/Assets/homeAssets/mirror.png", import.meta.url).href
        );
        this.load.image(
            "gymbag",
            new URL("/scripts/Assets/homeAssets/gymBag.png", import.meta.url).href
            );
        this.load.image(
            "htg",
            new URL("/scripts/Assets/homeAssets/htg.png", import.meta.url).href
        );
        this.load.image(
            "sprite",
            new URL("/scripts/Assets/homeAssets/sprite.png", import.meta.url).href
        );
        this.load.image(
            "sprite2",
            new URL("/scripts/Assets/homeAssets/sprite2.png", import.meta.url).href
        );
        this.load.image(
            "barO",
            new URL("/scripts/Assets/statusAssets/barOpen.png", import.meta.url).href
        );
        this.load.image(
            "barC",
            new URL("/scripts/Assets/statusAssets/barClosed.png", import.meta.url).href
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
        this.barC = this.add.image(110, 640, "barC");
        this.barO = this.add.image(387.5, 640, "barO").setVisible(false);
        this.energy.bar = this.add.rectangle( 296.5, 639.5, 182, 45, 0x63EA24).setVisible(false);
        this.strength.bar = this.add.rectangle( 578, 639.5, 182, 45, 0x63EA24).setVisible(false);
        this.energyText = this.add.text(270, 634, this.globalState.energy+"/50").setVisible(false);
        this.strengthText = this.add.text(560, 634, this.globalState.strength+"/50").setVisible(false);
        this.anims.create({
            key:"walk",
            frames: [ 
                {key:'sprite'}, 
                {key:'sprite2'}, 
                ],
            frameRate: 4, 
            repeat: -1,
        });
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
        this.htg = this.physics.add.sprite(265,420, "htg");
        this.htg.setImmovable();
        this.cat = this.physics.add.sprite(660, 345, "sprite");
        this.htg.setInteractive();
        this.htg.on("pointerup",  ()=>{
            //make sprite walk to the bag
            //also add some walking animation
            this.cat.anims.play("walk");
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