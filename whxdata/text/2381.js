rh._.exports({"0":[[" ","audio_sound_pitch"]],"1":[["audio_sound_pitch"]],"2":[["audio_sound_pitch"]],"3":[[" ","audio_sound_pitch"]],"4":[[" ","This function can be used to change the pitch of a given sound. The sound can either be one referenced from an index for an individual sound being played which has been stored in a variable when using the ","audio_play_sound()"," or ","audio_play_sound_at()"," functions, or an actual sound asset from the Asset Browser. If it is an index of a playing sound, then only that instance will be changed, however when using a sound asset from the Asset Browser, all instances of that sound asset being played will be changed."," ","The pitch argument is a ","pitch multiplier",", in that the input value multiplies the current pitch by that amount, so the default value of 1 is no pitch change, while a value of less than 1 will lower the pitch and greater than 1 will raise the pitch. It is best to use small increments for this function as any value under 0 or over 5 may not be audible anyway. It is worth noting that the total pitch change permitted is clamped to (1/256) - 256 octaves, so any value over or under this will not be registered."," ","NOTE"," ","The clamped value given above is what ","GameMaker"," attempts to clamp the range to, but this value is ","not"," guaranteed on all target platforms. iOS, for example, clamps to (1/256) - 8, so you may need to experiment on each target platform and have different versions of a sound resource, each one pre-shifted, should you require higher or lower octave values."," ","IMPORTANT"," As the pitch argument is a ","pitch multiplier",", the sound instance's pitch will be multiplied by the sound asset's pitch and also by the sound emitter's pitch in case the sound was played on an emitter using ","audio_play_sound_on",". The final pitch that will be heard is the original pitch of the sound multiplied by the three pitch multipliers: "," ","\n    final_pitch = original sound pitch * sound asset pitch * emitter pitch * sound instance pitch."," ","\n    By default the three pitch multipliers are equal to 1 so that the final pitch that is heard is equal to the original sound's pitch.\n  "],[" ","audio_sound_pitch","(index, pitch);"," ","Argument"," ","Type"," ","Description"," ","index"," ","Sound Asset"," or ","Sound Instance ID"," or ","Audio Queue ID"," ","The index of the sound to change."," ","pitch"," ","Real"," ","The pitch multiplier (default 1)."],[" ","N/A"],[" ","var s_engine = audio_play_sound(snd_CarEngine, 10, false);","\n    switch (gear)","\n    {","\n        case 1: ","audio_sound_pitch","(s_engine, 0.8); break;","\n        case 2: ","audio_sound_pitch","(s_engine, 0.9); break;","\n        case 3: ","audio_sound_pitch","(s_engine, 0.95); break;","\n        case 4: ","audio_sound_pitch","(s_engine, 1); break;","\n        case 5: ","audio_sound_pitch","(s_engine, 1.2); break;","\n    }"," ","The above code will change the pitch of the audio played from the sound indexed in the variable \"s_engine\" based on the value of the variable \"gear\"."," ","Back: ","Audio"," ","Next: ","audio_sound_get_pitch"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"2381"})