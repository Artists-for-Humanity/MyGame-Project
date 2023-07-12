export default class Level1Scene extends Phaser.Scene {
    // Game Class Constructor
    constructor() {
        const config = {
            type: Phaser.AUTO,
            width: 1280,
            height: 720,
            backgroundColor: '#1C2057',
        }
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
        this.store1;
        this.building1;
        this.building2;
        this.ad;
        this.cursors;
        this.scoreText;
        this.player;
        this.lv1score = 0;
        this.bombs;
        this.gameOver = false;
        
        
    }

    preload() {
        this.load.image('sky', new URL('../assets/sky.png',import.meta.url).href);
        this.load.image('ground', new URL('../assets/platform.png', import.meta.url).href);
        this.load.image('star', new URL('../assets/star.png', import.meta.url).href);
        this.load.image('bomb', new URL('../assets/bomb.png', import.meta.url).href);
        this.load.image('store1', new URL('../assets/Store.png', import.meta.url).href);
        this.load.image('building1', new URL('../assets/building1.png',import.meta.url).href);
        this.load.image('building2', new URL('../assets/building2.png',import.meta.url).href);
        this.load.image('ad', new URL('../assets/ad.png',import.meta.url).href);
        this.load.spritesheet('dude', new URL('../assets/dude.png', import.meta.url).href, { frameWidth: 32, frameHeight: 48 });
    }


    create() {

        this.add.image(540, 360, 'sky');
        //this.add.image(540,360, 'store1');
        this.store1 = this.physics.add.staticGroup()
        this.store1.create(150,535, 'store1').setScale(0.7).refreshBody();

        this.building1 = this.physics.add.staticGroup();
        this.building1.create(505,435,'building1').setScale(0.7).refreshBody();

        this.building2 = this.physics.add.staticGroup();
        this.building2.create(961,435,'building2').setScale(0.7).refreshBody();

        this.ad = this.physics.add.staticGroup();
        this.ad.create(625,163,'ad').setScale(0.7).refreshBody();
        
        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(540, 677, 'ground').setScale(2).refreshBody();

        /*this.platforms.create(810, 440, 'ground');
        this.platforms.create(50, 270, 'ground');
        this.platforms.create(940, 220, 'ground');*/

        this.player = this.physics.add.sprite(10, 600, 'dude');

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

        
        this.bombs = this.physics.add.group()
        this.scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000' });

        this.physics.add.collider(this.player, this.platforms);
        this.physics.add.collider(this.bombs, this.platforms);
        this.physics.add.collider(this.player, this.store1);
        this.physics.add.collider(this.player, this.building1);
        this.physics.add.collider(this.player, this.building2);

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
            this.player.setVelocityY(-367);
        }
        
        
    }

    
    
    hitBomb(player, bomb){
        
        this.physics.pause();

        this.player.setTint(0xff0000);

        this.player.anims.play('turn');

        this.gameOver = true;
    }
    
    
        

}
