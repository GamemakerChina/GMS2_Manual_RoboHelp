rh._.exports({"0":[[" ","audio_group_load"]],"1":[["audio_group_load"]],"2":[["audio_group_load"]],"3":[[" ","audio_group_load"]],"4":[[" ","This function will load all the sounds that are flagged as belonging to the given Audio Group into memory."," ","The function will return ","true"," if loading is initiated and ","false"," if the group ID is invalid, or it has already been flagged for loading."," ","NOTE"," The function is asynchronous so your game will continue to run while the audio is loaded in the background. This means that it will also trigger an ","Asynchronous Load/Save Event"," to inform you that the whole group has been loaded into memory and the sounds can now be used."],[" ","audio_group_load","(groupID);"," ","Argument"," ","Type"," ","Description"," ","groupID"," ","Audio Group ID"," ","The index of the audio group to load (as defined in the ","Audio Groups"," window)"],[" ","Boolean"],[" ","if !audio_group_is_loaded(audiogroup_level1)","\n    {"," ","audio_group_load","(audiogroup_level1);","\n    }"," ","The above code checks to see if an audio group has been loaded and if not, it loads it."," ","Back: ","Audio Groups"," ","Next: ","audio_group_unload"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1750"})