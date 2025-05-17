const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#222',
    scene: [Room1, Room2, BlackHole]  // All classes must be defined before this runs!
  };
  
  new Phaser.Game(config);