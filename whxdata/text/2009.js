rh._.exports({"0":[[" ","audio_channel_num"]],"1":[["audio_channel_num"]],"2":[["audio_channel_num"]],"3":[[" ","audio_channel_num"]],"4":[[" ","With this function you can set how many audio channels are available for playing audio in ","GameMaker","."," ","This basically means the number of sounds (or ","sound instances"," or ","voices",") that can be played ","simultaneously",". Or, put differently, the number of calls to any of the ","audio_play_sound_"," functions that you can make before sounds may be lost."," ","If the number exceeds this value, those sounds with a lower ","priority"," are stopped to free up a channel for the sounds with a higher ","priority","."," ","TIP"," You can use this function to optimise your game for devices as the lower the number of channels for audio the better the performance, but bear in mind that this may also cause noticeable cutoff of certain sounds if many are played at once."],[" ","audio_channel_num","(num);"," ","Argument"," ","Type"," ","Description"," ","num"," ","Real"," ","Number of available audio channels (default is ","128",")"],[" ","N/A"],[" ","switch (os_browser)","\n    {","\n        case browser_not_a_browser:","\n            switch (os_type)","\n            {","\n                case os_windows:","\n                case os_macos:"," ","audio_channel_num","(200);","\n                break;"," ","\n                default:"," ","audio_channel_num","(64);","\n                break;","\n            }","\n        break;"," ","\n        default:"," ","audio_channel_num","(16);","\n        break;","\n    }\n  "," ","The above code checks the platform that the game is running on and changes the number of available sound channels to increase performance."," ","Back: ","Audio"," ","Next: ","audio_falloff_set_model"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2009"})