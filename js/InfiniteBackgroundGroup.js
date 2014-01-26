var InfiniteBackgroundGroup = enchant.Class.create(enchant.Sprite, {
	initialize: function() {
		this.backgroundArray = [];
		this.size = 0;
	},
	add: function(infiniteBackground) {
		this.backgroundArray[this.size] = infiniteBackground;
		this.size++;
	},
	moveLeft: function(movementSpeed) {
		for (var i = 0; i < this.size; i++) {
			this.backgroundArray[i].moveLeft(movementSpeed);
		}
	},
	moveRight: function(movementSpeed) {
		for (var i = 0; i < this.size; i++) {
			this.backgroundArray[i].moveRight(movementSpeed);
		}
	},
	moveDown: function(movementSpeed) {
		for (var i = 0; i < this.size; i++) {
			this.backgroundArray[i].moveDown(movementSpeed);
		}
	}
});