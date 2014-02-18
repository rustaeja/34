var InfiniteBackgroundGroup = enchant.Class.create(enchant.Node, {
	initialize: function() {
		this.list = [];
		this.size = 0;
	},
	add: function(infiniteBackground) {
		this.list[this.size] = infiniteBackground;
		this.size++;
	},
	moveLeft: function(movementSpeed) {
		for (var i = 0; i < this.size; i++) {
			this.list[i].moveLeft(movementSpeed);
		}
	},
	moveRight: function(movementSpeed) {
		for (var i = 0; i < this.size; i++) {
			this.list[i].moveRight(movementSpeed);
		}
	},
	moveDown: function(movementSpeed) {
		for (var i = 0; i < this.size; i++) {
			this.list[i].moveDown(movementSpeed);
		}
	},
	moveUp: function(movementSpeed) {
		for (var i = 0; i < this.size; i++) {
			this.list[i].moveUp(movementSpeed);
		}
	}
});