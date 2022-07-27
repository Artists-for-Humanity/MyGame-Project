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
        this.playerBoxA;
        this.playerBoxA1;
        this.playerBoxA2;
        this.playerBoxA3;
        this.playerBoxA4;
        this.playerBoxA5;
        this.playerBoxA6;
        this.playerBoxB;
        this.playerBoxB1;
        this.playerBoxB2;
        this.playerBoxB3;
        this.playerBoxB4;
        this.playerBoxB5;
        this.playerBoxB6;
        this.playerBoxC;
        this.playerBoxC1;
        this.playerBoxC2;
        this.playerBoxC3;
        this.playerBoxC4;
        this.playerBoxC5;
        this.playerBoxC6;
        this.playerBoxD;
        this.playerBoxD1;
        this.playerBoxD2;
        this.playerBoxD3;
        this.playerBoxD4;
        this.playerBoxD5;
        this.playerBoxD6;
        this.t = 0;
        this.cursors;
        this.scoreA = 4;
        this.scoreB = 4;
        this.scoreC = 4;
        this.scoreD = 4;
        this.scoreTextA;
        this.scoreTextB;
        this.scoreTextC;
        this.scoreTextD;
        this.gameOverText;
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
        this.placeholderA;
        this.placeholderB;
        this.placeholderC;
        this.placeholderD;
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
        this.load.image('place', new URL('/assets/place.png',
            import.meta.url).href);
        this.load.image('boxworkera', new URL('/assets/boxWorkerA.png',
            import.meta.url).href);
        this.load.image('boxworkerb', new URL('/assets/boxWorkerB.png',
            import.meta.url).href);
        this.load.image('boxworkerc', new URL('/assets/boxWorkerC.png',
            import.meta.url).href);
        this.load.image('boxworkerd', new URL('/assets/boxWorkerD.png',
            import.meta.url).href);
        this.load.image('win', new URL('/assets/youWin.png',
            import.meta.url).href);
        this.load.image('lose', new URL('/assets/youLose.png',
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
        this.playerBoxA = this.physics.add.image(660, 190, 'boxworkera');
        this.playerBoxA.visible = false
        this.playerBoxA1 = this.physics.add.image(660, 340, 'boxworkera');
        this.playerBoxA1.visible = false
        this.playerBoxA2 = this.physics.add.image(660, 490, 'boxworkera');
        this.playerBoxA2.visible = false
        this.playerBoxA3 = this.physics.add.image(660, 640, 'boxworkera');
        this.playerBoxA3.visible = false
        this.playerBoxA4 = this.add.image(315, 640, 'boxworkera');
        this.playerBoxA4.visible = false
        this.playerBoxA5 = this.add.image(315, 490, 'boxworkera');
        this.playerBoxA5.visible = false
        this.playerBoxA6 = this.add.image(315, 340, 'boxworkera');
        this.playerBoxA6.visible = false
        this.playerBoxB = this.physics.add.image(660, 190, 'boxworkerb');
        this.playerBoxB.visible = false
        this.playerBoxB1 = this.physics.add.image(660, 340, 'boxworkerb');
        this.playerBoxB1.visible = false
        this.playerBoxB2 = this.physics.add.image(660, 490, 'boxworkerb');
        this.playerBoxB2.visible = false
        this.playerBoxB3 = this.physics.add.image(660, 640, 'boxworkerb');
        this.playerBoxB3.visible = false
        this.playerBoxB4 = this.add.image(315, 640, 'boxworkerb');
        this.playerBoxB4.visible = false
        this.playerBoxB5 = this.add.image(315, 490, 'boxworkerb');
        this.playerBoxB5.visibile = false
        this.playerBoxB6 = this.add.image(315, 340, 'boxworkerb');
        this.playerBoxB6.visible = false
        this.playerBoxC = this.physics.add.image(660, 190, 'boxworkerc');
        this.playerBoxC.visible = false
        this.playerBoxC1 = this.physics.add.image(660, 340, 'boxworkerc');
        this.playerBoxC1.visible = false
        this.playerBoxC2 = this.physics.add.image(660, 490, 'boxworkerc');
        this.playerBoxC2.visible = false
        this.playerBoxC3 = this.physics.add.image(660, 640, 'boxworkerc');
        this.playerBoxC3.visible = false
        this.playerBoxC4 = this.add.image(315, 640, 'boxworkerc');
        this.playerBoxC4.visible = false
        this.playerBoxC5 = this.add.image(315, 490, 'boxworkerc');
        this.playerBoxC5.visibile = false
        this.playerBoxC6 = this.add.image(315, 340, 'boxworkerc');
        this.playerBoxC6.visible = false
        this.playerBoxD = this.physics.add.image(660, 190, 'boxworkerd');
        this.playerBoxD.visible = false
        this.playerBoxD1 = this.physics.add.image(660, 340, 'boxworkerd');
        this.playerBoxD1.visible = false
        this.playerBoxD2 = this.physics.add.image(660, 490, 'boxworkerd');
        this.playerBoxD2.visible = false
        this.playerBoxD3 = this.physics.add.image(660, 640, 'boxworkerd');
        this.playerBoxD3.visible = false
        this.playerBoxD4 = this.add.image(315, 640, 'boxworkerd');
        this.playerBoxD4.visible = false
        this.playerBoxD5 = this.add.image(315, 490, 'boxworkerd');
        this.playerBoxD5.visibile = false
        this.playerBoxD6 = this.add.image(315, 340, 'boxworkerd');
        this.playerBoxD6.visible = false
        this.boxB = this.physics.add.image(135, 265, 'boxb');
        this.boxB.body.setSize(300, 15);
        this.boxC = this.physics.add.image(135, 265, 'boxc');
        this.boxC.body.setSize(300, 15);
        this.boxD = this.physics.add.image(135, 265, 'boxd');
        this.boxD.body.setSize(300, 15);
        this.boxA = this.physics.add.image(135, 265, 'boxa');
        this.boxA.body.setSize(300, 15);
        this.placeholderA = this.physics.add.image(800, 190, 'place');
        this.placeholderA.body.setSize(200, 15);
        this.placeholderB = this.physics.add.image(800, 340, 'place');
        this.placeholderB.body.setSize(200, 15);
        this.placeholderC = this.physics.add.image(800, 490, 'place');
        this.placeholderC.body.setSize(200, 15);
        this.placeholderD = this.physics.add.image(800, 640, 'place');
        this.placeholderD.body.setSize(200, 15);
        this.cursors = this.input.keyboard.createCursorKeys();
        this.moveBeep = this.sound.add('move');
        this.pickUpBeep = this.sound.add('pickup');
        this.scoreBeep = this.sound.add('score');
        this.loseBeep = this.sound.add('lose');
        this.beltBeep = this.sound.add('belt');
        this.scoreTextA = this.add.text(827, 140, 4, {
            fontSize: '20px',
            fill: '#000',
        })
        this.scoreTextB = this.add.text(827, 290, 4, {
            fontSize: '20px',
            fill: '#000',
        })
        this.scoreTextC = this.add.text(827, 442, 4, {
            fontSize: '20px',
            fill: '#000',
        })
        this.scoreTextD = this.add.text(827, 591, 4, {
            fontSize: '20px',
            fill: '#000',
        })
        this.physics.add.overlap(this.boxA, this.player6, this.onPickUpBox6A, null, this);
        this.physics.add.overlap(this.boxA, this.player5, this.onPickUpBox5A, null, this);
        this.physics.add.overlap(this.boxA, this.player4, this.onPickUpBox4A, null, this);
        this.physics.add.overlap(this.boxB, this.player6, this.onPickUpBox6B, null, this);
        this.physics.add.overlap(this.boxB, this.player5, this.onPickUpBox5B, null, this);
        this.physics.add.overlap(this.boxB, this.player4, this.onPickUpBox4B, null, this);
        this.physics.add.overlap(this.boxC, this.player6, this.onPickUpBox6C, null, this);
        this.physics.add.overlap(this.boxC, this.player5, this.onPickUpBox5C, null, this);
        this.physics.add.overlap(this.boxC, this.player4, this.onPickUpBox4C, null, this);
        this.physics.add.overlap(this.boxD, this.player6, this.onPickUpBox6D, null, this);
        this.physics.add.overlap(this.boxD, this.player5, this.onPickUpBox5D, null, this);
        this.physics.add.overlap(this.boxD, this.player4, this.onPickUpBox4D, null, this);
    }
    update(time, delta) {
        this.t += delta
        if (this.t >= 750) {
            this.beltBeep.play({
                volume: 0.2
            });
            this.boxA.y += 75;
            this.time.delayedCall(1500, () => {
                this.boxB.y += 75;
            }, [], this)
            this.time.delayedCall(3000, () => {
                this.boxC.y += 75;
            }, [], this)
            this.time.delayedCall(4500, () => {
                this.boxD.y += 75;
            }, [], this)
            this.game.loop;
            this.t = 0;
            if (this.gameWin()) {
                this.t = null;
                this.delta = null;
                this.time = null;
                this.game.loop = false;
            }
        }
        this.movePlayer();
        if (this.boxA.y >= 795) {
            this.boxA.y = 265
        }
        if (this.boxB.y >= 795) {
            this.boxB.y = 265
        }
        if (this.boxC.y >= 795) {
            this.boxC.y = 265
        }
        if (this.boxD.y >= 795) {
            this.boxD.y = 265
        }
    }
    onPlayerMoveRight() {
        if (this.player6.visible) {
            this.player6.visible = false;
            this.player1.visible = true;
        }
        if (this.playerBoxA6.visible) {
            this.playerBoxA6.visible = false;
            this.playerBoxA1.visible = true;
        }
        if (this.playerBoxB6.visible) {
            this.playerBoxB6.visible = false;
            this.playerBoxB1.visible = true;
        }
        if (this.playerBoxC6.visible) {
            this.playerBoxC6.visible = false;
            this.playerBoxC1.visible = true;
        }
        if (this.playerBoxD6.visible) {
            this.playerBoxD6.visible = false;
            this.playerBoxD1.visible = true;
        }
        this.player4.body.setSize(4, 4);
        this.player5.body.setSize(4, 4);
        this.player6.body.setSize(4, 4);
        this.playerBoxA.body.setSize(120, 120);
        this.playerBoxA1.body.setSize(120, 120);
        this.playerBoxA2.body.setSize(120, 120);
        this.playerBoxA3.body.setSize(120, 120);
        this.playerBoxB.body.setSize(120, 120);
        this.playerBoxB1.body.setSize(120, 120);
        this.playerBoxB2.body.setSize(120, 120);
        this.playerBoxB3.body.setSize(120, 120);
        this.playerBoxC.body.setSize(120, 120);
        this.playerBoxC1.body.setSize(120, 120);
        this.playerBoxC2.body.setSize(120, 120);
        this.playerBoxC3.body.setSize(120, 120);
        this.playerBoxD.body.setSize(120, 120);
        this.playerBoxD1.body.setSize(120, 120);
        this.playerBoxD2.body.setSize(120, 120);
        this.playerBoxD3.body.setSize(120, 120);
    }
    onPlayerMoveLeft() {
        if (this.player1.visible) {
            this.player1.visible = false;
            this.player6.visible = true;
        }
        if (this.playerBoxA1.visible) {
            this.playerBoxA1.visible = false;
            this.playerBoxA6.visible = true;
        }
        if (this.playerBoxB1.visible) {
            this.playerBoxB1.visible = false;
            this.playerBoxB6.visible = true;
        }
        if (this.playerBoxC1.visible) {
            this.playerBoxC1.visible = false;
            this.playerBoxC6.visible = true;
        }
        if (this.playerBoxD1.visible) {
            this.playerBoxD1.visible = false;
            this.playerBoxD6.visible = true;
        }
        this.player4.body.setSize(120, 120);
        this.player5.body.setSize(120, 120);
        this.player6.body.setSize(120, 120);
        this.playerBoxA.body.setSize(4, 4);
        this.playerBoxA1.body.setSize(4, 4);
        this.playerBoxA2.body.setSize(4, 4);
        this.playerBoxA3.body.setSize(4, 4);
        this.playerBoxB.body.setSize(4, 4);
        this.playerBoxB1.body.setSize(4, 4);
        this.playerBoxB2.body.setSize(4, 4);
        this.playerBoxB3.body.setSize(4, 4);
        this.playerBoxC.body.setSize(4, 4);
        this.playerBoxC1.body.setSize(4, 4);
        this.playerBoxC2.body.setSize(4, 4);
        this.playerBoxC3.body.setSize(4, 4);
        this.playerBoxD.body.setSize(4, 4);
        this.playerBoxD1.body.setSize(4, 4);
        this.playerBoxD2.body.setSize(4, 4);
        this.playerBoxD3.body.setSize(4, 4);
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
        if (this.playerBoxA1.visible) {
            this.playerBoxA1.visible = false;
            this.playerBoxA.visible = true;
        } else if (this.playerBoxA2.visible) {
            this.playerBoxA2.visible = false;
            this.playerBoxA1.visible = true;
        } else if (this.playerBoxA3.visible) {
            this.playerBoxA3.visible = false;
            this.playerBoxA2.visible = true;
        } else if (this.playerBoxA5.visible) {
            this.playerBoxA5.visible = false;
            this.playerBoxA6.visible = true;
        } else if (this.playerBoxA4.visible) {
            this.playerBoxA4.visible = false;
            this.playerBoxA5.visible = true;
        }
        if (this.playerBoxB1.visible) {
            this.playerBoxB1.visible = false;
            this.playerBoxB.visible = true;
        } else if (this.playerBoxB2.visible) {
            this.playerBoxB2.visible = false;
            this.playerBoxB1.visible = true;
        } else if (this.playerBoxB3.visible) {
            this.playerBoxB3.visible = false;
            this.playerBoxB2.visible = true;
        } else if (this.playerBoxB5.visible) {
            this.playerBoxB5.visible = false;
            this.playerBoxB6.visible = true;
        } else if (this.playerBoxB4.visible) {
            this.playerBoxB4.visible = false;
            this.playerBoxB5.visible = true;
        }
        if (this.playerBoxC1.visible) {
            this.playerBoxC1.visible = false;
            this.playerBoxC.visible = true;
        } else if (this.playerBoxC2.visible) {
            this.playerBoxC2.visible = false;
            this.playerBoxC1.visible = true;
        } else if (this.playerBoxC3.visible) {
            this.playerBoxC3.visible = false;
            this.playerBoxC2.visible = true;
        } else if (this.playerBoxC5.visible) {
            this.playerBoxC5.visible = false;
            this.playerBoxC6.visible = true;
        } else if (this.playerBoxC4.visible) {
            this.playerBoxC4.visible = false;
            this.playerBoxC5.visible = true;
        }
        if (this.playerBoxD1.visible) {
            this.playerBoxD1.visible = false;
            this.playerBoxD.visible = true;
        } else if (this.playerBoxD2.visible) {
            this.playerBoxD2.visible = false;
            this.playerBoxD1.visible = true;
        } else if (this.playerBoxD3.visible) {
            this.playerBoxD3.visible = false;
            this.playerBoxD2.visible = true;
        } else if (this.playerBoxD5.visible) {
            this.playerBoxD5.visible = false;
            this.playerBoxD6.visible = true;
        } else if (this.playerBoxD4.visible) {
            this.playerBoxD4.visible = false;
            this.playerBoxD5.visible = true;
        }
        this.player4.body.setSize(4, 4);
        this.player5.body.setSize(4, 4);
        this.player6.body.setSize(4, 4);
        this.playerBoxA.body.setSize(4, 4);
        this.playerBoxA1.body.setSize(4, 4);
        this.playerBoxA2.body.setSize(4, 4);
        this.playerBoxA3.body.setSize(4, 4);
        this.playerBoxB.body.setSize(4, 4);
        this.playerBoxB1.body.setSize(4, 4);
        this.playerBoxB2.body.setSize(4, 4);
        this.playerBoxB3.body.setSize(4, 4);
        this.playerBoxC.body.setSize(4, 4);
        this.playerBoxC1.body.setSize(4, 4);
        this.playerBoxC2.body.setSize(4, 4);
        this.playerBoxC3.body.setSize(4, 4);
        this.playerBoxD.body.setSize(4, 4);
        this.playerBoxD1.body.setSize(4, 4);
        this.playerBoxD2.body.setSize(4, 4);
        this.playerBoxD3.body.setSize(4, 4);
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
        if (this.playerBoxA.visible) {
            this.playerBoxA.visible = false;
            this.playerBoxA1.visible = true;
        } else if (this.playerBoxA1.visible) {
            this.playerBoxA1.visible = false;
            this.playerBoxA2.visible = true;
        } else if (this.playerBoxA2.visible) {
            this.playerBoxA2.visible = false;
            this.playerBoxA3.visible = true;
        } else if (this.playerBoxA6.visible) {
            this.playerBoxA6.visible = false;
            this.playerBoxA5.visible = true;
        } else if (this.playerBoxA5.visible) {
            this.playerBoxA5.visible = false;
            this.playerBoxA4.visible = true;
        }
        if (this.playerBoxB.visible) {
            this.playerBoxB.visible = false;
            this.playerBoxB1.visible = true;
        } else if (this.playerBoxB1.visible) {
            this.playerBoxB1.visible = false;
            this.playerBoxB2.visible = true;
        } else if (this.playerBoxB2.visible) {
            this.playerBoxB2.visible = false;
            this.playerBoxB3.visible = true;
        } else if (this.playerBoxB6.visible) {
            this.playerBoxB6.visible = false;
            this.playerBoxB5.visible = true;
        } else if (this.playerBoxB5.visible) {
            this.playerBoxB5.visible = false;
            this.playerBoxB4.visible = true;
        }
        if (this.playerBoxC.visible) {
            this.playerBoxC.visible = false;
            this.playerBoxC1.visible = true;
        } else if (this.playerBoxC1.visible) {
            this.playerBoxC1.visible = false;
            this.playerBoxC2.visible = true;
        } else if (this.playerBoxC2.visible) {
            this.playerBoxC2.visible = false;
            this.playerBoxC3.visible = true;
        } else if (this.playerBoxC6.visible) {
            this.playerBoxC6.visible = false;
            this.playerBoxC5.visible = true;
        } else if (this.playerBoxC5.visible) {
            this.playerBoxC5.visible = false;
            this.playerBoxC4.visible = true;
        }
        if (this.playerBoxD.visible) {
            this.playerBoxD.visible = false;
            this.playerBoxD1.visible = true;
        } else if (this.playerBoxD1.visible) {
            this.playerBoxD1.visible = false;
            this.playerBoxD2.visible = true;
        } else if (this.playerBoxD2.visible) {
            this.playerBoxD2.visible = false;
            this.playerBoxD3.visible = true;
        } else if (this.playerBoxD6.visible) {
            this.playerBoxD6.visible = false;
            this.playerBoxD5.visible = true;
        } else if (this.playerBoxD5.visible) {
            this.playerBoxD5.visible = false;
            this.playerBoxD4.visible = true;
        }
        this.player4.body.setSize(4, 4);
        this.player5.body.setSize(4, 4);
        this.player6.body.setSize(4, 4);
        this.playerBoxA.body.setSize(4, 4);
        this.playerBoxA1.body.setSize(4, 4);
        this.playerBoxA2.body.setSize(4, 4);
        this.playerBoxA3.body.setSize(4, 4);
        this.playerBoxB.body.setSize(4, 4);
        this.playerBoxB1.body.setSize(4, 4);
        this.playerBoxB2.body.setSize(4, 4);
        this.playerBoxB3.body.setSize(4, 4);
        this.playerBoxC.body.setSize(4, 4);
        this.playerBoxC1.body.setSize(4, 4);
        this.playerBoxC2.body.setSize(4, 4);
        this.playerBoxC3.body.setSize(4, 4);
        this.playerBoxD.body.setSize(4, 4);
        this.playerBoxD1.body.setSize(4, 4);
        this.playerBoxD2.body.setSize(4, 4);
        this.playerBoxD3.body.setSize(4, 4);
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
            this.playerBoxA.rotation = 0;
            this.playerBoxA1.rotation = 0;
            this.playerBoxA2.rotation = 0;
            this.playerBoxA3.rotation = 0;
            this.playerBoxA4.rotation = 0;
            this.playerBoxA5.rotation = 0;
            this.playerBoxA6.rotation = 0;
            this.playerBoxB.rotation = 0;
            this.playerBoxB1.rotation = 0;
            this.playerBoxB2.rotation = 0;
            this.playerBoxB3.rotation = 0;
            this.playerBoxB4.rotation = 0;
            this.playerBoxB5.rotation = 0;
            this.playerBoxB6.rotation = 0;
            this.playerBoxC.rotation = 0;
            this.playerBoxC1.rotation = 0;
            this.playerBoxC2.rotation = 0;
            this.playerBoxC3.rotation = 0;
            this.playerBoxC4.rotation = 0;
            this.playerBoxC5.rotation = 0;
            this.playerBoxC6.rotation = 0;
            this.playerBoxD.rotation = 0;
            this.playerBoxD1.rotation = 0;
            this.playerBoxD2.rotation = 0;
            this.playerBoxD3.rotation = 0;
            this.playerBoxD4.rotation = 0;
            this.playerBoxD5.rotation = 0;
            this.playerBoxD6.rotation = 0;
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
            this.playerBoxA.rotation = 3.13;
            this.playerBoxA1.rotation = 3.13;
            this.playerBoxA2.rotation = 3.13;
            this.playerBoxA3.rotation = 3.13;
            this.playerBoxA4.rotation = 3.13;
            this.playerBoxA5.rotation = 3.13;
            this.playerBoxA6.rotation = 3.13;
            this.playerBoxB.rotation = 3.13;
            this.playerBoxB1.rotation = 3.13;
            this.playerBoxB2.rotation = 3.13;
            this.playerBoxB3.rotation = 3.13;
            this.playerBoxB4.rotation = 3.13;
            this.playerBoxB5.rotation = 3.13;
            this.playerBoxB6.rotation = 3.13;
            this.playerBoxC.rotation = 3.13;
            this.playerBoxC1.rotation = 3.13;
            this.playerBoxC2.rotation = 3.13;
            this.playerBoxC3.rotation = 3.13;
            this.playerBoxC4.rotation = 3.13;
            this.playerBoxC5.rotation = 3.13;
            this.playerBoxC6.rotation = 3.13;
            this.playerBoxD.rotation = 3.13;
            this.playerBoxD1.rotation = 3.13;
            this.playerBoxD2.rotation = 3.13;
            this.playerBoxD3.rotation = 3.13;
            this.playerBoxD4.rotation = 3.13;
            this.playerBoxD5.rotation = 3.13;
            this.playerBoxD6.rotation = 3.13;
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
            this.playerBoxA.rotation = 1.58;
            this.playerBoxA1.rotation = 1.58;
            this.playerBoxA2.rotation = 1.58;
            this.playerBoxA3.rotation = 1.58;
            this.playerBoxA4.rotation = 1.58;
            this.playerBoxA5.rotation = 1.58;
            this.playerBoxA6.rotation = 1.58;
            this.playerBoxB.rotation = 1.58;
            this.playerBoxB1.rotation = 1.58;
            this.playerBoxB2.rotation = 1.58;
            this.playerBoxB3.rotation = 1.58;
            this.playerBoxB4.rotation = 1.58;
            this.playerBoxB5.rotation = 1.58;
            this.playerBoxB6.rotation = 1.58;
            this.playerBoxC.rotation = 1.58;
            this.playerBoxC1.rotation = 1.58;
            this.playerBoxC2.rotation = 1.58;
            this.playerBoxC3.rotation = 1.58;
            this.playerBoxC4.rotation = 1.58;
            this.playerBoxC5.rotation = 1.58;
            this.playerBoxC6.rotation = 1.58;
            this.playerBoxD.rotation = 1.58;
            this.playerBoxD1.rotation = 1.58;
            this.playerBoxD2.rotation = 1.58;
            this.playerBoxD3.rotation = 1.58;
            this.playerBoxD4.rotation = 1.58;
            this.playerBoxD5.rotation = 1.58;
            this.playerBoxD6.rotation = 1.58;
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
            this.playerBoxA.rotation = 4.73;
            this.playerBoxA1.rotation = 4.73;
            this.playerBoxA2.rotation = 4.73;
            this.playerBoxA3.rotation = 4.73;
            this.playerBoxA4.rotation = 4.73;
            this.playerBoxA5.rotation = 4.73;
            this.playerBoxA6.rotation = 4.73;
            this.playerBoxB.rotation = 4.73;
            this.playerBoxB1.rotation = 4.73;
            this.playerBoxB2.rotation = 4.73;
            this.playerBoxB3.rotation = 4.73;
            this.playerBoxB4.rotation = 4.73;
            this.playerBoxB5.rotation = 4.73;
            this.playerBoxB6.rotation = 4.73;
            this.playerBoxC.rotation = 4.73;
            this.playerBoxC1.rotation = 4.73;
            this.playerBoxC2.rotation = 4.73;
            this.playerBoxC3.rotation = 4.73;
            this.playerBoxC4.rotation = 4.73;
            this.playerBoxC5.rotation = 4.73;
            this.playerBoxC6.rotation = 4.73;
            this.playerBoxD.rotation = 4.73;
            this.playerBoxD1.rotation = 4.73;
            this.playerBoxD2.rotation = 4.73;
            this.playerBoxD3.rotation = 4.73;
            this.playerBoxD4.rotation = 4.73;
            this.playerBoxD5.rotation = 4.73;
            this.playerBoxD6.rotation = 4.73;
        }
    }
    onPickUpBox6A() {
        if (this.cursors.space.isDown) {
            if (this.player6.visible) {
                this.pickUpBeep.play();
                this.player6.visible = false
                this.playerBoxA6.visible = true
                this.physics.add.overlap(this.placeholderA, this.playerBoxA, this.onDepositA, null, this);
                this.boxA.visible = false;
                this.boxA.body.setSize(4, 4);
                this.time.delayedCall(6000, () => {
                    this.boxA.visible = true;
                    this.boxA.body.setSize(300, 15);
                }, [], this);
            }
        }
    }
    onPickUpBox5A() {
        if (this.cursors.space.isDown) {
            if (this.player5.visible) {
                this.pickUpBeep.play();
                this.player5.visible = false
                this.playerBoxA5.visible = true
                this.physics.add.overlap(this.placeholderA, this.playerBoxA, this.onDepositA, null, this);
                this.boxA.visible = false;
                this.boxA.body.setSize(4, 4);
                this.time.delayedCall(4000, () => {
                    this.boxA.visible = true;
                    this.boxA.body.setSize(300, 15);
                }, [], this);
            }
        }
    }
    onPickUpBox4A() {
        if (this.cursors.space.isDown) {
            if (this.player4.visible) {
                this.pickUpBeep.play();
                this.player4.visible = false
                this.playerBoxA4.visible = true
                this.physics.add.overlap(this.placeholderA, this.playerBoxA, this.onDepositA, null, this);
                this.boxA.visible = false;
                this.boxA.body.setSize(4, 4);
                this.time.delayedCall(2000, () => {
                    this.boxA.visible = true;
                    this.boxA.body.setSize(300, 15);
                }, [], this);
            }
        }
    }
    onPickUpBox6B() {
        if (this.cursors.space.isDown) {
            if (this.player6.visible) {
                this.pickUpBeep.play();
                this.player6.visible = false
                this.playerBoxB6.visible = true
                this.physics.add.overlap(this.placeholderB, this.playerBoxB1, this.onDepositB, null, this);
                this.boxB.visible = false;
                this.boxB.body.setSize(4, 4);
                this.time.delayedCall(6000, () => {
                    this.boxB.visible = true;
                    this.boxB.body.setSize(300, 15);
                }, [], this);
            }
        }
    }
    onPickUpBox5B() {
        if (this.cursors.space.isDown) {
            if (this.player5.visible) {
                this.pickUpBeep.play();
                this.player5.visible = false
                this.playerBoxB5.visible = true
                this.physics.add.overlap(this.placeholderB, this.playerBoxB1, this.onDepositB, null, this);
                this.boxB.visible = false;
                this.boxB.body.setSize(4, 4);
                this.time.delayedCall(4000, () => {
                    this.boxB.visible = true;
                    this.boxB.body.setSize(300, 15);
                }, [], this);
            }
        }
    }
    onPickUpBox4B() {
        if (this.cursors.space.isDown) {
            if (this.player4.visible) {
                this.pickUpBeep.play();
                this.player4.visible = false
                this.playerBoxB4.visible = true
                this.physics.add.overlap(this.placeholderB, this.playerBoxB1, this.onDepositB, null, this);
                this.boxB.visible = false;
                this.boxB.body.setSize(4, 4);
                this.time.delayedCall(2000, () => {
                    this.boxB.visible = true;
                    this.boxB.body.setSize(300, 15);
                }, [], this);
            }
        }
    }
    onPickUpBox6C() {
        if (this.cursors.space.isDown) {
            if (this.player6.visible) {
                this.pickUpBeep.play();
                this.player6.visible = false
                this.playerBoxC6.visible = true
                this.physics.add.overlap(this.placeholderC, this.playerBoxC2, this.onDepositC, null, this);
                this.boxC.visible = false;
                this.boxC.body.setSize(4, 4);
                this.time.delayedCall(6000, () => {
                    this.boxC.visible = true;
                    this.boxC.body.setSize(300, 15);
                }, [], this);
            }
        }
    }
    onPickUpBox5C() {
        if (this.cursors.space.isDown) {
            if (this.player5.visible) {
                this.pickUpBeep.play();
                this.player5.visible = false
                this.playerBoxC5.visible = true
                this.physics.add.overlap(this.placeholderC, this.playerBoxC2, this.onDepositC, null, this);
                this.boxC.visible = false;
                this.boxC.body.setSize(4, 4);
                this.time.delayedCall(4000, () => {
                    this.boxC.visible = true;
                    this.boxC.body.setSize(300, 15);
                }, [], this);
            }
        }
    }
    onPickUpBox4C() {
        if (this.cursors.space.isDown) {
            if (this.player4.visible) {
                this.pickUpBeep.play();
                this.player4.visible = false
                this.playerBoxC4.visible = true
                this.physics.add.overlap(this.placeholderC, this.playerBoxC2, this.onDepositC, null, this);
                this.boxC.visible = false;
                this.boxC.body.setSize(4, 4);
                this.time.delayedCall(2000, () => {
                    this.boxC.visible = true;
                    this.boxC.body.setSize(300, 15);
                }, [], this);
            }
        }
    }
    onPickUpBox6D() {
        if (this.cursors.space.isDown) {
            if (this.player6.visible) {
                this.pickUpBeep.play();
                this.player6.visible = false
                this.playerBoxD6.visible = true
                this.physics.add.overlap(this.placeholderD, this.playerBoxD3, this.onDepositD, null, this);
                this.boxD.visible = false;
                this.boxD.body.setSize(4, 4);
                this.time.delayedCall(5000, () => {
                    this.boxD.visible = true;
                    this.boxD.body.setSize(300, 15);
                }, [], this);
            }
        }
    }
    onPickUpBox5D() {
        if (this.cursors.space.isDown) {
            if (this.player5.visible) {
                this.pickUpBeep.play();
                this.player5.visible = false
                this.playerBoxD5.visible = true
                this.physics.add.overlap(this.placeholderD, this.playerBoxD3, this.onDepositD, null, this);
                this.boxD.visible = false;
                this.boxD.body.setSize(4, 4);
                this.time.delayedCall(4000, () => {
                    this.boxD.visible = true;
                    this.boxD.body.setSize(300, 15);
                }, [], this);
            }
        }
    }
    onPickUpBox4D() {
        if (this.cursors.space.isDown) {
            if (this.player4.visible) {
                this.pickUpBeep.play();
                this.player4.visible = false
                this.playerBoxD4.visible = true
                this.physics.add.overlap(this.placeholderD, this.playerBoxD3, this.onDepositD, null, this);
                this.boxD.visible = false;
                this.boxD.body.setSize(4, 4);
                this.time.delayedCall(2000, () => {
                    this.boxD.visible = true;
                    this.boxD.body.setSize(300, 15);
                }, [], this);
            }
        }
    }
    onDepositA() {
        if (this.cursors.space.isDown) {
            if (this.playerBoxA.visible) {
                this.scoreBeep.play();
                this.playerBoxA.visible = false;
                this.player.visible = true;
                this.scoreA -= 1;
                this.scoreTextA.setText(`${this.scoreA}`);
                this.scoreMaxA();
                this.gameWin();
            }
        }
    }
    onDepositB() {
        if (this.cursors.space.isDown) {
            if (this.playerBoxB1.visible) {
                this.scoreBeep.play();
                this.playerBoxB1.visible = false;
                this.player1.visible = true;
                this.scoreB -= 1;
                this.scoreTextB.setText(`${this.scoreB}`);
                this.scoreMaxB();
                this.gameWin();
            }
        }
    }
    onDepositC() {
        if (this.cursors.space.isDown) {
            if (this.playerBoxC2.visible) {
                this.scoreBeep.play();
                this.playerBoxC2.visible = false;
                this.player2.visible = true;
                this.scoreC -= 1;
                this.scoreTextC.setText(`${this.scoreC}`);
                this.scoreMaxC();
                this.gameWin();
            }
        }
    }
    onDepositD() {
        if (this.cursors.space.isDown) {
            if (this.playerBoxD3.visible) {
                this.scoreBeep.play();
                this.playerBoxD3.visible = false;
                this.player3.visible = true;
                this.scoreD -= 1;
                this.scoreTextD.setText(`${this.scoreD}`);
                this.scoreMaxD();
                this.gameWin();
            }
        }
    }
    scoreMaxA() {
        if (this.scoreA <= 0) {
            this.scoreTextA.setText('✓')
        }
    }
    scoreMaxB() {
        if (this.scoreB <= 0) {
            this.scoreTextB.setText('✓')
        }
    }
    scoreMaxC() {
        if (this.scoreC <= 0) {
            this.scoreTextC.setText('✓')
        }
    }
    scoreMaxD() {
        if (this.scoreD <= 0) {
            this.scoreTextD.setText('✓')
        }
    }
    gameWin() {
        if (this.scoreA <= 0) {
            if (this.scoreB <= 0) {
                if (this.scoreC <= 0) {
                    if (this.scoreD <= 0) {
                        this.physics.destroy;
                        this.add.image(540, 360, 'win');
                        this.boxA.destroy;
                        this.boxB.destroy;
                        this.boxC.destroy;
                        this.boxD.destroy;
                        this.player.destroy;
                        this.player1.destroy;
                        this.player2.destroy;
                        this.player3.destroy;
                        this.player4.destroy;
                        this.player5.destroy;
                        this.player6.destroy;
                        this.beltBeep.destroy;
                        this.moveBeep.destroy;
                        this.scene.pause;
                        console.log('hi');
                    }
                }
            }
        }
    }
}