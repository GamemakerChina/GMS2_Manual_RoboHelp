rh._.exports({"0":[[" ","audio_sync_group_is_paused"]],"1":[["audio_sync_group_is_paused"]],"2":[[" ","audio_sync_group_is_paused"]],"3":[[" ","This function can be used to check if audio in a synchronised group is paused."," ","The function takes in a sync group ID as returned by the function ","audio_create_sync_group","."," ","NOTE"," This functionality is not available for the HTML5 target platform."],[" ","audio_sync_group_is_paused","(group_index);"," ","Argument"," ","Type"," ","Description"," ","group_index"," ","Audio Sync Group ID"," ","The group index to check."],[" ","Boolean"],[" ","if !","audio_sync_group_is_paused","(sync_group)","\n    {","\n        audio_resume_sync_group(sync_group);","\n    }"," ","The above code first checks to see if the audio sync group ","sync_group"," is paused. If that is the case, it resumes playing the sync group using ","audio_resume_sync_group","."," ","Back: ","Audio Synchronisation"," ","Next: ","audio_create_sync_group"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["audio_sync_group_is_paused"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1514"})