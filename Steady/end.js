class end extends Phaser.Scene {
    constructor() {
      super({
        key: "end",
      });
  
    }
  
    // Put global variable here
  
    preload() {
  
      // Step 2 : Preload any images here, nickname, filename
      this.load.image("thanks", "assets/thankyou.jpg");
  
  
    }
  
    create() {
      console.log("*** intro scene");
  
      const image = this.add.image(640, 360, 'thanks').setScale(0.66);
      var space = this.input.keyboard.addKey("SPACE");
  
      // On spacebar event, call the world scene
      space.on(
        "down", function () {
          this.scene.start("Home");
  
          window.light = 16;
          window.focus2 = 5;
          window.relax = 7;
          window.stress = 5;
          window.lives = 3;
          window.marker = 0;
          window.CR = 1;
          window.CR2 = 1;
          window.CR3 = 1;
          window.CR4 = 1;
          window.CR5 = 1;
          window.CR6 = 1;
          window.CR7 = 1;
          window.collect = 0;
          window.collect2 = 0;
          window.collect3 = 0;
          window.collectD = 0;
          window.collectD2 = 0;
          window.collectD3 = 0;
          window.scene = 7;
          window.scene2 = 13;
          window.inscene = 8;
        },
        this
      );
    };
  }
  