/*
 * Enemy Generator
 */
 
 function EnemyGenerator(enemies){
 
	this.enemyArray = [];

	for(var i=0,len=enemies.length; i < len; i++) {
		var e = new Enemy(enemies[i]);
		this.enemyArray.push(e);
	}

	this.genEnemy = function() {
		var game = enchant.Game.instance;
		game.rootScene.addChild(this.enemyArray[1]);
	}
}