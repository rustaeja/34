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
    game.preload("res/fish_stage/player/GreenFish.png", "res/fish_stage/enemies/seal.png", "res/sea.jpg", "res/sky.jpg");

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
    game.onload = function(){

        initSeaBackground(game.rootScene);
        var player = new Player();
	var enemy = new Enemy();
	
	player.grow();

	game.rootScene.addChild(player);
	game.rootScene.addChild(enemy);

	game.rootScene.on('enterframe', function() {
		if (player.intersect(enemy)) {
			alert("noob");
		}
	});

	
	game.pushScene(game.rootScene);
    };

    /**
     * Core#start
     */
    game.start();
    window.scrollTo(0, 0);
};
