rh._.exports({"0":[["xboxlive_achievement_show_achievements"]],"1":[["achievement_show_achievements"]],"2":[["achievement_show_achievements"]],"3":[["\n  ","\n  "],["\n  ","This function will open the achievements page for the chosen platform. Please note that this is an ","asynchronous function",", ie: your game will continue to run in the background while the achievements page is being shown. As such, you should be careful where you use this and make sure to pause the game or only permit it to be shown in areas of your game where it will not interfere with the game-play.","\n  "," ","\n  "],["\n  ","xboxlive_achievement_show_achievements()","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","if achievements_enabled","\n    {","\n        global.Pause = true;","\n        instance_create_layer(0, 0, \"Controllers\", obj_Pause);","\n        xboxlive_achievement_show_achievements();","\n    }","\n  ","The above code checks a custom variable to see if achievements are enabled, and if so it sets a global variable and creates a controller \"pause\" instance before calling the function to show the achievements on screen.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Stats And Leaderboards","\n        ","Next: ","xboxlive_achievement_load_friends","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["xboxlive_achievement_show_achievements"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"751"})