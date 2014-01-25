
var background1;
var background2;
var isTransitioning = false;

var SeaBackground = enchant.Class.create(enchant.Sprite, {
	initialize:function() {
		// Load the sea image from asset
		var game = enchant.Game.instance;
		Sprite.call(this,800,600);
		this.image = game.assets["assets/background/sea.jpg"];
	},

	onenterframe:function() {
		this.x -= 2;
		// If the background is completely at the left side of screen,
		// move it to the right
		if (this.x == -800) this.x = 800;

		// If transitioning into the next stage, slowly sink the background
		if (isTransitioning) this.y += 6;

		// If the background is at bottom of the screen (invisible),
		// remove it from the scene
		if (this.y >= 600)
			enchant.Game.instance.rootScene.removeChild(this);
	}


});

var SkyBackground = enchant.Class.create(enchant.Sprite, {
	initialize:function() {
		// load the sky image from background
		var game = enchant.Game.instance;
		Sprite.call(this, 800, 600);
		this.image = game.assets["assets/background/sky.jpg"];
	}
});

function getSeaBackground() {
	if (background1 == null) {
		background1 = new SeaBackground();
		return background1;
	} else {
		background2 = new SeaBackground();
		background2.x = background1.x + background1.width;
		background2.scaleX = -1;
		return background2;
	}
	
}

// Transition to the sky, to be implemented
function toTheSky() {
	isTransitioning = true;
}