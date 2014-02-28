var MenuScene = enchant.Class.create(enchant.Scene, {
	initialize: function() {
		Scene.call(this);

        var background = new Background(menu_background.path,
            menu_background.width, menu_background.height);

		this.playButton = new Label();

		this.playButton.text = PLAY_LABEL;
		this.playButton.font = '60px strong';
		this.playButton.x = 320;
		this.playButton.y = 400;

		this.addChild(background);
		this.addChild(this.playButton);
	}
});
