export default class MyGameScene extends Phaser.Scene {
    
    // Game Class Constructor
    constructor() {
        super({
            active: false,
            visible: false,
            key: 'MyGameScene',
        });

        // Game Object Declarations
        this.card;
        this.cardID;
        this.cardValue = 0; 

    }

    preload() {
        this.load.image('background', new URL('../../myAssets/blackJackBackground.jpeg', import.meta.url).href);
        this.load.image('jack', new URL('../../myAssets/Jack Card.png', import.meta.url).href);
        
    }

    create() {

        this.add.image(540, 360, 'background');
        this.cardID = [1, 2 ,3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

        this.playerCard1();
        
    }

    update() {

    }
   




     playerCard1(){
        let myCard = Math.floor(Math.random() * this.cardID.length);
        if(myCard === 11){
            this.setCard();
        }
    console.log(Math.random());
    console.log(this.cardID.length);
    console.log('myCard = ' + myCard);
    
     }

    setText() {
        this.myText = this.add.text(540, 360, '')
        this.myText.setStyle({
            fontSize: '100px',
            fill: '#000000',
            align: 'center',
        });
        this.myText.setText('GameScene');
    }

    setCard(){
        this.card = this.add.image(540, 360,'jack' )
        this.cardValue = 10;
    }
}