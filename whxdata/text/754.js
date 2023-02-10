rh._.exports({"0":[[" ","audio_bus_main"]],"1":[["audio_bus_main"]],"2":[["audio_bus_main"]],"3":[[" ","audio_bus_main"]],"4":[[" ","This built-in struct represents the main audio bus used by ","GameMaker","."," ","The main bus represents the main mix in ","GameMaker","'s audio, which is the combination of all currently active sound sources after they have been processed (to apply effects, positioning, doppler effect etc.) and all emitters. All of GM's audio ends up on this bus."," ","Any audio effect that you apply to the main bus will be heard on all sounds, as all buses are routed to this one."],[" ","audio_bus_main"],[" ","AudioBus Struct"],[" ","var _ef_reverb = audio_effect_create(AudioEffectType.Reverb1);","\n    audio_bus_main.effects[0] = _ef_reverb;"," ","The above code first creates a new audio effect and stores it in a temporary variable ","_ef_reverb",". It then assigns this new effect as the first effect on the main audio bus's ","effects"," array."," ","Back: ","Audio Effects"," ","Next: ","audio_bus_get_emitters"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"754"})