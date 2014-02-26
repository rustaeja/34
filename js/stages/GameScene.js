var GameScene = enchant.Class.create(enchant.Scene, {
	initialize: function() {
		Scene.call(this);

        var background = new Background(game_background.path,
            game_background.width, game_background.height);

		this.addChild(background);
	}
});
