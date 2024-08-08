class CutsceneS1 extends Phaser.Scene {
    constructor() {
      super({
        key: "CutsceneS1",
      });
  
    }
  
    // Put global variable here
  
    preload() {
  
      // Step 2 : Preload any images here, nickname, filename
        this.load.image("scene1", "assets/S1C1.png");
  
    }
  
    create() {
      console.log("*** intro scene");

      this.inscene1 = this.add.image(640, 360, 'S1').setScrollFactor(0);
      this.inscene2 = this.add.image(640, 360, 'S2').setScrollFactor(0);
      this.inscene3 = this.add.image(640, 360, 'S3').setScrollFactor(0);
      this.inscene4 = this.add.image(640, 360, 'S4').setScrollFactor(0);
      this.inscene5 = this.add.image(640, 360, 'S5').setScrollFactor(0);
      this.inscene6 = this.add.image(640, 360, 'S6').setScrollFactor(0);
      this.inscene7 = this.add.image(640, 360, 'S7').setScrollFactor(0);
      this.inscene8 = this.add.image(640, 360, 'S8').setScrollFactor(0);
      this.inscene9 = this.add.image(640, 360, 'S9').setScrollFactor(0).setScale(1.15);


      var space = this.input.keyboard.addKey("SPACE");
  
      space.on(
        "down", function () {
            window.inscene--
        },
        this
    );
    }
    
    update() {

      if (window.inscene === 8) {
          this.inscene1.setVisible(true);
          this.inscene2.setVisible(false);
          this.inscene3.setVisible(false);
          this.inscene4.setVisible(false);
          this.inscene5.setVisible(false);
          this.inscene6.setVisible(false);
          this.inscene7.setVisible(false);
          this.inscene8.setVisible(false);
          this.inscene9.setVisible(false);


      } else if (window.inscene === 7) {
        this.inscene1.setVisible(false);
        this.inscene2.setVisible(true);
        this.inscene3.setVisible(false);
        this.inscene4.setVisible(false);
        this.inscene5.setVisible(false);
        this.inscene6.setVisible(false);
        this.inscene7.setVisible(false);
        this.inscene8.setVisible(false);
        this.inscene9.setVisible(false);

      } else if (window.inscene === 6) {
        this.inscene1.setVisible(false);
        this.inscene2.setVisible(false);
        this.inscene3.setVisible(true);
        this.inscene4.setVisible(false);
        this.inscene5.setVisible(false);
        this.inscene6.setVisible(false);
        this.inscene7.setVisible(false);
        this.inscene8.setVisible(false);
        this.inscene9.setVisible(false);

      } else if (window.inscene === 5) {
        this.inscene1.setVisible(false);
        this.inscene2.setVisible(false);
        this.inscene3.setVisible(false);
        this.inscene4.setVisible(true);
        this.inscene5.setVisible(false);
        this.inscene6.setVisible(false);
        this.inscene7.setVisible(false);
        this.inscene8.setVisible(false);
        this.inscene9.setVisible(false);

      } else if (window.inscene === 4) {
        this.inscene1.setVisible(false);
        this.inscene2.setVisible(false);
        this.inscene3.setVisible(false);
        this.inscene4.setVisible(false);
        this.inscene5.setVisible(true);
        this.inscene6.setVisible(false);
        this.inscene7.setVisible(false);
        this.inscene8.setVisible(false);
        this.inscene9.setVisible(false);

      } else if (window.inscene === 3) {
        this.inscene1.setVisible(false);
        this.inscene2.setVisible(false);
        this.inscene3.setVisible(false);
        this.inscene4.setVisible(false);
        this.inscene5.setVisible(false);
        this.inscene6.setVisible(true);
        this.inscene7.setVisible(false);
        this.inscene8.setVisible(false);
        this.inscene9.setVisible(false);

      } else if (window.inscene === 2) {
        this.inscene1.setVisible(false);
        this.inscene2.setVisible(false);
        this.inscene3.setVisible(false);
        this.inscene4.setVisible(false);
        this.inscene5.setVisible(false);
        this.inscene6.setVisible(false);
        this.inscene7.setVisible(true);
        this.inscene8.setVisible(false);
        this.inscene9.setVisible(false);

      } else if (window.inscene === 1) {
        this.inscene1.setVisible(false);
        this.inscene2.setVisible(false);
        this.inscene3.setVisible(false);
        this.inscene4.setVisible(false);
        this.inscene5.setVisible(false);
        this.inscene6.setVisible(false);
        this.inscene7.setVisible(false);
        this.inscene8.setVisible(true);
        this.inscene9.setVisible(false);

      } else if (window.inscene === 0) {
        this.inscene1.setVisible(false);
        this.inscene2.setVisible(false);
        this.inscene3.setVisible(false);
        this.inscene4.setVisible(false);
        this.inscene5.setVisible(false);
        this.inscene6.setVisible(false);
        this.inscene7.setVisible(false);
        this.inscene8.setVisible(false);
        this.inscene9.setVisible(true);
        
      } else if (window.inscene === -1) {
          let playerPos = {};
          playerPos.x = 1957;
          playerPos.y = 711;
          this.scene.start("Stage1", { player: playerPos });

      }

  }
  
  }