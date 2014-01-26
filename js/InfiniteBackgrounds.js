var InfiniteBackground = enchant.Class.create(enchant.Sprite, {
	initialize: function(mainBackground, rightBackground) {
		var backGrounds = new Array();

		backGrounds[0] = mainBackground;
		backGrounds[1] = rightBackground;

		this.backGrounds = backGrounds;
		this.y = backGrounds[0].y;
		this.height = backGrounds[0].height;
	},
	moveLeft: function(movementSpeed) {
		var gameInstance = enchant.Game.instance,
			backGrounds = this.backGrounds;

		backGrounds[0].x -= movementSpeed;
		backGrounds[1].x -= movementSpeed;

		if (backGrounds[0].x <= -backGrounds[0].width) {
			backGrounds[0].x = backGrounds[1].x + backGrounds[1].width;
			var temp = backGrounds[0];
			backGrounds[0] = backGrounds[1];
			backGrounds[1] = temp;
		}
	},
	moveRight: function(movementSpeed) {
		var gameInstance = enchant.Game.instance,
			backGrounds = this.backGrounds;

		backGrounds[0].x += movementSpeed;
		backGrounds[1].x += movementSpeed;

		if (backGrounds[0].x >= 0) {
			backGrounds[1].x = backGrounds[0].x - backGrounds[0].width;
			var temp = backGrounds[0];
			backGrounds[0] = backGrounds[1];
			backGrounds[1] = temp;
		}
	},
	moveDown: function(movementSpeed) {
		var backGrounds = this.backGrounds;

		backGrounds[0].y += movementSpeed;
		backGrounds[1].y += movementSpeed;
		this.y = backGrounds[0].y;
	},
	moveUp: function(movementSpeed) {
		var backGrounds = this.backGrounds;

		backGrounds[0].y -= movementSpeed;
		backGrounds[1].y -= movementSpeed;
		this.y = backGrounds[0].y;
	}
});
