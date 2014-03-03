var SeaController = enchant.Class.create({
	initialize: function(game, scene) {
        this.game = game;
        this.scene = scene;  
        this.setLabels();
        this.start();
    },	

    setLabels: function() {
		this.scene.levelLabel.text = LEVEL_LABEL + LEVEL_1_STRING;
        this.scene.scoreLabel.text = SCORE_LABEL + this.game.score;
    },

    start: function() {
    },

    performInputLogic: function() {
        var input = this.game.input;
        var movementGroup = this.scene.movementGroup;
        var player = this.scene.player;
        var movementSpeed = player.movementSpeed;

        if (input.left) {
            this.scene.movementGroup.moveRight(movementSpeed);
            player.look("left");
        }
        if (input.right) {
            movementGroup.moveLeft(movementSpeed);
        }
        if (input.up) {
            if (player.getScaledY() > PLAYER_TOP_MOVEMENT_MARGIN)
                player.y -= movementSpeed;
            else 
                movementGroup.moveDown(movementSpeed);
        }
        if (input.down) {
            if (player.getScaledY() + player.getScaledHeight() < SCREEN_HEIGHT - PLAYER_BOTTOM_MOVEMENT_MARGIN)
                player.y += movementSpeed;
            else
                movementGroup.moveUp(movementSpeed);
        }
    },

    performFrameLogic: function() {
        this.replaceDeadEnemies();
        this.performCollisionLogic();
    },

    replaceDeadEnemies: function() {
        var enemiesList = this.scene.enemies.list;

        for (var i = 0; i < enemiesList.length; i++) {
            var enemy = enemiesList[i];

            if (enemy.isDead) {
                this.scene.removeChild(enemy);
                var newEnemy = EnemyFactory.prototype.generateSeaEnemy();
                this.scene.addChild(newEnemy);
                enemiesList[i] = newEnemy;
            }
        } 
    },

    performCollisionLogic: function() {
        var player = this.scene.player;
        var enemiesList = this.scene.enemies.list;

        for (var i = 0; i < enemiesList.length; i++) {
            var enemy = enemiesList[i];

            if (enemy.isOffScreen())
                enemy.kill();

            if (player.intersectStrict(enemy)) {

                if (player.scaleX > enemy.scaleX) {
					this.scene.fishEatAudio.load();
					this.scene.fishEatAudio.play();
                    this.scene.scoreLabel.text = SCORE_LABEL + this.game.score++;
                    player.grow();
                    enemy.kill();

                } else {
                    player.kill();
                }
            }
        }
    },

    performEnemyMovement: function() {
        
    }

});
