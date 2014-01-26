var Enemy = enchant.Class.create(enchant.Sprite, {

	initialize:function(name) {
		var game = enchant.Game.instance;
		Sprite.call(this, 39, 39);
		this.image = game.assets[name];
		//this.randomizeSize();
		this.randomizePosition();
		this.frameCount = 0;
		this.dx = 0;
		this.dy = 0;
	},

	randomizeSize:function(){
		// Generate a random number between 0.5 and 3.5
		var randomScale = Math.random() * 3 + 0.5;
		this.scaleX = randomScale;
		this.scaleY = randomScale;
	},

	onenterframe:function() {
		var game = enchant.Game.instance;
		if (this.frameCount <= 0) {
			var randomX = Math.floor(Math.random()*6 - 3);
			var randomY = Math.floor(Math.random()*6 - 3);
			this.x += randomX;
			this.y += randomY;
			this.dx = randomX;
			this.dy = randomY;
			this.frameCount = Math.floor(Math.random()*70);
		} else {
			this.frameCount = this.frameCount - 1;
			this.x += this.dx;
			this.y += this.dy;
		}
		if (this.x > (game.width + 100) || this.x < -100) {
			game.rootScene.removeChild(this);
		} else if (this.y > (game.height + 100) || this.y < -100) {
			game.rootScene.removeChild(this);
		}
	},

	randomizePosition:function() {
		var game = enchant.Game.instance;
		this.y = Math.random() * game.height;
		// Generate either 1 or 0
		var randomNumber = Math.floor(Math.random()*2);
		if (randomNumber == 0) {
			// Enemy spawn from left
			this.x = -50;
		} else {
			// Enemy spawn from right
			this.x = game.width + 50;
		}
	}

});