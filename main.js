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
    game.preload("res/fish_stage/player/GreenFish.png", "res/sea.jpg", "res/sky.jpg");

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

    game.Score = 0;
    
    game.onload = function() {
        var rootScene = game.rootScene,
            backGround = new Background("res/sea.jpg"),
            player = new Player("res/fish_stage/player/GreenFish.png", 22, 12, game.width/2, game.height/2, 7); // increased speed for faster testing

        rootScene.addChild(backGround);
        rootScene.addChild(player);

        var scoreLabel = new Label("Score: ");
        
        scoreLabel.addEventListener('enterframe', function() {
            this.text = "Score: " + game.Score;
        });

        scoreLabel.x = 800 / 2;
        scoreLabel.y = 5;
        scoreLabel.color = "white";

        game.rootScene.addChild(scoreLabel);

    };

    game.rootScene.addEventListener(Event.ENTER_FRAME, function() {
        var rootScene = game.rootScene,
            input = game.input,
            player = rootScene.childNodes[1],   // Find a better way to retrieve the element I want
            movementSpeed = player.movementSpeed;
            backGround = rootScene.childNodes[0];

        if (input.left) {
            backGround.x += movementSpeed;
            player.look("left");
        }
        if (input.right) {
            backGround.x -= movementSpeed;
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
