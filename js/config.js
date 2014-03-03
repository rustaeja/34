// Screen Config
var SCREEN_WIDTH = 800;
var SCREEN_HEIGHT = 600;
var FPS = 30;

// String Definitions
var SCORE_LABEL = "Score: ";
var LEVEL_LABEL = "Level: ";
var PLAY_LABEL = "PLAY";

var LEVEL_1_STRING = "1 - Sea";
var LEVEL_2_STRING = "2 - Sky";

var SCORE_COLOR = "white";
var LEVEL_COLOR = "white";

// Dimensions
var PLAYER_SEA_SCALE = 0.1;
var PLAYER_SEA_MOVEMENTSPEED = 8;

var PLAYER_TOP_MOVEMENT_MARGIN = 100;
var PLAYER_BOTTOM_MOVEMENT_MARGIN = 50;

var BACKGROUND_SEA_TOP_LIMIT = -game_background.height/2 - 150;
var BACKGROUND_SEA_BOTTOM_LIMIT = -game_background.height + SCREEN_HEIGHT;

var SEA_ENEMIES_COUNT = 10;

print = function(msg) {
    console.log(msg);
}
