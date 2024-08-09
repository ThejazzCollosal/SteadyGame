class instructions extends Phaser.Scene {
    constructor() {
      super({
        key: "instructions",
      });
  
    }
  
    // Put global variable here
  
    preload() {
  
      // Step 2 : Preload any images here, nickname, filename
      this.load.image("instructions", "assets/inst.jpg");
  
  
    }
  
    create() {
      console.log("*** intro scene");
  
      const image = this.add.image(640, 360, 'instructions').setScale(1);

      
      var space = this.input.keyboard.addKey("SPACE");


      // On spacebar event, call the world scene
      space.on(
          "down", function () {
              this.scene.start("Cutscene1")
          },
          this
      );
      
    };
  }
  