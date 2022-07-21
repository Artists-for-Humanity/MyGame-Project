export default class MyGameScene extends Phaser.Scene {
        // Game Class Constructor
        constructor() {
            super({
                active: false,
                visible: false,
                key: 'MyGameScene',
            });

            // Game Object Declarations
            this.myText;
            this.background;
            this.gamespeed = 8;
            this.ground;
            this.player;

        }

        preload() {
            console.log('im running')
            this.load.image('background', new URL('../../Assets/background.png',
                import.meta.url).href);
            this.load.image('ground', new URL('../../Assets/GroundImage.png',
                import.meta.url).href);
            // this.load.spritesheet('player', new URL('../../Assets/player.png',
            //     import.meta.url).href);
        }


            create() {
                // this.setText();
                console.log('im running 2')

                this.background = this.add.tileSprite(this.game.config.width / 2, this.game.config.height / 2, this.game.config.width, this.game.config.height, 'background');
                this.ground = this.add.tileSprite(this.game.config.width / 2, this.game.config.height - 48, 1080, 88, 'ground');
                console.log('im running 3')
                // this.player = new Player(this, this.game.config.width / 4, this.game.config.height / 2);


            }

            update() {
                this.background.tilePositionX += this.gamespeed * .85;
                this.ground.tilePositionX += this.gamespeed;
                // this.player.anims.play('run', true);

            }

            setText() {
                this.background.titlePositionX += this.gamespeed * .85;
                this.myText = this.add.text(400, 360, '')
                this.myText.setStyle({
                    fontSize: '100px',
                    fill: '#000000',
                    align: 'center',
                });
                this.myText.setText('MyGame');
            }
        
    }