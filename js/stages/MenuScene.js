var MenuScene = enchant.Class.create(enchant.Scene, {
	initialize: function() {
		Scene.call(this);

        var menuBackground = new Background(menu_background.path,
            menu_background.width, menu_background.height);

		this.playButton = new Label();

		playButton.text = PLAY_LABEL;
		playButton.font = '60px strong';
		playButton.x = 320;
		playButton.y = 400;

		this.addChild(background);
		this.addChild(playButton);
	}
});
