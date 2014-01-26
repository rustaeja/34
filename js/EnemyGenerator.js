/*
 * Enemy Generator
 */
 
var EnemyGenerator = enchant.Class.create(enchant.Node, {
	initialize: function(enemiesMetaData, scene) {
		var me = this;

		this.enemiesMetaData = enemiesMetaData;
		this.scene = scene;
		this.activeEnemies = [];
        this.maxEnemies = 20;
        this.replaceEnemyCallback = function(enemy) {
	        	me.scene.removeChild(enemy);
        		me.scene.addChild(me.replaceEnemy(enemy));
        	};
	},
	genEnemy: function() {
		var me = this,
			randomIndex = Math.floor(Math.random() * this.enemiesMetaData.length),
			gameInstance = enchant.Game.instance,
			enemy = new Enemy(this.enemiesMetaData[randomIndex], this.scene, this.replaceEnemyCallback);

		this.activeEnemies.push(enemy);

		return enemy;
	},
    replaceEnemy: function(enemy) {
    	var me = this,
    		randomIndex = Math.floor(Math.random() * this.enemiesMetaData.length),
        	index = this.activeEnemies.indexOf(enemy),
        	newEnemy = new Enemy(this.enemiesMetaData[randomIndex], this.scene, this.replaceEnemyCallback);

		this.activeEnemies.push(newEnemy);

        return newEnemy;
    },
	moveEnemies: function(direction, movementSpeed) {
		for (var i = 0; i < this.activeEnemies.length; i++) {
			if (direction === "horizontal") {
				this.activeEnemies[i].x += movementSpeed;
			}
			else {
				this.activeEnemies[i].y += movementSpeed;
			}
		}
	}
});
