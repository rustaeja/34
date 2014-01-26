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
		if (direction === "left" && this.scaleX > 0) {
			this.scaleX *= -1;
		}
		else if (direction === "right" && this.scaleX < 0) {
			this.scaleX *= -1;
		}
	},

	grow: function() {
        var scaleBy = 1.2;
		this.scale(scaleBy, scaleBy);
		this.movementSpeed *= scaleBy; 
	},

    kill: function() {
        // TODO Game Over
    }

});
