var Player = enchant.Class.create(enchant.Sprite, {
	initialize: function(spritePath, spriteWidth, spriteHeight, posX, posY, movementSpeed, frameCount) {
		var gameInstance = enchant.Game.instance;

		Sprite.call(this, spriteWidth, spriteHeight);
        this.originX = this.width/2;
        this.originY = this.height/2;
		this.image = gameInstance.assets[spritePath];
		this.movementSpeed = movementSpeed;
		this.frameCount = frameCount;
		this.x = posX - this.originX;
		this.y = posY - this.originY;
        this.scale(0.1, 0.1);
	},


	onenterframe: function() {
        framesToWait = 3;
		this.frame = Math.floor(this.age / framesToWait) % this.frameCount;
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
        if (Math.abs(this.scaleY) < 0.8) {
            var scaleBy = 1.1;
	    	this.scale(scaleBy, scaleBy);
		    this.movementSpeed *= scaleBy; 
        }
	},

    kill: function() {
        window.alert("Game Over");
    },

    getScaledX: function() {
        return this.x + this.originX;
    },

    getScaledY: function() {
        return this.y + this.originY;
    },

    getScaledHeight: function() {
        return this.height*this.scaleY;
    }


});
