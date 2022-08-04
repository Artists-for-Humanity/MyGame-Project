import Phaser from 'phaser';
import GlobalState from './GlobalState';
import MyGameScene from './Scenes/MyGameScene';
const config = {
  type: Phaser.AUTO,
  width: 1080,
  height: 720,
  backgroundColor: '#808080',
  physics: {
    default: "arcade",
    arcade: {
      gravity: {
        y: 0,
      },
      debug: false,
    },
  },
  scene: [MyGameScene],
  audio: {
    disableWebAudio: true,
  },
  plugins: {
    global: [{
      key: 'GlobalState',
      plugin: GlobalState,
      start: false,
      mapping: 'globalState',
    }],
  },
};
new Phaser.Game(config);