rh._.exports({"0":[[" ","audio_destroy_stream"]],"1":[["audio_destroy_stream"]],"2":[["audio_destroy_stream"]],"3":[[" ","audio_destroy_stream"]],"4":[[" ","If you have previously created an audio stream from a file using the function ","audio_create_stream"," ","and no longer need that sound, you can call this function to delete it from memory. Any further calls to the sound index after it has been destroyed will give an error.\n  "," ","NOTE"," This will free up the stream but on the target platform this may not show up in a memory manager. This is because ","GameMaker"," pools memory resources to prevent memory allocation overhead, and so the memory will remain allocated until required for something else or re-used for a new stream."," ","NOTE"," ","This functionality is not available for the HTML5 target platform."],[" ","audio_destroy_stream","(filename);"," ","Argument"," ","Type"," ","Description"," ","filename"," ","String"," ","Path to the audio file that was streamed."],[" ","N/A"],[" ","audio_destroy_stream","(snd);"," ","The above code removes the sound indexed in the variable \"snd\" from memory."," ","Back: ","Audio"," ","Next: ","audio_exists"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1499"})