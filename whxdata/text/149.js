rh._.exports({"0":[["audio_pause_all"]],"1":[["audio_pause_all"]],"2":[["audio_pause_all"]],"3":[["\n  ","\n  "],["\n  ","With this function you can pause all sounds that are currently playing.","\n  "," ","\n  "],["\n  ","audio_pause_all();","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","if keyboard_check_pressed(ord(\"P\"))","\n    {","\n        global.Pause = !global.Pause;","\n        if global.Pause","\n        {","\n            audio_pause_all();","\n        }","\n        else","\n        {","\n            audio_resume_all();","\n        }","\n    }","\n  ","The above code checks for a press of the keyboard key \"P\" and if it detects one it sets the global variable \"Pause\" to ","true"," or false and then either pauses all sounds or restarts all previously paused sounds.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Audio","\n        ","Next: ","audio_resume_sound","\n        \n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["audio_pause_all"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"149"})