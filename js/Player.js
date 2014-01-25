var Player = enchant.Class.create(enchant.Sprite, {
	initialize: function(spritePath, spriteWidth, spriteHeight, posX, posY, movementSpeed) {
		var gameInstance = enchant.Game.instance;

		Sprite.call(this, spriteWidth, spriteHeight);
		this.image = gameInstance.assets[spritePath];
		this.x = posX;
		this.y = posY;
		this.movementSpeed = movementSpeed;
	},

	look: function(direction) {
		if (direction === "left") {
			this.scaleX = -1;
		}
		else {
			this.scaleX = 1;
		}
	}

/*
	onenterframe: function() {
		var game = enchant.Game.instance;
		if (game.input.left) {
			this.x -= movementSpeed;
			this.scaleX = 1;
		}
  	    if (game.input.right) {
  	    	this.x += movementSpeed;
  	    	this.scaleX = -1;
  	    }
  	    if (game.input.up) this.y -= movementSpeed;
  	    if (game.input.down) this.y += movementSpeed;
	}
	*/
});
