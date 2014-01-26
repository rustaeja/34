/*
 * Enemy Generator
 */
 
 function EnemyGenerator(enemies){
 
	this.enemyArray = [];

	for(var i=0,len=enemies.length; i < len; i++) {
		var e = new Enemy(enemies[i].path);
		this.enemyArray.push(enemies[i]);
	}

	this.genEnemy = function() {
		var randomIndex = Math.floor(Math.random()*this.enemyArray.length);
		var game = enchant.Game.instance;
		var e = new Enemy(this.enemyArray[randomIndex].path);
		game.rootScene.addChild(e);
	}
}