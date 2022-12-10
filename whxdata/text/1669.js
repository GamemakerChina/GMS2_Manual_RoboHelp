rh._.exports({"0":[["room_set_persistent"]],"1":[["room_set_persistent"]],"2":[["room_set_persistent"]],"3":[["\n  ","\n  "],["\n  ","With this function you can change (or set) the persistence of any room in your game ","except the current one",". A room with persistence flagged as ","true"," it will maintain the state of all instances within that room if the player leaves and then returns, whereas if persistence is flagged as ","false"," it will be reset to the initial state every time. You should note that a persistent room uses considerably more memory than a normal room and it is not recommended to have too many of them in your game.","\n  ","NOTE",": This function will ","NOT"," work to switch off persistence if the room has already been visited! A persistent room, once visited, is held in memory and to switch off persistence you should go to that room and set the ","room_persistent"," variable to ","false"," and then exit the room again.","\n  "," ","\n  "],["\n  ","room_set_persistent(index, val);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","index","\n        ","Room Asset","\n        ","The index of the room to set the persistence of.","\n      ","\n      ","\n        ","val","\n        ","Boolean","\n        ","Whether the room should be persistent (","true",") or not (","false",").","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","global.myroom = room_add();","\n    room_set_width(global.myroom, 640);","\n    room_set_height(global.myroom, 480);","\n    room_set_persistent(global.myroom, true);","\n  ","This will create a new room and store its index in the variable \"global.myroom\". It will then set its width to 640 pixels, its height to 480 pixels, its caption to 'Game Room' and its persistence to 'true'.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Rooms","\n        ","Next: ","room_set_view_enabled","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["room_set_persistent"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1669"})