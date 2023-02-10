rh._.exports({"0":[[" ","audio_create_stream"]],"1":[["audio_create_stream"]],"2":[["audio_create_stream"]],"3":[[" ","audio_create_stream"]],"4":[[" ","With this function you can create a new sound index which can then be used in the regular audio functions to stream audio directly from an external OGG file source."," ","The function requires the filename (which can be an included file, for example) and will return the new sound index for use."," ","NOTE"," After you no longer need the sound you should call the function ","audio_destroy_stream"," with the sound index to remove it from memory otherwise you may get a memory leak. This will slow down and eventually crash your game."," ","NOTE"," This functionality is not available for the HTML5 target platform."],[" ","audio_create_stream","(filename);"," ","Argument"," ","Type"," ","Description"," ","filename"," ","String"," ","Path to the file (OGG only) to stream the audio from."],[" ","Sound Asset"],[" ","snd = ","audio_create_stream","(\"Music/Track1.ogg\");","\n    audio_play_sound(snd, 0, true);"," ","The above code creates a new sound index in the variable \"snd\" from the given file, then plays this sound."," ","Back: ","Audio"," ","Next: ","audio_destroy_stream"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1749"})