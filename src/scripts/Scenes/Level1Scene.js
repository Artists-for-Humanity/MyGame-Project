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
                  gravity: { y: 330}
                }
              }
        });

        // Game Object Declarations
        this.myText;
        this.score = 0;
        this.ground;
        this.bg;
        this.platforms;
        this.store1;
        this.building1;
        this.building2;
        this.building3;
        this.building4;
        this.musicplace;
        this.fire;
        this.ad;
        this.cursors;
        this.scoreText;
        this.player;
        this.stars;
        this.bombs;
        
        
    }

    preload() {
        this.load.image('sky', new URL('../assets/sky.png',import.meta.url).href);
        this.load.image('ground', new URL('../assets/platform.png', import.meta.url).href);
        this.load.image('star', new URL('../assets/star.png', import.meta.url).href);
        this.load.image('bomb', new URL('../assets/bomb.png', import.meta.url).href);
        this.load.image('store1', new URL('../assets/Store.png', import.meta.url).href);
        this.load.image('building1', new URL('../assets/building1.png',import.meta.url).href);
        this.load.image('building2', new URL('../assets/building2.png',import.meta.url).href);
        this.load.image('building3', new URL('../assets/building3.png',import.meta.url).href);
        this.load.image('building4', new URL('../assets/building4.png',import.meta.url).href);
        this.load.image('musicplace', new URL('../assets/musicplace.png',import.meta.url).href);
        this.load.image('ad', new URL('../assets/ad.png',import.meta.url).href);
        this.load.image('fire', new URL('../assets/fire.png',import.meta.url).href);
        this.load.spritesheet('dude', new URL('../assets/dude.png', import.meta.url).href, { frameWidth: 32, frameHeight: 48 });
    }


    create() {

        this.bg = this.add.image(540, 360, 'sky').setScale(6,2);
        //this.add.image(540,360, 'store1');
        this.store1 = this.physics.add.staticGroup()
        this.store1.create(150,535, 'store1').setScale(0.7).refreshBody();

        this.building1 = this.physics.add.staticGroup();
        this.building1.create(505,435,'building1').setScale(0.7).refreshBody();
        this.building1.create(-240,435,'building1').setScale(0.7).refreshBody();

        this.building2 = this.physics.add.staticGroup();
        this.building2.create(961,435,'building2').setScale(0.7).refreshBody();

        this.building3 = this.physics.add.staticGroup();
        this.building3.create(1315,350,'building3').setScale(0.7).refreshBody();
        this.building3.create(3867,350,'building3').setScale(0.7).refreshBody();

        this.building4 = this.physics.add.staticGroup();
        this.building4.create(2000,298,'building4').setScale(0.7).refreshBody();

        this.musicplace = this.physics.add.staticGroup();
        this.musicplace.create(3400,398,'musicplace').setScale(0.5).refreshBody();

        this.ad = this.physics.add.staticGroup();
        this.ad.create(625,163,'ad').setScale(0.7).refreshBody();

        this.fire = this.physics.add.staticGroup();
        this.fire.create(1686,355,'fire').setScale(0.7).refreshBody();
        
        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(540, 677, 'ground').setScale(12, 2).refreshBody();
        // this.ground = this.physics.add.image(540, 677, 'ground').setScale(4, 2).refreshBody();

        /*this.platforms.create(810, 440, 'ground');
        this.platforms.create(50, 270, 'ground');
        this.platforms.create(940, 220, 'ground');*/

        this.player = this.physics.add.sprite(15, 600, 'dude');
        this.cameras.main.setBounds(0, -280, 5000, 1000, this.player);
        this.cameras.main.startFollow(this.player);
        


        this.player.setBounce(0.2);
        // this.player.setCollideWorldBounds(true);
        // this.ground.setCollideWorldBounds(true);

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

        this.stars =  this.physics.add.group({
            key: 'star',
            repeat: 25,
            setXY: {x: 40, y: -300, stepX: 70}
        });
        console.log(this.stars);
        this.stars.children.iterate(function(child){
            child.setBounceY(Phaser.Math.FloatBetween(0.1, 0.3));
        })

        
        this.bombs = this.physics.add.group()
        this.scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000' });

        this.physics.add.collider(this.player, this.ground);
        this.physics.add.collider(this.player, this.platforms);
        this.physics.add.collider(this.player, this.store1);
        this.physics.add.collider(this.player, this.building1);
        this.physics.add.collider(this.player, this.building2);
        this.physics.add.collider(this.player, this.building3);
        this.physics.add.collider(this.player, this.building4);
        this.physics.add.collider(this.player, this.musicplace);
        this.physics.add.collider(this.player, this.fire);
        
        this.physics.add.collider(this.stars, this.platforms);
        this.physics.add.collider(this.stars, this.store1);
        this.physics.add.collider(this.stars, this.building1);
        this.physics.add.collider(this.stars, this.building2);
        this.physics.add.collider(this.stars, this.building3);
        this.physics.add.collider(this.stars, this.building4);
        this.physics.add.collider(this.stars, this.fire);
        


        this.physics.add.overlap(this.player, this.stars, this.collectStar, null, this);
        //this.physics.add.collider(this.player, this.stars, this.collectStar(), null, this);
        


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

    
    
    collectStar(player,star){
        star.disableBody(true,true);
        this.score += 10;
        this.scoreText.setText('Score: '+ this.score);
        if (this.stars.countActive(true) === 0)
        {
            this.stars.children.iterate(function (child) {
                child.enableBody(true, child.x, 0 , true, true);
        });
    }}
    
    
        

}
