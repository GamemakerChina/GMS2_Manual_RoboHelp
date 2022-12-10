rh._.exports({"0":[["window_center"]],"1":[["window_center"]],"2":[["window_center"]],"3":[["\n  ","\n  "],["\n  ","With this function you can center the game window in the display when the target module is Windows, Ubuntu (Linux) or macOS, or you can center it in the browser if the target module is HTML5. This function has no effect on any other device.","\n  ","NOTE"," If you have resized the game window in the current step (for example, by switching from full screen to windowed or using ","window_set_size()","), and wish to center the new window, this function should be called at least one step later (for example, by using an ","alarm",") otherwise it will not work correctly.","\n  "," ","\n  "],["\n  ","window_center();","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","if !window_get_fullscreen()","\n    {","\n        window_center();","\n    }","\n  ","The above code will center the game window within the display if it is not in full screen mode.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","The Game Window","\n        ","Next: ","window_handle","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["window_center"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2572"})