
var background1;
var background2;

var SeaBackground = enchant.Class.create(enchant.Sprite, {
	initialize:function() {
		var game = enchant.Game.instance;
		Sprite.call(this,800,600);
		this.image = game.assets["assets/background/sea.jpg"];
	},

	onenterframe:function() {
		this.x -= 2;
		if (this.x == -800) this.x = 800;
	}


});

var SkyBackground = enchant.Class.create(enchant.Sprite, {
	initialize:function() {
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

}