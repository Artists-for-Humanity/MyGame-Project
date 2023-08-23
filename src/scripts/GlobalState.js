import Phaser from 'phaser';

class GlobalState extends Phaser.Plugins.BasePlugin {
  constructor(pluginManager) {
    super(pluginManager);

  //add to this tmr
  this.strength = 0;
  this.energy = 50;
  }
  incStrength1(){
    this.strength += 1;
  }
  decEnergy1(){
    this.energy-=1;
  }

  playerWinCheck(){
    if(this.strength=== 50){
      // console.log("you win YAYYYYYY!");
    }
  }
}

export default GlobalState;