rh._.exports({"0":[["audio_set_listener_mask"]],"1":[["audio_set_listener_mask"]],"2":[["audio_set_listener_mask"]],"3":[["\n  ","\n  "],["\n  ","When using multiple listeners on a system, you can set the bit-mask for a sound and have it heard from the flagged listener only. However, you can also set the ","global"," mask using this function and all sounds played normally will be heard from the listeners flagged by this mask, without the need to set the mask for each sound individually.","\n  "," ","\n  "],["\n  ","audio_set_listener_mask(mask);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","mask","\n        ","Real","\n        ","The bit-mask data to set for the listeners","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","var num = audio_get_listener_count();","\n    var mask = 0; for(var i = 0; i < num; ++i;)","\n    {","\n        var info = audio_get_listener_info(i);","\n        var m = audio_listener_get_data(info[? \"mask\"]);","\n        mask = mask | m;","\n        ds_map_destroy(info);","\n    }","\n    audio_set_listener_mask(mask);","\n  ","The above code checks the number of listeners available then loops through them gets their mask bits, which are then combined to create a single bit mask which is applied to the global listener.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Audio Listeners","\n        ","Next: ","audio_get_listener_count","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["audio_set_listener_mask"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"972"})