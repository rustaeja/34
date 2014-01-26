var SkyEnemy = enchant.Class.create(enchant.Sprite, {
	initialize:function(enemyPath, width, height) {
		var game = enchant.Game.instance;
		Sprite.call(this, width, height);
		this.image = game.assets[enemyPath];
		this.init();
	},

	init: function() {
		// this.randomizePosition();
		// this.randomizeDirection();
		// this.randomizeScale();
		this.x = 700;
		this.y = 300;
		this.dx = 0.5;
		this.dy = 0.5;
		this.isDead = false;
	},

	randomizePosition:function() {
		var posX = Math.random() * 175 + 725;
		this.x = posX;

		if (posX + this.width <= 800) {
			// Appear from top or bottom
			var randomNumber = Math.floor(Math.random()*2);
			if (randomNumber === 0) {
				this.y = -this.height;
			} else {
				this.y = 600 + this.height
			}
		} else {
			// Appear from end of screen
			var posY = Math.random() * 600;
			this.y = posY;
		}
	},

	randomizeDirection:function() {
		// Generate a number between 1 and 3, and always
		// go from right to left of the screen
		this.dx = (Math.random() * 2 + 1) * -1;

		this.dy = Math.random() * 6 - 3;
	},

	update:function() {
		this.x += this.dx;
		this.y += this.dy;
	},

	randomizeScale:function() {
		var num = Math.random() + 0.5;
		this.scaleX = num;
		this.scaleY = num;
	}
});
