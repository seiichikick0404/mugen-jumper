import Phaser from 'phaser';

export default class HomeScene extends Phaser.Scene {
  constructor() {
    super({ key: 'HomeScene' });
  }

  preload() {
    // 必要なアセット（画像など）をロード
    this.load.image('background', 'path_to_background_image');
    this.load.image('startButton', 'path_to_start_button_image');
  }

  create() {
    // 背景の表示
    this.add.image(400, 300, 'background');

    // スタートボタンの追加
    const startButton = this.add.image(400, 300, 'startButton')
      .setInteractive()
      .on('pointerdown', () => {
        // ボタンがクリックされた時の動作
        this.scene.start('GameScene'); // ゲーム画面に遷移
      });

    // タイトルテキストの追加
    this.add.text(400, 100, 'Mugen Jumper', {
      fontSize: '48px',
      color: '#ffffff'
    }).setOrigin(0.5);
  }
}
