rh._.exports({"0":[[" ","xboxlive_stats_flush_user"]],"1":[["xboxlive_stats_flush_user,achievement_stat_event"]],"2":[["xboxlive_stats_flush_user,achievement_stat_event"]],"3":[[" ","xboxlive_stats_flush_user"]],"4":[[" ","This function can be used to flush the stats data for a given user from the statistics manager, to the live server, ensuring that the server is up to date with the current values. According to XBox documentation, developers should be careful not to call this too often as the XBox will rate-limit the requests, and the XBox OS will also automatically flush stats approximately every 5 minutes automatically anyway."," ","NOTE",": Removing the user can return an error if the statistics that have been set on the user are invalid (such as the stat names containing non-alpha numeric characters)."," ","To use the function, you supply the user ID as returned by (for example) the function ","xboxlive_get_user()",", and a proprity value (which will be 1 for high priority and 0 for low priority). The function will will return -1 if there was an error or the user ID is invalid, or any other value if the function was successfully called. The function will also generate a callback which will trigger a ","System Asynchronous Event",". This event will have the special DS map ","async_load"," which should then be parsed for the following keys:"," ","\"","id","\" - Will hold the constant ","achievement_stat_event"," ","\"","eventname","\" - Will hold the string \"","StatisticUpdateComplete","\""," ","\"","userid","\" - The user ID associated with the request"," ","\"","error","\" - 0 if successful, some other value if there has been an error"," ","\"","errormessage","\" - A string with an error message, if any is available"," ","Note that stats will be flushed automatically for you when you remove a user from the stat manager. See ","xboxlive_stats_remove_user()"," for more information."],[" ","xboxlive_stats_flush_user(user_id, priority);"," ","Argument"," ","Type"," ","Description"," ","user_id"," ","Xbox User ID"," ","The user ID (a pointer) to use"," ","priority"," ","Real"," ","The prority value (0 or 1)"],[" ","Real"],[" ","for(var i = 0; i < array_length(user_id); ++i;)","\n    {","\n        xboxlive_stats_flush_user(user_id[i], 0);","\n    }"," ","The above code loops through the stored user account IDs and then flushes the stat manager data for each user."," ","Back: ","Stats And Leaderboards"," ","Next: ","xboxlive_stats_set_stat_real"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2121"})