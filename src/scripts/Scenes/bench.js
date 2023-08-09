
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
            new URL("/scripts/benchAssets/tic.png", import.meta.url).href
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
        this.add.image(460, 550, "body");
        this.add.image(915, 520, "bad");
        this.add.image(960, 566, "good");
        this.add.image(985, 485, "tic");
        u.setVisible(false);
        m.setVisible(false);
        d.setVisible(false);
        
    }

    update() {
    }

    setText() {
        
    }
}