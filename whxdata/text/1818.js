rh._.exports({"0":[[" ","audio_create_sync_group"]],"1":[["audio_create_sync_group"]],"2":[["audio_create_sync_group"]],"3":[[" ","audio_create_sync_group"]],"4":[[" ","Creates a sync group and returns a unique ID value for it which should then be used in all further audio function calls for this group. If you want the group to loop then pass in ","true",", otherwise pass in ","false",", but note that if you want them to loop, ","all the tracks added later need to be the same length",". Note that when you create a sync group, you will need to free the memory and sounds associated with it when not in use using the ","audio_destroy_sync_group()"," function - for example, in the ","Room End"," or ","Destroy"," events."," ","NOTE"," This functionality is not available for the HTML5 target platform."],[" ","audio_create_sync_group(loop);"," ","Argument"," ","Type"," ","Description"," ","loop"," ","Boolean"," ","Whether the tracks in the group should loop (","true",") or not (","false",")."],[" ","Audio Sync Group ID"],[" ","sg = audio_create_sync_group(true);","\n    audio_play_in_sync_group(sg, sound1);","\n    audio_play_in_sync_group(sg, sound2);","\n    audio_sound_gain(sound2, 0, 0);","\n    audio_play_in_sync_group(sg, sound3);","\n    audio_sound_gain(sound3, 0, 0);","\n    audio_play_in_sync_group(sg, sound4);","\n    audio_sound_gain(sound4, 0, 0);","\n    audio_start_sync_group(sg);"," ","The above creates a new sync group and assigns the index of the group to the variable \"sg\". Four sounds are then added to the group, with the gain for three of them set to 0. Finally the sync group is played."," ","Back: ","Audio Synchronisation"," ","Next: ","audio_play_in_sync_group"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1818"})