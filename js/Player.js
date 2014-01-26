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
			if (this.scaleX > 0)
			this.scaleX *= -1;
		}
		else {
			if (this.ScaleX < 0)
			this.scaleX *= 1;
		}
	},

	grow: function() {
		this.scale(1.5, 1.5);
		this.movementSpeed *= 1.5
	}

});
