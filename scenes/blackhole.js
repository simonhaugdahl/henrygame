class BlackHole extends BaseScene {
    constructor() {
      super('BlackHole');
      this.holdTime = 0;
    }
  
    preload() {
      super.preload();
      this.load.image('player', 'assets/player.png');
    }
  
    create() {
      this.createToolbar();
      this.createSidebar();
  
      this.add.text(200, 50, 'Hold W to continue...', {
        fontSize: '20px',
        color: '#ffffff'
      });
  
      this.player = this.add.sprite(100, 300, 'player');
      this.player.setDepth(10);
  
      this.keys = this.input.keyboard.addKeys('W');
      this.cutscenePlayed = false;
    }
  
    update(time, delta) {
      if (this.keys.W.isDown) {
        this.holdTime += delta;
        this.player.x += 0.1 * delta;
      }
  
      if (this.holdTime >= 3000 && !this.cutscenePlayed) {
        this.playCutscene();
        this.cutscenePlayed = true;
      }
    }
  
    playCutscene() {
      const cutscene = document.getElementById('cutscene');
      const ytframe = document.getElementById('ytframe');
  
      ytframe.src = 'https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0';
      cutscene.style.display = 'flex';
  
      this.time.delayedCall(7000, () => {
        ytframe.src = '';
        cutscene.style.display = 'none';
        this.scene.start('Room1');  // ✅ Returns to Room1
      });
    }
  }
  