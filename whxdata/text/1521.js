rh._.exports({"0":[["video_seek_to"]],"1":[["video_seek_to"]],"2":[["video_seek_to, seek video"]],"3":[["\n  ","\n  ","\n  ","\n  "],["\n  ","This function allows you to seek to the given position in the currently loaded video. You specify the ","time"," value to seek to, which is in milliseconds.","\n  ","This function works best when the video is paused, and the distance from the current position to the new seek position is not too small.","\n  "," ","\n  "],["\n  ","video_seek_to(time);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","time","\n        ","Real","\n        ","The time to seek to (in milliseconds).","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","if (keyboard_check_pressed(vk_right))","\n    {","\n        var _video_position = video_get_position();","\n        _video_position += 2000;","\n    ","\n        if (_video_position < video_get_duration()) ","\n        {","\n            video_seek_to(_video_position);","\n        }","\n        else","\n        {","\n            video_close();","\n        }","\n    }\n  ","\n  ","The above code moves the playing video 2 seconds ahead, when the right arrow key is pressed, and the new position is smaller than the video's duration. However if it's not within the duration, the video is closed.","\n  ","In this example, ","video_seek_to()"," is used to seek the video to the new position.","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Video Playback","\n        ","Next: ","video_is_looping","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n","\n  ","\n  ","\n\n"]],"4":[["video_seek_to"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1521"})