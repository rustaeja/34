/*
 * Enemy Controller
 */
 
var EnemyController = enchant.Class.create(enchant.Node, {
	initialize: function(enemiesMetaData, scene, topLimit) {
		var me = this;

		me.enemiesMetaData = enemiesMetaData;
		me.scene = scene;
		me.activeEnemies = [];
        me.maxEnemies = 20;
        me.topLimit = topLimit;
        me.replaceEnemyCallback = function(enemy) {
        	me.scene.removeChild(enemy);
    		me.scene.addChild(me.replaceEnemy(enemy));
    	};
	},
	genEnemy: function() {
		var me = this,
			randomIndex = Math.floor(Math.random() * me.enemiesMetaData.length),
			gameInstance = enchant.Game.instance,
			enemy = new Enemy(me.enemiesMetaData[randomIndex], me.scene, me.replaceEnemyCallback);
			enemy.randomizePosition(me.topLimit);

		me.activeEnemies.push(enemy);

		return enemy;
	},
    replaceEnemy: function(enemy) {
    	var me = this,
    		randomIndex = Math.floor(Math.random() * me.enemiesMetaData.length),
        	index = me.activeEnemies.indexOf(enemy),
        	newEnemy = new Enemy(me.enemiesMetaData[randomIndex], me.scene, me.replaceEnemyCallback);
			newEnemy.randomizePosition(me.topLimit);

		me.activeEnemies[index] = newEnemy;

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
	},
	makeEnemiesMove: function() {
		for (var i = 0; i < this.activeEnemies.length; i++) {
			this.activeEnemies[i].move(this.topLimit);
		}
	},

	removeSea:function() {
		for (var i = 0; i < this.activeEnemies.length; i++) {
			this.scene.removeChild(this.activeEnemies[i]);
		}
	},

	moveDown:function(movementSpeed) {
		for (var i = 0; i < this.activeEnemies.length; i++) {
			this.activeEnemies[i].y += movementSpeed;
		}
	}
});
