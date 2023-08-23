// Add imports for phaser library, scenes, and plugins
import Phaser from 'phaser';
import GlobalState from './GlobalState';
import MyGameScene from './Scenes/MyGameScene';
import MenuScene from './Scenes/MenuScene';
import BetScene from './Scenes/BetScene';


// Set configuration for phaser game instance
var config = {
  type: Phaser.AUTO,
  width: 1080,
  height: 720,
  backgroundColor: '#808080',

  // Add physics, arcade, scene, and audio
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 0,
      },
      debug: true,
    },
  },
  scene: [MenuScene, BetScene, MyGameScene],
  audio: {
    disableWebAudio: true,
  },
  plugins: {
    global: [
      {
        key: 'GlobalState',
        plugin: GlobalState,
        start: false,
        mapping: 'globalState'
      }
    ],
  },
};

// Initialize game instance
new Phaser.Game(config);