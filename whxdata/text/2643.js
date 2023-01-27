rh._.exports({"0":[[" ","xboxlive_achievement_load_leaderboard"]],"1":[["achievement_load_leaderboard,achievement_leaderboard_info,achievement_filter_friends_only,achievement_filter_all_players"]],"2":[["achievement_load_leaderboard,achievement_leaderboard_info,achievement_filter_friends_only,achievement_filter_all_players"]],"3":[[" ","xboxlive_achievement_load_leaderboard"]],"4":[[" ","This function will send a request to the server for information on the given leaderboard. The leaderboard must have been created previously on the developer dashboard for your game and the ID given is that which you must supply as the first argument of the function. It will trigger a callback ","Social Asynchronous Event"," which contains the ","async_load"," map populated with the relevant key/value pairs. The ","id"," key of this ","DS Map"," is used to identify the correct callback (there can be more than one trigger function for any given asynchronous event), and will be paired with the ","constant"," ","xboxlive_achievement_leaderboard_info"," as well as a number of other key/value pairs for each player. The exact contents of the map are shown below:"," ","\"","id","\" - For this function it should be ","xboxlive_achievement_leaderboard_info"," ","\"","leaderboardid","\" - The unique ID for the leaderboard as defined on the provider dashboard."," ","\"","numentries","\" - The number of entries in the leaderboard that you have received."," ","\"","PlayerN","\" - The name of the player, where \"N\" is an integer value corresponding to their position within the leaderboard entries list."," ","\"","PlayeridN","\" - The unique user id of the player, \"N\"."," ","\"","RankN","\" - The rank of the player \"N\" within the leaderboard."," ","\"","ScoreN","\" - The score of the player \"N\"."," ","You can specify the exact portion of the leaderboard to show by giving a minimum and maximum index value, as well as request that the results be filtered to retrieve only those scores by your friends or those posted by all players using the following filter ","constants",":"," ","Xbox Live Achievement Filter Constant"," ","Constant"," ","Description"," ","xboxlive_achievement_filter_friends_only "," ","Get only the scores of the players friends."," ","xboxlive_achievement_filter_all_players "," ","Get all scores for all players."],[" ","xboxlive_achievement_load_leaderboard(ident, minindex, maxindex, filter)"," ","Argument"," ","Type"," ","Description"," ","ident"," ","String"," ","The unique ID of the leaderboard as shown on the developer dashboard."," ","minindex"," ","Real"," ","The starting index value to get the leaderboard data from."," ","maxindex"," ","Real"," ","The maximum index value to get the leaderboard data from."," ","filter"," ","Xbox Live Achievement Filter Constant"," ","Whether to filter the results to those that are on your friends list or to all players (see the ","Description"," above)"],[" ","N/A"],[" ","The following code would probably be called after the player has logged into their game account to get a list of all friends leaderboard positions for the game:"," ","xboxlive_achievement_load_leaderboard(\"CgkIs9_51u0PEAIQBw\", 1, 100, xboxlive_achievement_filter_friends_only);"," ","This will send off a request for the information on the given leaderboard and generate an asynchronous callback with the special ","async_load"," DS map containing the following data:"," ","var ident = ds_map_find_value(async_load, \"id\");","\n    if ident == xboxlive_achievement_leaderboard_info","\n    {","\n        var lbid = ds_map_find_value(async_load,\"leaderboardid\");","\n        if lbid == \"CgkIs9_51u0PEAIQBw\" || lbid == \"leaderboard1id\"","\n        {","\n            global.numentries = ds_map_find_value(async_load,\"numentries\");","\n            for(var i = 0; i < numentries; i++;)","\n            {","\n                global.playername[i] = ds_map_find_value(async_load, \"Player\" + string(i));","\n                global.playerid[i] = ds_map_find_value(async_load, \"Playerid\" + string(i));","\n                global.playerrank[i] = ds_map_find_value(async_load, \"Rank\" + string(i));","\n                global.playerscore[i] = ds_map_find_value(async_load, \"Score\" + string(i));","\n            }","\n        }","\n    }"," ","The above code checks the returned ","DS Map"," in the ","Social Asynchronous Event"," and if its \"id\" matches the constant being checked, it then checks to make sure that the leaderboard being sent matches the original function call before looping through the map and storing all the different values in a number of arrays."," ","Back: ","Stats And Leaderboards"," ","Next: ","xboxlive_achievements_set_progress"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Extended Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2643"})