rh._.exports({"0":[[" ","audio_sync_group_is_playing"]],"1":[["audio_sync_group_is_playing"]],"2":[["audio_sync_group_is_playing"]],"3":[[" ","audio_sync_group_is_playing"]],"4":[[" ","This function can be used to check if any audio in a synchronised group is playing. You are required to supply the sync group ID as returned by the function ","audio_create_sync_group()","."," ","NOTE"," This functionality is not available for the HTML5 target platform."],[" ","audio_sync_group_is_playing","(group_index);"," ","Argument"," ","Type"," ","Description"," ","group_index"," ","Audio Sync Group ID"," ","The group index to check."],[" ","Boolean"],[" ","if ","audio_sync_group_is_playing","(group_one)","\n    {","\n        audio_stop_sync_group(group_one);","\n    }"," ","The above code checks to see if the sync group ","group_one"," is currently playing and if it is, the group is stopped."," ","Back: ","Audio Synchronisation"," ","Next: ","audio_sync_group_is_paused"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1258"})