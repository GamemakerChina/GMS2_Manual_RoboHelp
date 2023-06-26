rh._.exports({"0":[[" ","video_get_volume"]],"1":[["video_get_volume, get video volume"]],"2":[[" ","video_get_volume"]],"3":[[" ","This function returns the volume of the currently loaded video, which is a value between 0 and 1. You can change the volume of the loaded video using ","video_set_volume()","."],[" ","video_get_volume();"],[" ","Real"],[" ","/// Step event","\n    var _video_volume = video_get_volume();"," ","\n    if (_video_volume < 1) {","\n        _video_volume += 0.02;","\n        video_set_volume(_video_volume);","\n    }\n  "," ","The above code would run in a Step event. It gets the volume for the video that is currently playing, and if it's lower than 1, it will increase it by 0.02, gradually increasing the volume until it's at the maximum level."," ","Back: ","Video Playback"," ","Next: ","video_get_duration"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["video_get_volume"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"505"})