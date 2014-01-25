var Background = enchant.Class.create(enchant.Sprite, {
	initialize: function(spritePath) {
		var gameInstance = enchant.Game.instance;

		Sprite.call(this, gameInstance.width, gameInstance.height);
		this.image = gameInstance.assets[spritePath];
	}
});