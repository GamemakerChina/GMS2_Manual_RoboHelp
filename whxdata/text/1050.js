rh._.exports({"0":[["move_wrap"]],"1":[["move_wrap"]],"2":[["move_wrap"]],"3":[["\n  ","\n  "],["\n  ","This function will automatically \"wrap\" an instance that has left the room on either the horizontal or vertical (or both) axis. You can specify a margin outside the edges of the room for this to occur, and when the instance has travelled outside of that margin ","GameMaker"," will automatically wrap it back into the room at the other side. Note that the instance must have a speed for wrapping to work, because the direction of wrapping is based on the direction of the motion.","\n  "," ","\n  "],["\n  ","move_wrap(hor, vert, margin);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","hor","\n        ","Boolean","\n        ","Whether to wrap horizontally (true) or not (false).","\n      ","\n      ","\n        ","vert","\n        ","Boolean","\n        ","Whether to wrap vertically (true) or not (false).","\n      ","\n      ","\n        ","margin","\n        ","Real","\n        ","How far outside the room, in pixels, the object must be to initiate wrapping.","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","move_wrap(true, false, sprite_width);","\n  ","This will make the instance wrap horizontally but not vertically, when it is over its own sprite width outside of the room.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Movement","\n        ","Next: ","place_snapped","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["move_wrap"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1050"})