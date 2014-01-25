var Enemy = enchant.Class.create(enchant.Sprite, {

	initialize:function(name) {
		var game = enchant.Game.instance;
		Sprite.call(this, 39, 39);
		this.image = game.assets[name];
		//this.randomizeSize();
	},

	randomizeSize:function(){
		// Generate a random number between 0.5 and 3.5
		var randomScale = Math.random() * 3 + 0.5;
		this.scaleX = randomScale;
		this.scaleY = randomScale;
	},

	onenterframe:function() {
		this.x += 5;
		this.y += 5;
	},

	randomizePosition:function() {
		this.y = Math.random() * 600;
		// Generate either 1 or 0
		var randomNumber = Math.floor(Math.random()*2);
		if (randomNumber == 0) {
			// Enemy spawn from left
			this.x = -50;
		} else {
			// Enemy spawn from right
			this.x = 650;
		}
	}

});