var Player = enchant.Class.create(enchant.Sprite, {
	initialize: function(spritePath, spriteWidth, spriteHeight, posX, posY, movementSpeed, frameCount) {
		var gameInstance = enchant.Game.instance;

		Sprite.call(this, spriteWidth, spriteHeight);
		this.image = gameInstance.assets[spritePath];
		this.x = posX;
		this.y = posY;
		this.movementSpeed = movementSpeed;
		this.frameCount = frameCount;
        this.scale(1, 1);
	},


	onenterframe: function() {
		this.frame = this.age % this.frameCount;
	},

	look: function(direction) {
		if (direction === "left" && this.scaleX < 0) {
			this.scaleX *= -1;
		}
		else if (direction === "right" && this.scaleX > 0) {
			this.scaleX *= -1;
		}
	},

	grow: function() {
        if (Math.abs(this.scaleY) < 6) {
            var scaleBy = 1.1;
	    	this.scale(scaleBy, scaleBy);
		    this.movementSpeed *= scaleBy; 
        }
	},

    kill: function() {
        window.alert("Game Over");
    }

});
