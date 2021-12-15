var config = {
  // Het type Phaser ik ga maken.
  type: Phaser.CANVAS,
  // De groote van het canvas.
  width: 1000,
  height: 600,

  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },

  // Wat er op de web pagina wordt gelaten zien.
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

var game = new Phaser.Game(config);

var player;
var cursors;

var yLimit;
var xLimit;

var isDown = true;
// Hier word alles van te voren geladen.
function preload() {
  this.load.image("background", "Graphics/Background.png");
  this.load.image("player", "Graphics/Player_1.png");
}

//alert("Test");

// In deze functie worden er pictures op het scherm gezet.
function create() {
  // De achtergrond
  let background = this.add.image(0, 0, "background").setOrigin(0, 0);

  // De player
  player = this.physics.add.sprite(180, 270, "player");
  player.setScale(1);
  player.body.colliderWorldBounds = true;

  cursors = this.input.keyboard.createCursorKeys();

  this.cameras.main.setBounds(0, 0, xLimit, yLimit);
}
function update() {
  //Player speed
  if (cursors.left.isDown) {
    player.angle += -1;
    this.physics.velocityFromAngle(player.angle - 90, 70, player.body.velocity);
  } else if (cursors.right.isDown) {
    player.angle -= -1;
    this.physics.velocityFromAngle(player.angle - 90, 70, player.body.velocity);
  }
  this.cameras.main.centerOn(player.x, player.y);
}
