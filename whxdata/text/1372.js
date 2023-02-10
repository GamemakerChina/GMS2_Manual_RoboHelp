rh._.exports({"0":[[" ","audio_pause_sync_group"]],"1":[["audio_pause_sync_group"]],"2":[["audio_pause_sync_group"]],"3":[[" ","audio_pause_sync_group"]],"4":[[" ","his function will pause the given sync group if it is playing, with the group index being the value returned when you created the group using the function ","audio_create_sync_group()",". This does not stop the sound, and calling ","audio_resume_sync_group()",", will start it playing from the same position it was paused at again."," ","NOTE"," This functionality is not available for the HTML5 target platform."],[" ","audio_pause_sync_group(group_index);"," ","Argument"," ","Type"," ","Description"," ","group_index"," ","Audio Sync Group ID"," ","The group index to pause."],[" ","N/A"],[" ","if (keyboard_check_pressed((ord)\"P\"))","\n    {","\n        global.Pause = !global.Pause","\n        if global.Pause","\n        {","\n            audio_pause_sync_group(sg);","\n        }","\n        else","\n        {","\n            audio_resume_sync_group(sg);","\n        }","\n    }"," ","The above code checks for a key press of the \"P\" key, and if one is detected it toggles the \"global.Pause\" variable then checks it to pause or resume the sync group indexed in the variable \"sg\"."," ","Back: ","Audio Synchronisation"," ","Next: ","audio_resume_sync_group"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1372"})