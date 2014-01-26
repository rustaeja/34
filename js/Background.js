var Background = enchant.Class.create(enchant.Sprite, {
	initialize: function(spritePath, posX, posY) {
		var gameInstance = enchant.Game.instance;

		Sprite.call(this, gameInstance.width, gameInstance.height);
		this.image = gameInstance.assets[spritePath];
		this.x = posX;
		this.y = posY;
	}
});