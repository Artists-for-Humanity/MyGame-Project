import Phaser from 'phaser';
export default class GameScene extends Phaser.Scene {
    constructor() {
        super({
            active: false,
            visible: true,
            key: 'MyGameScene',
        });
        this.player;
        this.playerBoxA;
        this.playerBoxB;
        this.playerBoxC;
        this.playerBoxD;
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
        this.left;
        this.right;
        this.up;
        this.down;
        this.space;
        this.moveBeep;
        this.pickUpBeep;
        this.scoreBeep;
        this.loseBeep;
        this.beltBeep;
        this.boxA;
        this.boxB;
        this.boxC;
        this.boxD;
        this.placeholderA;
        this.placeholderB;
        this.placeholderC;
        this.placeholderD;
        this.homeScreen;
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
        this.load.image('homescreen', new URL('/assets/startScreen.png',
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
        this.space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.add.image(540, 360, 'background');
        this.player = this.physics.add.image(660, 190, 'worker');
        this.playerBoxA = this.physics.add.image(660, 190, 'boxworkera');
        this.playerBoxA.visible = false;
        this.playerBoxB = this.physics.add.image(660, 340, 'boxworkerb');
        this.playerBoxB.visible = false;
        this.playerBoxC = this.physics.add.image(660, 490, 'boxworkerc');
        this.playerBoxC.visible = false;
        this.playerBoxD = this.physics.add.image(660, 640, 'boxworkerd');
        this.playerBoxD.visible = false;
        this.boxB = this.physics.add.image(135, 190, 'boxb');
        this.boxB.visible = false;
        this.boxB.body.setSize(300, 15);
        this.boxC = this.physics.add.image(135, 190, 'boxc');
        this.boxC.visible = false;
        this.boxC.body.setSize(300, 15);
        this.boxD = this.physics.add.image(135, 190, 'boxd');
        this.boxD.visible = false;
        this.boxD.body.setSize(300, 15);
        this.boxA = this.physics.add.image(135, 190, 'boxa');
        this.boxA.visible = false;
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
        this.physics.add.overlap(this.boxA, this.player, this.onPickUpBox6A, null, this);
        this.physics.add.overlap(this.boxA, this.player, this.onPickUpBox5A, null, this);
        this.physics.add.overlap(this.boxA, this.player, this.onPickUpBox4A, null, this);
        this.physics.add.overlap(this.boxB, this.player, this.onPickUpBox6B, null, this);
        this.physics.add.overlap(this.boxB, this.player, this.onPickUpBox5B, null, this);
        this.physics.add.overlap(this.boxB, this.player, this.onPickUpBox4B, null, this);
        this.physics.add.overlap(this.boxC, this.player, this.onPickUpBox6C, null, this);
        this.physics.add.overlap(this.boxC, this.player, this.onPickUpBox5C, null, this);
        this.physics.add.overlap(this.boxC, this.player, this.onPickUpBox4C, null, this);
        this.physics.add.overlap(this.boxD, this.player, this.onPickUpBox6D, null, this);
        this.physics.add.overlap(this.boxD, this.player, this.onPickUpBox5D, null, this);
        this.physics.add.overlap(this.boxD, this.player, this.onPickUpBox4D, null, this);
        this.physics.add.overlap(this.placeholderA, this.playerBoxA, this.onDepositA, null, this);
        this.physics.add.overlap(this.placeholderA, this.playerBoxB, this.gameOverB, null, this);
        this.physics.add.overlap(this.placeholderA, this.playerBoxC, this.gameOverC, null, this);
        this.physics.add.overlap(this.placeholderA, this.playerBoxD, this.gameOverD, null, this);
        this.physics.add.overlap(this.placeholderB, this.playerBoxB, this.onDepositB, null, this);
        this.physics.add.overlap(this.placeholderB, this.playerBoxA, this.gameOverA, null, this);
        this.physics.add.overlap(this.placeholderB, this.playerBoxC, this.gameOverC, null, this);
        this.physics.add.overlap(this.placeholderB, this.playerBoxD, this.gameOverD, null, this);
        this.physics.add.overlap(this.placeholderC, this.playerBoxC, this.onDepositC, null, this);
        this.physics.add.overlap(this.placeholderC, this.playerBoxA, this.gameOverA, null, this);
        this.physics.add.overlap(this.placeholderC, this.playerBoxB, this.gameOverB, null, this);
        this.physics.add.overlap(this.placeholderC, this.playerBoxD, this.gameOverD, null, this);
        this.physics.add.overlap(this.placeholderD, this.playerBoxD, this.onDepositD, null, this);
        this.physics.add.overlap(this.placeholderD, this.playerBoxA, this.gameOverA, null, this);
        this.physics.add.overlap(this.placeholderD, this.playerBoxB, this.gameOverB, null, this);
        this.physics.add.overlap(this.placeholderD, this.playerBoxC, this.gameOverC, null, this);
        // this.scene.pause();
        // this.homeScreen = this.add.image(540, 360, 'homescreen');
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
        }
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
        if (this.boxA.y === 265) {
            this.boxA.visible = true;
        }
        if (this.boxB.y === 265) {
            this.boxB.visible = true;
        }
        if (this.boxC.y === 265) {
            this.boxC.visible = true;
        }
        if (this.boxD.y === 265) {
            this.boxD.visible = true;
        }
        this.movePlayer();
        // if (Phaser.Input.Keyboard.JustDown(this.space)) {
        //     this.homeScreen.visible = false;
        //     this.scene.resume();
        //     console.log('start');
        // }
    }
    onPlayerMoveRight() {
        if (this.player.y === 340) {
            this.player.x = 660;
        }
        if (this.playerBoxA.y === 340 && this.playerBoxA.visible) {
            this.playerBoxA.x = 660;
        }
        if (this.playerBoxB.y === 340 && this.playerBoxB.visible) {
            this.playerBoxB.x = 660;
        }
        if (this.playerBoxC.y === 340 && this.playerBoxC.visible) {
            this.playerBoxC.x = 660;
        }
        if (this.playerBoxD.y === 340 && this.playerBoxD.visible) {
            this.playerBoxD.x = 660;
        }
        this.player.body.setSize(4, 4);
        if (this.playerBoxA.visible) {
            this.playerBoxA.body.setSize(120, 120);
        } else if (this.playerBoxB.visible) {
            this.playerBoxB.body.setSize(120, 120);
        } else if (this.playerBoxC.visible) {
            this.playerBoxC.body.setSize(120, 120);
        } else if (this.playerBoxD.visible) {
            this.playerBoxD.body.setSize(120, 120);
        }
    }
    onPlayerMoveLeft() {
        if (this.player.y === 340) {
            this.player.x = 315;
        }
        if (this.playerBoxA.y === 340 && this.playerBoxA.visible) {
            this.playerBoxA.x = 315;
        }
        if (this.playerBoxB.y === 340 && this.playerBoxB.visible) {
            this.playerBoxB.x = 315;
        }
        if (this.playerBoxC.y === 340 && this.playerBoxC.visible) {
            this.playerBoxC.x = 315;
        }
        if (this.playerBoxD.y === 340 && this.playerBoxD.visible) {
            this.playerBoxD.x = 315;
        }
        this.player.body.setSize(120, 120);
        this.playerBoxA.body.setSize(4, 4);
        this.playerBoxB.body.setSize(4, 4);
        this.playerBoxC.body.setSize(4, 4);
        this.playerBoxD.body.setSize(4, 4);
    }
    onPlayerMoveUp() {
        if (this.player.y === 490) {
            this.player.y = 340;
        } else if (this.player.y === 640) {
            this.player.y = 490;
        } else if (this.player.y === 340 && this.player.x === 660) {
            this.player.y = 190;
        }
        if (this.playerBoxA.y === 490 && this.playerBoxA.visible) {
            this.playerBoxA.y = 340;
        } else if (this.playerBoxA.y === 640 && this.playerBoxA.visible) {
            this.playerBoxA.y = 490;
        } else if (this.playerBoxA.y === 340 && this.playerBoxA.x === 660 && this.playerBoxA.visible) {
            this.playerBoxA.y = 190;
        }
        if (this.playerBoxB.y === 490 && this.playerBoxB.visible) {
            this.playerBoxB.y = 340;
        } else if (this.playerBoxB.y === 640 && this.playerBoxB.visible) {
            this.playerBoxB.y = 490;
        } else if (this.playerBoxB.y === 340 && this.playerBoxB.x === 660 && this.playerBoxB.visible) {
            this.playerBoxB.y = 190;
        }
        if (this.playerBoxC.y === 490 && this.playerBoxC.visible) {
            this.playerBoxC.y = 340;
        } else if (this.playerBoxC.y === 640 && this.playerBoxC.visible) {
            this.playerBoxC.y = 490;
        } else if (this.playerBoxC.y === 340 && this.playerBoxC.x === 660 && this.playerBoxC.visible) {
            this.playerBoxC.y = 190;
        }
        if (this.playerBoxD.y === 490 && this.playerBoxD.visible) {
            this.playerBoxD.y = 340;
        } else if (this.playerBoxD.y === 640 && this.playerBoxD.visible) {
            this.playerBoxD.y = 490;
        } else if (this.playerBoxD.y === 340 && this.playerBoxD.x === 660 && this.playerBoxD.visible) {
            this.playerBoxD.y = 190;
        }
        this.player.body.setSize(4, 4);
        this.playerBoxA.body.setSize(4, 4);
        this.playerBoxB.body.setSize(4, 4);
        this.playerBoxC.body.setSize(4, 4);
        this.playerBoxD.body.setSize(4, 4);
    }
    onPlayerMoveDown() {
        if (this.player.y === 490) {
            this.player.y = 640;
        } else if (this.player.y === 340) {
            this.player.y = 490;
        } else if (this.player.y === 190) {
            this.player.y = 340;
        }
        if (this.playerBoxA.y === 490 && this.playerBoxA.visible) {
            this.playerBoxA.y = 640;
        } else if (this.playerBoxA.y === 340 && this.playerBoxA.visible) {
            this.playerBoxA.y = 490;
        } else if (this.playerBoxA.y === 190 && this.playerBoxA.visible) {
            this.playerBoxA.y = 340;
        }
        if (this.playerBoxB.y === 490 && this.playerBoxB.visible) {
            this.playerBoxB.y = 640;
        } else if (this.playerBoxB.y === 340 && this.playerBoxB.visible) {
            this.playerBoxB.y = 490;
        } else if (this.playerBoxB.y === 190 && this.playerBoxB.visible) {
            this.playerBoxB.y = 340;
        }
        if (this.playerBoxC.y === 490 && this.playerBoxC.visible) {
            this.playerBoxC.y = 640;
        } else if (this.playerBoxC.y === 340 && this.playerBoxC.visible) {
            this.playerBoxC.y = 490;
        } else if (this.playerBoxC.y === 190 && this.playerBoxC.visible) {
            this.playerBoxC.y = 340;
        }
        if (this.playerBoxD.y === 490 && this.playerBoxD.visible) {
            this.playerBoxD.y = 640;
        } else if (this.playerBoxD.y === 340 && this.playerBoxD.visible) {
            this.playerBoxD.y = 490;
        } else if (this.playerBoxD.y === 190 && this.playerBoxD.visible) {
            this.playerBoxD.y = 340;
        }
        this.player.body.setSize(4, 4);
        this.playerBoxA.body.setSize(4, 4);
        this.playerBoxB.body.setSize(4, 4);
        this.playerBoxC.body.setSize(4, 4);
        this.playerBoxD.body.setSize(4, 4);
    }
    movePlayer() {
        if (Phaser.Input.Keyboard.JustDown(this.left)) {
            this.onPlayerMoveLeft();
            this.moveBeep.play();
            this.player.rotation = 0;
            this.playerBoxA.rotation = 0;
            this.playerBoxB.rotation = 0;
            this.playerBoxC.rotation = 0;
            this.playerBoxD.rotation = 0;
        }
        if (Phaser.Input.Keyboard.JustDown(this.right)) {
            this.onPlayerMoveRight();
            this.moveBeep.play();
            this.player.rotation = 3.13;
            this.playerBoxA.rotation = 3.13;
            this.playerBoxB.rotation = 3.13;
            this.playerBoxC.rotation = 3.13;
            this.playerBoxD.rotation = 3.13;
        }
        if (Phaser.Input.Keyboard.JustDown(this.up)) {
            this.onPlayerMoveUp();
            this.moveBeep.play();
            this.player.rotation = 1.58;
            this.playerBoxA.rotation = 1.58;
            this.playerBoxB.rotation = 1.58;
            this.playerBoxC.rotation = 1.58;
            this.playerBoxD.rotation = 1.58;
        }
        if (Phaser.Input.Keyboard.JustDown(this.down)) {
            this.onPlayerMoveDown();
            this.moveBeep.play();
            this.player.rotation = 4.73;
            this.playerBoxA.rotation = 4.73;
            this.playerBoxB.rotation = 4.73;
            this.playerBoxC.rotation = 4.73;
            this.playerBoxD.rotation = 4.73;
        }
    }
    onPickUpBox6A() {
        if (this.cursors.space.isDown) {
            if (this.player.visible && this.player.y === 340) {
                this.playerBoxA.y = 340;
                this.playerBoxA.x = 315;
                this.pickUpBoxA();
                this.time.delayedCall(6000, () => {
                    this.boxA.visible = true;
                    this.boxA.body.setSize(300, 15);
                }, [], this);
            }
        }
    }
    onPickUpBox5A() {
        if (this.cursors.space.isDown) {
            if (this.player.visible && this.player.y === 490) {
                this.playerBoxA.y = 490;
                this.playerBoxA.x = 315;
                this.pickUpBoxA();
                this.time.delayedCall(4000, () => {
                    this.boxA.visible = true;
                    this.boxA.body.setSize(300, 15);
                }, [], this);
            }
        }
    }
    onPickUpBox4A() {
        if (this.cursors.space.isDown) {
            if (this.player.visible && this.player.y === 640) {
                this.playerBoxA.y = 640;
                this.playerBoxA.x = 315;
                this.pickUpBoxA();
                this.time.delayedCall(2000, () => {
                    this.boxA.visible = true;
                    this.boxA.body.setSize(300, 15);
                }, [], this);
            }
        }
    }
    onPickUpBox6B() {
        if (this.cursors.space.isDown) {
            if (this.player.visible && this.player.y === 340) {
                this.playerBoxB.y = 340;
                this.playerBoxB.x = 315;
                this.pickUpBoxB();
                this.time.delayedCall(6000, () => {
                    this.boxB.visible = true;
                    this.boxB.body.setSize(300, 15);
                }, [], this);
            }
        }
    }
    onPickUpBox5B() {
        if (this.cursors.space.isDown) {
            if (this.player.visible && this.player.y === 490) {
                this.playerBoxB.y = 490;
                this.playerBoxB.x = 315;
                this.pickUpBoxB();
                this.time.delayedCall(4000, () => {
                    this.boxB.visible = true;
                    this.boxB.body.setSize(300, 15);
                }, [], this);
            }
        }
    }
    onPickUpBox4B() {
        if (this.cursors.space.isDown) {
            if (this.player.visible && this.player.y === 640) {
                this.playerBoxB.y = 640;
                this.playerBoxB.x = 315;
                this.pickUpBoxB();
                this.time.delayedCall(2000, () => {
                    this.boxB.visible = true;
                    this.boxB.body.setSize(300, 15);
                }, [], this);
            }
        }
    }
    onPickUpBox6C() {
        if (this.cursors.space.isDown) {
            if (this.player.visible && this.player.y === 340) {
                this.playerBoxC.y = 340;
                this.playerBoxC.x = 315;
                this.pickUpBoxC();
                this.time.delayedCall(6000, () => {
                    this.boxC.visible = true;
                    this.boxC.body.setSize(300, 15);
                }, [], this);
            }
        }
    }
    onPickUpBox5C() {
        if (this.cursors.space.isDown) {
            if (this.player.visible && this.player.y === 490) {
                this.playerBoxC.y = 490;
                this.playerBoxC.x = 315;
                this.pickUpBoxC();
                this.time.delayedCall(4000, () => {
                    this.boxC.visible = true;
                    this.boxC.body.setSize(300, 15);
                }, [], this);
            }
        }
    }
    onPickUpBox4C() {
        if (this.cursors.space.isDown) {
            if (this.player.visible && this.player.y === 640) {
                this.playerBoxC.y = 640;
                this.playerBoxC.x = 315;
                this.pickUpBoxC();
                this.time.delayedCall(2000, () => {
                    this.boxC.visible = true;
                    this.boxC.body.setSize(300, 15);
                }, [], this);
            }
        }
    }
    onPickUpBox6D() {
        if (this.cursors.space.isDown) {
            if (this.player.visible && this.player.y === 340) {
                this.playerBoxD.y = 340;
                this.playerBoxD.x = 315;
                this.pickUpBoxD();
                this.time.delayedCall(6000, () => {
                    this.boxD.visible = true;
                    this.boxD.body.setSize(300, 15);
                }, [], this);
            }
        }
    }
    onPickUpBox5D() {
        if (this.cursors.space.isDown) {
            if (this.player.visible && this.player.y === 490) {
                this.playerBoxD.y = 490;
                this.playerBoxD.x = 315;
                this.pickUpBoxD();
                this.time.delayedCall(4000, () => {
                    this.boxD.visible = true;
                    this.boxD.body.setSize(300, 15);
                }, [], this);
            }
        }
    }
    onPickUpBox4D() {
        if (this.cursors.space.isDown) {
            if (this.player.visible && this.player.y === 640) {
                this.playerBoxD.y = 640;
                this.playerBoxD.x = 315;
                this.pickUpBoxD();
                this.time.delayedCall(2000, () => {
                    this.boxD.visible = true;
                    this.boxD.body.setSize(300, 15);
                }, [], this);
            }
        }
    }
    onDepositA() {
        if (Phaser.Input.Keyboard.JustDown(this.space)) {
            if (this.playerBoxA.visible && this.playerBoxA.y === 190) {
                this.scoreBeep.play();
                this.playerBoxA.visible = false;
                this.player.visible = true;
                this.player.x = 660;
                this.player.y = 190;
                this.depositSize();
                this.scoreA -= 1;
                this.scoreTextA.setText(`${this.scoreA}`);
                this.scoreMaxA();
                this.gameWin();
            }
        }
    }
    onDepositB() {
        if (Phaser.Input.Keyboard.JustDown(this.space)) {
            if (this.playerBoxB.visible && this.playerBoxB.y === 340 && this.playerBoxB.x === 660) {
                this.scoreBeep.play();
                this.playerBoxB.visible = false;
                this.player.visible = true;
                this.player.x = 660;
                this.player.y = 340;
                this.depositSize();
                this.scoreB -= 1;
                this.scoreTextB.setText(`${this.scoreB}`);
                this.scoreMaxB();
                this.gameWin();
            }
        }
    }
    onDepositC() {
        if (Phaser.Input.Keyboard.JustDown(this.space)) {
            if (this.playerBoxC.visible && this.playerBoxC.y === 490 && this.playerBoxC.x === 660) {
                this.scoreBeep.play();
                this.playerBoxC.visible = false;
                this.player.visible = true;
                this.player.x = 660;
                this.player.y = 490;
                this.depositSize();
                this.scoreC -= 1;
                this.scoreTextC.setText(`${this.scoreC}`);
                this.scoreMaxC();
                this.gameWin();
            }
        }
    }
    onDepositD() {
        if (Phaser.Input.Keyboard.JustDown(this.space)) {
            if (this.playerBoxD.visible && this.playerBoxD.y === 640 && this.playerBoxD.x === 660) {
                this.scoreBeep.play();
                this.playerBoxD.visible = false;
                this.player.visible = true;
                this.player.x = 660;
                this.player.y = 640;
                this.depositSize();
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
    pickUpBoxSizeA() {
        this.playerBoxA.body.setSize(120, 120);
        this.playerBoxB.body.setSize(4, 4);
        this.playerBoxC.body.setSize(4, 4);
        this.playerBoxD.body.setSize(4, 4);
    }
    pickUpBoxSizeB() {
        this.playerBoxA.body.setSize(4, 4);
        this.playerBoxB.body.setSize(120, 120);
        this.playerBoxC.body.setSize(4, 4);
        this.playerBoxD.body.setSize(4, 4);
    }
    pickUpBoxSizeC() {
        this.playerBoxA.body.setSize(4, 4);
        this.playerBoxB.body.setSize(4, 4);
        this.playerBoxC.body.setSize(120, 120);
        this.playerBoxD.body.setSize(4, 4);
    }
    pickUpBoxSizeD() {
        this.playerBoxA.body.setSize(4, 4);
        this.playerBoxB.body.setSize(4, 4);
        this.playerBoxC.body.setSize(4, 4);
        this.playerBoxD.body.setSize(120, 120);
    }
    depositSize() {
        this.playerBoxA.body.setSize(4, 4);
        this.playerBoxB.body.setSize(4, 4);
        this.playerBoxC.body.setSize(4, 4);
        this.playerBoxD.body.setSize(4, 4);
    }
    pickUpBoxA() {
        this.pickUpBeep.play();
        this.player.visible = false;
        this.playerBoxA.visible = true;
        this.pickUpBoxSizeA();
        this.boxA.visible = false;
        this.boxA.body.setSize(4, 4);
    }
    pickUpBoxB() {
        this.pickUpBeep.play();
        this.player.visible = false;
        this.playerBoxB.visible = true;
        this.pickUpBoxSizeB();
        this.boxB.visible = false;
        this.boxB.body.setSize(4, 4);
    }
    pickUpBoxC() {
        this.pickUpBeep.play();
        this.player.visible = false;
        this.playerBoxC.visible = true;
        this.pickUpBoxSizeC();
        this.boxC.visible = false;
        this.boxC.body.setSize(4, 4);
    }
    pickUpBoxD() {
        this.pickUpBeep.play();
        this.player.visible = false;
        this.playerBoxD.visible = true;
        this.pickUpBoxSizeD();
        this.boxD.visible = false;
        this.boxD.body.setSize(4, 4);
    }
    gameOverA() {
        if (Phaser.Input.Keyboard.JustDown(this.space)) {
            if (this.playerBoxA.visible) {
                this.add.image(540, 360, 'lose');
                this.loseBeep.play();
                this.scene.pause();
            }
        }
    }
    gameOverB() {
        if (Phaser.Input.Keyboard.JustDown(this.space)) {
            if (this.playerBoxB.visible) {
                this.add.image(540, 360, 'lose');
                this.loseBeep.play();
                this.scene.pause();
            }
        }
    }
    gameOverC() {
        if (Phaser.Input.Keyboard.JustDown(this.space)) {
            if (this.playerBoxC.visible) {
                this.add.image(540, 360, 'lose');
                this.loseBeep.play();
                this.scene.pause();
            }
        }
    }
    gameOverD() {
        if (Phaser.Input.Keyboard.JustDown(this.space)) {
            if (this.playerBoxD.visible) {
                this.add.image(540, 360, 'lose');
                this.loseBeep.play();
                this.scene.pause();
            }
        }
    }
    gameWin() {
        if (this.scoreA <= 0 && this.scoreB <= 0 && this.scoreC <= 0 && this.scoreD <= 0) {
            this.add.image(540, 360, 'win');
            this.scene.pause();
        }
    }
}