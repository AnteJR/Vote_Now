# Vote now!
This is a game created in the context of a university programming class called "2D Video Games", supervised by Isaac Pante at the University of Lausanne. In this course, we learned to use Kaboom.JS, which I am using for this project.

I own all of the visual and audio assets except for the font.

Vote Now! is a minimal strategy game. The premise of the game is that you play as a political party aiming to pass or stop a bill from being inacted in Switzerland by propagandizing to influence voters' opinions. The game plays kind of like Reigns, as in you have a choice of 2 actions at a time that you can pick from. The game will work using 3 main variables.

* Money. This determines if you can buy campaign materials. It can be earned by asking for donations from voters or sponsors.
* Opinion/votes. This determines how much in your favor the vote is going. From 0 (no voting intentions in your favor) to 100 (all voting intentions to your favor), it will be influenced by purchasing add-space, distributing flyers and organizing events.
* Image/optics. This determines if your party's image is in good shape or not. Currently, only one event can tarnish your image: organizing a protest in front of the Federal Parliament.

## Developper journal
### From 25.06 to 25.07 (about 20 hours)
Most of this period has been dedicated to create most of the graphical elements using Aseprite to draw and GIMP to format the tilemaps. All is not done yet, as I want to have a menu, as well as a visual presentation/overlay to make the game feel like a whole. Plans have also been made to vary the elements' lighting to add variety, though this will come a later stage if I have time. Basic tiling and mapping of the textures as animations has been done, and basic placement of the visual for prototyping has developped.

### 02.08 (about 7 hours)
Basic game system and scenario mechanics is done. The game is technically operationnal. More options to the sprites' lighting for more variety. Better sprite system with a file and a loadSpriteAtlas() for each animations. Still needs:

* More scenarios (currently one)
* Make hovers work.
* A start screen and a menu
* An end screen
* Canvas centering in the middle of the page