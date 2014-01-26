/*
 * Enemy Generator
 */
 
var EnemyGenerator = enchant.Class.create(enchant.Node, {
	initialize: function(enemiesMetaData, scene) {
		this.enemiesMetaData = enemiesMetaData;
		this.scene = scene;
		this.activeEnemies = [];
        this.maxEnemies = 20;
	},
	genEnemy: function() {
		var me = this,
			randomIndex = Math.floor(Math.random() * this.enemiesMetaData.length),
			gameInstance = enchant.Game.instance,
			enemy = new Enemy(this.enemiesMetaData[randomIndex], this.scene, function(enemy) {
	        	me.scene.removeChild(enemy);
        		me.scene.addChild(me.replaceEnemy(enemy));
        	});

    		this.activeEnemies.push(enemy);
		return enemy;
	},
    replaceEnemy: function(enemy) {
    	var me = this,
    		randomIndex = Math.floor(Math.random() * this.enemiesMetaData.length),
        	index = this.activeEnemies.indexOf(enemy),
        	newEnemy = new Enemy(this.enemiesMetaData[randomIndex], this.scene, function(enemy) {
				me.scene.removeChild(enemy);
				me.scene.addChild(me.replaceEnemy(enemy));
			});

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
