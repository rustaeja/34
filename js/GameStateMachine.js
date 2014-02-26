var GameStateMachine = enchant.Class.create(enchant.Core, {

    var States = {
        MENU: "menu",
        SEA: "sea",
        SKY: "sky", 
        GAMEOVER: "gameover"
    },

    initialize: function() {
        // Calls superclass constructer
        enchant.Core.call(this, SCREEN_WIDTH, SCREEN_HEIGHT);

        // Member variable initialization and definitiion
        this.state = null;
        this.rootScene = null;
        this.levelString = null;
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
        changeState(States.MENU);
    },

    changeState: function(newState) {

        switch (this.state) {

        case States.MENU:
            initMenuState();
        break;

        case States.SEA:
            initSeaState();
        break;

        case States.SKY:
            initSkyState();
        break;

        case States.GAMEOVER:
            initGameOverState();
        break;

        default:
        break;
    },

    process: function() {

        switch (this.state) {

        case States.MENU:
            performMenuLogic();
        break;

        case States.SEA:
            performSeaLogic();
        break;

        case States.SKY:
            performSkyLogic();
        break;

        case States.GAMEOVER:
            performGameOverLogic();
        break;

        default:
        break;
    },

    initMenuState: function () {
        var menuScene = new MenuScene();

        menuScene.playbutton.addEventListener(enchant.Event.TOUCH_END, function() {
            changeState(States.SEA);

        this.rootScene = menuScene;
    },

    initSeaState: function () {
        var gameScene = new GameScene();

        this.score = 0;
        this.levelString = LEVEL_1_STRING;
        this.rootScene = gameScene;
    },

    initSkyState: function () {

    },

    initGameOverState: function () {

    },

    performMenuLogic: function () {

    },

    performSeaLogic: function () {

    },

    performSkyLogic: function () {

    },

    performGameOverLogic: function () {

    }
}
