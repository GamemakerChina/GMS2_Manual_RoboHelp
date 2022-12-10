rh._.exports({"0":[["draw_text_ext_transformed"]],"1":[["draw_text_ext_transformed"]],"2":[["draw_text_ext_transformed"]],"3":[["\n  ","\n  "],["\n  ","This function is a combination of the base ","draw_text","()"," function with the ","draw_text_ext","()"," and ","draw_text_transformed","()","    functions, permitting you to scale and rotate text while maintaining a specific line spacing and maximum width per line. Note that the \"width\" argument is based on a scale of 1, so if the scale is different, this value should be changed\n    proportionally. For example, if the base width for a line break is 300 and you set the scale to 2, then the text will appear wrong, over-running the given width. Instead you should have set the width to 150 to compensate the scaling.","\n  "," ","\n  "],["\n  ","draw_text_ext_transformed(x, y, string, sep, w, xscale, yscale, angle);","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","x","Real","\n        ","The x coordinate of the drawn string.","\n     ","\n      ","\n        ","y","Real","\n        ","The y coordinate of the drawn string.","\n     ","\n      ","\n        ","string","String","\n        ","The string to draw.","\n     ","\n      ","\n        ","sep","Real","\n        ","The distance in pixels between lines of text.","\n     ","\n      ","\n        ","w","Real","\n        ","The maximum width in pixels of the string before a line break.","\n     ","\n      ","\n        ","xscale","Real","\n        ","The horizontal scale.","\n     ","\n      ","\n        ","yscale","Real","\n        ","The vertical scale.","\n     ","\n      ","\n        ","angle","Real","\n        ","The angle of the text.","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","draw_set_halign(fa_center);"," draw_set_valign(fa_middle);\n    "," image_angle += 1;"," draw_text_ext_transformed(room_width / 2, room_height / 2, keyboard_string, 10, 300, 2, 2, image_angle);","\n  ","The above code will draw the given text in the middle of the room, with a maximum string length of 300 pixels, a spacing between each line of 10 pixels, spinning round and scaled to twice its original size.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Text","\n        ","Next: ","draw_text_transformed_colour","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["draw_text_ext_transformed"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2049"})