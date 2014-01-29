/* 
* Background
*/

var b1 = {
path: "res/b1.png",
height: 600,
width: 800,
}
var b2 = {
path: "res/b2.png",
height: 600,
width: 800,
}

var menu_bckgrd = {
path: "res/menu.jpg",
height: 600,
width: 800,
}

var control_instr = {
path: "res/control.png",
height: 200,
width: 300,
}


/*
 * Fonts
 */

var font_color = "white";
var font = "20px strong";


/*
* Fishie Stage
*/

var fishie_player = {
path: "res/fish_stage/player/pinkfish.png",
height: 321,
width: 600,
dir: "chase",
minScale: 0.05,
maxScale: 0.4
}
var fishie_enemy_medium_fish = {
path: "res/fish_stage/enemies/herring.png",
height: 159,
width: 600,
dir: "vertical",
minScale: 0.05,
maxScale: 0.4
}
var fishie_enemy_seal = {
path: "res/fish_stage/enemies/seal.png",
height: 396,
width: 600,
dir: "chase",
minScale: 0.1,
maxScale: 0.5
}
var fishie_enemy_small = {
path: "res/fish_stage/enemies/salmon_fry_animate.png",
height: 300,
width: 600,
dir: "horizontal",
minScale: 0.02,
maxScale: 0.2
}

fishie_enemies = [fishie_enemy_small, fishie_enemy_seal, fishie_enemy_medium_fish];	


/*
* Bird Stage
*/

var bird_player = {
path: "eagle.png",
height: 83,
width: 70,
dir: "horizontal",
minScale: 0.2,
maxScale: 1.2
}

bird_enemies = [bird_player];


/*
* Noise
*/

var bckgrd_music = {
path: "sound/tangent_loop.mp3",
}

var fish_eat_sound = {
path: "sound/fishEat.mp3",
}
