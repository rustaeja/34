/* 
* Background
*/

var b1 = {
path: "images/b1.png",
    height: 600,
    width: 800,
}
var b2 = {
    path: "images/b2.png",
    height: 600,
    width: 800,
}

var menu_bckgrd = {
    path: "images/menu/menu.jpg",
    height: 600,
    width: 800,
}

var control_instr = {
    path: "images/menu/controls.png",
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
    path: "images/fish_stage/player.png",
    height: 321,
    width: 600,
    dir: "chase",
    minScale: 0.05,
    maxScale: 0.4
}

var fishie_enemy_medium_fish = {
    path: "images/fish_stage/enemies/herring.png",
    height: 159,
    width: 600,
    dir: "horizontal",
    minScale: 0.05,
    maxScale: 0.4
}

var fishie_enemy_seal = {
    path: "images/fish_stage/enemies/seal.png",
    height: 396,
    width: 600,
    dir: "chase",
    minScale: 0.1,
    maxScale: 0.5
}

var fishie_enemy_small = {
    path: "images/fish_stage/enemies/salmon_fry_animate.png",
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
    path: "images/bird_stage/player.png",
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
    path: "audio/fish_stage_loop.mp3",
}

var fish_eat_sound = {
    path: "audio/fish_eaten.mp3",
}
