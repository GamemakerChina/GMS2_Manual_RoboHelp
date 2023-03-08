rh._.exports({"0":[[" ","xboxlive_stats_get_stat"]],"1":[["xboxlive_stats_get_stat"]],"2":[["xboxlive_stats_get_stat"]],"3":[[" ","xboxlive_stats_get_stat"]],"4":[[" ","This function can be used to retrieve a single stat value from the stat manager for a given user. You supply the user ID as returned by (for example) the function ","xboxlive_get_user()",", and then the stat string as defined when you created it using the one of the ","xboxlive_stats_set_stat_*"," functions. The return value can be either a string or a real (depending on the stat being checked) or the GML constant ","undefined"," if the stat does not exist or there has been an error."],[" ","xboxlive_stats_get_stat(user_id, stat);"," ","Argument","Type"," ","Description"," ","user_id","Xbox User ID"," ","The user ID pointer to get the stat names of"," ","stat","String"," ","The statistic to set (a string)"],[" ","Real",", ","String"," or ","undefined"],[" ","if (game_over == true)","\n    {","\n        if (xboxlive_stats_get_stat(p_user_id, \"PercentDone\") < 100)","\n        {","\n            var _val = (global.LevelsFinished / global.LevelsTotal) * 100;","\n            xboxlive_stats_set_stat_real(p_user_id, \"PercentDone\", _val);","\n        }","\n    }"," ","The above code checks a variable and if it's ","true",", then it will check the value of the \"PercentDone\" stat. If this value is less than 100, a value is then generated and the stat set to that value."," ","Back: ","Stats And Leaderboards"," ","Next: ","xboxlive_stats_get_leaderboard"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1554"})