rh._.exports({"0":[["room_add"]],"1":[["room_add"]],"2":[["room_add"]],"3":[["\n  ","\n  "],["\n  ","This function will create a new, empty, room and add it to your game, returning its index to be stored in a variable for all further codes that deal with this room. Note that each room is permanently added to the game until the executable is closed, ie: ","rooms added through code cannot be deleted again",". This has important implications for memory use and so you should use this function with care.","\n  ","NOTE",": New rooms are not part of usual room ordering, so they do not have a \"previous\" or \"next\" room (meaning that the functions ","room_next()"," and ","room_previous()"," will not work). To jump from the added room to another, you must use the index of the room itself.","\n  "," ","\n  "],["\n  ","room_add();","\n  "," ","\n  "],["\n  ","Room Asset","\n  "," ","\n  "],["\n  ","global.myroom = room_add();","\n    room_set_width(global.myroom, 640);","\n    room_set_height(global.myroom, 480);","\n    room_set_persistent(global.myroom, false);","\n  ","This will create a new room and store its index in the variable \"global.myroom\". It will then set its width to 640 pixels, its height to 480 pixels, and its persistence to ","false",".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Rooms","\n        ","Next: ","room_duplicate","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["room_add"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"831"})