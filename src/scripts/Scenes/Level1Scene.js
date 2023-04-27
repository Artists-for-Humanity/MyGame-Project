export default class Level1Scene extends Phaser.Scene {
    // Game Class Constructor
    constructor() {
        super({
            active: false,
            visible: false,
            key: 'Level1Scene',
        });

        // Game Object Declarations
        this.myText;
    }

    preload() {
        this.load.image('start-button', new URL('../assets/start-button.png', import.meta.url).href);   
        
    }

    create() {
        
    }
  
    

    update() {
    }

}