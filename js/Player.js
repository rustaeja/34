
var Player = enchant.Class.create(enchant.Sprite, {
	initialize: function() {
		var game = enchant.Game.instance;
		Sprite.call(this, 32, 32);
		this.image = game.assets["assets/player/fish.png"];
	}
});