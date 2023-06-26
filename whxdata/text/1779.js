rh._.exports({"0":[[" ","audio_sound_loop_start"]],"1":[["audio_sound_loop_start"]],"2":[[" ","audio_sound_loop_start"]],"3":[[" ","This function sets the loop start point in seconds for the given sound asset or sound instance."," ","See: ","Audio Loop Points"," ","NOTE"," The loop start point should be before the loop end point. 0.0 indicates the start of the sound."],[" ","audio_sound_loop_start","(index, time);"," ","Argument"," ","Type"," ","Description"," ","index"," ","Sound Asset"," or ","Sound Instance ID"," ","The sound asset or sound instance for which to set the loop start time"," ","time"," ","Real"," ","The loop start time in seconds"],[" ","N/A"],[" ","audio_sound_loop_start","(snd_machine, 4);","\n    audio_sound_loop_end(snd_machine, 10);","\n    ins_sound = audio_play_sound(snd_snd_machine, 100, true);"," ","The above code sets the loop start point for the existing sound asset ","snd_machine"," to 4 seconds and the loop end point to 10 seconds. The sound is then played with a priority of 100 and ","loop"," set to ","true",". The new sound ","instance"," gets its loop start and end position from the sound ","asset",". Its ID is stored in a variable ","ins_sound","."," ","Back: ","Audio Loop Points"," ","Next: ","audio_sound_get_loop_start"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["audio_sound_loop_start"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1779"})