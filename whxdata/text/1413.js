rh._.exports({"0":[["audio_stop_recording"]],"1":[["audio_stop_recording"]],"2":[["audio_stop_recording"]],"3":[["\n  ","\n  "],["\n  ","This function will stop recording on the given recorder channel (the channel index is returned when you call the function ","audio_start_recording()","). When you stop recording, no further ","Audio Recording Asynchronous Events"," will be triggered for the given recorder channel, so you would normally use this function in the actual asynchronous event to ensure that you have captured all the data.","\n  ","NOTE"," ","Most platforms support recording audio in some form, but that does not mean that all devices will permit it, even if the platform does, so you should always check that the ","audio_get_recorder_count()"," function returns a value greater than 0 to verify that recording devices are available before using the rest of the recording functions.","\n  "," ","\n  "],["\n  ","audio_stop_recording(channel_index);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","channel_index","\n        ","Real","\n        ","The index of the recorder channel to stop.","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","audio_stop_recording(audio_channel);","\n  ","The above code tells ","GameMaker"," to stop recording on the given audio channel index.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Audio Buffers","\n        ","Next: ","audio_get_recorder_count","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["audio_stop_recording"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1413"})