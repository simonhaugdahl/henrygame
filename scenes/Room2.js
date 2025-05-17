class Room2 extends BaseScene {
    constructor() {
      super('Room2');
    }
  
    preload() {
      super.preload();
      this.load.image('window_closed', 'assets/window_closed.png');
      this.load.image('window_broken', 'assets/window_broken.png');
    }
  
    create() {
      this.createToolbar();
      this.createSidebar();
  
      this.add.text(400, 50, 'You are in Room 2', {
        fontSize: '20px',
        color: '#ffffff'
      }).setOrigin(0.5);
  
      const backArrow = this.add.text(20, 550, '←', {
        fontSize: '32px',
        color: '#ffffff'
      }).setInteractive();
  
      backArrow.on('pointerdown', () => {
        this.scene.start('Room1');
      });
  
      // Add window (closed version initially)
      this.window = this.add.image(400, 300, 'window_closed').setScale(0.5);
      this.window.setDepth(1); // Base depth
  
      // Ensure crowbar is above window
      this.crowbar.setDepth(10);
  
      // Dragend logic for crowbar hitting the window
      this.crowbar.on('dragend', () => {
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.crowbar.getBounds(), this.window.getBounds())) {
          this.breakWindow();
        }
      });
    }
  
    breakWindow() {
      // Transition effect: swap images
      this.window.setTexture('window_broken');
  
      // Optional: fade-in effect for transition
      this.tweens.add({
        targets: this.window,
        alpha: { from: 0, to: 1 },
        duration: 500,
        ease: 'Power2'
      });
  
      // Optional: disable crowbar after breaking
      this.crowbar.disableInteractive();
    }
  }
  