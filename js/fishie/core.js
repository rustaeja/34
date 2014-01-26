/*
 * Fishie Stage
 */
 
var fishie_player_small = {
							path: "res/fish_stage/player/GreenFish.png",
							height: 12,
							width: 22,
                            dir: "chase",
							minScale: 0.1,
							maxScale: 0.8
						  }
var fishie_enemy_medium_fish = {
							path: "res/fish_stage/enemies/salmon_fry.png",
							height: 100,
							width: 200,
                            dir: "vertical",
							minScale: 0.3,
							maxScale: 0.8
						       }
var fishie_enemy_seal = {
							path: "res/fish_stage/enemies/seal.png",
							height: 128,
							width: 194,
                            dir: "chase",
							minScale: 0.5,
							maxScale: 1
						 }
var fishie_enemy_small = {
							path: "res/fish_stage/enemies/fishbaddie_parts.png",
							height: 50,
							width: 50,
                            dir: "horizontal",
							minScale: 0.1,
							maxScale: 0.4
						 }

fishie_enemies = [fishie_player_small, fishie_enemy_small, fishie_enemy_seal, fishie_enemy_medium_fish];	
