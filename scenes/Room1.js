class Room1 extends BaseScene {
    constructor() {
      super('Room1');  // ✅ Scene key must match this string
    }
  
    create() {
      this.createToolbar();
      this.createSidebar();
  
      const arrow = this.add.text(750, 550, '→', {
        fontSize: '32px',
        color: '#ffffff'
      }).setInteractive();
  
      arrow.on('pointerdown', () => {
        this.scene.start('Room2');
      });
  
      // Red button
      const button = this.add.rectangle(400, 300, 200, 100, 0xff0000).setInteractive();
      const text = this.add.text(400, 300, 'DO NOT PRESS', {
        fontSize: '20px',
        color: '#fff'
      }).setOrigin(0.5);
        let clickCount = 0;
        let clickTimer = null;

        button.on('pointerdown', () => {
        clickCount++;

        // If this is the first click, start the timer
        if (!clickTimer) {
            clickTimer = this.time.delayedCall(1000, () => {
            if (clickCount === 1) {
                // Single-click detected
                const cutscene = document.getElementById('cutscene');
                const ytframe = document.getElementById('ytframe');

                ytframe.src = 'https://www.youtube.com/embed/aK0hXR_XbH8?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0';
                cutscene.style.display = 'flex';

                this.time.delayedCall(9000, () => {
                ytframe.src = '';
                cutscene.style.display = 'none';
                this.scene.start('Room1');
                });
            } else if (clickCount >= 2) {
                // Double-click detected
                const text = this.add.text(300, 100, 'Double click ending', {
                    fontSize: '40px',
                    color: '#fff'
                  }).setOrigin(0.5);
            }

            // Reset state
            clickCount = 0;
            clickTimer = null;
            });
        }
        });
  
      this.hammer.on('dragend', () => {
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.hammer.getBounds(), button.getBounds())) {
          text.setText('SMASHED!');
          button.setFillStyle(0x000000);
          this.scene.start('BlackHole');
        }
      });
    }
  }
  