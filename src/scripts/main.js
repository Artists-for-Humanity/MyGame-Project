// Add imports for phaser library, scenes, and plugins
import Phaser from 'phaser';
import GlobalState from './GlobalState';
import home from './Scenes/home';
import gym from './Scenes/gym';
import bench from './Scenes/bench';
import deadlift from './Scenes/deadlift';

// Set configuration for phaser game instance
const config = {
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
      debug: false,
    },
  },
  scene: [home, gym, bench, deadlift], 
  // scene: [deadlift],
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