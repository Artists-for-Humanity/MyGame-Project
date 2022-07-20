import Phaser from 'phaser';
export default class GameScene extends Phaser.Scene {
    constructor() {
        super({
            active: false,
            visible: false,
            key: 'MyGameScene',
        });
        this.player;
        this.player1;
        this.player2;
        this.player3;
        this.player4;
        this.player5;
        this.player6;
        this.cursors;
        this.playerPositions = [
            [660, 190],
            [660, 340],
            [660, 490],
            [660, 640],
            [300, 640],
            [300, 490],
            [300, 340]
        ]
        this.scoreTextA;
        this.scoreTextB;
        this.scoreTextC;
        this.scoreTextD;
        this.gameOverText;
        this.timeText;
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
        this.add.image(540, 360, 'background');
        this.player = this.add.image(660, 190, 'worker');
        this.player.visible = false
        this.player1 = this.add.image(660, 340, 'worker');
        this.player1.visible = false
        this.player2 = this.add.image(660, 490, 'worker');
        this.player2.visible = false
        this.player3 = this.add.image(660, 640, 'worker');
        this.player3.visible = false
        this.player4 = this.add.image(300, 640, 'worker');
        this.player4.visible = false
        this.player5 = this.add.image(300, 490, 'worker');
        this.player5.visible = false
        this.player6 = this.add.image(300, 340, 'worker');
        this.add.image(135, 340, 'boxb');
        this.add.image(135, 490, 'boxc');
        this.add.image(135, 640, 'boxd');
        this.add.image(135, 190, 'boxa');
        this.cursors = this.input.keyboard.createCursorKeys();
        this.timeText = this.add.text(915, 30, '1:00', {
            fontSize: '56px',
            fill: '#000',
        })
        this.scoreTextA = this.add.text(827, 140, '4', {
            fontSize: '20px',
            fill: '#000',
        })
        this.scoreTextB = this.add.text(827, 290, '4', {
            fontSize: '20px',
            fill: '#000',
        })
        this.scoreTextC = this.add.text(827, 442, '4', {
            fontSize: '20px',
            fill: '#000',
        })
        this.scoreTextD = this.add.text(827, 591, '4', {
            fontSize: '20px',
            fill: '#000',
        })
    }
    update() {
        if (this.cursors.left.isDown) {
            this.onPlayerMoveLeft();
            this.player.flipX = false;
            this.player1.flipX = false;
            this.player2.flipX = false;
            this.player3.flipX = false;
            this.player4.flipX = false;
            this.player5.flipX = false;
            this.player6.flipX = false;
        }
        if (this.cursors.right.isDown) {
            this.onPlayerMoveRight();
            this.player.flipX = true;
            this.player1.flipX = true;
            this.player2.flipX = true;
            this.player3.flipX = true;
            this.player4.flipX = true;
            this.player5.flipX = true;
            this.player6.flipX = true;
        }
        if (this.cursors.up.isDown) {
            this.onPlayerMoveUp();
            this.player.flipY = true;
            this.player1.flipY = true;
            this.player2.flipY = true;
            this.player3.flipY = true;
            this.player4.flipY = true;
            this.player5.flipY = true;
            this.player6.flipY = true;
        }
        if (this.cursors.down.isDown) {
            this.onPlayerMoveDown();
            this.player.flipY = false;
            this.player1.flipY = false;
            this.player2.flipY = false;
            this.player3.flipY = false;
            this.player4.flipY = false;
            this.player5.flipY = false;
            this.player6.flipY = false;
        }
    }
    onPlayerMoveRight() {
        if (this.player6.visible) {
            this.player6.visible = false;
            this.player1.visible = true;
        }
    }
    onPlayerMoveLeft() {
        if (this.player1.visible) {
            this.player1.visible = false;
            this.player6.visible = true;
        }
    }
    onPlayerMoveUp() {
        if (this.player1.visible) {
            this.player1.visible = false;
            this.player.visible = true;
        } else if (this.player2.visible) {
            this.player2.visible = false;
            this.player1.visible = true;
        } else if (this.player3.visible) {
            this.player3.visible = false;
            this.player2.visible = true;
        } else if (this.player5.visible) {
            this.player5.visible = false;
            this.player6.visible = true;
        } else if (this.player4.visible) {
            this.player4.visible = false;
            this.player5.visible = true;
        }
    }
    onPlayerMoveDown() {
        if (this.player.visible) {
            this.player.visible = false;
            this.player1.visible = true;
        } else if (this.player1.visible) {
            this.player1.visible = false;
            this.player2.visible = true;
        } else if (this.player2.visible) {
            this.player2.visible = false;
            this.player3.visible = true;
        } else if (this.player6.visible) {
            this.player6.visible = false;
            this.player5.visible = true;
        } else if (this.player5.visible) {
            this.player5.visible = false;
            this.player4.visible = true;
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