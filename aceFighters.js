var config = {
    // Het type Phaser ik ga maken.
    type: Phaser.game,
    // De groote van het canvas.
    width: 800,
    height: 600,
    // Achtergrond kleur.
    backgroundColor: "#a7abae",
    // Om het programma te vertellen dat ik pixelArt gebruik.
    pixelArt: true,
    // Wat er op de web pagina wordt gelaten zien.
    scene: {
      preload: preload,
      create: create,
      update: update,
    },
  };

  var game = new Phaser.Game(config);

  // Hier word alles van te voren geladen.
  function preload() {
    this.load.image("background", "Graphics/Background.png");
    this.load.image("player", "Graphics/Player_1.png");
    this.load.image("finalBoss", "Graphics/R.VI.png");
  }

  // In deze functie worden er pictures op het scherm gezet.
  function create() {
    // De achtergrond
    edit = this.add.image(400, 300, "background");
    edit.setScale(1.5);

    // De eindbaas (dit deed ik als test)
    edit_2 = this.add.image(400, 160, "finalBoss");
    edit_2.setScale(1.5);

    // De player
    edit_3 = this.add.image(400, 400, "player");
    edit_3.setScale(1.5);
  }
  function update() {}