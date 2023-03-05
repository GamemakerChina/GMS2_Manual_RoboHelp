rh._.exports({"0":[[" ","video_get_duration"]],"1":[["video_get_duration"]],"2":[["video_get_duration, video duration, video length"]],"3":[[" ","video_get_duration"]],"4":[[" ","This function returns the duration of the currently loaded video, in milliseconds."],[" ","video_get_duration();"],[" ","Real"],[" ","if (keyboard_check_pressed(vk_right))","\n    {","\n        var _video_position = video_get_position();","\n        _video_position += 2000;"," ","\n        if (_video_position < video_get_duration()) ","\n        {","\n            video_seek_to(_video_position);","\n        }","\n        else","\n        {","\n            video_close();","\n        }","\n    }\n  "," ","The above code moves the playing video 2 seconds ahead, when the right arrow key is pressed, and the new position is smaller than the video's duration. However if it's not within the duration, the video is closed."," ","In this example, ","video_get_duration()"," is used in a condition to check if the new position is smaller than the returned duration."," ","Back: ","Video Playback"," ","Next: "]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"761"})