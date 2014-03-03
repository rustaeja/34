/*
 * Enemy Factory 
 */
 
var EnemyFactory = enchant.Class.create(enchant.Node, {
	initialize: function() {
    }

});

EnemyFactory.prototype.generateSeaEnemy = function() {
    var randomIndex = Math.floor(Math.random() * fishie_enemies.length);
    var enemy = new Enemy(fishie_enemies[randomIndex]);

    var randomSpawn = Math.floor(Math.random() * 2);

    enemy.x = randomSpawn == 0 ? -SCREEN_WIDTH/2 : SCREEN_WIDTH + SCREEN_WIDTH/2;
    enemy.y = Math.random() * SCREEN_HEIGHT - 200; 

    return enemy;
};











