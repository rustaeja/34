var InfiniteBackground = enchant.Class.create(enchant.Node, {
	initialize: function(mainBackground, rightBackground) {
		var backgrounds = new Array();

		backgrounds[0] = mainBackground;
		backgrounds[1] = rightBackground;

		this.backgrounds = backgrounds;
		this.y = backgrounds[0].y;
		this.height = backgrounds[0].height;
	},
	moveLeft: function(movementSpeed) {
		var gameInstance = enchant.Game.instance,
			backgrounds = this.backgrounds;

		backgrounds[0].x -= movementSpeed;
		backgrounds[1].x -= movementSpeed;

		if (backgrounds[0].x <= -gameInstance.width) {
			backgrounds[0].x = backgrounds[1].x + backgrounds[1].width;
			var temp = backgrounds[0];
			backgrounds[0] = backgrounds[1];
			backgrounds[1] = temp;
		}
	},
	moveRight: function(movementSpeed) {
		var gameInstance = enchant.Game.instance,
			backgrounds = this.backgrounds;

		backgrounds[0].x += movementSpeed;
		backgrounds[1].x += movementSpeed;

		if (backgrounds[0].x >= 0) {
			backgrounds[1].x = backgrounds[0].x - backgrounds[0].width;
			var temp = backgrounds[0];
			backgrounds[0] = backgrounds[1];
			backgrounds[1] = temp;
		}
	},
	moveDown: function(movementSpeed) {
		var backgrounds = this.backgrounds;

		backgrounds[0].y += movementSpeed;
		backgrounds[1].y += movementSpeed;
		this.y = backgrounds[0].y;
	},
	moveUp: function(movementSpeed) {
		var backgrounds = this.backgrounds;

		backgrounds[0].y -= movementSpeed;
		backgrounds[1].y -= movementSpeed;
		this.y = backgrounds[0].y;
	}
});