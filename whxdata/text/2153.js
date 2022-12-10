rh._.exports({"0":[["xboxlive_sprite_add_from_gamerpicture"]],"1":[["xboxlive_sprite_add_from_gamerpicture"]],"2":[["xboxlive_sprite_add_from_gamerpicture"]],"3":[["\n  ","\n  "],["\n  ","With this function you can get the gamer picture for a given user ID pointer. The function works asynchronously, and will trigger an ","Image Loaded"," asynchronous event to inform you that the function is finished (like with HTML5/URL calls to ","sprite_add()","). The Asynchronous Image Loaded event will have a DS map stored in the built in variable ","async_load",". The map contains the following information:","\n  ","\n    ","\"","filename","\": The complete path to the file you requested.","\n    ","\"","id","\": The ID of the resource that you have loaded. This will be the same as the variable that you have assigned the resource to.","\n    ","\"","status","\": Returns a value of less than 0 for an error.","\n  ","\n  ","NOTE",": When you dynamically load a sprite into your game at runtime, you must remember to remove it again using ","sprite_delete()"," when no longer needed, otherwise there is risk of a memory leak which will slow down and eventually crash your game.","\n  "," ","\n  "],["\n  ","xboxlive_sprite_add_from_gamerpicture(user_id, imagesize, xorig, yorig);","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","user_id","Xbox User ID","\n        ","The user ID (a pointer) to get the gamer picture for","\n     ","\n      ","\n        ","imagesize","Real","\n        ","Size in pixels of the sprite to be returned","\n     ","\n      ","\n        ","xorig","Real","\n        ","Indicate the x position of the origin in the sprite","\n     ","\n      ","\n        ","yorig","Real","\n        ","Indicate the y position of the origin in the sprite","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Async Request ID","\n  "," ","\n  "],["\n  ","var _a = 0;","\n    var _num = xboxlive_get_user_count();","\n    for (var i = 0; i < _num; ++i;)","\n    {","\n        var _uid = xboxlive_get_user(i);","\n        if _uid != pointer_null","\n        {","\n            global.UserName[_a] = xboxlive_gamedisplayname_for_user(_uid);","\n            global.UserScore[_a] = xboxlive_gamerscore_for_user(_uid);","\n            global.UserRep[_a] = xboxlive_reputation_for_user(_uid);","\n            global.UserAvatar[_a] = xboxlive_sprite_add_from_gamerpicture(_uid, 256, 0, 0);","\n            ++a;","\n        }","\n    }","\n  ","The above code loops through the logged in users and stores their gamer data in various global arrays.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Users And Accounts","\n        ","Next: ","xboxlive_generate_player_session_id","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["xboxlive_sprite_add_from_gamerpicture"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2153"})