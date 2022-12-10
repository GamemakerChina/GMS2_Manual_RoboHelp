rh._.exports({"0":[["audio_sound_get_listener_mask"]],"1":[["audio_sound_get_listener_mask"]],"2":[["audio_sound_get_listener_mask"]],"3":[["\n  ","\n  "],["\n  ","This function will return the bit-mask data that defines which audio listeners a sound should be played from. See the section on ","Audio Listeners"," for more information.","\n  "," ","\n  "],["\n  ","audio_sound_get_listener_mask(soundID);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","soundID","\n        ","Sound Instance ID","\n        ","The unique ID of the sound to get the mask of","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Real","\n  "," ","\n  "],["\n  ","var snd = audio_play_sound(snd_PlayerDead, 10, false);","\n    if audio_sound_get_listener_mask(snd) != global.PlayerMask","\n    {","\n        audio_sound_set_listener_mask(snd, global.PlayerMask);","\n    }","\n  ","The above code plays a sound then checks the listener mask data for the sound, and if it's not the same as that which is stored in a global variable, it sets the listener(s) to play from using the mask data stored in the global variable.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Audio","\n        ","Next: ","audio_sound_length","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["audio_sound_get_listener_mask"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"771"})