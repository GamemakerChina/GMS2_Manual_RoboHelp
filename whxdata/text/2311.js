rh._.exports({"0":[[" ","draw_text_ext_colour"]],"1":[["draw_text_ext_colour,draw_text_ext_color"]],"2":[["draw_text_ext_colour,draw_text_ext_color"]],"3":[[" ","draw_text_ext_colour"]],"4":[[" ","This function is a combination of the base ","draw_text","()"," function with the ","draw_text_ext","()"," and ","draw_text_colour","()"," functions, permitting you to define gradient colours for text as well as the line spacing and maximum width per line all together."," ","NOTE"," ","Gradient blending is not available for the HTML5 target unless WebGL is enabled, although you can still set the blending colours and it will blend the font with the first given colour. However all blending in this way creates a duplicate font which is then stored in the cache and used when required, which is far from optimal and if you use multiple colour changes it will slow down your games performance. You can set the font cache size to try and limit this should it be necessary using the function ","font_set_cache_size()","."],[" ","draw_text_ext_colour(x, y, string, sep, w, c1, c2, c3, c4, alpha);"," ","Argument"," ","Type"," ","Description"," ","x"," ","Real"," ","The x coordinate of the drawn string."," ","y"," ","Real"," ","The y coordinate of the drawn string."," ","string"," ","String"," ","The string to draw."," ","sep"," ","Real"," ","The distance in pixels between lines of text."," ","w"," ","Real"," ","The maximum width in pixels of the string before a line break."," ","c1"," ","Colour"," ","The colour for the top left of the drawn text."," ","c2"," ","Colour"," ","The colour for the top right of the drawn text."," ","c3"," ","Colour"," ","The colour for the bottom right of the drawn text."," ","c4"," ","Colour"," ","The colour for the bottom left of the drawn text."," ","alpha"," ","Real"," ","The alpha for the text."],[" ","N/A"],[" ","draw_text_ext_colour(200, 200, keyboard_string, 5, 300, c_blue, c_blue, c_navy, c_navy, 1);"," ","The above code will draw whatever text the user types into the keyboard, splitting it onto new lines every time the string length for that line exceeds 300 pixels. the code will also maintain a separation of 5 pixels between lines should this occur. Each line of the text will be coloured using a blue gradient, with light blue at the top and dark blue at the bottom."," ","Back: ","Text"," ","Next: ","draw_text_ext_transformed"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"2311"})