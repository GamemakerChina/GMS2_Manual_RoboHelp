rh._.exports({"0":[[" ","audio_emitter_get_z"]],"1":[["audio_emitter_get_y"]],"2":[["audio_emitter_get_y"]],"3":[[" ","audio_emitter_get_z"]],"4":[[" ","This function returns the current z position of the given audio emitter."],[" ","audio_emitter_get_z(emitter);"," ","Argument"," ","Type"," ","Description"," ","emitter"," ","Audio Emitter ID"," ","The index of the emitter to use."],[" ","Real"],[" ","if audio_emitter_get_z(emitter_player) != 0","\n    {","\n        var ex = audio_emitter_get_x(emitter_player);","\n        var ey = audio_emitter_get_y(emitter_player);","\n        audio_emitter_position(emitter_player, ex, ey, 0);","\n    }"," ","The above code checks the current z position of a given emitter and if it is not equal to 0, it is set to 0."," ","Back: ","Audio Emitters"," ","Next: ","audio_emitter_get_vx"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"383"})