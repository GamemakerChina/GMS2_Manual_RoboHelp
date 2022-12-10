rh._.exports({"0":[["game_set_speed"]],"1":[["game_set_speed,gamespeed_fps,gamespeed_microseconds"]],"2":[["game_set_speed,gamespeed_fps,gamespeed_microseconds"]],"3":[["\n  ","\n  "],["\n  ","This function can be used to set the game speed. You can set this in one of two ways - as either game frames per second (FPS) or as microseconds per game frame (MPF) - using one of the following two constants:","\n  ","\n    ","\n      ","\n        ","Constant","\n        ","Description","\n      ","\n      ","\n        ","gamespeed_fps","\n        ","Sets the game speed using frames per second.","\n      ","\n      ","\n        ","gamespeed_microseconds","\n        ","Sets the game speed using microseconds per frame.","\n      ","\n    ","\n  ","\n  ","So, for example, a game speed of 30 frames per second would be 33333 microseconds per game game frame, which would then be expressed by this function as either:","\n  ","game_set_speed(30, gamespeed_fps);","\n  ","or:","\n  ","game_set_speed(33333, gamespeed_microseconds);","\n  "," ","\n  "],["\n  ","game_set_speed(speed, type);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","speed","\n        ","Real","\n        ","The new game speed (as either FPS or MPF).","\n      ","\n      ","\n        ","type","\n        ","Game Speed Constant","\n        ","The type of method used to set the game speed (see the constants above).","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","if os_browser == browser_not_a_browser","\n    {","\n        game_set_speed(60, gamespeed_fps);","\n    }","\n    else","\n    {","\n        game_set_speed(30, gamespeed_fps);","\n    }","\n  ","The above code checks to see if the game is running in a browser and sets the game speed accordingly as an FPS value.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","General Game Control","\n        ","Next: ","highscore_add","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["game_set_speed"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1632"})