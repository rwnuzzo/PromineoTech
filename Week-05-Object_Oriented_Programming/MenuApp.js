          // Class that will be used  to represent the game menu
		class GameMenu {
			constructor() {
                this.levels = [
                    { name: "Level 1", description: "Easy level" },
                    { name: "Level 2", description: "Medium level" },
                    { name: "Level 3", description: "Hard level" }
                  ];
                }
			}
      

		
        
          // Adding a game level to the menu
			addLevel(level);
				this.levels.push(level);
			

			
            
            
            // Deleting a game level from the menu
			deleteLevel(level);
				let index = this.levels.indexOf(level);
				if (index !== -1) {
					this.levels.splice(index, 1);
				}
			

			
            
            // In order to view all game levels
			viewLevels();
		        for (let i = 0; i < this.levels.length; i++) {
					let level = this.levels[i];
					let li = document.createElement("li");
				}
			
		  //     A class that could be used to store settings for the game.  
          class GameSettings {
            constructor() {
                this.settings = [];
            }
        }

		
        
        
                // here is how you could add new settings to the game
        let settings = new Settings();

        let graphicsQuality = new GameSettings();
		gameSettings.addSettings(graphicsQuality);

		// Here is how you could add game levels

        let gameMenu = new GameMenu();
        gameMenu.viewLevels();
	
        let level4 = new GameLevel("Level 4", "expert");
		gameMenu.addLevel(level3);
        
		// In order to view the game menu
		gameMenu.viewLevels();

		// In order to delete a game level
		gameMenu.deleteLevel(level2);

		