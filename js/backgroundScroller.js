var states = {
	SEA: 0,
	SKY: 1
};

var isTransitioning = false;
var backgroundTransitionSpeed = 3;
var backgroundScrollSpeed = 2;
var currentState = states.SEA;

var SeaBackground = enchant.Class.create(enchant.Sprite, {
	initialize:function() {
		// Load the sea image from asset
		var game = enchant.Game.instance;
		Sprite.call(this,800,600);
		this.image = game.assets["assets/background/sea.jpg"];
	},

	onenterframe:function() {
		this.x -= backgroundScrollSpeed;
		// If the background is completely at the left side of screen,
		// move it to the right
		if (this.x == -800) this.x = 800;

		// If transitioning into the next stage, slowly sink the background
		if (currentState != states.SEA) this.y += backgroundTransitionSpeed;

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
	},

	onenterframe:function() {
		this.x -= backgroundScrollSpeed;
		// If the background is completely at the left side of screen,
		// move it to the right
		if (this.x == -800) this.x = 800;

		// If transitioning into the next stage, slowly sink the background
		if (currentState == states.SKY && isTransitioning) {
			this.y += backgroundTransitionSpeed;
			if (this.y >= 0) isTransitioning = false;
		}
		// If the background is at bottom of the screen (invisible),
		// remove it from the scene
		if (this.y >= 600)
			enchant.Game.instance.rootScene.removeChild(this);
	}
});


function initSeaBackground(rootScene) {
	rootScene.addChild(new SeaBackground());
	var background2 = new SeaBackground();
	background2.x = 800;
	background2.scaleX = -1;
	rootScene.addChild(background2);
	
}

// Transition to the sky, initializing sky backgrounds
// and moving from sea into the sky
function toTheSky() {
	isTransitioning = true;
	currentState = states.SKY;
	var background1 = new SkyBackground();
	background1.y = -600;
	var background2 = new SkyBackground();
	background2.y = -600;
	background2.x = 800;
	background2.scaleX = -1;
	var scene = enchant.Game.instance.rootScene;
	scene.addChild(background1);
	scene.addChild(background2);
}