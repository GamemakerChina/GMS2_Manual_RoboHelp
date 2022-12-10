rh._.exports({"0":[["xboxlive_stats_delete_stat"]],"1":[["xboxlive_stats_delete_stat"]],"2":[["xboxlive_stats_delete_stat"]],"3":[["\n  ","\n  "],["\n  ","This function can be used to delete a stat from the stat manager for the given user ID. You supply the user ID as returned by (for example) the function ","xboxlive_get_user()",", then the stat string to delete. This clears the stat value and removed it from the stat manager, meaning it will no longer be returned by the functions ","xboxlive_stats_get_stat_names()"," or ","xboxlive_stats_get_stat()",".","\n  ","The function will will return -1 if there was an error or the user ID is invalid, or any other value if the function was successfully called","\n  "," ","\n  "],["\n  ","xboxlive_stats_delete_stat(user_id, stat);","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","user_id","Xbox User ID","\n        ","The user ID pointer to delete the stat of","\n     ","\n      ","\n        ","stat","String","\n        ","The statistic to delete (a string)","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Real","\n  "," ","\n  "],["\n  ","for(var i = 0; i < xboxlive_get_user_count(); i++;)","\n    {","\n        user_id[i] = xboxlive_get_user(i);","\n        xboxlive_stats_delete_stat(user_id[i], \"HighScore\");","\n    }","\n  ","The above code loops through the connected users and deletes the specified stat from the stat manager for each one.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Stats And Leaderboards","\n        ","Next: ","xboxlive_stats_get_stat_names","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["xboxlive_stats_delete_stat"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1354"})