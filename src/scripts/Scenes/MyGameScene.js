import Phaser from 'phaser';


export default class GameScene extends Phaser.Scene {
    constructor() {
        super({
            active: false,
            visible: false,
            key: 'MyGameScene',
        });

        // Misc game object declarations
        this.player;
        this.cursors;
        this.playerPositions = [
            [600, 190],
            [660, 340],
            [600, 490],
            [600, 640],
            [300, 640],
            [300, 490],
            [300, 340]
        ]
        // Game Text declaration
        this.scoreText;
        this.gameOverText;

    }

    preload() {
        this.load.image('background', new URL('/assets/factoryBackground.png',
            import.meta.url).href);
        this.load.image('worker', new URL('/assets/factoryWorker.png',
            import.meta.url).href);
        this.load.image('boxa', new URL('/assets/Box_A.png',
            import.meta.url).href);
        this.load.image('boxb', new URL('/assets/Box_B.png',
            import.meta.url).href);
        this.load.image('boxc', new URL('/assets/Box_C.png',
            import.meta.url).href);
        this.load.image('boxd', new URL('/assets/Box_D.png',
            import.meta.url).href);

    }

    create() {
        // Add images to Scene
        this.add.image(540, 360, 'background');
        this.player = this.add.image(300, 340, 'worker');
        this.add.image(135, 340, 'boxa');
        this.add.image(135, 490, 'boxb');
        this.add.image(135, 640, 'boxc');
        this.add.image(135, 190, 'boxd');
        // Initialize keyboard manager;
        this.cursors = this.input.keyboard.createCursorKeys();

        // Some enemies for the player to shoot randomly generated between Y(50-300) and X(50-900)

    }

    // Set world bounds & general bounds for player

    update() {
        if (this.cursors.left.isDown) {
            this.player.flipX = false;
            this.onPlayerMoveLeft();
        }
        if (this.cursors.right.isDown) {
            this.player.flipX = true;
            this.onPlayerMoveRight();
        }
        if (this.cursors.up.isDown) {
            this.physics = false
            this.player.flipY = true;
            console.log('soup');
        }
        if (this.cursors.down.isDown) {
            this.player.flipY = false;
        }
    }
    onPlayerMoveRight() {
        if (this.playerPositions[6] = true) {
            this.player.visible = false;
            this.add.image(660, 340, 'worker')
        }
    }
    onPlayerMoveLeft() {
        if (this.playerPositions[1] = true) {
            this.player.visible = false;
            this.add.image(300, 340, 'worker')
        }
    }


    setText() {
        this.myText = this.add.text(400, 360, '')
        this.myText.setStyle({
            fontSize: '100px',
            fill: '#000000',
            align: 'center',
        });
        this.myText.setText('Factory');
    }
}