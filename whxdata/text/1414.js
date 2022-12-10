rh._.exports({"0":[["Load Game"]],"1":[["GML Visual Action - Load Game"]],"2":[["Load Game"]],"3":[["\n  ","\n  "],["\n  ","This action will load a game that has previously been saved using the ","Save Game"," action. You give the filename of the file to load (as a string, and including the extension) and the game will be loaded and continue running\n    from the saved point. Note that this is not designed as a universal save/load system, and trying to load a game saved from a previous run of the project may give errors (especially if you have used things like ","Data Structures","    or ","Particles","), and as such you should only try and load games that have been saved in the progress of a single game play-through (for things like checkpoints). Also note that the file will ","not","    be loaded until the end of the current event or script, so any actions after the load action is called will still be performed. For a more comprehensive approach to loading saved game data, see the ","File Actions",".","\n  "," ","\n  "],["\n  ","\n  "],["\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","Timeline","\n        ","The timeline resource to assign to an instance","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","The above action block code will check a global variable and if it is less than or equal to\n    0 it will load a previously saved game.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Game Actions","\n        ","Next: ","Restart Game","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[[" Load Game"]],"5":[["Action Syntax:"],["Arguments:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1414"})