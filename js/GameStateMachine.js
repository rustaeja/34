
var States = {
    MENU: "menu",
    SEA: "sea",
    SKY: "sky", 
    GAMEOVER: "gameover"
};

var GameStateMachine = enchant.Class.create(enchant.Core, {

    initialize: function() {
        // Calls superclass constructer
        enchant.Core.call(this, SCREEN_WIDTH, SCREEN_HEIGHT);

        // Member variable initialization and definitiion
        this.state = null;
        this.levelString = null;
        this.sceneController = null;
        this.enemyFactory = null;
        this.fps = FPS;
        this.score = 0;

        this.preload(
            fishie_player.path, 
            fishie_enemy_medium_fish.path,
            fishie_enemy_seal.path,
            fishie_enemy_small.path,
            b1.path, 
            b2.path,
            game_background.path,
            menu_background.path,
            control_instr.path,
            bckgrd_music.path,
            bird_player.path,
            fish_eat_sound.path
        );
    },

    onload: function() {
        this.changeState(States.MENU);
    },

    changeState: function(newState) {
        this.popScene();
        this.state = newState;

        switch (newState) {

        case States.MENU:
            this.initMenuState();
            break;

        case States.SEA:
            this.initSeaState();
            break;

        case States.SKY:
            this.initSkyState();
            break;

        case States.GAMEOVER:
            this.initGameOverState();
            break;

        default:
            break;
        }

    },

    onenterframe: function() {
        this.performGeneralLogic();

        switch (this.state) {

        case States.MENU:
            this.performMenuLogic();
            break;

        case States.SEA:
            this.performSeaLogic();
            break;

        case States.SKY:
            this.performSkyLogic();
            break;

        case States.GAMEOVER:
            this.performGameOverLogic();
            break;

        default:
            break;
        }
    },

    initMenuState: function() {
        var menuScene = new MenuScene();
        this.sceneController = new MenuController(this, menuScene);
        
        this.pushScene(menuScene);
    },

    initSeaState: function() {
        var gameScene = new GameScene();
        gameScene.initSeaStage();
        this.controller = new SeaController(this, gameScene); 

        this.score = 0;
        this.levelString = LEVEL_1_STRING;

        this.pushScene(gameScene);
    },

    initSkyState: function() {

    },

    initGameOverState: function() {
        this.score = 0;
    },

    performGeneralLogic: function() {

    },


    performMenuLogic: function() {

    },

    performSeaLogic: function() {
        this.controller.performInputLogic();
        this.controller.performFrameLogic();
    },

    performSkyLogic: function() {

    },

    performGameOverLogic: function() {

    },
})
