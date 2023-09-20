rh._.exports({"0":[[" ","audio_emitter_pitch"]],"1":[["audio_emitter_pitch"]],"2":[[" ","audio_emitter_pitch"]],"3":[[" ","This function can be used to change the pitch of all sounds emitted from the given emitter. It is a ","pitch multiplier",", in that the input value multiplies the current pitch by that amount, so the default value of 1 is no pitch change, while a value of less than 1 will lower the pitch and greater than 1 will raise the pitch. It is best to use small increments for this function as any value under 0 or over 5 may not be audible anyway."," ","NOTE"," ","Sounds already playing on the audio emitter do not have to be restarted in order for the change in pitch to be audible. The change in pitch is ","applied immediately","."," ","IMPORTANT"," As the pitch argument is a ","pitch multiplier",", the sound instance's pitch will be multiplied by the sound asset's pitch and also by the sound emitter's pitch in case the sound was played on an emitter using ","audio_play_sound_on",". The final pitch that will be heard is the original pitch of the sound multiplied by the three pitch multipliers: "," ","\n    final_pitch = original sound pitch * sound asset pitch * emitter pitch * sound instance pitch."," ","\n    By default the three pitch multipliers are equal to 1 so that the final pitch that is heard is equal to the original sound's pitch.\n  "],[" ","audio_emitter_pitch","(emitter, pitch);"," ","Argument"," ","Type"," ","Description"," ","emitter"," ","Audio Emitter ID"," ","The index of the emitter to change."," ","pitch"," ","Real"," ","The pitch multiplier (default 1)."],[" ","N/A"],[" ","switch (gear)","\n    {","\n        case 1: ","audio_emitter_pitch","(s_emit, 0.8); break;","\n        case 2: ","audio_emitter_pitch","(s_emit, 0.9); break;","\n        case 3: ","audio_emitter_pitch","(s_emit, 0.95); break;","\n        case 4: ","audio_emitter_pitch","(s_emit, 1); break;","\n        case 5: ","audio_emitter_pitch","(s_emit, 1.2); break;","\n    }"," ","The above code will change the pitch of the audio played from the emitter indexed in the variable \"s_emit\" based on the value of the variable \"gear\"."," ","Back: ","Audio Emitters"," ","Next: ","audio_emitter_set_listener_mask"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["audio_emitter_pitch"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1977"})