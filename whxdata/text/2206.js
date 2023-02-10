rh._.exports({"0":[[" ","xboxlive_achievement_load_friends"]],"1":[["achievement_load_friends"]],"2":[["achievement_load_friends,achievement_friends_info"]],"3":[[" ","xboxlive_achievement_load_friends"]],"4":[[" ","This function will send a request to the server for information on all the logged in users friends and will trigger a callback ","Social Asynchronous Event"," which contains the ","async_load"," map populated with the relevant key/value pairs. The ","id"," key of this ","DS Map"," is used to identify the correct callback (there can be more than one trigger function for any given asynchronous event), and will be paired with the ","constant"," ","xboxlive_achievement_friends_info"," as well as a number of other key/value pairs for each friend. The exact contents of the map are shown below:"," ","\"","id","\" - For this function it should be ","xboxlive_achievement_friends_info"," ","\"","FriendN","\" - The name of the friend, where \"N\" is an integer value corresponding to their position within the friends list."," ","\"","FriendidN","\" - The unique user id of the friend, \"N\"."],[" ","xboxlive_achievement_load_friends();"],[" ","N/A"],[" ","The following code would probably be called after the player has logged into their game account to get a list of all that users friends:"," ","xboxlive_achievement_load_friends();"," ","This will send off a request for the information on the users friends and generate an asynchronous callback with the special ","async_load"," DS map containing the following data:"," ","var ident = ds_map_find_value(async_load, \"id\");","\n    if ident == xboxlive_achievement_friends_info","\n    {","\n        var numfriends = ds_map_find_value(async_load, \"numfriends\");","\n        global.numfriends = numfriends;","\n        for(var i=0; i < numfriends; i++;)","\n        {","\n            global.friendname[i] = ds_map_find_value(async_load, \"Friend\" + string(i));","\n            global.friendid[i] = ds_map_find_value(async_load, \"Friendid\" + string(i));","\n        }","\n    }"," ","The above code checks the returned ","DS Map"," in the ","Social Asynchronous Event"," and if its \"id\" matches the constant being checked, it then loops through the map storing all the different values in a number of arrays."," ","Back: ","Stats And Leaderboards"," ","Next: ","xboxlive_achievement_load_leaderboard"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Extended Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2206"})