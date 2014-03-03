var GameScene = enchant.Class.create(enchant.Scene, {
	initialize: function() {
		Scene.call(this);
        this.movementGroup = new MovementGroup();
        this.initBackground();
        this.initLabels();
        this.initEnemies();
	},

    initBackground: function() {

        background1 = new Background(game_background.path, 0, -game_background.height/3,
            game_background.width, game_background.height);

        background2 = new Background(game_background.path, game_background.width, -game_background.height/3,
            game_background.width, game_background.height);

        this.infiniteBackground = new InfiniteBackground(background1, background2);
        this.infiniteBackground.moveToBottom();

        this.movementGroup.add(this.infiniteBackground);
        MovementGroup.prototype.linkMovementToBackground(this.infiniteBackground);

		this.addChild(background1);
		this.addChild(background2);
    },

    initLabels: function() {
		this.scoreLabel = new Label(SCORE_LABEL);
		
		this.scoreLabel.x = SCREEN_WIDTH / 2;
		this.scoreLabel.y = 5;
		this.scoreLabel.color = font_color;
		this.scoreLabel.font = font;
		this.addChild(this.scoreLabel);

		this.levelLabel = new Label(LEVEL_LABEL);

		this.levelLabel.x = 10;
		this.levelLabel.y = 5;
		this.levelLabel.color = font_color;
		this.levelLabel.font = font;
		this.addChild(this.levelLabel);
    },

    initEnemies: function() {
        this.enemies = new MovementGroup(); 

        for (var i = 0; i < SEA_ENEMIES_COUNT; i++) {
            var enemy = EnemyFactory.prototype.generateSeaEnemy();
            this.addChild(enemy);
            this.enemies.add(enemy);
        }
        this.movementGroup.add(this.enemies);
    },

    initSeaStage: function() {
        MovementGroup.prototype.setMovementLimits(BACKGROUND_SEA_TOP_LIMIT, BACKGROUND_SEA_BOTTOM_LIMIT);

		this.player = new Player(fishie_player.path, fishie_player.width, fishie_player.height, 
                this.width/2, this.height/2); 
        this.player.setAnimationFrames(fishie_player.frames);

        this.addChild(this.player);

	    this.fishEatAudio = new Audio(fish_eat_sound.path);
    },

    initSkyStage: function() {

    }

});
