import Phaser from 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }

  preload() {
    // ゲームで使うアセットをロード
  }

  create() {
    // ゲームのロジックをここに実装
    this.add.text(400, 300, 'Game Started!', {
      fontSize: '32px',
      color: '#ffffff'
    }).setOrigin(0.5);
  }

  update() {
    // ゲームのアップデート処理
  }
}
