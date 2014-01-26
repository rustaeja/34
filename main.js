/**
 *
 * Global Variables
 *
 */
var fishie_eg;

/**
 * enchant();
 * Preparation for using enchant.js.
 * (Exporting enchant.js class to global namespace.
 *  ex. enchant.Sprite -> Sprite etc..)
 */
enchant();

/*
 * window.onload
 *
 * The function which will be executed after loading page.
 * Command in enchant.js such as "new Core();" will cause an error if executed before entire page is loaded.
 */
window.onload = function() {

    /**
     * new Core(width, height)
     */
    var game = new Core(800, 600);

    /**
     * Core.fps
     *
     * Set fps (frame per second) in this game to 15.
     */
    game.fps = 30;
    /**
     * Core#preload
     *
     * You can preload all assets files before starting the game.
     * Set needed file lists in relative/absolute path for attributes of Core#preload
     */
    game.preload(fishie_player_small.path, 
				 fishie_enemy_medium_fish.path,
				 fishie_enemy_seal.path,
				 fishie_enemy_small.path,
				 "res/sea.jpg", 
				 "res/sky.jpg",
				 "res/menu.jpg");

    /**
     * Core#onload
     *
     * game.onload = function(){
     *     // code
     * }
     *
     * game.addEventListener("load", function(){
     *     // code
     * })
     */
    game.onload = function() {
        var rootScene = game.rootScene,
            mainBackGround = new Background("res/sea.jpg", 0, 0),
            rightBackGround = new Background("res/sea.jpg", game.width, 0),
            player = new Player("res/fish_stage/player/GreenFish.png", 22, 12, game.width/2, game.height/2, 10), // increased speed for faster testing
	    fishie_eg = new EnemyGenerator(fishie_enemies);

        rootScene.backGround = new InfiniteBackground(mainBackGround, rightBackGround);
        rootScene.player = player;

        rootScene.addChild(mainBackGround);
        rootScene.addChild(rightBackGround);

	rootScene.addChild(player);
	fishie_eg.genEnemy();
	fishie_eg.genEnemy();
	fishie_eg.genEnemy();
	fishie_eg.genEnemy();

        var menuBackground = new Background("res/menu.jpg", 0, 0);
        game.pushScene(new MenuScene(menuBackground, "PLAY"));
    };

    game.rootScene.addEventListener(Event.ENTER_FRAME, function() {
        var rootScene = game.rootScene,
            input = game.input,
            player = rootScene.player,
            movementSpeed = player.movementSpeed;
            backGround = rootScene.backGround;

        if (input.left) {
            backGround.moveRight(movementSpeed);
            player.look("left");
        }
        if (input.right) {
            backGround.moveLeft(movementSpeed);
            player.look("right");
        }
        if (input.up) {
            if (player.y - movementSpeed >= 0) {
                player.y -= movementSpeed;
            }
        }
        if (input.down) {
            if (player.y + movementSpeed + player.height <= game.rootScene.height) {
                player.y += movementSpeed;
            }
        }
    });

    /**
     * Core#start
     */
    game.start();
    window.scrollTo(0, 0);
};
