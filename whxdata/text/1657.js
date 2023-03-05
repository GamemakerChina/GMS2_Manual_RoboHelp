rh._.exports({"0":[[" ","xboxlive_stats_set_stat_int"]],"1":[["xboxlive_stats_set_stat_int"]],"2":[["xboxlive_stats_set_stat_int"]],"3":[[" ","xboxlive_stats_set_stat_int"]],"4":[[" ","This function can be used to set the value of a stat for the given user ID. You supply the user ID as returned by (for example) the function ","xboxlive_get_user()",", then the stat string\n    to set (","if the stat string does not already exist then a new stat will be created and set to the given value",") and a value (an integer) to set the stat to. Note that the stat name must be alphanumeric only, with no symbols or spaces."," ","When setting the stat value, any previous value will be overridden, therefore it is up to you to determine if the stat value should be updated or not (ie. check that the high score is actually the highest) by comparing to the current stat value with\n    the new one before setting it."," ","The function will will return -1 if there was an error or the user ID is invalid, or any other value if the function was successfully called."],[" ","xboxlive_stats_set_stat_int(user_id, stat, value);"," ","Argument","Type"," ","Description"," ","user_id","Xbox User ID"," ","The user ID pointer to set the stat for"," ","stat","String"," ","The statistic to set (a string)"," ","value","Real"," ","The value to set the stat to (an integer)"],[" ","Real"],[" ","var _val = xboxlive_stats_get_stat(p_user_id, \"GamesPlayed\");"," xboxlive_stats_set_stat_int(p_user_id, \"GamesPlayed\", ++_val);"," ","The above code retrieves the value for the stat \"GamesPlayed\", then sets the same stat to that value plus 1."," ","Back: ","Stats And Leaderboards"," ","Next: ","xboxlive_stats_set_stat_string"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1657"})