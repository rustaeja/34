/*
 * Fishie Stage
 */
 
var fishie_player_small = {
							path: "images/fish_stage/enemies/salmon_alevin.png",
							height: 157,
							width: 600,
                            dir: "chase",
							minScale: 0.01,
							maxScale: 0.3
						  }
var fishie_enemy_medium_fish = {
							path: "images/fish_stage/enemies/herring.png",
							height: 159,
							width: 600,
                            dir: "vertical",
							minScale: 0.1,
							maxScale: 0.4
						       }
var fishie_enemy_seal = {
							path: "images/fish_stage/enemies/seal.png",
							height: 396,
							width: 600,
                            dir: "chase",
							minScale: 0.4,
							maxScale: 0.8
						 }
var fishie_enemy_small = {
							path: "images/fish_stage/enemies/salmon_fry_animate.png",
							height: 300,
							width: 600,
                            dir: "horizontal",
							minScale: 0.02,
							maxScale: 0.2
						 }

fishie_enemies = [fishie_enemy_small, fishie_enemy_seal, fishie_enemy_medium_fish, fishie_player_small];	
