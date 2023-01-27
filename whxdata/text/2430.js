rh._.exports({"3":[[" ","rollback_create_game"]],"4":[[" ","This function hosts a new multiplayer game. It takes the number of players that must be connected for the game to start, and optionally allows you to disable ","Sync Test","."," ","When called with Sync Test disabled, the system waits for ","num_players"," amount of players to join before ","starting"," the game. Make sure to not create or modify any managed instances until the game starts."," ","TIP"," You can optionally force the game to start before all players have joined, by calling ","rollback_start_game()","."," ","Currently you can only have up to 4 players in one game."," ","WARNING"," It is not recommended to set a default region in this function unless you are allowing the player to select it through a menu."],[" ","rollback_create_game(num_players, [enable_sync_test, region]);"," ","Argument"," ","Type"," ","Description"," ","num_players"," ","Real"," ","The number of players that must be connected for the game to start. If ","rollback_define_player()"," is used, this is the number of instances that are automatically created."," ","enable_sync_test"," ","Boolean"," ","OPTIONAL"," Specifies whether Sync Test should be enabled, and is ","true"," by default. When set to ","false",", online functionality is enabled."," ","region"," ","String"," ","OPTIONAL"," Specifies the default region where the virtual room will be created. See example at the bottom."],[" ","N/A"],[" ","rollback_define_player(obj_player);","\n    var _joined = rollback_join_game();"," ","\n    if (!_joined)","\n    {","\n        rollback_create_game(2, false, \"Europe\");","\n    }\n  "," ","The above code defines a player object, and then attempts to join a game. If it was not joined, it creates a new game instead, with a maximum of 2 players and Sync Test disabled."," ","For an extended example, see ","Create a Multiplayer Game","."],[" ","If you want to specify a default region, you will need the region strings. You can get them with an HTTP request to base API URL + ","/regions","."," ","// Create event","\n    http_get(rollback_api_server + \"/gg/regions\");"," ","\n    // Async - HTTP event","\n    if (async_load[? \"http_status\"] == 200)","\n    {","\n        var _struct = json_parse(async_load[? \"result\"]);","\n        var _data = _struct.data;","\n        var _num_regions = array_length(_data);"," ","\n        global.regions = [];","\n        for (var i = 0; i < _num_regions; i++)","\n        {","\n            global.regions[i] = _data[i];","\n        }","\n    }\n  "," ","This requests the region list from GX.games, and in the ","Async - HTTP"," event, iterates through the list and stores all regions in a global array."," ","Back: ","Rollback Functions"," ","Next: ","rollback_join_game"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"7":[[" ","rollback_create_game"]],"8":[["rollback_create_game"]],"9":[["rollback_create_game"]],"10":[[" ","Getting region names"]],"id":"2430"})