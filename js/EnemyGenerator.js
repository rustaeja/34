/*
 * Enemy Generator
 */
 
function EnemyGenerator(enemies){

	this.enemyType = [];
	this.enemyActive = [];

	for(var i=0,len=enemies.length; i < len; i++) {
		var e = new Enemy(enemies[i].path);
		this.enemyType.push(enemies[i]);
	}

	this.genEnemy = function() {
		var randomIndex = Math.floor(Math.random()*this.enemyType.length);
		var game = enchant.Game.instance;
		var e = new Enemy(this.enemyType[randomIndex].path);
		this.enemyActive.push(e);
		game.rootScene.addChild(e);
	}
}