rh._.exports({"0":[[" ","audio_set_listener_mask"]],"1":[["audio_set_listener_mask"]],"2":[[" ","audio_set_listener_mask"]],"3":[[" ","When using multiple listeners on a system, you can set the bit-mask for a sound and have it heard from the flagged listener only. However, you can also set the ","global"," mask using this function and all sounds played normally will be heard from the listeners flagged by this mask, without the need to set the mask for each sound individually."],[" ","audio_set_listener_mask(mask);"," ","Argument"," ","Type"," ","Description"," ","mask"," ","Real"," ","The bit-mask data to set for the listeners"],[" ","N/A"],[" ","var num = audio_get_listener_count();","\n    var mask = 0; for(var i = 0; i < num; ++i;)","\n    {","\n        var info = audio_get_listener_info(i);","\n        var m = audio_listener_get_data(info[? \"mask\"]);","\n        mask = mask | m;","\n        ds_map_destroy(info);","\n    }","\n    audio_set_listener_mask(mask);"," ","The above code checks the number of listeners available then loops through them gets their mask bits, which are then combined to create a single bit mask which is applied to the global listener."," ","Back: ","Audio Listeners"," ","Next: ","audio_get_listener_count"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["audio_set_listener_mask"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"867"})