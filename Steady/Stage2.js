class Stage2 extends Phaser.Scene {
    constructor() {
        super({ key: "Stage2" });
    }

    init(data) {
        this.playerpos = data.player
        this.inventory = data.inventory
    }

    preload() {

        //Step1
        this.load.tilemapTiledJSON("map2", "assets/Stage2.tmj");
        this.load.image("shadow0", "assets/shadow0.png");
        this.load.image("shadow", "assets/shadow.png");
        this.load.image("shadow2", "assets/shadow2.png");
        this.load.image("shadow3", "assets/shadow3.png");
        this.load.image("shadowD", "assets/shadowdeath.jpg");
        this.load.image("FF", "assets/Focusfull.png");
        this.load.image("F2", "assets/Focus2.png");
        this.load.image("F3", "assets/Focus3.png");
        this.load.image("F4", "assets/Focus4.png");
        this.load.image("F5", "assets/Focus5.png");

    }

    create() {

        console.log("Stage2")

        //Step3
        let map = this.make.tilemap({ key: "map2" });

        // Step 4 Load the game tileset
        // 1st parameter is name in Tiled,
        // 2nd parameter is key in Preload
        let BlueeTiles = map.addTilesetImage("Blue2", "Bluee");
        let BaseTiles = map.addTilesetImage("BaseTiles", "Base");
        let DarkTiles = map.addTilesetImage("Dark_lvl0", "Dark");
        let Dark1Tiles = map.addTilesetImage("Dark_lvl0.2", "Dark1");

        //this.layer = map.createLayer(0, BaseTiles, 0, 0).setPipeline('Light2D');


        let tilesArray = [
            BlueeTiles,
            BaseTiles,
            DarkTiles,
            Dark1Tiles
        ];


        // Step 6  Load in layers by layers
        this.BackgroundLayer = map.createLayer("Background", tilesArray, 0, 0);
        this.DecalsLayer = map.createLayer("Decals", tilesArray, 0, 0);
        this.ObstaclesLayer = map.createLayer("Obstacles", tilesArray, 0, 0);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.player = this.physics.add.sprite(this.playerpos.x, this.playerpos.y, 'MC').setScale(0.15);

        this.player.body.setSize(this.player.width, this.player.height, true);
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        this.cameras.main.startFollow(this.player);

        window.player = this.player

        this.physics.world.bounds.width = this.BackgroundLayer.width;
        this.physics.world.bounds.height = this.BackgroundLayer.height;

        this.player.setCollideWorldBounds(true)

        this.timedEvent = this.time.addEvent({
            delay: 1000,                // ms
            callback: this.onEvent,
            //args: [],
            callbackScope: this,
            loop: true
        });

        // this.shadow0 = this.add.image(-1000, -1000, 'shadow0');
        if (window.collectD == 0) {
            this.colD = this.physics.add.sprite(768.5, 647, 'CD').setScale(0.2);
        }
        
        if (window.collectD2 == 0) {
            this.colD2 = this.physics.add.sprite(1211.5, 199, 'CD').setScale(0.2);
        }

        if (window.collectD3 == 0) {
            this.colD3 = this.physics.add.sprite(2350.5, 1159, 'CD').setScale(0.2);
        }

        this.shadow = this.add.image(this.player.x, this.player.y, 'shadow').setScale(8).setOrigin(0.49, 0.485);
        this.shadowD = this.add.image(this.player.x, this.player.y, 'shadowD').setOrigin(0.49, 0.485).setVisible(false);

       
        

        //this.shadow.setOffset(-(this.shadow.displayWidth / 2), -(this.shadow.displayHeight / 2));
        // this.shadow2 = this.add.image(-1000, -1000, 'shadow2');
        // this.shadow3 = this.add.image(-1000, -1000, 'shadow3');


        var space = this.input.keyboard.addKey("SPACE");

        space.on(
            "down", function () {
                console.log("window.light: ", window.light)
                console.log("window.focus2: ", window.focus2)
                if (window.focus2 > 1) {
                    window.light = 16
                }
                window.focus2--
            },
            this
        );

        this.shadowdeathsnd = this.sound.add("SDeath").setVolume(1);



        //////////////////////////////////////Collisions////////////////////////////////////////

        this.ObstaclesLayer.setCollisionByExclusion(-1, true);

        this.physics.add.collider(this.ObstaclesLayer, this.player);

        this.Focus5 = this.add.image(640, 40, 'F5').setScrollFactor(0).setScale(0.7);
        this.Focus4 = this.add.image(640, 40, 'F4').setScrollFactor(0).setScale(0.7);
        this.Focus3 = this.add.image(640, 40, 'F3').setScrollFactor(0).setScale(0.7);
        this.Focus2 = this.add.image(640, 40, 'F2').setScrollFactor(0).setScale(0.7);
        this.FocusF = this.add.image(640, 40, 'FF').setScrollFactor(0).setScale(0.7);

        this.physics.add.collider(this.ObstaclesLayer, this.colD);

        this.physics.add.overlap(
            this.player, // player
            this.colD,  // enemy
            this.collectD,
            null,
            this
        );

        this.physics.add.collider(this.ObstaclesLayer, this.colD2);

        this.physics.add.overlap(
            this.player, // player
            this.colD2,  // enemy
            this.collectD2,
            null,
            this
        );

        this.physics.add.collider(this.ObstaclesLayer, this.colD3);

        this.physics.add.overlap(
            this.player, // player
            this.colD3,  // enemy
            this.collectD3,
            null,
            this
        );


    }

    update() {

        // Phaser.Display.Bounds.SetCenterX(this.shadow, this.player.body.center.x);
        // Phaser.Display.Bounds.SetCenterY(this.shadow, this.player.body.center.y);
        this.shadow.x = this.player.x
        this.shadow.y = this.player.y

        this.shadowD.x = this.player.x
        this.shadowD.y = this.player.y

        // var keyP = this.input.keyboard.addKey(80);
        // var keyS = this.input.keyboard.addKey(83);

        // keyP.on(
        //     "down", function () {

        //         this.scene.pause()
        //     },
        //     this
        // );

        // keyS.on(
        //     "down", function () {

        //         this.scene.resume('Stage2')
        //     },
        //     this
        // );

        player.body.offset.x = 250;
        player.body.offset.y = 120;
        player.body.width = 60;
        player.body.height = 120;

        if (this.player.x > 3685 && this.player.x < 3747 && this.player.y < 584 && this.player.y > 582) {
            // console.log("Jump to stage3");
            // let playerPos = {};
            // playerPos.x = 68;
            // playerPos.y = 3718;
            this.scene.start("end");
        }

        if (this.cursors.left.isDown) {
            this.player.body.setVelocityX(-300);
            this.player.anims.play('MC-left', true); // walk left
        }
        else if (this.cursors.right.isDown) {
            this.player.body.setVelocityX(300);
            this.player.anims.play('MC-right', true);

        } else {
            this.player.body.setVelocityX(0);
            this.player.anims.stop();
        }
        // jump 
        if (this.cursors.up.isDown && this.player.body.onFloor()) {
            this.player.body.setVelocityY(-240);
            //this.player.anims.play('front', true);    
        }



        if (window.focus2 === 5) {
            this.FocusF.setVisible(true);
            this.Focus2.setVisible(true);
            this.Focus3.setVisible(true);
            this.Focus4.setVisible(true);
            this.Focus5.setVisible(true);

        } else if (window.focus2 === 4) {
            this.FocusF.setVisible(false);
            this.Focus2.setVisible(true);
            this.Focus3.setVisible(true);
            this.Focus4.setVisible(true);
            this.Focus5.setVisible(true);

        } else if (window.focus2 === 3) {
            this.FocusF.setVisible(false);
            this.Focus2.setVisible(false);
            this.Focus3.setVisible(true);
            this.Focus4.setVisible(true);
            this.Focus5.setVisible(true);

        } else if (window.focus2 === 2) {
            this.FocusF.setVisible(false);
            this.Focus2.setVisible(false);
            this.Focus3.setVisible(false);
            this.Focus4.setVisible(true);
            this.Focus5.setVisible(true);

        } else if (window.focus2 === 1) {
            this.FocusF.setVisible(false);
            this.Focus2.setVisible(false);
            this.Focus3.setVisible(false);
            this.Focus4.setVisible(false);
            this.Focus5.setVisible(true);
        }

    }
    //this event deducts the light and adds shadow//
    onEvent() {
        console.log("window.light ", window.light)
        window.light--
        if (window.light < 0) {
            window.light = 0;
        }
        this.shadow.setScale(window.light / 2);

        if (window.light == 1) {
            this.shadowD.setVisible(true);
            this.shadowdeathsnd.play();
            this.shadowdeathsnd.once('complete', () => {
                console.log('Sound completed');
                this.scene.start("death2")
            });


        }
    }

    collectD(player, colD) {
        colD.disableBody(true, true);
       window.collectD++
       window.focus2++
    }

    collectD2(player, colD2) {
        colD2.disableBody(true, true);
       window.collectD2++
       window.focus2++
    }

    
    collectD3(player, colD2) {
        colD2.disableBody(true, true);
       window.collectD3++
       window.focus2++
    }


}
