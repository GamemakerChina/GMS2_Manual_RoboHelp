rh._.exports({"0":[[" ","audio_emitter_bus"]],"1":[["audio_emitter_bus"]],"2":[["audio_emitter_bus"]],"3":[[" ","audio_emitter_bus"]],"4":[[" ","This function connects an ","audio emitter"," to a bus."," ","This will cause all output of the emitter to be sent to the given bus. All effects on the bus will be applied to the emitter's output."," ","You can assign any number of emitters to a bus."],[" ","audio_emitter_bus","(emitter, bus);"," ","Argument"," ","Type"," ","Description"," ","emitter"," ","Audio Emitter ID"," ","The audio emitter"," ","bus"," ","AudioBus Struct"," ","The audio bus to which the emitter is assigned"],[" ","N/A"],[" ","emitter = audio_emitter_create();","\n    var _new_bus = audio_bus_create();"," ","audio_emitter_bus","(emitter, _new_bus);\n  "," ","The above code first creates an audio emitter, and then an audio bus using ","audio_bus_create",". It assigns the emitter to the new bus using ","audio_emitter_bus","."," ","You can reset an emitter's bus configuration by assigning it back to ","audio_bus_main","."," ","Back: ","Audio Emitters"," ","Next: ","audio_emitter_get_bus"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"1764"})