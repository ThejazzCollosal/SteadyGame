class death2 extends Phaser.Scene {
    constructor() {
        super({
            key: "death2",
        });

    }

    // Put global variable here

    preload() {

        // Step 2 : Preload any images here, nickname, filename
        this.load.image("Die", "assets/death.jpg");


    }

    create() {
        console.log("*** intro scene");

        const image = this.add.image(640, 360, 'Die');

        var space = this.input.keyboard.addKey("SPACE");

        // On spacebar event, call the world scene

        space.on(
            "down", function () {

                let playerPos = {};
                playerPos.x = 65;
                playerPos.y = 327;
                this.scene.start("Stage2", { player: playerPos });

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
                window.inscene = 8;

            },
            this
        );

        var enter = this.input.keyboard.addKey("ENTER");

        enter.on(
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
                window.scene = 7;
                window.inscene = 8;
            },
            this
        );

    }

    update() {

    }


}