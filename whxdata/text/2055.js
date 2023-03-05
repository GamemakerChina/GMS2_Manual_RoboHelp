rh._.exports({"0":[[" ","audio_emitter_falloff"]],"1":[["audio_emitter_falloff"]],"2":[["audio_emitter_falloff"]],"3":[[" ","audio_emitter_falloff"]],"4":[[" ","With this function you can set the fall-off distance for an emitter. This is the distance from the ","listener"," the emitter has to be before the sound will have \"fallen off\" to a volume of 0. The default value for this is 100, but beware of setting this to any value lower than 1 as that will make any sound played through this emitter inaudible to the ","listener",", however any other value will cause the sound to fade away the further that the emitter is from the ","listener","."," ","How the sound itself is heard will depend on the falloff reference (which is the distance under which the volume for the source would normally drop by half) and the roll off factor (which affects the sound past the falloff reference distance only). The default factor is normally 1, and the effect of the different falloff values will depend on the model chosen."," ","For a complete guide to the different falloff models and how these values are used, please see the function ","audio_falloff_set_model()","."],[" ","audio_emitter_falloff(emitter, falloff_ref, falloff_max, falloff_factor);"," ","Argument"," ","Type"," ","Description"," ","emitter"," ","Audio Emitter ID"," ","The index of the emitter to change."," ","falloff_ref"," ","Real"," ","The falloff reference relative to the listener (clamp)."," ","falloff_max"," ","Real"," ","The maximum falloff distance relative to the listener."," ","falloff_factor"," ","Real"," ","The falloff factor (default 1)."],[" ","N/A"],[" ","s_emit = audio_emitter_create();","\n    audio_emitter_position(s_emit, x, y, 0);","\n    audio_emitter_falloff(s_emit, 100, 300, 1);"," ","The above code creates an audio emitter and assigns its index to the variable \"s_emit\". This emitter is then placed at the position of the instance creating it and is given a fall-off distance of 300, meaning that when the emitter is further than 300 pixels from the ","listener"," position it will be silent. Its falloff factor is the default 1 and the falloff reference is 100, so at 100 pixels from the listener the falloff will start."," ","Back: ","Audio Emitters"," ","Next: ","audio_emitter_gain"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2055"})