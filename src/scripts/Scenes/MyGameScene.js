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
        this.scoreTextA;
        this.scoreTextB;
        this.scoreTextC;
        this.scoreTextD;
        this.gameOverText;
        this.timeText;
        this.left;
        this.right;
        this.up;
        this.down;
        this.moveBeep;
        this.pickUpBeep;
        this.scoreBeep;
        this.loseBeep;
        this.beltBeep;
        this.music;
        this.boxA;
        this.boxB;
        this.boxC;
        this.boxD;
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
        this.load.audio('move', new URL('/assets/move.mp3',
            import.meta.url).href);
        this.load.audio('pickup', new URL('/assets/pickUp.mp3',
            import.meta.url).href);
        this.load.audio('score', new URL('/assets/score.mp3',
            import.meta.url).href);
        this.load.audio('lose', new URL('/assets/lose.mp3',
            import.meta.url).href);
        this.load.audio('belt', new URL('/assets/belt.mp3',
            import.meta.url).href);
    }
    create() {
        this.left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.up = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        this.down = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        this.add.image(540, 360, 'background');
        this.player = this.add.image(660, 190, 'worker');
        this.player.visible = false
        this.player1 = this.add.image(660, 340, 'worker');
        this.player1.visible = false
        this.player2 = this.add.image(660, 490, 'worker');
        this.player2.visible = false
        this.player3 = this.add.image(660, 640, 'worker');
        this.player3.visible = false
        this.player4 = this.physics.add.image(315, 640, 'worker');
        this.player4.visible = false
        this.player5 = this.physics.add.image(315, 490, 'worker');
        this.player5.visible = false
        this.player6 = this.physics.add.image(315, 340, 'worker');
        this.boxB = this.physics.add.image(135, 190, 'boxb');
        this.boxB.body.setSize(300, 15);
        this.boxC = this.physics.add.image(135, 190, 'boxc');
        this.boxC.body.setSize(300, 15);
        this.boxD = this.physics.add.image(135, 190, 'boxd');
        this.boxD.body.setSize(300, 15);
        this.boxA = this.physics.add.image(135, 190, 'boxa');
        this.boxA.body.setSize(300, 15);
        this.cursors = this.input.keyboard.createCursorKeys();
        this.moveBeep = this.sound.add('move');
        this.pickUpBeep = this.sound.add('pickup');
        this.scoreBeep = this.sound.add('score');
        this.loseBeep = this.sound.add('lose');
        this.beltBeep = this.sound.add('belt');
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
        this.t = 0;
    }
    update(time, delta) {
        this.t += delta
        if (this.t >= 1000) {
            this.beltBeep.play({
                volume: 0.2
            });
            this.boxA.y += 75;
            this.t = 0;
        }
        if (this.t >= 2000) {
            this.beltBeep.play({
                volume: 0.2
            });
            this.boxD.y += 75;
            this.t = 0;
        }
        this.movePlayer();
    }

    onPlayerMoveRight() {
        if (this.player6.visible) {
            this.player6.visible = false;
            this.player1.visible = true;
        } else if (this.player6.rotation = 3.13) {
            this.player4.body.setSize(4, 4);
            this.player5.body.setSize(4, 4);
            this.player6.body.setSize(4, 4);
        }
    }
    onPlayerMoveLeft() {
        if (this.player1.visible) {
            this.player1.visible = false;
            this.player6.visible = true;
        } else if (this.player6.visible, this.player5.visible, this.player4.visible) {
            this.player4.body.setSize(120, 120);
            this.player5.body.setSize(120, 120);
            this.player6.body.setSize(120, 120);
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
    movePlayer() {
        if (Phaser.Input.Keyboard.JustDown(this.left)) {
            this.onPlayerMoveLeft();
            this.moveBeep.play();
            this.player.rotation = 0;
            this.player1.rotation = 0;
            this.player2.rotation = 0;
            this.player3.rotation = 0;
            this.player4.rotation = 0;
            this.player5.rotation = 0;
            this.player6.rotation = 0;
        }
        if (Phaser.Input.Keyboard.JustDown(this.right)) {
            this.onPlayerMoveRight();
            this.moveBeep.play();
            this.player.rotation = 3.13;
            this.player1.rotation = 3.13;
            this.player2.rotation = 3.13;
            this.player3.rotation = 3.13;
            this.player4.rotation = 3.13;
            this.player5.rotation = 3.13;
            this.player6.rotation = 3.13;
        }
        if (Phaser.Input.Keyboard.JustDown(this.up)) {
            this.onPlayerMoveUp();
            this.moveBeep.play();
            this.player.rotation = 1.58;
            this.player1.rotation = 1.58;
            this.player2.rotation = 1.58;
            this.player3.rotation = 1.58;
            this.player4.rotation = 1.58;
            this.player5.rotation = 1.58;
            this.player6.rotation = 1.58;
        }
        if (Phaser.Input.Keyboard.JustDown(this.down)) {
            this.onPlayerMoveDown();
            this.moveBeep.play();
            this.player.rotation = 4.73;
            this.player1.rotation = 4.73;
            this.player2.rotation = 4.73;
            this.player3.rotation = 4.73;
            this.player4.rotation = 4.73;
            this.player5.rotation = 4.73;
            this.player6.rotation = 4.73;
        }
    }
    onPickUp() {

    }
}