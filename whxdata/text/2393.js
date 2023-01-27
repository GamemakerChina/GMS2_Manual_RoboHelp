rh._.exports({"0":[[" ","Stats And Leaderboards"]],"2":[["XBox Live Stats,Xbox Live Leaderboards"]],"3":[[" ","Stats And Leaderboards"]],"4":[[" ","Xbox One Stats (achievements and leaderboards) are functional when using UWP and have some special functions for dealing with them, although they also use some of the standard built-in functions for leaderboards. The 2017 Xbox Live stats system simplifies the whole procedure for making achievements and leaderboards, permitting you to create and use the different systems from within ","GameMaker",". The main difference between the 2017 (Title-Managed) system and previous systems is that you no longer have to define all of the stats you use in game on the Partner Center, and you do not need to tie achievement unlocking to a stat event/rule either (as they are unlocked by a direct function call instead)."," ","NOTE"," Although there is no manifest file required with this system, you can still set up some stats on XDP/Partner Center. Ones setup there will be considered ","featured stats"," which means you can have global leaderboards and the stats turn up on the games dashboard page. For more information, please see ","this article from Microsoft","."," ","Before calling any of the stats functions listed below, you must make sure that the user is logged in (see the User functions listed above) then setup the stats system and add the user to it using these functions:"," ","xboxlive_stats_setup"," (For Event-Based (2013) stats only)"," ","xboxlive_stats_add_user"," ","The following functions are used with the 2017 (Title-Managed) Stats system:"," ","xboxlive_stats_remove_user"," ","xboxlive_stats_flush_user"," ","xboxlive_stats_set_stat_real"," ","xboxlive_stats_set_stat_int"," ","xboxlive_stats_set_stat_string"," ","xboxlive_stats_delete_stat"," ","xboxlive_stats_get_stat_names"," ","xboxlive_stats_get_stat"," ","xboxlive_stats_get_leaderboard"," ","xboxlive_stats_get_social_leaderboard"," ","xboxlive_achievement_show_achievements"," ","xboxlive_achievement_load_friends"," ","xboxlive_achievement_load_leaderboard"," ","xboxlive_achievements_set_progress"," ","The following functions are used with the 2013 (Event-Based) Stats system:"," ","xboxlive_get_stats_for_user"," ","xboxlive_read_player_leaderboard"," ","xboxlive_fire_event"," ","Back: ","UWP And XBox Live"," ","Next: ","Match Making"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2393"})