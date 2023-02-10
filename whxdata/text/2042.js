rh._.exports({"0":[[" ","xboxlive_stats_remove_user"]],"1":[["xboxlive_stats_remove_user, achievement_stat_event"]],"2":[["xboxlive_stats_remove_user,achievement_stat_event"]],"3":[[" ","xboxlive_stats_remove_user"]],"4":[[" ","This function can be used to remove (unregister) a given user from the statistics manager, performing a flush of the stat data to the live server. According to the XBox documentation the game does not have to remove the user from the stats manager, as the XBox OS will periodically flush the stats anyway. You supply the user ID as returned by (for example) the function ","xboxlive_get_user()",", and the function will will return -1 if there was an error or if the user ID is invalid, or any other value if the function was successfully called."," ","NOTE",": Removing the user can return an error if the statistics that have been set on the user are invalid (such as the stat names containing non-alpha numeric characters)."," ","The function will generate a callback which will trigger a ","System Asynchronous Event",". This event will have the special DS map ","async_load"," which should then be parsed for the following keys:"," ","\"","id","\" - Will hold the constant ","achievement_stat_event"," ","\"","eventname","\" - Will hold the string \"","LocalUserRemoved","\""," ","\"","userid","\" - The user ID associated with the request"," ","\"","error","\" - 0 if successful, some other value if there has been an error"," ","\"","errormessage","\" - A string with an error message, if any is available"," ","Note that if you want to flush the stats data to the live server at any time without removing the user, you can use the function ","xboxlive_stats_flush_user()","."],[" ","xboxlive_stats_remove_user(user_id);"," ","Argument","Type"," ","Description"," ","user_id","Xbox User ID"," ","The user ID (a pointer) to remove"],[" ","Real"],[" ","for(var i = 0; i < xboxlive_get_user_count(); ++i;)","\n    {","\n        user_id[i] = xboxlive_get_user(i);","\n        xboxlive_stats_remove_user(user_id[i]);","\n    }"," ","The above code loop through the stored user account IDs and remove (unregister) each user from the stats manager."," ","Back: ","Stats And Leaderboards"," ","Next: ","xboxlive_stats_flush_user"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2042"})