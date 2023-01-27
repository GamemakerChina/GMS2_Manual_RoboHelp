rh._.exports({"0":[[" ","draw_text_ext_transformed_colour"]],"1":[["draw_text_ext_transformed_colour,draw_text_ext_transformed_color"]],"2":[["draw_text_ext_transformed_colour,draw_text_ext_transformed_color"]],"3":[[" ","draw_text_ext_transformed_colour"]],"4":[[" ","This function is a combination of the base ","draw_text","()"," function with the ","draw_text_ext","()",", ","draw_text_transformed","()","    and ","draw_text_colour","()"," functions. As such, this is the most general of all functions for drawing text and gives a large amount of flexibility when drawing. Note that the \"width\"\n    argument is based on a scale of 1, so if the scale is different, this value should be changed proportionally. For example, if the base width for a line break is 300 and you set the scale to 2, then the text will appear wrong, over-running the given\n    width. Instead you should have set the width to 150 to compensate the scaling."," ","NOTE",": Gradient blending is not available for the HTML5 target unless WebGL is enabled, although you can still set the blending colours and it will blend the font with the first given colour. However all blending in this way creates a duplicate\n    font which is then stored in the cache and used when required, which is far from optimal and if you use multiple colour changes it will slow down your games performance. You can set the font cache size to try and limit this should it be necessary\n    using the function ","font_set_cache_size()","."],[" ","draw_text_ext_transformed_colour(x, y, string, sep, w, xscale, yscale, angle, c1, c2, c3, c4, alpha);"," ","Argument","Type"," ","Description"," ","x","Real"," ","The x coordinate of the drawn string."," ","y","Real"," ","The y coordinate of the drawn string."," ","string","String"," ","The string to draw."," ","sep","Real"," ","The distance in pixels between lines of text."," ","w","Real"," ","The maximum width in pixels of the string before a line break."," ","xscale","Real"," ","The horizontal scale."," ","yscale","Real"," ","The vertical scale."," ","angle","Real"," ","The angle of the text."," ","c1","Colour"," ","The colour for the top left of the drawn text."," ","c2","Colour"," ","The colour for the top right of the drawn text."," ","c3","Colour"," ","The colour for the bottom right of the drawn text."," ","c4","Colour"," ","The colour for the bottom left of the drawn text."," ","alpha","Real"," ","The alpha for the text."],[" ","N/A"],[" ","draw_set_halign(fa_center);"," draw_set_valign(fa_middle);\n    "," draw_text_ext_transformed_colour(200, 200, \"My name is\" + global.name +\".\", 20, 200, 0.5, 0.5, 180, c_blue, c_blue, c_navy, c_navy, 1);"," ","This will draw the given text with a blue to dark blue downward gradient, at position (200,200) in the room, rotated to be upside down and at half the normal point size of the font. There will be 20 pixels between each line should there be more than\n    one line drawn and each line will have a maximum width of 200 pixels."," ","Back: ","Text"," ","Next: ","draw_highscore"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2446"})