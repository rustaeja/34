/*
 * Enemy Generator
 */
 
var EnemyGenerator = enchant.Class.create(enchant.Node, {
	initialize: function(enemiesMetaData, scene) {
		this.enemiesMetaData = enemiesMetaData;
		this.scene = scene;

		this.enemyType = [];
		this.enemyActive = [];
	},
	genEnemy: function() {
		var randomIndex = Math.floor(Math.random() * this.enemiesMetaData.length),
			gameInstance = enchant.Game.instance,
			enemy = new Enemy(this.enemiesMetaData[randomIndex], this.scene);

		this.enemyActive.push(enemy);
		return enemy;
	}
});