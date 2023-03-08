rh._.exports({"0":[[" ","audio_pause_all"]],"1":[["audio_pause_all"]],"2":[["audio_pause_all"]],"3":[[" ","audio_pause_all"]],"4":[[" ","With this function you can pause all sounds that are currently playing."],[" ","audio_pause_all","();"],[" ","N/A"],[" ","if keyboard_check_pressed(ord(\"P\"))","\n    {","\n        global.Pause = !global.Pause;","\n        if global.Pause","\n        {"," ","audio_pause_all","();","\n        }","\n        else","\n        {","\n            audio_resume_all();","\n        }","\n    }"," ","The above code checks for a press of the keyboard key \"P\" and if it detects one it sets the global variable \"Pause\" to ","true"," or false and then either pauses all sounds or restarts all previously paused sounds."," ","Back: ","Audio"," ","Next: ","audio_resume_sound"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"482"})