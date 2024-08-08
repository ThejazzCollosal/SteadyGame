class Stageselect extends Phaser.Scene {
    constructor() {
      super({
        key: "Stageselect",
      });
  
    }
  
    // Put global variable here
  
    preload() {
  
      // Step 2 : Preload any images here, nickname, filename
      this.load.image("Stageselect", "assets/Stageselect.jpg");
  
  
    }
  
    create() {
      console.log("*** intro scene");
  
      const image = this.add.image(640, 360, 'Stageselect').setScale(0.66);

      var Digit1 = this.input.keyboard.addKey(49);
      var Digit2 = this.input.keyboard.addKey(50);  
      var Escape = this.input.keyboard.addKey(27);
  
      // On spacebar event, call the world scene
      Digit1.on(
        "down", function () {
            let playerPos = {};
            playerPos.x = 150;
            playerPos.y = 1130;
            this.scene.start("Stage1", { player: playerPos });

        },
        this
      );

      Digit2.on(
        "down", function () {
            let playerPos = {};
            playerPos.x = 65;
            playerPos.y = 327;
            this.scene.start("Stage2", { player: playerPos });

        },
        this
      );

      Escape.on(
        "down", function () {
            this.scene.start("Home");
            this.sound.stopAll();
        },
        this
      );
    };
  }
  