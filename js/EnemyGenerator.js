/*
 * Enemy Generator
 */
 
 var EnemyGenerator = (function(){
 
	var enemyArray = [];

	function initialize(enemies) {
		var enemie = [fishie_player_small, fishie_enemy_small];
		for(var i=0,len=enemies.length; i < len; i++) {
			var e = new Enemy(enemies[i]);
			enemyArray.push(e);
		}
	}
	function generateEnemy() {
		var game = enchant.Game.instance;
		game.rootScene.addChild(enemyArray[1]);
	}
	
	return {
		init: function(en){
			initialize(en);
		},
		genEnemy: function(){
			generateEnemy();
		}
	};
})();