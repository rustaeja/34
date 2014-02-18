var Background = enchant.Class.create(enchant.Sprite, {
	initialize: function(spritePath, posX, posY, width, height) {
		var gameInstance = enchant.Game.instance;

		Sprite.call(this, width, height);
		this.image = gameInstance.assets[spritePath];
		this.x = posX;
		this.y = posY;
	}
});
