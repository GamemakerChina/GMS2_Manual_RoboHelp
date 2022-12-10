rh._.exports({"0":[["audio_start_sync_group"]],"1":[["audio_start_sync_group"]],"2":[["audio_start_sync_group"]],"3":[["\n  ","\n  "],["\n  ","With this function you can start playing a previously created sync group. You need to supply the ","group index"," which is the value returned when you created the group using the function ","audio_create_sync_group()",".","\n  ","\n  ","NOTE"," This functionality is not available for the HTML5 target platform.","\n\n","\n  "," ","\n  "],["\n  ","audio_start_sync_group(group_index);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","group_index","\n        ","Audio Sync Group ID","\n        ","The group index to play.","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","sg = audio_create_sync_group(true);","\n    audio_play_in_sync_group(sg, sound1);","\n    audio_play_in_sync_group(sg, sound2);","\n    audio_sound_gain(sound2, 0, 0);","\n    audio_play_in_sync_group(sg, sound3);","\n    audio_sound_gain(sound3, 0, 0);","\n    audio_play_in_sync_group(sg, sound4);","\n    audio_sound_gain(sound4, 0, 0);","\n    audio_start_sync_group(sg);","\n  ","The above creates a new sync group and assigns the index of the group to the variable \"sg\". Four sounds are then added to the group, with the gain for three of them set to 0. Finally the sync group is played.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Audio Synchronisation","\n        ","Next: ","audio_stop_sync_group","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["audio_start_sync_group"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1323"})