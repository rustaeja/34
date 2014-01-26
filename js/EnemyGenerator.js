/*
 * Enemy Generator
 */
 
var EnemyGenerator = enchant.Class.create(enchant.Node, {
	initialize: function(enemiesMetaData, scene) {
		this.enemiesMetaData = enemiesMetaData;
		this.scene = scene;
		this.activeEnemies = [];
	},
	genEnemy: function() {
		var randomIndex = Math.floor(Math.random() * this.enemiesMetaData.length),
			gameInstance = enchant.Game.instance,
			enemy = new Enemy(this.enemiesMetaData[randomIndex], this.scene);

		this.activeEnemies.push(enemy);
		return enemy;
	},
	moveEnemies: function(movementSpeed) {
		for (var i = 0; i < this.activeEnemies.length; i++) {
			this.activeEnemies[i].x += movementSpeed;
		}
	}
});