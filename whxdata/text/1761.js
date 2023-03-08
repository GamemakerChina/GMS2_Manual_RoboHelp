rh._.exports({"0":[[" ","audio_resume_sound"]],"1":[["audio_resume_sound"]],"2":[["audio_resume_sound"]],"3":[[" ","audio_resume_sound"]],"4":[[" ","With this function you can resume any sound that is currently paused (after using the function ","audio_pause_sound()","). The sound can either be a single instance of a sound (the index for individual sounds being played can be stored in a variable when using the ","audio_play_sound()"," or ","audio_play_sound_at()"," functions) or a sound asset, in which case ","all"," instances of the given sound will be re-started."],[" ","audio_resume_sound","(index);"," ","Argument"," ","Type"," ","Description"," ","index"," ","Sound Asset"," or ","Sound Instance ID"," ","The index of the sound to resume."],[" ","N/A"],[" ","if keyboard_check_pressed(ord(\"P\"))","\n    {","\n        global.Pause = !global.Pause;","\n        if global.Pause","\n        {","\n            audio_pause_sound(snd_Waterfall);","\n        }","\n        else","\n        {"," ","audio_resume_sound","(snd_Waterfall);","\n        }","\n    }"," ","The above code checks for a press of the keyboard key \"P\" and if it detects one it sets the global variable \"Pause\" to ","true"," or false and then either pauses the sound indexed in the variable \"snd_Waterfall\" or it resumes the sound from its paused state."," ","Back: ","Audio"," ","Next: ","audio_resume_all"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1761"})