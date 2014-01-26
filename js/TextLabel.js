var TextLabel = enchant.Class.create(enchant.Sprite, {
	initialize: function() { // initialize the class (constructor)
 
     	var scoreLabel = new Label("Score: "), 
     	    scoreLabel.x = screenWidth / 2,
     	    scoreLabel.y = 5, 
     	    scoreLabel.color = "white";

        scoreLabel.addEventListener('enterframe', function() {
            this.text = "Score: " + game.Score;
        });

        var levelLabel = new Label("Level: "),
            levelLabel.x = 10,
            levelLabel.y = 5,
            levelLabel.color = "white";

        levelLabel.addEventListener('enterframe', function() {
            this.text = "Level: " + game.Score;
        });
	
	}
});
   



