rh._.exports({"0":[[" ","time_bpm_to_seconds"]],"1":[["time_bpm_to_seconds"]],"2":[["time_bpm_to_seconds"]],"3":[[" ","time_bpm_to_seconds"]],"4":[[" ","This function takes a beats-per-minute value, and returns the length of each beat in seconds."," ","This can be used when ","creating a Time Source"," to use a BPM value for the ","Time Source",". It's important that such a ","Time Source"," uses ","seconds"," as its ","unit","."],[" ","time_bpm_to_seconds(bpm);"," ","Argument"," ","Type"," ","Description"," ","bpm"," ","Real"," ","The beats-per-minute value to convert into seconds-per-beat"],[" ","Real"],[" ","var _bpm = 90;","\n    var _seconds = time_bpm_to_seconds(_bpm);"," ","\n    time_source = time_source_create(time_source_game, _seconds, time_source_units_seconds, function()","\n    {","\n        show_debug_message(\"BEAT!\");","\n    }, [], -1);\n  "," ","This code converts a value of 90 BPM into seconds, and uses that to create a ","Time Source"," that runs indefinitely."," ","On each beat, it prints the message ","\"BEAT!\""," to the output log."," ","Back: ","Time Sources"," ","Next: ","time_seconds_to_bpm"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1522"})