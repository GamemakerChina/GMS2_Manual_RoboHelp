rh._.exports({"0":[["uwp_is_suspending"]],"1":[["uwp_is_suspending"]],"2":[["uwp_is_suspending"]],"3":[["\n  ","\n  "],["\n  ","This function will return ","true"," for a single frame (and ","false"," otherwise) in a similar manner to ","os_is_paused()",". The game then has one second to save the game state before it is potentially terminated by the system. Once the game has finished saving data it should call ","uwp_suspend()"," to suspend cleanly. The game should probably also enter a pause state so that if it is resumed by the system (if it hasn't been fully terminated) the player is not thrown straight back into a gameplay situation.","\n  "," ","\n  "],["\n  ","uwp_is_suspending();","\n  "," ","\n  "],["\n  ","Boolean","\n  "," ","\n  "],["\n  ","if uwp_is_suspending()","\n    {","\n        scr_Save_Game_Data();","\n        uwp_suspend();","\n    }","\n  ","The above code checks to see if the app is going into suspension and if it is it calls a script to save the game data before suspending the game.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","UWP And XBox Live","\n        ","Next: ","uwp_is_constrained","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["uwp_is_suspending ","OBSOLETE"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2692"})