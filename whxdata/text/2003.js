rh._.exports({"0":[[" ","audio_is_playing"]],"1":[["audio_is_playing"]],"2":[["audio_is_playing"]],"3":[[" ","audio_is_playing"]],"4":[[" ","This function will check the given sound to see if it is currently playing."," ","The sound can either be a single instance of a sound (the index for individual sounds being played can be stored in a variable when using the ","audio_play_sound",", ","audio_play_sound_at",", ","audio_play_sound_on"," and ","audio_play_sound_ext"," functions) or a sound asset, in which case ","all"," instances of the given sound will be checked and if any of them are playing the function will return ","true"," otherwise it will return ","false","."," ","NOTE"," This function will still return ","true"," if the sound being checked has previously been paused using the ","audio_pause_sound"," function."],[" ","audio_is_playing","(index);"," ","Argument"," ","Type"," ","Description"," ","index"," ","Sound Asset"," or ","Sound Instance ID"," ","The index of the sound to check."],[" ","Boolean"],[" ","if !","audio_is_playing","(snd_Waterfall)","\n    {","\n        audio_play_sound_at(snd_Waterfall, x, y, 0, 300, true, 1);","\n    }"," ","The above code checks to see if the sound indexed in the variable \"snd_Waterfall\" is currently playing and if it returns ","false"," then the sound will be looped at its room position, with a fall-off distance of 300 and a low priority."," ","Back: ","Audio"," ","Next: ","audio_is_paused"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2003"})