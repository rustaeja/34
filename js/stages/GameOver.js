var LoseState = {
	SEA: 0,
	SKY: 1
};

var GameOver = enchant.Class.create(enchant.Scene, {
	initialize:function() {
		var game = enchant.Game.instance;
		Scene.call(this);
		var background = new Sprite(800, 600);
		background.image = game.assets["res/fish_stage/fishSkeleton.png"];
		this.addChild(background);
		this.addEventListener(enchant.Event.INPUT_START, function() {
			game.popScene(this);
			var menuBackground = new Background("res/menu.jpg", 0, 0);
        	game.pushScene(new MenuScene(menuBackground, "PLAY"));
		});
	}



});