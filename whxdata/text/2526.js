rh._.exports({"0":[[" ","Game Options"]],"1":[["Game Options"]],"2":[["Game Options,Options"]],"3":[[" ","Game Options"]],"4":[[" ","The Game Options are split into two sections, Main Options and the Platform Settings. The main options start with the ","General"," options, which is where you can set certain things that will affect the game regardless of the platform that it is being designed to run on."," ","The window has the following sections:"," ","Default scripting language",": Choose whether Objects events and Scripts in the current project should use ","GML Code"," or ","GML Visual",", or whether it should always ask on creating a new script."," ","Game Frames Per Second",": This value sets the limit on the number of frames per-second that ","GameMaker"," should try to maintain your games when running. This value represents the number of times that the game loop will run in one second (a single game loop is considered a single \"frame\") and is set to a default value of 60, although 30 is often used too. There are many arguments about which room speed is the ideal, but the actual answer depends on what type of game you are making, the size of the room, the number of instances and how intensive the code is. For example, if you have a large room and a room speed of 30, the game may appear \"choppy\" as the larger the area you are looking at, the easier it is for the eye to perceive low room speeds, but if the game is intensive then setting the room speed to 120 may cause the game to \"lag\" as the fps drops due to the amount of processing being done. So take care with this value and try to always adjust it to what your game needs."," ","Default Draw Colour",": The default colour for drawing text or forums (and other things) when no colour has been set using code."," ","Default Draw Colour Outside the room region",": The default colour that will be used to clear the background of any area outside of the game room."," ","Generate Project Images",": Clicking this will open the Project Image Generator tool."," ","Project Start Date",": The date that the project was initiated."," ","Project Use Time",": The length of time that has passed since you initiated the project."," ","Project GUID",": This is the unique identifier that is created for each project within ","GameMaker",". If you wish to change this you can click the Create New GUID button to generate a new one."," ","Generate mipmaps for separate texture pages",": This option will have ","GameMaker"," create mipmaps for those sprites that have flagged the Seperate Texture Page option in the Texture settings of the Sprite Editor. Enabling mipmapping means that the original texture page for the sprite is to be scaled and filtered into multiple resolutions within the texture file. This is normally off, but if you are using views to zoom in or out on large areas of the game room, or you are working with a 3D game, then you may want to enable this and then use the Mipmapping Functions to adjust how the game deals with the different mipmap levels. Note that if you are not flagging sprites as using individual texture pages, you can still enable mipmapping on a per-texture group basis from the Texture Group Manager. This option is off by default."," ","Enable Source Control",": If you wish the project to be under SCM (Source Control Management) then you need to check this. It is off by default (see here for more information on source control)."," ","Author",": The name of the game author (or publisher or studio)."," ","Project Last Changed",": This section simply shows the date/time stamp for the last time that the project was changed (this is not editable)."," ","Accept Spine Licence",": Here you can check the box to be shown the Spine Runtime Licence and accept it. This will permit you to use Spine sprites in your game (this licence will also be shown the first time you try to add a Spine sprite to your project and haven't checked the licence here beforehand)."," ","Collision Compatibility Mode",": This tells GameMaker to use the legacy collision system used before the 2022 versions (which used integer values instead of floats). Read ","Collision Compatibility Mode"," for more information. This is disabled by default and it is recommended to keep it disabled for new projects."," ","Enable Copy on Write Behaviour for Arrays",": This enables the deprecated ","Copy on Write"," array behaviour for the currently opened project. Read ","Copy on Write"," for more information. This is disabled by default and it is recommended to keep it disabled for new projects."," ","The Main Options section also contains a menu for ","Template Info","."," ","The ","Asset Browser"," will also have other Game Options available to you depending on the target platforms that are available for the ","licence"," that you have and not all of them may be available or visible."],[" ","The following platform specific game options exist:"," ","GX.games"," ","Windows"," ","macOS"," ","Ubuntu"," ","HTML5"," ","Android"," ","iOS"," ","tvOS"," ","NOTE"," The various ","Console Game Options"," are not listed here due to the various legal restrictions maintained by the different companies. If you have a Console Licence, then you can get this information form the ","YoYo Games Helpdesk",", but you must first contact YoYo Games with your console ID email and request permission to view the different sections."," ","Some ","GameMaker"," projects may also show Game options for the ","Amazon Fire"," target. These are legacy, read-only options as ","GameMaker"," now supports the Fire platform directly using the ","Android"," game options. If your project still shows Amazon Fire, you can find out information about the options from the following page:"," ","Amazon Fire (Legacy)"," ","Back: ","Game Settings"," ","Next: ","Configurations"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"8":[[" ","Platform Settings"]],"id":"2526"})