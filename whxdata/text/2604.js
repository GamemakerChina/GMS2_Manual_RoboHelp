rh._.exports({"0":[[" ","audio_play_sound_at"]],"1":[["audio_play_sound_at"]],"2":[["audio_play_sound_at"]],"3":[[" ","audio_play_sound_at"]],"4":[[" ","With this function you can play any sound asset at a given position within the audio space."," ","You provide the sound index and then assign it a position within the 3D space. The default listener position is ","(0, 0, 0)"," so this means that if the listener has not been moved and you want the sound to come from the left (for example), you should set the x position to a negative value (for more information on setting the listener position see ","audio_listener_position()",")."," ","You can also set a fall-off distance (0 will make the sound silent, default is 100) which will make the sound fade out as it gets further from the listener position. How the fade itself is heard will depend on the falloff reference (which is the distance under which the volume for the source would normally drop by half) and the roll off factor (which affects the sound past the falloff reference distance only). The default factor is normally 1, and the effect of the different falloff values will depend on the model chosen (for a complete guide to the different falloff models and how these values are used, please see the function ","audio_falloff_set_model()",")."," ","The next two arguments are to set the sound is to loop or not and for assigning a priority to the sound. This priority is then used to determine how sounds are dealt with when the number of sounds playing is over the limit set by the function ","audio_channel_num()",". Lower priority sounds will be stopped in favour of higher priority sounds, and the priority value can be any real number (the actual value is arbitrary, and can be from 0 to 1 or 0 to 100, as ","GameMaker"," will prioritise them the same). Note that when dealing with priority, the ","higher"," the number the ","higher"," the priority, such that a sound with priority 100 will be favoured over a sound with priority 1."," ","This function will also return a unique index for the sound being played, which can be stored in a variable so you can later ","pause it"," or ","stop it",". This means that if you have multiple instances of the same sound playing at any one time, you can target just one instance of that sound using the ","audio functions","."],[" ","There are four optional arguments that allow you to change the properties of the sound being played:"," ","... [gain], [offset], [pitch], [listener_mask]"," ","These parameters are applied to the sound immediately. This fixes the issues you would face when calling a separate function to change any of these values, which could cause an undesired delay in the change."," ","NOTE"," To change the value of any of these properties after playback of a sound has been started, see ","audio_sound_gain"," for gain, ","audio_sound_set_track_position"," for offset, ","audio_sound_pitch"," for pitch and ","audio_sound_set_listener_mask"," for listener mask."],[" ","audio_play_sound_at","(index, x, y, z, falloff_ref, falloff_max, falloff_factor, loop, priority, [gain], [offset], [pitch], [listener_mask]);"," ","Argument"," ","Type"," ","Description"," ","index"," ","Sound Asset"," ","The index of the sound to play."," ","x"," ","Real"," ","The x position."," ","y"," ","Real"," ","The y position."," ","z"," ","Real"," ","The z position."," ","falloff_ref"," ","Real"," ","The falloff reference relative to the listener (clamp)."," ","falloff_max"," ","Real"," ","The maximum falloff distance relative to the listener."," ","falloff_factor"," ","Real"," ","The falloff factor (default 1)."," ","loop"," ","Boolean"," ","Flags the sound as looping or not."," ","priority"," ","Real"," ","Set the channel priority for the sound."," ","gain"," ","Real"," ","OPTIONAL"," Value for the gain."," ","offset"," ","Real"," ","OPTIONAL"," The time (in seconds) to set the start point to. Values beyond the end of the sound are clamped to its length."," ","pitch"," ","Real"," ","OPTIONAL"," The pitch multiplier (default 1)."," ","listener_mask"," ","Real"," ","OPTIONAL"," The bitmask data to set for the sound. On the HTML5 target  this will have no effect as the target does not support more than one listener."],[" ","Sound Instance ID"],[" ","if global.SFX","\n    {"," ","audio_play_sound_at","(snd_Waterfall, x, y, 0, 100, 300, 1, true, 1);","\n    }"," ","The above code checks the global variable \"SFX\" and if it returns ","true"," then the sound indexed in the variable \"snd_Waterfall\" will be looped at its room position, with a fall-off reference of 100, a falloff distance of 300, a falloff factor of 1 and a low priority."],[" ","if global.SFX","\n    {"," ","audio_play_sound_at","(snd_Waterfall, x, y, 0, 100, 300, 1, true, 1, 1, 2);","\n    }"," ","The above code checks the global variable \"SFX\" and if it returns ","true"," then the sound indexed in the variable \"snd_Waterfall\" will be looped at its room position using the given falloff settings and no change in gain. The sound immediately starts playing from second 2."," ","Back: ","Audio"," ","Next: ","audio_pause_sound"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example 1:"],[" ","Example 2:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"8":[[" ","Optional Properties"]],"id":"2604"})