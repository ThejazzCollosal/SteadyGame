class Cutscene2 extends Phaser.Scene {
    constructor() {
        super({
            key: "Cutscene2",
        });

    }

    // Put global variable here

    preload() {

        // Step 2 : Preload any images here, nickname, filename
        this.load.image("CT1", "assets/S2CUT1.jpg");
        this.load.image("CT2", "assets/S2CUT2.jpg");
        this.load.image("CT3", "assets/S2CUT3.jpg");
        this.load.image("C4", "assets/S2CUT4.jpg");
        this.load.image("C5", "assets/S2CUT5.jpg");
        this.load.image("C6", "assets/S2CUT6.jpg");
        this.load.image("C7", "assets/S2CUT7.jpg");
        this.load.image("C8", "assets/S2CUT8.jpg");
        this.load.image("C9", "assets/S2CUT9.jpg");
        this.load.image("C10", "assets/S2CUT10.jpg");
        this.load.image("C11", "assets/S2CUT11.jpg");
        this.load.image("C12", "assets/S2CUT12.jpg");
        this.load.image("C13", "assets/S2CUT13.jpg");
        this.load.image("CI", "assets/S2cutinst.jpg");
        this.load.image("cutrule", "assets/cutscenerules.png");


        
    }

    create() {
        console.log("*** intro scene");

        this.CT1 = this.add.image(640, 360, 'CT1').setScrollFactor(0);
        this.CT2 = this.add.image(640, 360, 'CT2').setScrollFactor(0);
        this.CT3 = this.add.image(640, 360, 'CT3').setScrollFactor(0);
        this.C4 = this.add.image(640, 360, 'C4').setScrollFactor(0);
        this.C5 = this.add.image(640, 360, 'C5').setScrollFactor(0);
        this.C6 = this.add.image(640, 360, 'C6').setScrollFactor(0);
        this.C7 = this.add.image(640, 360, 'C7').setScrollFactor(0);
        this.C8 = this.add.image(640, 360, 'C8').setScrollFactor(0);
        this.C9 = this.add.image(640, 360, 'C9').setScrollFactor(0);
        this.C10 = this.add.image(640, 360, 'C10').setScrollFactor(0);
        this.C11 = this.add.image(640, 360, 'C11').setScrollFactor(0);
        this.C12 = this.add.image(640, 360, 'C12').setScrollFactor(0);
        this.C13 = this.add.image(640, 360, 'C13').setScrollFactor(0);
        this.CI = this.add.image(640, 360, 'CI').setScrollFactor(0);
        this.cutrule = this.add.image(640, 680, 'cutrule').setScrollFactor(0);



        var space = this.input.keyboard.addKey("SPACE");



        // On spacebar event, call the world scene
        space.on(
            "down", function () {
                window.scene2--
            },
            this
        );
    }

    update() {

        if (window.scene2 === 13) {
            this.CT1.setVisible(true);
            this.CT2.setVisible(false);
            this.CT3.setVisible(false);
            this.C4.setVisible(false);
            this.C5.setVisible(false);
            this.C6.setVisible(false);
            this.C7.setVisible(false);
            this.C8.setVisible(false);
            this.C9.setVisible(false);
            this.C10.setVisible(false);
            this.C11.setVisible(false);
            this.C12.setVisible(false);
            this.C13.setVisible(false);
            this.CI.setVisible(false);

        } else if (window.scene2 === 12) {
            this.CT1.setVisible(false);
            this.CT2.setVisible(true);
            this.CT3.setVisible(false);
            this.C4.setVisible(false);
            this.C5.setVisible(false);
            this.C6.setVisible(false);
            this.C7.setVisible(false);
            this.C8.setVisible(false);
            this.C9.setVisible(false);
            this.C10.setVisible(false);
            this.C11.setVisible(false);
            this.C12.setVisible(false);
            this.C13.setVisible(false);
            this.CI.setVisible(false);

        } else if (window.scene2 === 11) {
            this.CT1.setVisible(false);
            this.CT2.setVisible(false);
            this.CT3.setVisible(true);
            this.C4.setVisible(false);
            this.C5.setVisible(false);
            this.C6.setVisible(false);
            this.C7.setVisible(false);
            this.C8.setVisible(false);
            this.C9.setVisible(false);
            this.C10.setVisible(false);
            this.C11.setVisible(false);
            this.C12.setVisible(false);
            this.C13.setVisible(false);
            this.CI.setVisible(false);

        }else if (window.scene2 === 10) {
            this.CT1.setVisible(false);
            this.CT2.setVisible(false);
            this.CT3.setVisible(false);
            this.C4.setVisible(true);
            this.C5.setVisible(false);
            this.C6.setVisible(false);
            this.C7.setVisible(false);
            this.C8.setVisible(false);
            this.C9.setVisible(false);
            this.C10.setVisible(false);
            this.C11.setVisible(false);
            this.C12.setVisible(false);
            this.C13.setVisible(false);
            this.CI.setVisible(false);

        }else if (window.scene2 === 9) {
            this.CT1.setVisible(false);
            this.CT2.setVisible(false);
            this.CT3.setVisible(false);
            this.C4.setVisible(false);
            this.C5.setVisible(true);
            this.C6.setVisible(false);
            this.C7.setVisible(false);
            this.C8.setVisible(false);
            this.C9.setVisible(false);
            this.C10.setVisible(false);
            this.C11.setVisible(false);
            this.C12.setVisible(false);
            this.C13.setVisible(false);
            this.CI.setVisible(false);

        }else if (window.scene2 === 8) {
            this.CT1.setVisible(false);
            this.CT2.setVisible(false);
            this.CT3.setVisible(false);
            this.C4.setVisible(false);
            this.C5.setVisible(false);
            this.C6.setVisible(true);
            this.C7.setVisible(false);
            this.C8.setVisible(false);
            this.C9.setVisible(false);
            this.C10.setVisible(false);
            this.C11.setVisible(false);
            this.C12.setVisible(false);
            this.C13.setVisible(false);
            this.CI.setVisible(false);

        }else if (window.scene2 === 7) {
            this.CT1.setVisible(false);
            this.CT2.setVisible(false);
            this.CT3.setVisible(false);
            this.C4.setVisible(false);
            this.C5.setVisible(false);
            this.C6.setVisible(false);
            this.C7.setVisible(true);
            this.C8.setVisible(false);
            this.C9.setVisible(false);
            this.C10.setVisible(false);
            this.C11.setVisible(false);
            this.C12.setVisible(false);
            this.C13.setVisible(false);
            this.CI.setVisible(false);

        }else if (window.scene2 === 6) {
            this.CT1.setVisible(false);
            this.CT2.setVisible(false);
            this.CT3.setVisible(false);
            this.C4.setVisible(false);
            this.C5.setVisible(false);
            this.C6.setVisible(false);
            this.C7.setVisible(false);
            this.C8.setVisible(true);
            this.C9.setVisible(false);
            this.C10.setVisible(false);
            this.C11.setVisible(false);
            this.C12.setVisible(false);
            this.C13.setVisible(false);
            this.CI.setVisible(false);

        }else if (window.scene2 === 5) {
            this.CT1.setVisible(false);
            this.CT2.setVisible(false);
            this.CT3.setVisible(false);
            this.C4.setVisible(false);
            this.C5.setVisible(false);
            this.C6.setVisible(false);
            this.C7.setVisible(false);
            this.C8.setVisible(false);
            this.C9.setVisible(true);
            this.C10.setVisible(false);
            this.C11.setVisible(false);
            this.C12.setVisible(false);
            this.C13.setVisible(false);
            this.CI.setVisible(false);

        }else if (window.scene2 === 4) {
            this.CT1.setVisible(false);
            this.CT2.setVisible(false);
            this.CT3.setVisible(false);
            this.C4.setVisible(false);
            this.C5.setVisible(false);
            this.C6.setVisible(false);
            this.C7.setVisible(false);
            this.C8.setVisible(false);
            this.C9.setVisible(false);
            this.C10.setVisible(true);
            this.C11.setVisible(false);
            this.C12.setVisible(false);
            this.C13.setVisible(false);
            this.CI.setVisible(false);

        }else if (window.scene2 === 3) {
            this.CT1.setVisible(false);
            this.CT2.setVisible(false);
            this.CT3.setVisible(false);
            this.C4.setVisible(false);
            this.C5.setVisible(false);
            this.C6.setVisible(false);
            this.C7.setVisible(false);
            this.C8.setVisible(false);
            this.C9.setVisible(false);
            this.C10.setVisible(false);
            this.C11.setVisible(true);
            this.C12.setVisible(false);
            this.C13.setVisible(false);
            this.CI.setVisible(false);

        }else if (window.scene2 === 2) {
            this.CT1.setVisible(false);
            this.CT2.setVisible(false);
            this.CT3.setVisible(false);
            this.C4.setVisible(false);
            this.C5.setVisible(false);
            this.C6.setVisible(false);
            this.C7.setVisible(false);
            this.C8.setVisible(false);
            this.C9.setVisible(false);
            this.C10.setVisible(false);
            this.C11.setVisible(false);
            this.C12.setVisible(true);
            this.C13.setVisible(false);
            this.CI.setVisible(false);

        }else if (window.scene2 === 1) {
            this.CT1.setVisible(false);
            this.CT2.setVisible(false);
            this.CT3.setVisible(false);
            this.C4.setVisible(false);
            this.C5.setVisible(false);
            this.C6.setVisible(false);
            this.C7.setVisible(false);
            this.C8.setVisible(false);
            this.C9.setVisible(false);
            this.C10.setVisible(false);
            this.C11.setVisible(false);
            this.C12.setVisible(false);
            this.C13.setVisible(true);
            this.CI.setVisible(false);

        } else if (window.scene2 === 0) {
            this.CT1.setVisible(false);
            this.CT2.setVisible(false);
            this.CT3.setVisible(false);
            this.C4.setVisible(false);
            this.C5.setVisible(false);
            this.C6.setVisible(false);
            this.C7.setVisible(false);
            this.C8.setVisible(false);
            this.C9.setVisible(false);
            this.C10.setVisible(false);
            this.C11.setVisible(false);
            this.C12.setVisible(false);
            this.C13.setVisible(false);
            this.CI.setVisible(true);

        }else if (window.scene2 === -1) {
            let playerPos = {};
            playerPos.x = 65;
            playerPos.y = 327;
            this.scene.start("Stage2", { player: playerPos });

        }

    }


}