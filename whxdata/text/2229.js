rh._.exports({"0":[["Stats And Leaderboards"]],"2":[["XBox Live Stats,Xbox Live Leaderboards"]],"3":[["\n  ","\n  "],["\n  ","Xbox One Stats (achievements and leaderboards) are functional when using UWP and have some special functions for dealing with them, although they also use some of the standard built-in functions for leaderboards. The 2017 Xbox Live stats system simplifies the whole procedure for making achievements and leaderboards, permitting you to create and use the different systems from within ","GameMaker",". The main difference between the 2017 (Title-Managed) system and previous systems is that you no longer have to define all of the stats you use in game on the Partner Center, and you do not need to tie achievement unlocking to a stat event/rule either (as they are unlocked by a direct function call instead).","\n  ","NOTE"," Although there is no manifest file required with this system, you can still set up some stats on XDP/Partner Center. Ones setup there will be considered ","featured stats"," which means you can have global leaderboards and the stats turn up on the games dashboard page. For more information, please see ","this article from Microsoft",".","\n  ","Before calling any of the stats functions listed below, you must make sure that the user is logged in (see the User functions listed above) then setup the stats system and add the user to it using these functions:","\n  ","\n    ","xboxlive_stats_setup"," (For Event-Based (2013) stats only)","\n    ","xboxlive_stats_add_user","\n  ","\n  "," ","\n  ","The following functions are used with the 2017 (Title-Managed) Stats system:","\n  ","\n    ","xboxlive_stats_remove_user","\n    ","xboxlive_stats_flush_user","\n    ","xboxlive_stats_set_stat_real","\n    ","xboxlive_stats_set_stat_int","\n    ","xboxlive_stats_set_stat_string","\n    ","xboxlive_stats_delete_stat","\n    ","xboxlive_stats_get_stat_names","\n    ","xboxlive_stats_get_stat","\n    ","xboxlive_stats_get_leaderboard","\n    ","xboxlive_stats_get_social_leaderboard","\n    ","xboxlive_achievement_show_achievements","\n    ","xboxlive_achievement_load_friends","\n    ","xboxlive_achievement_load_leaderboard","\n    ","xboxlive_achievements_set_progress","\n  ","\n  "," ","\n  ","The following functions are used with the 2013 (Event-Based) Stats system:","\n  ","\n    ","xboxlive_get_stats_for_user","\n    ","xboxlive_read_player_leaderboard","\n    ","xboxlive_fire_event","\n  ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","UWP And XBox Live","\n        ","Next: ","Match Making","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["Stats And Leaderboards"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2229"})