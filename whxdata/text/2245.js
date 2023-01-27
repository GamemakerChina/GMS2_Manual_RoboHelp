rh._.exports({"0":[[" ","audio_effect_create"]],"1":[["audio_effect_create"]],"2":[["audio_effect_create"]],"3":[[" ","audio_effect_create"]],"4":[[" ","This function creates a new audio effect and returns the ","AudioEffect Struct"," through which you can access and modify it. Alternatively, you can pass a struct to the function to immediately initialise the effect's parameters."," ","For a list of possible audio effects that you can create, see ","AudioEffectType Enum","."," ","The members of the returned struct are dependent on the type of audio effect created. For all possible audio effect structs, see: ","AudioEffect Struct"],[" ","audio_effect_create","(type, [params]);"," ","Argument"," ","Type"," ","Description"," ","type"," ","AudioEffectType Enum"," ","The type of audio effect to create (e.g. ","AudioEffectType.Reverb1",")"," ","params"," ","Struct"," ","OPTIONAL"," The parameters of the audio effect (see ","AudioEffect Struct"," for the available parameters)"],[" ","AudioEffect Struct"],[" ","var _ef_distortion = ","audio_effect_create","(AudioEffectType.Bitcrusher);","\n    _ef_distortion.gain = 1.1;","\n    _ef_distortion.factor = 20;","\n    _ef_distortion.resolution = 8;","\n    _ef_distortion.mix = 0.5;","\n    audio_bus_main.effects[0] = _ef_distortion;"," ","The above code first creates a new distortion effect of type ","AudioEffectType.Bitcrusher"," using ","audio_effect_create",". It then configures the effect by setting the effect's parameters."," ","Finally it assigns the effect to the main audio bus, which starts processing the effect."],[" ","audio_bus_main.effects[0] = ","audio_effect_create","(AudioEffectType.Bitcrusher, {","\n        gain: 1.1, factor: 20, resolution: 8, mix: 0.5","\n    });"," ","The above code first creates a new distortion effect, like in Example 1, and immediately initialises its parameters by passing a struct that contains values for some of its parameters."," ","Back: ","Audio Effects"," ","Next: ","audio_bus_create"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example 1:"],[" ","Example 2:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2245"})