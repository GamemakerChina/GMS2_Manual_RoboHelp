rh._.exports({"0":[[" ","audio_emitter_get_bus"]],"1":[["audio_emitter_get_bus"]],"2":[[" ","audio_emitter_get_bus"]],"3":[[" ","This function returns the bus that an ","audio emitter"," is connected to."," ","By default audio emitters are connected to the main audio bus, accessed through ","audio_bus_main",". If the emitter had a different audio bus assigned using ","audio_emitter_bus",", it will return that bus's struct."],[" ","audio_emitter_get_bus","(emitter);"," ","Argument"," ","Type"," ","Description"," ","emitter"," ","Audio Emitter ID"," ","The emitter to get the bus for"],[" ","AudioBus Struct"],[" ","var bus = ","audio_emitter_get_bus","(emitter);","\n    show_debug_message(bus);"," ","The above code first stores the bus assigned to an emitter in a temporary variable ","bus",". It then displays the contents of the returned ","AudioBus Struct"," struct in a debug message."," ","Back: ","Audio Emitters"," ","Next: ","audio_emitter_create"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["audio_emitter_get_bus"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1511"})