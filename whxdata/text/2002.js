rh._.exports({"0":[[" ","audio_group_set_gain"]],"1":[["audio_group_set_gain"]],"2":[["audio_group_set_gain"]],"3":[[" ","audio_group_set_gain"]],"4":[[" ","With this function you can fade a group of sounds in or out over a given length of time, or it can be used to set the group gain instantly."," ","The time is measured in milliseconds, and the function requires that you input a final level of gain for the group to have reached by the end of that time. This gain can be between 0 (silent) and 1 (full volume) and the scale is linear, such that a value of 0.5 would be half volume. To instantly change the gain, simply set the time argument to 0."," ","NOTE"," On some platforms you can have a gain of greater than 1, although a value of 1 is considered \"full volume\" and anything greater may introduce audio clipping."],[" ","audio_group_set_gain","(groupID, volume, time);"," ","Argument"," ","Type"," ","Description"," ","groupID"," ","Audio Group ID"," ","The index of the audio group to set the gain for (as defined in the ","Audio Groups"," window)"," ","volume"," ","Real"," ","The final value for the group volume."," ","time"," ","Real"," ","The length of the change in gain in milliseconds."],[" ","N/A"],[" ","if keyboard_check_pressed(vk_space)","\n    {"," ","audio_group_set_gain","(audiogroup1, 0, 5000);","\n    }"," ","The above code checks for the \"space\" key and then fades all the audio for \"audiogroup1\" down to 0 over 5 seconds."," ","Back: ","Audio Groups"," ","Next: ","audio_group_get_gain"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2002"})