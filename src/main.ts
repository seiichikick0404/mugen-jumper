import Phaser from 'phaser';
import HomeScene from './scenes/HomeScene';
import GameScene from './scenes/GameScene';

// ゲームの設定
const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [HomeScene, GameScene], // ここでシーンを登録
};

// ゲームを開始
new Phaser.Game(config);

