var Player = enchant.Class.create(enchant.Sprite, {
	initialize: function(spritePath, spriteWidth, spriteHeight, 
                    posX, posY) {

		Sprite.call(this, spriteWidth, spriteHeight);
		this.image = enchant.Core.instance.assets[spritePath];

        this.originX = this.width/2;
        this.originY = this.height/2;

		this.x = posX - this.originX;
		this.y = posY - this.originY;

		this.movementSpeed = PLAYER_SEA_MOVEMENTSPEED;
		this.gravity = 0;
        this.scale(PLAYER_SEA_SCALE, PLAYER_SEA_SCALE);
	},

    setGravity: function(gravity) {
        this.gravity = gravity;
    },

    setAnimationFrames: function(frames) {
		this.frames = frames;
    },

	onenterframe: function() {
        framesToWait = 3;
		this.frame = Math.floor(this.age / framesToWait) % this.frames;
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
        print("Game Over");
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
