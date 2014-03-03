var Enemy = enchant.Class.create(enchant.Sprite, {
	initialize:function(enemyMetaData) {
		Sprite.call(this, enemyMetaData.width, enemyMetaData.height);
		var game = enchant.Game.instance;

		this.image = game.assets[enemyMetaData.path];
        this.width = enemyMetaData.width;
        this.height = enemyMetaData.height;
        this.originX = this.width/2;
        this.originY = this.height/2;
        this.setRandomSize(enemyMetaData.minScale, enemyMetaData.maxScale);

        this.dir = enemyMetaData.dir;
		this.dx = 0;
		this.dy = 0;

		this.isDead = false;
		this.frameCount = 0;
	},

	setRandomSize:function(minScale, maxScale) {
		var randomScale = (Math.random() * (maxScale - minScale)) + minScale;
		this.scale(randomScale, randomScale);
	},

	move:function(topLimit) {
		var game = enchant.Game.instance;
		if (this.frameCount <= 0) {
			var randomSpeed = Math.floor(Math.random()*6 - 3);
            if (this.dir === "vertical") {
                this.y += randomSpeed;
                this.dx = 0;
                this.dy = randomSpeed;
            } else if (this.dir === "horizontal") {
                this.x += randomSpeed;
                this.dx = randomSpeed;
                this.dy = 0;
			} else if (this.dir ==="fly") {
				
            } else {
				var xDif = this.scene.player.getScaledX() - this.x;
				var yDif = this.scene.player.getScaledY() - this.y;
				// too far, don't chase
				if (Math.abs(xDif) > SCREEN_WIDTH || 
					Math.abs(yDif) > SCREEN_HEIGHT ||
					Math.abs(this.scaleX) <= Math.abs(this.scene.player.scaleX)) {
					var randomSpeed2 = Math.floor(Math.random()*6 - 3);
					this.x += randomSpeed;
					this.y += randomSpeed2;
					this.dx = randomSpeed;
					this.dy = randomSpeed2;
				// chasing
				} else {
					var randomAcceleration = Math.random();
					var xSpeed = Math.floor(Math.sqrt(Math.abs(xDif * randomAcceleration)) % 3) + 1;
					var ySpeed = Math.floor(Math.sqrt(Math.abs(yDif * randomAcceleration)) % 3) + 1;
					if (xDif < 0) {
						xSpeed = -xSpeed;
					}
					if (yDif < 0) {
						ySpeed = -ySpeed;
					}
					this.x += xSpeed;
					this.y += ySpeed;
					this.dx = xSpeed;
					this.dy = ySpeed;
				}
            }
			this.frameCount = Math.floor(Math.random()*20);
		} else {
			this.frameCount = this.frameCount - 1;
			this.x += this.dx;
			this.y += this.dy;
		}

		if (this.y < topLimit) {
			this.y = topLimit;
		}
	},

	moveLeft: function(movementSpeed) {
        this.x -= movementSpeed;
	},
	moveRight: function(movementSpeed) {
        this.x += movementSpeed;
	},
	moveDown: function(movementSpeed) {
        this.y += movementSpeed;
	},
	moveUp: function(movementSpeed) {
        this.y -= movementSpeed;
	},

    kill:function() {
        this.isDead = true;
    },

    isOffScreen: function() {
        return (this.x > 2 * SCREEN_WIDTH || this.x < -SCREEN_WIDTH)
    }
});
