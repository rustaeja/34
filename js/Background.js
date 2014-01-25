var Background = enchant.Class.create(enchant.Sprite, {
	initialize: function(imagePath) {
		var gameInstance = enchant.Game.instance;

		Sprite.call(this, 800, 600);
		this.image = gameInstance.assets[imagePath];
	}
});