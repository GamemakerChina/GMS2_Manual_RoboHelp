rh._.exports({"0":[[" ","audio_set_master_gain"]],"1":[["audio_set_master_gain"]],"2":[["audio_set_master_gain"]],"3":[[" ","audio_set_master_gain"]],"4":[[" ","With this function you can set the absolute value for the global volume of all sounds and music for a specific listener."," ","The default listener index is 0, but you can use the function ","audio_get_listener_info"," to get the different indices available for the target platform. The gain value is based on a linear scale from 0 (silent) to 1 (full volume) and will affect the relative volume of all sounds and music played from within your game through that listener."," ","NOTE"," Use ","db_to_lin"," and ","lin_to_db"," to convert back and forth between linear gains and gains expressed in decibels (dB)."],[" ","audio_set_master_gain","(listenerIndex, gain);"," ","Argument"," ","Type"," ","Description"," ","listenerIndex"," ","Real"," or ","Audio Listener ID"," ","The index of the listener to set the gain on."," ","gain"," ","Real"," ","Value for the global volume (0 to 1)."],[" ","N/A"],[" ","var num = audio_get_listener_count();","\n    for( var i = 0; i < num; i++;)","\n    {","\n        var info = audio_get_listener_info(i);"," ","audio_set_master_gain","(info[? \"index\"], 0.75);","\n        ds_map_destroy(info);","\n    }"," ","The above code loops through the available listeners and then sets their master gain to 0.75."," ","Back: ","Audio"," ","Next: ","audio_get_master_gain"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"1778"})