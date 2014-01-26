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
    game.preload("res/fish_stage/player/GreenFish.png", "res/fish_stage/enemies/seal.png", "res/sea.jpg", "res/sky.jpg", "res/menu.jpg");

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
            enemy = new Enemy();

        rootScene.backGround = new InfiniteBackground(mainBackGround, rightBackGround);
        rootScene.player = player;

        rootScene.addChild(mainBackGround);
        rootScene.addChild(rightBackGround);

    	rootScene.addChild(enemy);
    	rootScene.addChild(player);

    	for (var i = 0; i < 100; i++) {
    		var enem = new Enemy();
    		rootScene.addChild(enem);
    	}

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
