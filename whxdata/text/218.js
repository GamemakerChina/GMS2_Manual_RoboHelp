rh._.exports({"0":[["draw_get_colour"]],"1":[["draw_get_colour,draw_get_color"]],"2":[["draw_get_colour,draw_get_color"]],"3":[["\n  ","\n  "],["\n  ","This function returns the current draw colour which is used for drawing forms, text, primitives and un-textured 3D models. This can be set with the ","draw_set_colour()"," function.","\n  "," ","\n  "],["\n  ","draw_get_colour()","\n  "," ","\n  "],["\n  ","Colour","\n  "," ","\n  "],["\n  ","var _cur_color = draw_get_color();","\n    draw_set_color(text_color);","\n    draw_text(x, y, text);","\n    draw_set_color(_cur_color);","\n  ","The above code stores the current draw colour into a local variable, and changes the draw colour based on an instance variable. After drawing some text, it resets the colour back to the value stored in the local variable.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Colour And Alpha","\n        ","Next: ","draw_get_alpha","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["draw_get_colour"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"218"})