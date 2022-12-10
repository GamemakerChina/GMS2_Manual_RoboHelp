rh._.exports({"0":[["Rooms"]],"2":[["Rooms"]],"3":[["\n  ","\n  "],["\n  ","Rooms are created in the ","Room Editor"," in ","GameMaker"," and ","are where everything happens in your game. You must have at least one room in any game for it to run, but you may need many more depending on the type of game and how you structure your project. This section has all the general GML functions and variables related to rooms and for getting information about them as well as for setting certain properties within them.","\n  ","The following ","global variables"," and functions can be used for getting basic information about any given room:","\n  ","\n    ","room_first","\n    ","room_last","\n    ","room_next","\n    ","room_previous","\n    ","room","\n    ","room_speed","\n    ","room_height","\n    ","room_width","\n    ","room_persistent","\n  ","\n  ","NOTE"," The variables listed above will not be valid in a script, as scripts are executed before the first room is loaded.","\n    ","\n    This only applies to code written at the root of a script, but not to functions created inside scripts, as those functions can be executed at any time during the game.\n  ","\n  ","You can also use the following functions to get the name of the current room (as defined in the ","Asset Browser",") as well as move between rooms:","\n  ","\n    ","room_get_name","\n    ","room_goto","\n    ","room_goto_next","\n    ","room_goto_previous","\n    ","room_restart","\n  ","\n  "," ","\n  ","Next, we have a series of functions that can be used to change rooms and their contents or even create new rooms and add to them. It should be noted that these functions should ","never be run from within the room that you wish to change",", but rather be run from an instance in another room first. Also note that if you change any room asset in this way, the change is ","permanent"," and will be maintained for the entire duration of the game, even if you call the room_restart() function (closing and restarting the game will reset the room properties though).","\n  ","\n    ","room_exists","\n    ","room_add","\n    ","room_duplicate","\n    ","room_assign","\n    ","room_instance_add","\n    ","room_instance_clear","\n    ","room_set_height","\n    ","room_set_width","\n    ","room_set_persistent","\n    ","room_set_view_enabled","\n    ","room_set_viewport","\n    ","room_get_viewport","\n    ","room_set_camera","\n    ","room_get_camera","\n  ","\n  "," ","\n  ","There are also a number of different functions related to creating and manipulating the different types of elements that can be placed on layers in the room. These functions are listed in the appropriate sections for each element type listed below:","\n  ","\n    ","General Layer Functions","\n    ","Tile Map Layers","\n    ","Background Layers","\n    ","Sprite Layers","\n    ","Sequence Layers","\n    ","Filter and Effect Functions","\n  ","\n  "," ","\n  ","An important thing to note when creating room layers is that ","you can have multiple different element types on one layer",". So, for example, you may have a layer for enemies, and on that layer have the enemy instances as well as certain sprite assets that are only related to that enemy. Or you could have a background element with a tile map element to create the look of a room. This is not permitted in the room editor, but when creating things dynamically you can do this, which is why functions like ","layer_get_all_elements()"," exist.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Asset Management","\n        ","Next: ","Extensions","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["Rooms"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2392"})