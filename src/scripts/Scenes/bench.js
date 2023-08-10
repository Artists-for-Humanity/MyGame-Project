
import Phaser from 'phaser';
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
        this.reps = 0;
        this.clicks;
        this.repText;
        this.ticSpeed = 100;

    }

    preload() {
        this.load.image(
            "bbg",
            new URL("/scripts/benchAssets/benchBackground.png", import.meta.url).href
        );
        this.load.image(
            "rack",
            new URL("/scripts/benchAssets/rack.png", import.meta.url).href
        );
        this.load.image(
            "body",
            new URL("/scripts/benchAssets/catBody.png", import.meta.url).href
        );
        this.load.image(
            "spts",
            new URL("/scripts/benchAssets/sPts.png", import.meta.url).href
        );
        this.load.image(
            "bad",
            new URL("/scripts/benchAssets/badArea.png", import.meta.url).href
        );
        this.load.image(
            "good",
            new URL("/scripts/benchAssets/hitArea.png", import.meta.url).href
        );
        this.load.image(
            "tic",
            new URL("/scripts/benchAssets/tic3.png", import.meta.url).href
        );
        this.load.image(
            "up",
            new URL("/scripts/benchAssets/up.png", import.meta.url).href
        );
        this.load.image(
            "mid",
            new URL("/scripts/benchAssets/mid.png", import.meta.url).href
        );
        this.load.image(
            "down",
            new URL("/scripts/benchAssets/down.png", import.meta.url).href
        );
    

    }

    create() {
        this.add.image(540,360,"bbg");
        this.add.image(460, 410, "rack");
        var u = this.physics.add.sprite(460, 390, 'up');
        var m = this.physics.add.sprite(460, 402, 'mid');
        var d = this.physics.add.sprite(460, 405, 'down');
        this.repText = this.add.text(950, 50, this.reps + "/10").setFontSize(40);
        this.add.image(460, 550, "body");
        this.add.image(915, 520, "bad");
        this.add.image(960, 566, "good");
        this.tic = this.physics.add.sprite(915 , 518, "tic");
        // u.setVisible(false);
        // m.setVisible(false);
        // d.setVisible(false);
        this.tic.setOrigin(0, .5);
        this.tic.setAngularVelocity(this.ticSpeed);
        this.tic.setInteractive();
        
        this.input.keyboard.on('keydown-SPACE', () => {
        // console.log(this.tic.angle);
            if(this.tic.angle>=0 && this.tic.angle<=90){
                this.reps++;
                this.clicks++;
                this.repText.text = this.reps+ "/10";
                this.tic.setAngularVelocity((-1)*this.ticSpeed);
                // console.log(this.tic.getAngularVelocity());
                console.log("ye"); 
            } else{
                console.log("no boooo");
            }
        });
    
    
    }
    yuh(){
       
    }
    update() {
    }
}