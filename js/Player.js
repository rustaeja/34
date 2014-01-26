var Player = enchant.Class.create(enchant.Sprite, {
	initialize: function(spritePath, spriteWidth, spriteHeight, posX, posY, movementSpeed, frameCount) {
		var gameInstance = enchant.Game.instance;

		Sprite.call(this, spriteWidth, spriteHeight);
		this.image = gameInstance.assets[spritePath];
		this.x = posX;
		this.y = posY;
		this.movementSpeed = movementSpeed;
		this.frameCount = frameCount;
	},


	onenterframe: function() {
		this.frame = this.age % this.frameCount;
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
        alert(enchant.Game.instance.score);
        var scaleBy = 1.2;
		this.scale(scaleBy, scaleBy);
		this.movementSpeed *= scaleBy; 
	},

    kill: function() {
        // TODO Game Over
    }

});
