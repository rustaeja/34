/*
 * Enemy Generator
 */
 
var EnemyGenerator = enchant.Class.create(enchant.Node, {
	initialize: function(enemiesMetaData, scene) {
		this.enemiesMetaData = enemiesMetaData;
		this.scene = scene;
		this.activeEnemies = [];
        this.maxEnemies = 100;
	},
	genEnemy: function() {
		var randomIndex = Math.floor(Math.random() * this.enemiesMetaData.length),
			gameInstance = enchant.Game.instance,
			enemy = new Enemy(this.enemiesMetaData[randomIndex], this.scene, this);

    		this.activeEnemies.push(enemy);
		return enemy;
	},
    replaceEnemy: function(enemy) {
		randomIndex = Math.floor(Math.random() * this.enemiesMetaData.length),
        index = this.activeEnemies.indexOf(enemy);
        newEnemy = new Enemy(this.enemiesMetaData[randomIndex], this.scene, this); 
        this.activeEnemies[index] = newEnemy;
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
    onEnemyDied: function(enemy) {
        this.scene.removeChild(enemy);
        this.scene.addChild(this.replaceEnemy(enemy));
    }
});
