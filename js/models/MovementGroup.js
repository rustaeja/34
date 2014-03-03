/**
 *
 * Invariant: thist.list[0] should always be an instance of InfiniteBackground
 *
 */
var MovementGroup = enchant.Class.create(enchant.Node, {
	initialize: function() {
		this.list = [];
	},
	add: function(object) {
		this.list[this.list.length] = object;
	},
	moveLeft: function(movementSpeed) {
		for (var i = 0; i < this.list.length; i++) {
			this.list[i].moveLeft(movementSpeed);
		}
	},
	moveRight: function(movementSpeed) {
		for (var i = 0; i < this.list.length; i++) {
			this.list[i].moveRight(movementSpeed);
		}
	},
	moveDown: function(movementSpeed) {
        if (MovementGroup.prototype.willNotReachTopLimit(movementSpeed)) {
            for (var i = 0; i < this.list.length; i++) {
                this.list[i].moveDown(movementSpeed);
            }
        }
	},
	moveUp: function(movementSpeed) {
        if (MovementGroup.prototype.willNotReachBottomLimit(movementSpeed)) {
            for (var i = 0; i < this.list.length; i++) {
                this.list[i].moveUp(movementSpeed);
            }
        }
	},

});

MovementGroup.prototype.setMovementLimits = function(topLimit, bottomLimit) {
        this.bottomLimit = bottomLimit;
        this.topLimit = topLimit;
}

/**
 * Set once so that all MovementGroup instances will have matching
 * top and bottom limits relative to the main background.
 */
MovementGroup.prototype.linkMovementToBackground = function(background) {
    MovementGroup.prototype.background = background;
}

MovementGroup.prototype.willNotReachBottomLimit = function(movementSpeed) {
    return MovementGroup.prototype.background.y - movementSpeed > this.bottomLimit;
}

MovementGroup.prototype.willNotReachTopLimit = function(movementSpeed) {
    return MovementGroup.prototype.background.y + movementSpeed < this.topLimit;
}

