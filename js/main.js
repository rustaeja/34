// Exporting enchant.js class to global namespace.
enchant();

window.onload = function() {
	var game = new GameStateMachine();
	game.start();
};


function showControl() {
	var game = enchant.Game.instance;
	var control = new Sprite(250, 173);
	control.image = game.assets[control_instr.path];
	control.x = control_instr.width;
	control.y = control_instr.height;
	game.rootScene.addChild(control);
	control.tl.fadeOut(60).then(function(){
		game.rootScene.removeChild(control);
	});
}
