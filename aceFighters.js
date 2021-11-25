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
var obstacles;
var cursors;

var yLimit;
var xLimit;

// Hier word alles van te voren geladen.
function preload() {
  this.load.image("background", "Graphics/Background.png");
  this.load.image("player", "Graphics/Player_1.png");
}

//alert("Test");

// In deze functie worden er pictures op het scherm gezet.
function create() {
  // De achtergrond
  let background = this.add.image(0, 0, "background");
  background.x = background.displayWidth / 2;
  background.y = background.displayHeight / 2;
  xLimit = background.displayWidth;
  yLimit = background.displayHeight;

  // De player
  player = this.physics.add.sprite(180, 270, "player");
  player.setScale(0.4);

  cursors = this.input.keyboard.createCursorKeys();

  this.cameras.main.setBounds(0, 0, xLimit, yLimit);
}
function update() {
  if (cursors.left.isDown && player.x >= 0) {
    player.setVelocityX(-100);
  } else if (cursors.right.isDown && player.x <= xLimit) {
    player.setVelocityX(100);
  } else {
    player.setVelocityX(0);
  }

  if (cursors.up.isDown && player.y >= 0) {
    player.setVelocityY(-100);
  } else if (cursors.down.isDown && player.y <= yLimit) {
    player.setVelocityY(100);
  } else {
    player.setVelocityY(0);
  }

  this.cameras.main.centerOn(player.x, player.y);
}
