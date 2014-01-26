var SkyController = enchant.Class.create(enchant.Entity, {

	initialize:function(scene, enemyNumLimit) {
		this.enemyNumLimit = enemyNumLimit;
		this.scene = scene;
		this.enemies = [];
		
		// this.addEventListener(Event.ENTER_FRAME, function() {

		// 	alert("here");
		// 	this.checkDeadEnemies();

		// 	for (var i = 0; i < this.enemies.length; i++) {
		// 		this.enemies[i].update();
		// 	}
		// });
	}, 

	update:function() {

		if (this.enemies.length === 0) {
			//Add the first enemy somewhere
			var first = new SkyEnemy("eagle.png", 70, 83);
			this.enemies.push(first);
			this.scene.addChild(first);
		}

		this.checkDeadEnemies();

			for (var i = 0; i < this.enemies.length; i++) {
				this.enemies[i].update();
		}
	},

	stopGenerating:function() {

	},

	checkDeadEnemies:function() {
		for (var i = 0; i < this.enemies.length; i++) {
			if (this.enemies[i].isDead) {
				this.enemies[i].init();
				if (this.enemies.length < this.enemyNumLimit) {
					var eagle = new SkyEnemy("eagle.png", 70, 83);
					this.scene.addChild(eagle);
					this.enemies.push(eagle);
				}
			}
		}
	}

});
