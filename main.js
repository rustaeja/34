// Global Variables

var States = {
SEA: 0,
SKY: 1,
SEATOSKY:2
};

var st = States.SEA;
var isTransitioning = false;

// Exporting enchant.js class to global namespace.
enchant();

window.onload = function() {

	var screenWidth = 800;
	var screenHeight = 600; 

	var game = new Core(screenWidth, screenHeight);

	game.fps = 30;

	// Set needed file lists in relative/absolute path for attributes of Core

	game.preload(
		fishie_player.path, 
		fishie_enemy_medium_fish.path,
		fishie_enemy_seal.path,
		fishie_enemy_small.path,
		b1.path, 
		b2.path,
		menu_bckgrd.path,
		control_instr.path,
		bckgrd_music.path,
		bird_player.path,
		fish_eat_sound.path
	);

	game.keybind(77, 'musicToggle');    // m

	backgroundMusic = new Audio(bckgrd_music.path);
	backgroundMusic.addEventListener('ended', function() {
		this.currentTime = 0;
		this.play();
	}, false);

	fishEatMusic = new Audio(fish_eat_sound.path);

	var musicOn = true;

	game.score = 0;
	game.Level = "1 - Sea";
	var skyController;

	game.onload = function() {
		var rootScene = game.rootScene,
		mainBackGround = new Background(b1.path, 0, 0, b1.width, b1.height),
		rightBackGround = new Background(b1.path, b1.width, 0, b1.width, b1.height),
		
		skyMainBackground = new Background(b2.path, 0, -game.height, b2.width, b2.height),
		skyRightBackground = new Background(b2.path, game.width, -game.height, b2.width, b2.height),
		
		amountOfTopBackgroundPixelToShow = 100,
		enemyControllerRootScene = new EnemyController(fishie_enemies, rootScene, amountOfTopBackgroundPixelToShow),
		backgroundGroup = new InfiniteBackgroundGroup();

		var bird;
		rightBackGround.scaleX = -1;
		skyRightBackground.scaleX = -1;

		skyController = new SkyController(rootScene, 3);

		player = new Player(fishie_player.path, fishie_player.width, fishie_player.height, game.width/2, game.height/2, 6, 8), // increased speed for faster testing

		backgroundGroup.add(new InfiniteBackground(mainBackGround, rightBackGround));
		backgroundGroup.add(new InfiniteBackground(skyMainBackground, skyRightBackground));
		
		rootScene.backgroundGroup = backgroundGroup;
		rootScene.player = player;
		rootScene.enemyController = enemyControllerRootScene;

		rootScene.addChild(mainBackGround);
		rootScene.addChild(rightBackGround);
		rootScene.addChild(skyMainBackground);
		rootScene.addChild(skyRightBackground);

		player.grow();
		rootScene.addChild(player);

		backgroundMusic.play();

		var menuBackground = new Background(menu_bckgrd.path, 0, 0);
		game.pushScene(new MenuScene(menuBackground, "PLAY"));

		// Display labels. Will move all this out. 
		rootScene.scoreLabel = new Label("Score: ");
		
		rootScene.scoreLabel.x = screenWidth / 2;
		rootScene.scoreLabel.y = 5;
		rootScene.scoreLabel.color = font_color;
		rootScene.scoreLabel.font = font;
		rootScene.addChild(rootScene.scoreLabel);

		rootScene.levelLabel = new Label("Level: ");
		rootScene.levelLabel.text = "Level: " + game.Level;

		rootScene.levelLabel.x = 10;
		rootScene.levelLabel.y = 5;
		rootScene.levelLabel.color = font_color;
		rootScene.levelLabel.font = font;
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

		
		if (st == States.SEA) {
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
					backgroundGroup.moveUp(movementSpeed);
					enemyController.moveEnemies("vertical", -movementSpeed);
				}
				else if (player.getScaledY() + movementSpeed <= game.height) {
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
					if (player.scaleY > enemy.scaleY) {
						enemy.kill();
						player.grow();
						game.score += 1;
						rootScene.scoreLabel.text = "Score: " + game.score;
						fishEatMusic.play();
					} else {
						player.kill();
					}
				}
			});
		} else if (st == States.SKY && isTransitioning == false) {
			// player is now bird
			if (game.input.up) {
				if (bird.y > 0) bird.y -= movementSpeed;
			}
			if (game.input.down) if (bird.y + bird.height < 600) bird.y += movementSpeed;
			skyController.update();
			// Do collision checking here
			var enemies = skyController.enemies;
			for (var i = 0; i < enemies.length; i++) {
				if (bird.intersectStrict(enemies[i])) {
					enemies[i].init();
				}
			}
		}

		if (input.musicToggle) {
			if (musicOn == true) {
				musicOn = false;
				backgroundMusic.pause();
			}
			else {
				musicOn = true;
			}
		}

		//CINEMATICS!!
		//if (st == States.SEA) {
		if (game.score > 2 && st == States.SEA) {
			st = States.SEATOSKY;
			player.tl.moveTo(375, 210, 50).then(function() {
				bird = new Sprite(bird_player.width, bird_player.height);
				bird.image = game.assets[bird_player.path];
				game.rootScene.addChild(bird);
				bird.tl.moveTo(375,210,15).then(function() {
					game.rootScene.removeChild(player);
					isTransitioning = true;
					//player = bird; //(Commented out because didn't work)
					
				});
			});
			//skyController.update();
		}

		if (st != States.SEA) backgroundGroup.moveLeft(movementSpeed);

		if (st == States.SEATOSKY && isTransitioning) {
			backgroundGroup.moveDown(movementSpeed);
			enemyController.moveDown(movementSpeed);
			enemyController.makeEnemiesMove();
			if (backgroundGroup.list[0].y >= 600) {
				st = States.SKY;
				backgroundGroup.list[0].backgroundy = 0;
				enemyController.removeSea();
				rootScene.levelLabel.text = "Level: 2 - Sky";
				showControl();
				isTransitioning = false;
				//backgroundGroup.backgrounds[1].y = 0;
			}
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
	control.image = game.assets[control_instr.path];
	control.x = control_instr.width;
	control.y = control_instr.height;
	game.rootScene.addChild(control);
	control.tl.fadeOut(60).then(function(){
		game.rootScene.removeChild(control);
	});

}
