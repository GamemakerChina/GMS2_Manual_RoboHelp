rh._.exports({"0":[[" ","audio_emitter_get_gain"]],"1":[["audio_emitter_get_gain"]],"2":[["audio_emitter_get_gain"]],"3":[[" ","audio_emitter_get_gain"]],"4":[[" ","This function returns the current gain (volume) set for the given audio emitter, normally between 0 and 1, where 0 is silent and 1 is full volume. Note that on some platforms you can have a gain of greater than 1, although a value of 1 is considered \"full volume\" and anything greater may introduce audio clipping."],[" ","audio_emitter_get_gain(emitter);"," ","Argument"," ","Type"," ","Description"," ","emitter"," ","Audio Emitter ID"," ","The index of the emitter to use."],[" ","Real"],[" ","if audio_emitter_get_gain(emitter_player) < 1","\n    {","\n        audio_emitter_gain(emitter_player, 1);","\n    }"," ","The above code checks the current gain of a given emitter and if it is less than 1 it is set to 1."," ","Back: ","Audio Emitters"," ","Next: ","audio_emitter_get_pitch"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"568"})