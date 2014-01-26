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
				 "res/background.png",
				 "res/menu.jpg",
                 "res/fish_stage/fishSkeleton.png",
                 "res/fish_stage/player/spriteSheet.png",
                 "res/fish_stage/player/pinkfish.png",
                 "res/control.png",
                 "sound/tangent_loop.mp3",
                 "eagle.png");

    game.keybind(77, 'musicToggle');    // m

    backgroundMusic = new Audio('sound/tangent_loop.mp3');
    backgroundMusic.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);

    var musicOn = true;

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

    game.score = 0;
    game.Level = "1 - Sea";

    game.onload = function() {
        var rootScene = game.rootScene,
            mainBackGround = new Background("res/background.png", 0, -1500 + game.height, 2550, 1500),
            rightBackGround = new Background("res/background.png", 2550, -1500 + game.height, 2550, 1500),
            player = new Player("res/fish_stage/player/pinkfish.png", 600, 321, game.width/2, game.height/2, 6, 8), // increased speed for faster testing
            enemyControllerRootScene = new EnemyController(fishie_enemies, rootScene, 0),
            backgroundGroup = new InfiniteBackgroundGroup();


        backgroundGroup.add(new InfiniteBackground(mainBackGround, rightBackGround));

        rootScene.backgroundGroup = backgroundGroup;
        rootScene.player = player;
        rootScene.enemyController = enemyControllerRootScene;

        rootScene.addChild(mainBackGround);
        rootScene.addChild(rightBackGround);

        player.grow();
    	rootScene.addChild(player);

        backgroundMusic.play();

        var menuBackground = new Background("res/menu.jpg", 0, 0);
        game.pushScene(new MenuScene(menuBackground, "PLAY"));

        // Display labels. Will move all this out. 
        rootScene.scoreLabel = new Label("Score: ");
        
        rootScene.scoreLabel.x = screenWidth / 2;
        rootScene.scoreLabel.y = 5;
        rootScene.scoreLabel.color = "white";
        rootScene.scoreLabel.font = "20px strong";
        rootScene.addChild(rootScene.scoreLabel);

        rootScene.levelLabel = new Label("Level: ");
        rootScene.levelLabel.text = "Level: " + game.Level;

        rootScene.levelLabel.x = 10;
        rootScene.levelLabel.y = 5;
        rootScene.levelLabel.color = "white";
        rootScene.levelLabel.font = "20px strong";
        rootScene.addChild(rootScene.levelLabel);
    };

    game.rootScene.addEventListener(Event.ENTER_FRAME, function() {
        var rootScene = game.rootScene,
            enemyController = rootScene.enemyController,
            input = game.input,
            player = rootScene.player,
            movementSpeed = player.movementSpeed;
            backgroundGroup = rootScene.backgroundGroup,
            bottomBackground = backgroundGroup.list[0];

        if (input.left) {
            backgroundGroup.moveRight(movementSpeed);
            enemyController.moveEnemies("horizontal", movementSpeed);
            player.look("left");
        }
        if (input.right) {
            backgroundGroup.moveLeft(movementSpeed);
            enemyController.moveEnemies("horizontal", -movementSpeed);
            player.look("right");
        }
        if (input.up) {
            if (player.getScaledY() <= game.height/4 && bottomBackground.y + movementSpeed <= 0) {   // background moves up and down a bit
                backgroundGroup.moveDown(movementSpeed);
                enemyController.moveEnemies("vertical", movementSpeed);
            }
            else if (player.getScaledY() - movementSpeed >= 0) {
                player.y -= movementSpeed;
            }
            else {
                player.y = (player.height * player.scaleY / 2);
            }
        }
        if (input.down) {
            if (player.getScaledY() >= game.height - game.height/4 && bottomBackground.y + bottomBackground.height - movementSpeed >= game.height) {
                if (bottomBackground.y - movementSpeed < 0) {
                    movementSpeed = bottomBackground.y;
                }
                backgroundGroup.moveUp(movementSpeed);
                enemyController.moveEnemies("vertical", -movementSpeed);
            }
            else if (player.getScaledY() + movementSpeed + player.getScaledHeight() <= game.height) {
                player.y += movementSpeed;
            }
        }

        if (enemyController.activeEnemies.length < enemyController.maxEnemies) {
            rootScene.addChild(enemyController.genEnemy());
        }
    	
        enemyController.topLimit = bottomBackground.y;
        enemyController.makeEnemiesMove();

        enemyController.activeEnemies.forEach(function(enemy) {
            if (enemy.intersectStrict(rootScene.player) && enemy.dead == false) {
                if (true) {
                    enemy.kill();
                    player.grow();
                    game.score += 1;
                    rootScene.scoreLabel.text = "Score: " + game.score;
                } else {
                    player.kill();
                }
            }
        });

        if (input.musicToggle) {
            if (musicOn == true) {
                musicOn = false;
                backgroundMusic.pause();
            }
            else {
                musicOn = true;
            }
        }

        if (game.score > 2) {
            // Do something here
        }
    });


    /**
     * Core#start
     */
    game.start();
    window.scrollTo(0, 0);
};


function showControl() {

    var game = enchant.Game.instance;
    var control = new Sprite(250, 173);
    control.image = game.assets["res/control.png"];
    control.x = 300;
    control.y = 200;
    game.rootScene.addChild(control);
    control.tl.fadeOut(60).then(function(){
        game.rootScene.removeChild(control);
    });

}
