rh._.exports({"0":[[" ","point_in_rectangle"]],"1":[["point_in_rectangle"]],"2":[["point_in_rectangle"]],"3":[[" ","point_in_rectangle"]],"4":[[" ","When using this function, you define a rectangular area and ","GameMaker"," will work out whether the given point falls within its bounds or not. If the point falls within the defined rectangle the function will return ","true"," otherwise the function will return ","false","."],[" ","point_in_rectangle(px, py, x1, y1, x2, y2);"," ","Argument","Type"," ","Description"," ","px","Real"," ","The x coordinate of the point to check."," ","py","Real"," ","The y coordinate of the point to check."," ","x1","Real"," ","The x coordinate of the left side of the rectangle to check."," ","y1","Real"," ","The y coordinate of the top side of the rectangle to check."," ","x2","Real"," ","The x coordinate of the right side of the rectangle to check."," ","y2","Real"," ","The y coordinate of the bottom side of the rectangle to check."],[" ","Boolean"],[" ","if point_in_rectangle(mouse_x, mouse_y, x -10, y - 10, x + 10, y + 10)","\n    {","\n        audio_play_sound(snd_click, 0, false);","\n    }"," ","This short code checks the mouse position against the defined rectangular area and plays a sound if it falls within the bounds."," ","Back: ","Collisions"," ","Next: ","point_in_triangle"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1465"})