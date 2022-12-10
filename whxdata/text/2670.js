rh._.exports({"0":[["AudioEffect Struct"]],"1":[["AudioEffect"]],"2":[["AudioEffect"]],"3":[["\n  ","\n  "],["\n  ","An AudioEffect struct stores the parameters used by an audio effect. You can change these values to adjust the effect in real-time.","\n  ","This struct must be created using the ","audio_effect_create"," function. The parameters that are available in the struct depend on the type of audio effect that you pass to the function (see ","AudioEffectType Enum",").","\n  ","\n  ","NOTE"," This is a built-in struct, and as such ","GameMaker"," has more control over its contents. This means access to its members is limited and some values may change automatically if invalid values were assigned. You may also have to create and destroy this struct through built-in functions provided by ","GameMaker"," instead of the ","new"," and ","delete"," operators.","\n\n","\n  ","All structs of this type have a ","type"," and ","bypass"," property. All other properties are specific to certain types of effects.","\n  ","Below is a list of struct members depending on the type of effect created.","\n  "],["\n  ","\n    ","\n      ","\n      ","\n      ","\n    ","\n    ","\n      ","\n        ","Variable","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","type","\n        ","AudioEffectType Enum","\n        ","A ","read-only"," property that stores the type of audio effect stored in this struct. It is set to ","AudioEffectType.Reverb1"," for Reverb.","\n      ","\n      ","\n        ","bypass","\n        ","Boolean","\n        ","Whether the effect should be bypassed (ignored).","\n      ","\n      ","\n        ","size","\n        ","Real","\n        ","The size of the space [range: 0.0 - 1.0].","\n          ","\n          Larger sizes mean more reflections and a longer reverberation.\n        ","\n      ","\n      ","\n        ","damp","\n        ","Real","\n        ","The amount that higher frequencies should be attenuated [range: 0.0 - 1.0].","\n      ","\n      ","\n        ","mix","\n        ","Real","\n        ","The proportion of the original/reverberated signal in the output [range: 0.0 - 1.0].","\n            ","\n            A value of 0.0 gives 100% of the original signal, a value of 1.0 gives 100% of the reverberated signal. A value of 0.5 results in 50% of the original and 50% of the reverberated signal.","\n      ","\n    ","\n  ","\n  "],["\n  ","\n    ","\n      ","\n      ","\n      ","\n    ","\n    ","\n      ","\n        ","Variable","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","type","\n        ","AudioEffectType Enum","\n        ","A ","read-only"," property that stores the type of audio effect stored in this struct. It is set to ","AudioEffectType.Delay"," for Delay.","\n      ","\n      ","\n        ","bypass","\n        ","Boolean","\n        ","Whether the effect should be bypassed"," (ignored)",".","\n      ","\n      ","\n        ","time","\n        ","Real","\n        ","The length of the delay (in seconds).","\n      ","\n      ","\n        ","feedback","\n        ","Real","\n        ","The proportion of the delayed signal which is fed back into the delay line [range: 0.0 - 1.0].","\n      ","\n      ","\n        ","mix","\n        ","Real","\n        ","The proportion of the original/delayed signal in the output [range: 0.0 - 1.0].","\n            ","\n            ","A value of 0.0 gives 100% of the original signal, a value of 1.0 gives 100% the delayed signal. A value of 0.5 results in 50% of the original and 50% of the ","delayed"," signal.","\n      ","\n    ","\n  ","\n  "],["\n  ","\n    ","\n      ","\n      ","\n      ","\n    ","\n    ","\n      ","\n        ","Variable","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","type","\n        ","AudioEffectType Enum","\n        ","A ","read-only"," property that stores the type of audio effect stored in this struct. It is set to ","AudioEffectType.Bitcrusher"," for Distortion.","\n      ","\n      ","\n        ","bypass","\n        ","Boolean","\n        ","Whether the effect should be bypassed"," (ignored)",".","\n      ","\n      ","\n        ","drive","\n        ","Real","\n        ","The input gain going into the effect.","\n      ","\n      ","\n        ","factor","\n        ","Real","\n        ","The factor by which ","the original signal is ","downsampled [range: 0.0 - 100.0].","\n            ","\n            ","This is rounded down to an integer.","\n      ","\n      ","\n        ","resolution","\n        ","Real","\n        ","The bit depth at which ","the signal is ","resampled [range: 1.0 - 16.0].","\n            ","\n            ","This is rounded down to an integer.","\n      ","\n      ","\n        ","mix","\n        ","Real","\n        ","The proportion of the original/distorted signal in the output [range: 0.0 - 1.0].","\n            ","\n            ","A value of 0.0 gives 100% of the original signal, a value of 1.0 gives 100% the ","distorted"," signal. A value of 0.5 results in 50% of the original and 50% of the ","distorted"," signal.","\n      ","\n    ","\n  ","\n  "],["\n  ","\n    ","\n      ","\n      ","\n      ","\n    ","\n    ","\n      ","\n        ","Variable","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","type","\n        ","AudioEffectType Enum","\n        ","A ","read-only"," property that stores the type of audio effect stored in this struct. It is set to ","AudioEffectType.LPF2"," for LPF.","\n      ","\n      ","\n        ","bypass","\n        ","Boolean","\n        ","Whether the effect should be bypassed"," (ignored)",".","\n      ","\n      ","\n        ","cutoff","\n        ","Real","\n        ","The cutoff frequency of the filter. Frequencies higher than the cutoff will be attenuated.","\n      ","\n      ","\n        ","q","\n        ","Real","\n        ","The quality factor of the filter [range: 1.0 - 100.0].","\n          ","\n          This is a dimensionless parameter which indicates how peaked (in gain) the frequency is around the cutoff. The greater the value, the greater the peak.\n        ","\n      ","\n    ","\n  ","\n  "],["\n  ","\n    ","\n      ","\n      ","\n      ","\n    ","\n    ","\n      ","\n        ","Variable","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","type","\n        ","AudioEffectType Enum","\n        ","A ","read-only"," property that stores the type of audio effect stored in this struct. It is set to ","AudioEffectType.HPF2"," for HPF.","\n      ","\n      ","\n        ","bypass","\n        ","Boolean","\n        ","Whether the effect should be bypassed"," (ignored)",".","\n      ","\n      ","\n        ","cutoff","\n        ","Real","\n        ","The cutoff frequency of the filter. Frequencies lower than the cutoff will be attenuated.","\n      ","\n      ","\n        ","q","\n        ","Real","\n        ","The quality factor of the filter [range: 1.0 - 100.0].","\n          ","\n          This is a dimensionless parameter which indicates how peaked (in gain) the frequency is around the cutoff. The greater the value, the greater the peak.\n        ","\n      ","\n    ","\n  ","\n  "],["\n  ","\n    ","\n      ","\n      ","\n      ","\n    ","\n    ","\n      ","\n        ","Variable","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","type","\n        ","AudioEffectType Enum","\n        ","A ","read-only"," property that stores the type of audio effect stored in this struct. It is set to ","AudioEffectType.Gain"," for Gain.","\n      ","\n      ","\n        ","bypass","\n        ","Boolean","\n        ","Whether the effect should be bypassed"," (ignored)",".","\n      ","\n      ","\n        ","gain","\n        ","Real","\n        ","The gain value applied to the input signal.","\n      ","\n    ","\n  ","\n  "," ","\n  "," ","\n  ","\n  ","\n    ","\n      ","\n        ","Back: ","Audio Effects","\n        ","Next: ","AudioEffectType Enum","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["AudioEffect Struct"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"7":[["Reverb (","AudioEffectType.Reverb1",")"],["Delay (","AudioEffectType.Delay",")"],["Distortion (","AudioEffectType.Bitcrusher",")"],["LPF (","AudioEffectType.LPF2",")"],["HPF (","AudioEffectType.HPF2",")"],["Gain (","AudioEffectType.Gain",")"]],"id":"2670"})