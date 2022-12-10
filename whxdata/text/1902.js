rh._.exports({"0":[["audio_get_listener_info"]],"1":[["audio_get_listener_info"]],"2":[["audio_get_listener_info"]],"3":[["\n  ","\n  "],["\n  ","This function will create a ","DS map"," and populate it with information for the given listener.","\n  ","NOTE"," ","You are responsible for the destruction of the returned ","DS Map"," using the appropriate function.","\n  ","The DS map will contain the following keys:","\n  ","\n    ","\"","name","\" - The name of the listener, as a string, with \"default\" being the standard listener name on most target platforms","\n    ","\"","mask","\" - The bit-mask for the listener","\n    ","\"","index","\" - The unique index value of the listener","\n  ","\n  ","The mask value can be used to set a sound or emitter to play from multiple listeners at once, simply using the bitwise ","or"," \"|\" to generate a mask for the sound (see the example code below), while the index is used to set the properties like position or velocity for a given listener using functions like ","audio_listener_set_position()",".","\n  "," ","\n  "],["\n  ","audio_get_listener_info(num);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","num","\n        ","Real"," or ","Audio Listener ID","\n        ","The listener number to get the data for.","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","DS Map ID","\n  "," ","\n  "],["\n  ","var num = audio_get_listener_count();","\n    var mask = 0; for(var i = 0; i < num; ++i;)","\n    {","\n        var info = audio_get_listener_info(i);","\n        var m = audio_listener_get_data(info[? \"mask\"]);","\n        mask = mask | m;","\n        ds_map_destroy(info);","\n    }","\n    audio_set_listener_mask(mask);","\n  ","The above code checks the number of listeners available then loops through them gets their mask bits, which are then combined to create a single bit mask which is applied to the global listener.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Audio Listeners","\n        ","Next: ","audio_get_listener_mask","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["audio_get_listener_info"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1902"})