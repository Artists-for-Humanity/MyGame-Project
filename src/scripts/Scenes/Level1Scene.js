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
                  gravity: { y: 300}
                }
              }
        });

        // Game Object Declarations
        this.myText;
        this.platforms;
        this.stars;
        this.cursors;
        this.scoreText;
        this.player;
        this.lv1score;
        this.bombs;
        this.gameOver = false;
        
    }

    preload() {
        this.load.image('sky', new URL('../assets/sky.png',import.meta.url).href);
        this.load.image('ground', new URL('../assets/platform.png', import.meta.url).href);
        this.load.image('star', new URL('../assets/star.png', import.meta.url).href);
        this.load.image('bomb', new URL('../assets/bomb.png', import.meta.url).href);
        this.load.spritesheet('dude', new URL('../assets/dude.png', import.meta.url).href, { frameWidth: 32, frameHeight: 48 });
    }


    create() {

        this.add.image(540, 360, 'sky');

        this.platforms = this.physics.add.staticGroup();

        this.platforms.create(540, 677, 'ground').setScale(2).refreshBody();

        this.platforms.create(810, 440, 'ground');
        this.platforms.create(50, 270, 'ground');
        this.platforms.create(940, 220, 'ground');

        this.player = this.physics.add.sprite(100, 450, 'dude');

        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        }); 

        this.anims.create({
            key: 'turn',
            frames: [ { key: 'dude', frame: 4 } ],
            frameRate: 20
        }); 

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });

        this.cursors = this.input.keyboard.createCursorKeys();

        this.stars = this.physics.add.group({
            key: 'star',
            repeat: 15,
            setXY: { x: 12, y: 0, stepX: 70 }
        });

        this.stars.children.iterate(function (child) {

            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

        });

        this.bombs = this.physics.add.group()
        this.scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000' });

        this.physics.add.collider(this.player, this.platforms);
        this.physics.add.collider(this.stars, this.platforms);
        this.physics.add.collider(this.bombs, this.platforms);

        this.physics.add.overlap(this.player, this.stars, this.collectStar(), null, this);
        //this.physics.add.overlap(this.player, this.bombs, this.hitBomb(), null, this);

    }
  
    

    update() {
        if (this.gameOver){
            return;
        } 

        if (this.cursors.left.isDown)
        {
            this.player.setVelocityX(-190);

            this.player.anims.play('left', true);
        }
        else if (this.cursors.right.isDown)
        {
            this.player.setVelocityX(190);

            this.player.anims.play('right', true);
        }
        else
        {
            this.player.setVelocityX(0);

            this.player.anims.play('turn');
        }

        if (this.cursors.up.isDown && this.player.body.touching.down)
        {
            this.player.setVelocityY(-360);
        }
        
        
    }

    collectStar(player, star){
        ///this.star.destroy();
        
        //  Add and update the score
        this.lv1score += 10;
        this.scoreText.setText('Score: ' + this.lv1score);
    
        if (this.stars.countActive(true) === 0)
        {
            //  A new batch of stars to collect
            this.stars.children.iterate(function (child) {
    
                child.enableBody(true, child.x, 0, true, true);
    
            });
    
            var x = (this.player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
    
            var bomb = this.bombs.create(x, 16, 'bomb');
            this.bombs.setBounce(1);
            this.bombs.setCollideWorldBounds(true);
            this.bombs.setVelocity(Phaser.Math.Between(-200, 200), 20);
            this.bombs.allowGravity = false;
    
        }
    }
    hitBomb(player, bomb){
        
        this.physics.pause();

        this.player.setTint(0xff0000);

        this.player.anims.play('turn');

        this.gameOver = true;
    };
    
    
        

}
