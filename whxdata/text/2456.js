rh._.exports({"0":[[" ","xboxlive_read_player_leaderboard"]],"1":[["xboxlive_read_player_leaderboard,achievement_filter_all_players,achievement_filter_friends_only,achievement_filter_favorites_only,achievement_filter_friends_alt,achievement_filter_favorites_alt,achievement_leaderboard_info"]],"2":[["xboxlive_read_player_leaderboard,achievement_filter_all_players,achievement_filter_friends_only,achievement_filter_favorites_only,achievement_filter_friends_alt,achievement_filter_favorites_alt,achievement_leaderboard_info"]],"3":[[" ","xboxlive_read_player_leaderboard"]],"4":[[" ","The function will return leaderboard information for the given user name. The leaderboard must have been created previously on the XDP dashboard for your game, and callin the function will trigger a callback ","Social Asynchronous Event"," which contains the ","async_load"," map populated with the relevant key/value pairs. The \"id\" key of this DS map is used to identify the correct callback (there can be more than one trigger function for any given asynchronous event), and IT will be paired with the constant ","achievement_leaderboard_info"," as well as a number of other key/value pairs. The exact contents of the map are shown below:"," ","\"","id","\" - For this function it should be ","achievement_leaderboard_info"," ","\"","leaderboardid","\" - The unique ID for the leaderboard as defined on the provider dashboard."," ","\"","numentries","\" - The number of entries in the leaderboard that you have received."," ","\"","PlayerN","\" - The name of the player, where \"N\" is an integer value corresponding to their position within the leaderboard entries list."," ","\"","PlayeridN","\" - The unique user id of the player, \"N\"."," ","\"","RankN","\" - The rank of the player \"N\" within the leaderboard."," ","\"","ScoreN","\" - The score of the player \"N\"."," ","\n    The function requires you to give one of the following constants to set the filter properties:"," ","Constant"," ","Description"," ","xboxlive_achievement_filter_all_players"," ","Get all scores."," ","xboxlive_achievement_filter_friends_only"," ","Get only friends scores, in ascending order."," ","xboxlive_achievement_filter_favorites_only"," ","Get only favorites scores, in ascending order"," ","xboxlive_achievement_filter_friends_alt"," ","Get only friends scores in descending order."," ","xboxlive_achievement_filter_favorites_alt"," ","Get only favorites scores in descending order."],[" ","xboxlive_read_player_leaderboard(leaderboard_name, user_name, num_items, friend_filter);"," ","Argument"," ","Type"," ","Description"," ","leaderboard_name"," ","String"," ","The name of the leaderboard to read, as set up on XDP."," ","user_name"," ","Xbox User ID"," ","The ID of the user to read from."," ","num_items"," ","Real"," ","The number of items to retrieve."," ","friend_filter"," ","Xbox Live Achievement Filter Constant"," ","One of the filter constants (see the description, above)."],[" ","Real"],[" ","var _user = xboxlive_user_for_pad(0);","\n    var _uid = xboxlive_user_id_for_user(_user);","\n    xboxlive_read_player_leaderboard(\"MyLeaderboard\", _uid, 10, achievement_filter_all_players);"," ","The above code gets the user ID and then uses that to request all the player data for the first 10 places of the given leaderboard."," ","Back: ","Stats And Leaderboards"," ","Next: ","xboxlive_fire_event"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2456"})