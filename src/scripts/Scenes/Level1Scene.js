export default class Level1Scene extends Phaser.Scene {
    // Game Class Constructor
    constructor() {
        super({
            active: false,
            visible: false,
            key: 'Level1Scene',
            physics: {
                default: 'arcade',
                arcade: { 
                  gravity: { y: 600}
                }
              }
        });

        // Game Object Declarations
        this.myText;
        this.platforms;
        this.stars;
        this.cursors;
        this.scoreText;
        
    }

    preload() {
        this.load.image('sky', new URL('../assets/sky.png',import.meta.url).href);
        this.load.image('ground', new URL('../assets/platform.png', import.meta.url).href);
        this.load.image('star', new URL('../assets/star.png', import.meta.url).href);
        this.load.image('bomb', new URL('../assets/bomb.png', import.meta.url).href);
        this.load.spritesheet('dude', new URL('../assets/dude.png', import.meta.url).href), { frameWidth: 32, frameHeight: 48 };
    }

    create() {
        this.add.image(540, 360, 'sky');

        this.platforms = this.physics.add.staticGroup();

        this.platforms.create(540, 677, 'ground').setScale(2).refreshBody();

        this.platforms.create(810, 440, 'ground');
        this.platforms.create(50, 270, 'ground');
        this.platforms.create(940, 220, 'ground');

        //player = this.physics.add.sprite(100, 450, 'dude');

        //player.setBounce(0.2);
        //player.setCollideWorldBounds(true);

        /* this.anims.create({
            key: 'left',
            frames: this.anims.generasteFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        }); */

        /* this.anims.create({
            key: 'turn',
            frames: [ { key: 'dude', frame: 4 } ],
            frameRate: 20
        }); */

        /* this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        }); */

        this.cursors = this.input.keyboard.createCursorKeys();

        this.stars = this.physics.add.group({
            key: 'star',
            repeat: 11,
            setXY: { x: 12, y: 0, stepX: 70 }
        });

        this.stars.children.iterate(function (child) {

            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

        });

        this.scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

        //this.physics.add.collider(player, platforms);
        this.physics.add.collider(this.stars, this.platforms);

        //this.physics.add.overlap(player, stars, collectStar, null, this);
    }
  
    

    update() {
        /* ß */
    }

    collectStar (player, star)
    {
        star.disableBody(true, true);

        score += 10;
        scoreText.setText('Score: ' + score)};

}
