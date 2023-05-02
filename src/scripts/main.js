// Add imports for phaser library, scenes, and plugins
import Phaser from 'phaser';
import GlobalState from './GlobalState';
import MyGameScene from './Scenes/MyGameScene';
import GameOverScene from './Scenes/GameOverScene';
import MainMenuScene from './Scenes/MainMenuScene';
import Level1Scene from './Scenes/Level1Scene';

// Set configuration for phaser game instance
const config = {
  type: Phaser.AUTO,
  width: 1080,
  height: 720,
  backgroundColor: '#1C2057',

  // Add physics, arcade, scene, and audio
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 0,
      },
      debug: false,
    },
  },
  scene: [ Level1Scene,  MyGameScene, GameOverScene, MainMenuScene],
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