var Enemy = enchant.Class.create(enchant.Sprite, {
	initialize:function(enemyMetaData, scene, topLimit, callback) {
		var game = enchant.Game.instance;

		Sprite.call(this, enemyMetaData.width, enemyMetaData.height);
		this.image = game.assets[enemyMetaData.path];
		//this.randomizeSize();
		this.frameCount = 0;
        this.width = enemyMetaData.width;
        this.height = enemyMetaData.height;
		this.dx = 0;
		this.dy = 0;
        this.dir = enemyMetaData.dir;
		this.dead = false; // false
		this.scene = scene;
        this.topLimit = topLimit;
        this.callback = callback;		
        this.randomizePosition();
        this.randomizeSize(enemyMetaData.minScale, enemyMetaData.maxScale);
	},

	randomizeSize:function(minScale, maxScale) {
		var randomScale = Math.random();
		if (randomScale < minScale) {
			randomScale = minScale;
		} else if (randomScale > maxScale) {
			randomScale = maxScale;
		}
		this.scaleX = randomScale;
		this.scaleY = randomScale;
	},

	move:function() {
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
            } else {
				var xDif = this.scene.player.x - this.x;
				var yDif = this.scene.player.y - this.y;
				// too far, don't chase
				if (Math.abs(xDif) > game.width || 
					Math.abs(yDif) > game.height ||
					Math.abs(this.scaleX) <= Math.abs(this.scene.player.scaleX)) {
					var randomSpeed2 = Math.floor(Math.random()*6 - 3);
					this.x += randomSpeed;
					this.y += randomSpeed2;
					this.dx = randomSpeed;
					this.dy = randomSpeed2;					
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

		if (this.y < this.topLimit) {
			this.y = this.topLimit;
		}

		if (this.x > (game.width + game.width/2) || this.x < -game.width/2) {
            this.kill();
		} else if (this.y > (game.height + 100)) {
            this.kill();
		}
	},

    kill:function() {
        this.dead = true;
        this.callback(this);
    },

	randomizePosition:function() {
		var game = enchant.Game.instance;

        // Randomize Left or Right to enter from
		var randomEnter = Math.floor(Math.random()*2);
        
        if (this.dir === "vertical") {
            var random = Math.floor(Math.random() * game.width);
            this.x = random;
            this.y = game.height;	// don't spawn from the top
        } 
        else {
            var random = Math.floor(Math.random() * (game.height - this.topLimit));
            this.y = random + this.topLimit;

            if (randomEnter === 0) {
                // Enemy spawn from left
                this.x = -this.width;
            } 
            else {
                // Enemy spawn from right
                this.x = game.width;
            }
        }
	}
});
