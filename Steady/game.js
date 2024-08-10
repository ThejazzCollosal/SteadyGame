var config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    physics:{
        default: 'arcade',
        arcade: {
            gravity: { y: 200 },
            debug: false
        }
    },
    
    backgroundColor: '#000000',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
      },
    scene: [preloadScene,Home,instructions,Stageselect,Cutscene1,Cutscene2,Stage1,CutsceneS1,Stage2,Stage3,end,death,death2] 
};

window.light =16;
window.focus2= 5;
window.relax= 7;
window.stress=5;
window.lives=3;
window.marker=0;
window.CR=1;
window.CR2=1;
window.CR3=1;
window.CR4=1;
window.CR5=1;
window.CR6=1;
window.CR7=1;
window.collect=0;
window.collect2=0;
window.collect3=0;
window.collectD=0;
window.collectD2=0;
window.collectD3=0;
window.scene=7;
window.inscene=8;


let game = new Phaser.Game(config);