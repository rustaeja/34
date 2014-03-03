var GameOverScene = enchant.Class.create(enchant.Scene, {
	initialize: function() {
		Scene.call(this);

		var game = enchant.Game.instance;
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
