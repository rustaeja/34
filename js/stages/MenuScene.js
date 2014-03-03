var MenuScene = enchant.Class.create(enchant.Scene, {
    initialize: function() {
		enchant.Scene.call(this);
        this.setBackground();
        this.setPlayButton();
        this.setBackgroundMusic();
	},

    setBackground: function() {
        this.background = new Background(menu_background.path, 0, 0, menu_background.width, menu_background.height);
		this.addChild(this.background);
    },
    
    setPlayButton: function() {
		this.playButton = new Label();
		this.playButton.text = PLAY_LABEL;
		this.playButton.font = '60px strong';
		this.playButton.x = 320;
		this.playButton.y = 400;

		this.addChild(this.playButton);
    },

    setBackgroundMusic: function() {
	    this.backgroundMusic = new Audio(bckgrd_music.path);
    },

});
