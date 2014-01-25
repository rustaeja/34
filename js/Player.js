var movementSpeed = 3.3;

var Player = enchant.Class.create(enchant.Sprite, {
	initialize: function() {
		var game = enchant.Game.instance;
		Sprite.call(this, 22, 12);
		this.image = game.assets["graphics/GreenFish.png"];
	},

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
});