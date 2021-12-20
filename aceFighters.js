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

//var lives = 3;

var bullets;

var bulletTime = 0;

var fireButton;

var yLimit;

var xLimit;

// Hier word alles van te voren geladen.
function preload() {
  this.load.image("background", "Graphics/Background.png");
  this.load.image("player", "Graphics/Player_1.png");
  this.load.image("bullet", "Graphics/Bullet.png");
}

// In deze functie worden er pictures op het scherm gezet.
function create() {
  // De achtergrond
  let background = this.add.image(0, 0, "background").setOrigin(0, 0);

  // De player
  player = this.physics.add.sprite(180, 270, "player");

  // Hoe groot de player is.
  player.setScale(1);

  // Werkt op dit moment niet.
  player.body.colliderWorldBounds = true;

  // De input voor als je een knop indrukt.
  cursors = this.input.keyboard.createCursorKeys();

  bullets = this.add.group();

  bullets.enableBody = true;

  bullets.physicsBodyType = Phaser.Physics.Arcade;

  bullets.createMultiple(10, "bullet");

  bullets.children.each(function (bullet) {
    bullets.setAll("anchor.x", 0.5);

    bullets.setAll("anchor.y", 0.5);

    bullets.setAll("outOfBoundsKill", true);

    bullets.setAll("checkWorldBounds", true);
  }, this);

  fireButton = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

  // Werkt op dit moment niet.
  this.cameras.main.setBounds(0, 0, xLimit, yLimit);
}

function update() {
  // Player controles
  // Links
  if (cursors.left.isDown) {
    // Hoe snel de player naar links/rechts draait.
    player.angle += -1;
    // De richting waar de player naar toe kijkt en de snelheid die de player heeft als hij draait.
    this.physics.velocityFromAngle(player.angle - 90, 70, player.body.velocity);
  } /* Rechts */ else if (cursors.right.isDown) {
    // Hoe snel de player naar links/rechts draait.
    player.angle -= -1;
    // De richting waar de player naar toe kijkt en de snelheid die de player heeft als hij draait.
    this.physics.velocityFromAngle(player.angle - 90, 70, player.body.velocity);
  }

  if (fireButton.isDown) {
    fireBullet();
  }
  // De camera.
  this.cameras.main.centerOn(player.x, player.y);
}

function fireBullet() {
  if (this.time.now > bulletTime) {
    bullet = bullets.getFirstExists(false);

    if (bullet) {
      bullet.reset(player.x, player.y);

      bullet.body.velocity.y = -400;

      bulletTime = game.getTime.now + 200;
    }
  }
}

console.log(fireBullet);
