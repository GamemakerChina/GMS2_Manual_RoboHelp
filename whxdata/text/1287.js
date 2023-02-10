rh._.exports({"0":[[" ","game_save"]],"1":[["game_save"]],"2":[["game_save"]],"3":[[" ","game_save"]],"4":[[" ","This is a legacy function that can be used to save the current state of the game, and is not recommended for use anymore. Use the ","File functions"," instead to create a custom save system where you only save and load specific game data."," ","This function will save the game's state as it is, however it will not save any dynamic resources being used at that time, such as data structures, surfaces, assets added at runtime, etc. If such a save file is loaded, any game updates that were made after the save will not be visible, as it will restore the version of the game that was used to create the save."," ","Note that save files created using this function may not be supported by updated ","Runtime"," versions, so replacing this function with a new save system is essential to ensure compatibility with future GameMaker updates, and for the reasons listed above, updates made to your own game."],[" ","game_save(filename);"," ","Argument","Type"," ","Description"," ","filename","String"," ","The name of the file to save the game to."],[" ","N/A"],[" ","if keyboard_check_pressed(ord(\"S\"))","\n    {","\n        global.Saved = true;","\n        game_save(\"Save.dat\");","\n    }"," ","The above code will set a global variable to ","true"," and then save the game to the file \"Save.dat\" when the key \"S\" is pressed."," ","Back: ","General Game Control"," ","Next: ","game_save_buffer"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1287"})