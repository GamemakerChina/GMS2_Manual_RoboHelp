rh._.exports({"0":[[" ","draw_text_colour"]],"1":[["draw_text_colour,draw_text_color"]],"2":[["draw_text_colour,draw_text_color"]],"3":[[" ","draw_text_colour"]],"4":[[" ","This function will draw text in a similar way to ","draw_text","()"," only now you can choose the colours to use for colouring the text as well as the alpha value, and these new values will be used instead\n    of the base drawing colour and alpha."," ","NOTE",": Gradient blending is not available for the HTML5 target unless WebGL is enabled, although you can still set the blending colours and it will blend the font with the first given colour. However all blending in this way creates a duplicate\n    font which is then stored in the cache and used when required, which is far from optimal and if you use multiple colour changes it will slow down your games performance. You can set the font cache size to try and limit this should it be necessary\n    using the function ","font_set_cache_size()","."],[" ","draw_text_colour(x, y, string, c1, c2, c3, c4, alpha);"," ","Argument","Type"," ","Description"," ","x","Real"," ","The x coordinate of the drawn string."," ","y","Real"," ","The y coordinate of the drawn string."," ","string","String"," ","The string to draw."," ","c1","Colour"," ","The colour for the top left of the drawn text."," ","c2","Colour"," ","The colour for the top right of the drawn text."," ","c3","Colour"," ","The colour for the bottom right of the drawn text."," ","c4","Colour"," ","The colour for the bottom left of the drawn text."," ","alpha","Real"," ","The alpha for the text."],[" ","N/A"],[" ","draw_set_colour(c_white);"," draw_text(100, 100, \"Health\");"," draw_text_colour(100, 200, string(health), c_lime, c_lime, c_green, c_green, 1);"," ","The above code will draw two sections of text on the same line, with the first text being drawn white (as that is the base drawing colour) and the second text being drawn with a lime green to normal green gradient."," ","Back: ","Text"," ","Next: ","draw_text_transformed"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2117"})