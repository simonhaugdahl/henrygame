class BaseScene extends Phaser.Scene {
    constructor(key) {
      super(key);
    }
  
    preload() {
      this.load.image('hammer', 'assets/thor.png');
      this.load.image('crowbar', 'assets/crowbar.png');
    }
  
    createToolbar() {
      this.add.rectangle(400, 30, 800, 60, 0x333333);
  
      this.hammer = this.add.image(30, 30, 'hammer')
        .setScale(0.08)
        .setInteractive({ draggable: true });
  
      this.input.setDraggable(this.hammer);
      this.hammer.on('drag', (pointer, x, y) => {
        this.hammer.x = x;
        this.hammer.y = y;
      });


    }
  
    createSidebar() {
      this.add.rectangle(700, 300, 200, 600, 0x444444);
  
      this.add.text(610, 150, '🛈 Use hammer\n→ to explore', {
        fontSize: '16px',
        color: '#ffffff',
        wordWrap: { width: 180 }
      });
  
      const pause = this.add.text(700, 80, '⏸ Pause', {
        fontSize: '20px',
        color: '#ffffff',
      }).setOrigin(0.5).setInteractive();
      this.crowbar = this.add.image(700, 500, 'crowbar')
      .setScale(0.08)
      .setInteractive({ draggable: true });

    this.input.setDraggable(this.crowbar);
    this.crowbar.on('drag', (pointer, x, y) => {
      this.crowbar.x = x;
      this.crowbar.y = y;
    });
      pause.on('pointerdown', () => {
        alert("Paused");
      });
    }
  }
  