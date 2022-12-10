rh._.exports({"0":[["point_in_rectangle"]],"1":[["point_in_rectangle"]],"2":[["point_in_rectangle"]],"3":[["\n  ","\n  "],["\n  ","When using this function, you define a rectangular area and ","GameMaker"," will work out whether the given point falls within its bounds or not. If the point falls within the defined rectangle the function will return ","true"," otherwise the function will return ","false",".","\n  "," ","\n  "],["\n  ","point_in_rectangle(px, py, x1, y1, x2, y2);","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","px","Real","\n        ","The x coordinate of the point to check.","\n     ","\n      ","\n        ","py","Real","\n        ","The y coordinate of the point to check.","\n     ","\n      ","\n        ","x1","Real","\n        ","The x coordinate of the left side of the rectangle to check.","\n     ","\n      ","\n        ","y1","Real","\n        ","The y coordinate of the top side of the rectangle to check.","\n     ","\n      ","\n        ","x2","Real","\n        ","The x coordinate of the right side of the rectangle to check.","\n     ","\n      ","\n        ","y2","Real","\n        ","The y coordinate of the bottom side of the rectangle to check.","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Boolean","\n  "," ","\n  "],["\n  ","if point_in_rectangle(mouse_x, mouse_y, x -10, y - 10, x + 10, y + 10)","\n    {","\n        audio_play_sound(snd_click, 0, false);","\n    }","\n  ","This short code checks the mouse position against the defined rectangular area and plays a sound if it falls within the bounds.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Collisions","\n        ","Next: ","point_in_triangle","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["point_in_rectangle"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1540"})