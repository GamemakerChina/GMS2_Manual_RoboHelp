rh._.exports({"0":[[" ","uwp_is_suspending"]],"1":[["uwp_is_suspending"]],"2":[["uwp_is_suspending"]],"3":[[" ","uwp_is_suspending ","OBSOLETE"]],"4":[[" ","This function will return ","true"," for a single frame (and ","false"," otherwise) in a similar manner to ","os_is_paused()",". The game then has one second to save the game state before it is potentially terminated by the system. Once the game has finished saving data it should call ","uwp_suspend()"," to suspend cleanly. The game should probably also enter a pause state so that if it is resumed by the system (if it hasn't been fully terminated) the player is not thrown straight back into a gameplay situation."],[" ","uwp_is_suspending();"],[" ","Boolean"],[" ","if uwp_is_suspending()","\n    {","\n        scr_Save_Game_Data();","\n        uwp_suspend();","\n    }"," ","The above code checks to see if the app is going into suspension and if it is it calls a script to save the game data before suspending the game."," ","Back: ","UWP And XBox Live"," ","Next: ","uwp_is_constrained"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2740"})