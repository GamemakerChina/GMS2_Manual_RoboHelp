rh._.exports({"0":[["audio_sync_group_is_playing"]],"1":[["audio_sync_group_is_playing"]],"2":[["audio_sync_group_is_playing"]],"3":[["\n  ","\n  "],["\n  ","This function can be used to check if any audio in a synchronised group is playing. You are required to supply the sync group ID as returned by the function ","audio_create_sync_group()",".","\n  ","\n  ","NOTE"," This functionality is not available for the HTML5 target platform.","\n\n","\n  "," ","\n  "],["\n  ","audio_sync_group_is_playing","(group_index);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","group_index","\n        ","Audio Sync Group ID","\n        ","The group index to check.","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Boolean","\n  "," ","\n  "],["\n  ","if ","audio_sync_group_is_playing","(group_one)","\n    {","\n        audio_stop_sync_group(group_one);","\n    }","\n  ","The above code checks to see if the sync group ","group_one"," is currently playing and if it is, the group is stopped.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Audio Synchronisation","\n        ","Next: ","audio_sync_group_is_paused","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["audio_sync_group_is_playing"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1264"})