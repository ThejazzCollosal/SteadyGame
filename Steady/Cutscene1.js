class Cutscene1 extends Phaser.Scene {
    constructor() {
        super({
            key: "Cutscene1",
        });

    }

    // Put global variable here

    preload() {

        // Step 2 : Preload any images here, nickname, filename
        this.load.image("cuts1", "assets/cutscene 1.0.jpg");
        this.load.image("cuts2", "assets/cutscene 1.1.jpg");
        this.load.image("cuts3", "assets/cutscene 1.2.jpg");
        this.load.image("cuts4", "assets/cutscene 1.3.1.jpg");
        this.load.image("cuts4.1", "assets/cutscene 1.3.2.jpg");
        this.load.image("cuts4.2", "assets/cutscene 1.3.3.jpg");
        this.load.image("cuts5", "assets/cutscene.1.4.5.jpg");
        this.load.image("cuts6", "assets/cutscene 1.4.jpg");

        this.GG1snd = this.sound.add("GG1").setVolume(1);
        this.GG2snd = this.sound.add("GG2").setVolume(1);
        this.GG3snd = this.sound.add("GG3").setVolume(1);
        this.GG4snd = this.sound.add("GG4").setVolume(1);
        this.M1snd = this.sound.add("M1").setVolume(1);
        this.M2snd = this.sound.add("M2").setVolume(1);
        this.M3snd = this.sound.add("M3").setVolume(1);
        this.M4snd = this.sound.add("M4").setVolume(1);
        
    }

    create() {
        console.log("*** intro scene");

        this.cut1 = this.add.image(640, 360, 'cuts1').setScrollFactor(0);
        this.cut2 = this.add.image(640, 360, 'cuts2').setScrollFactor(0);
        this.cut3 = this.add.image(640, 360, 'cuts3').setScrollFactor(0);
        this.cut4 = this.add.image(640, 360, 'cuts4').setScrollFactor(0);
        this.cut41 = this.add.image(640, 360, 'cuts4.1').setScrollFactor(0);
        this.cut42 = this.add.image(640, 360, 'cuts4.2').setScrollFactor(0);
        this.cut5 = this.add.image(640, 360, 'cuts5').setScrollFactor(0);
        this.cut6 = this.add.image(640, 360, 'cuts6').setScrollFactor(0);

        var space = this.input.keyboard.addKey("SPACE");

        this.GG1snd.play();

        // On spacebar event, call the world scene
        space.on(
            "down", function () {
                window.scene--
            },
            this
        );
    }

    update() {

        if (window.scene === 7) {
            this.cut1.setVisible(true);
            this.cut2.setVisible(false);
            this.cut3.setVisible(false);
            this.cut4.setVisible(false);
            this.cut41.setVisible(false);
            this.cut42.setVisible(false);
            this.cut5.setVisible(false);
            this.cut6.setVisible(false);
            this.M1snd.play();



        } else if (window.scene === 6) {
            this.cut1.setVisible(false);
            this.cut2.setVisible(true);
            this.cut3.setVisible(false);
            this.cut4.setVisible(false);
            this.cut41.setVisible(false);
            this.cut42.setVisible(false);
            this.cut5.setVisible(false);
            this.cut6.setVisible(false);
            this.GG1snd.stop();
            this.GG2snd.play();
            


        } else if (window.scene === 5) {
            this.cut1.setVisible(false);
            this.cut2.setVisible(false);
            this.cut3.setVisible(true);
            this.cut4.setVisible(false);
            this.cut41.setVisible(false);
            this.cut42.setVisible(false);
            this.cut5.setVisible(false);
            this.cut6.setVisible(false);
            this.M1snd.stop();
            this.M2snd.play();


        } else if (window.scene === 4) {
            this.cut1.setVisible(false);
            this.cut2.setVisible(false);
            this.cut3.setVisible(false);
            this.cut4.setVisible(true);
            this.cut41.setVisible(false);
            this.cut42.setVisible(false);
            this.cut5.setVisible(false);
            this.cut6.setVisible(false);
            this.GG2snd.stop();
            this.GG3snd.play();


        } else if (window.scene === 3) {
            this.cut1.setVisible(false);
            this.cut2.setVisible(false);
            this.cut3.setVisible(false);
            this.cut4.setVisible(false);
            this.cut41.setVisible(true);
            this.cut42.setVisible(false);
            this.cut5.setVisible(false);
            this.cut6.setVisible(false);
            this.M2snd.stop();
            this.M3snd.play();


        } else if (window.scene === 2) {
            this.cut1.setVisible(false);
            this.cut2.setVisible(false);
            this.cut3.setVisible(false);
            this.cut4.setVisible(false);
            this.cut41.setVisible(false);
            this.cut42.setVisible(true);
            this.cut5.setVisible(false);
            this.cut6.setVisible(false);
            this.GG3snd.stop();
            this.GG4snd.play();


        } else if (window.scene === 1) {
            this.cut1.setVisible(false);
            this.cut2.setVisible(false);
            this.cut3.setVisible(false);
            this.cut4.setVisible(false);
            this.cut41.setVisible(false);
            this.cut42.setVisible(false);
            this.cut5.setVisible(true);
            this.cut6.setVisible(false);
            this.M3snd.stop();
            this.M4snd.play();

        } else if (window.scene === 0) {
            this.cut1.setVisible(false);
            this.cut2.setVisible(false);
            this.cut3.setVisible(false);
            this.cut4.setVisible(false);
            this.cut41.setVisible(false);
            this.cut42.setVisible(false);
            this.cut5.setVisible(false);
            this.cut6.setVisible(true);
            this.GG4snd.stop();
    

        } else if (window.scene === -1) {
            this.sound.stopAll();
            let playerPos = {};
            playerPos.x = 150;
            playerPos.y = 1130;
            this.scene.start("Stage1", { player: playerPos });

        }

    }


}