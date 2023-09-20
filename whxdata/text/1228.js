rh._.exports({"0":[[" ","audio_group_load_progress"]],"1":[["audio_group_load_progress"]],"2":[[" ","audio_group_load_progress"]],"3":[[" ","This function will check the loading progress for an audio group and return an (approximate) value between 0 and 100."],[" ","audio_group_load_progress","(groupID);"," ","Argument"," ","Type"," ","Description"," ","groupID"," ","Audio Group ID"," ","The index of the audio group to check (as defined in the ","Audio Groups"," window)"],[" ","Real"],[" ","if load","\n    {","\n        var pc = ","audio_group_load_progress","(audiogroup_level1);","\n        draw_text(32, 32, \"Loading: \" + string(pc));","\n    }"," ","The above code checks a variable and if it returns ","true"," then some text will be drawn showing the progress of the audio being loaded."," ","Back: ","Audio Groups"," ","Next: ","audio_group_stop_all"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["audio_group_load_progress"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1228"})