rh._.exports({"0":[["audio_set_master_gain"]],"1":[["audio_set_master_gain"]],"2":[["audio_set_master_gain"]],"3":[["\n  ","\n  "],["\n  ","With this function you can set the absolute value for the global volume of all sounds and music for a specific listener. The default listener index is 0, but you can use the function ","audio_get_listener_info()"," to get the different indices available for the target platform. The gain value is based on a linear scale from 0 (silent) to 1 (full volume) and will affect the relative volume of all sounds and music played from within your game through that listener.","\n  "," ","\n  "],["\n  ","audio_set_master_gain(listenerIndex, gain);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","listenerIndex","\n        ","Real"," or ","Audio Listener ID","\n        ","The index of the listener to set the gain on.","\n      ","\n      ","\n        ","gain","\n        ","Real","\n        ","Value for the global volume (0 to 1).","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","var num = audio_get_listener_count();","\n    for( var i = 0; i < num; i++;)","\n    {","\n        var info = audio_get_listener_info(i);","\n        audio_set_master_gain(info[? \"index\"], 0.75);","\n        ds_map_destroy(info);","\n    }","\n  ","The above code loops through the available listeners and then sets their master gain to 0.75.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Audio","\n        ","Next: ","audio_get_master_gain","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["audio_set_master_gain"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1213"})