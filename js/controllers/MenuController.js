var MenuController = enchant.Class.create({
	initialize: function(game, scene) {
        this.game = game;
        this.scene = scene;  
        this.setListeners();

        this.start();
    },	

    setListeners: function() {
        var showControls = this.showControls;
        var game = this.game;
        var scene = this.scene;

        scene.playButton.addEventListener(enchant.Event.TOUCH_END, function() {
            game.changeState(States.SEA);
            showControls(game);
        });

    	scene.backgroundMusic.addEventListener('ended', function() {
		    this.currentTime = 0;
		    this.play();
	    }, false);
    },

    showControls: function(game) {
        var scene = game.currentScene;
        var control = new Sprite(250, 173);

        control.image = game.assets[control_instr.path];
        control.y = SCREEN_HEIGHT * 2 / 3;

        scene.addChild(control);
        control.tl.fadeOut(60).then( function() {
            scene.removeChild(control);
	    });
    },

    start: function() {
		this.scene.backgroundMusic.play();
    }
});
