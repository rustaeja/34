var states;

var Enemy = enchant.Class.create(enchant.Sprite, {
	initialize:function() {
		var game = enchant.Game.instance;
		Sprite.call(this, 336, 222);
		this.image = game.assets["res/fish_stage/enemies/seal.png"];
		this.randomizeSize();
		this.randomizePosition();
	},

	randomizeSize:function(){
		// Generate a random number between 0.5 and 3.5
		var randomScale = Math.random();
		this.scaleX = randomScale;
		this.scaleY = randomScale;
	},

    	onenterframe:function() {
		this.x += this.dx;
    	},

	randomizePosition:function() {
		this.y = Math.random() * 600;
		// Generate either 1 or 0
		var randomNumber = Math.floor(Math.random()*2);
		if (randomNumber == 0) {
			// Enemy spawn from left
			this.x = -50;
			this.dx = 10*Math.random();
		} else {
			// Enemy spawn from right
			this.x = 650;
			this.dx = -10*Math.random();

		}
	}

});
