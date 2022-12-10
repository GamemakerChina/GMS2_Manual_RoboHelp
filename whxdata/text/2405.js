rh._.exports({"0":[["time_source_reconfigure"]],"1":[["time_source_reconfigure"]],"2":[["time_source_reconfigure"]],"3":[["\n  ","\n  ","\n  ","\n  "],["\n  ","This function is used to modify the core properties of a ","Time Source",", without having to create an entirely new one.","\n  ","You specify an existing ","Time Source",", and then set the properties that are also set in ","time_source_create()",", except the parent. Read that page for detailed information on these properties.","\n  ","The specified ","Time Source"," will be reset and deactivated, and will need to be ","started"," again.","\n  "," ","\n  "],["\n  ","time_source_reconfigure(id, period, units, callback, [args, repetitions, expiry_type]);","\n  ","\n    ","\n      ","\n      ","\n      ","\n    ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","id","\n        ","Time Source ID","\n        ","The ","Time Source"," to reconfigure","\n      ","\n      ","\n        ","period","\n        ","Real","\n        ","The period that the ","Time Source"," runs for, in the given units","\n      ","\n      ","\n        ","units","\n        ","Time Source Unit Constant","\n        ","The units that the given period is in","\n      ","\n      ","\n        ","callback","\n        ","Method","\n        ","The method to call when the ","Time Source"," expires","\n      ","\n      ","\n        ","args","\n        ","Array","\n        ","OPTIONAL"," An array containing the arguments to pass into the method","\n      ","\n      ","\n        ","repetitions","\n        ","Real","\n        ","OPTIONAL"," The number of times the ","Time Source"," should repeat, or -1 for indefinite repetition","\n      ","\n      ","\n        ","expiry_type","\n        ","Time Source Expiry Constant","\n        ","OPTIONAL"," Whether the ","Time Source"," expires on the frame nearest to its expiry, or on the next frame","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","function change_spawn_delay(new_delay)","\n    {","\n        time_source_reconfigure(obj_game.spawn_time_source, new_delay, time_source_units_frames, obj_game.spawn_method, [], -1);","\n        time_source_start(obj_game.spawn_time_source);","\n    }","\n  ","This creates a new function that changes the spawn delay used for in-game enemies.","\n  ","Assuming the game uses a ","Time Source"," called ","obj_game.spawn_time_source"," to spawn enemies, that ","Time Source"," will need to be updated once the spawn delay changes.","\n  ","This function does exactly that, reconfiguring the ","Time Source"," with the new delay and then ","starting it"," again.","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Time Sources","\n        ","Next: ","time_source_reset","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n","\n  ","\n  ","\n\n"]],"4":[["time_source_reconfigure"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2405"})