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

    var screenWidth = 800;
    var screenHeight = 600; 

    var game = new Core(screenWidth, screenHeight);

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
				 "res/menu.jpg",
                 "res/fish_stage/fishSkeleton.png",
                 "sound/tangent_loop.mp3");

    backgroundMusic = new Audio('sound/tangent_loop.mp3');
    backgroundMusic.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);


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
            mainBackGround = new Background("res/sea.jpg", 0, 0),
            rightBackGround = new Background("res/sea.jpg", game.width, 0),
            player = new Player("res/fish_stage/player/GreenFish.png", 22, 12, game.width/2, game.height/2, 6), // increased speed for faster testing
            enemyGeneratorRootScene = new EnemyGenerator(fishie_enemies, rootScene);

        rootScene.backGround = new InfiniteBackground(mainBackGround, rightBackGround);
        rootScene.player = player;
        rootScene.enemyGenerator = enemyGeneratorRootScene;

        rootScene.addChild(mainBackGround);
        rootScene.addChild(rightBackGround);

        player.grow();

    	rootScene.addChild(player);

        backgroundMusic.play();

        var menuBackground = new Background("res/menu.jpg", 0, 0);
        game.pushScene(new MenuScene(menuBackground, "PLAY"));

        // Display labels. Will move this all this out. 
        var scoreLabel = new Label("Score: ");
        
        scoreLabel.addEventListener('enterframe', function() {
            this.text = "Score: " + game.Score;
        });

        scoreLabel.x = screenWidth / 2;
        scoreLabel.y = 5;
        scoreLabel.color = "white";
        scoreLabel.font = '20px strong';
        game.rootScene.addChild(scoreLabel);

        var levelLabel = new Label("Level: ");
        levelLabel.addEventListener('enterframe', function() {
            this.text = "Level: " + game.Level;
        });

        levelLabel.x = 10;
        levelLabel.y = 5;
        levelLabel.color = "white";
        levelLabel.font = '20px strong';
        game.rootScene.addChild(levelLabel);

    };

    game.rootScene.addEventListener(Event.ENTER_FRAME, function() {
        var rootScene = game.rootScene,
            enemyGenerator = rootScene.enemyGenerator,
            input = game.input,
            player = rootScene.player,
            movementSpeed = player.movementSpeed;
            backGround = rootScene.backGround;

        if (input.left) {
            backGround.moveRight(movementSpeed);
            enemyGenerator.moveEnemies(movementSpeed);
            player.look("left");
        }
        if (input.right) {
            backGround.moveLeft(movementSpeed);
            enemyGenerator.moveEnemies(-movementSpeed);
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

        if (enemyGenerator.activeEnemies.length < enemyGenerator.maxEnemies)
            rootScene.addChild(rootScene.enemyGenerator.genEnemy());
    	
        rootScene.enemyGenerator.activeEnemies.forEach(function(enemy) {
            if (enemy.intersectStrict(rootScene.player) && enemy.dead == false) {
                if (enemy.scaleX >= player.scaleX) {
                    enemy.kill();
                    player.grow();
                } else {
                    player.kill();
                }
            }
        });
    });

    /**
     * Core#start
     */
    game.start();
    window.scrollTo(0, 0);
};
