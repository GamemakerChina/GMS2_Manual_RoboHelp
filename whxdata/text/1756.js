rh._.exports({"0":[[" ","string_width_ext"]],"1":[["string_width_ext"]],"2":[[" ","string_width_ext"]],"3":[[" ","This function will return the maximum width (in pixels) of the input string, taking into account the line separation and line-break width (which is defined as the number of pixels that the string can occupy before a line break is inserted). It is very handy for calculating distances between text elements based on the maximum width of a string that is split over several lines as it would be drawn with ","draw_text_ext()"," using the currently defined font. Separation and width can be set to -1 to get the default spacing."],[" ","string_width_ext(string, sep, w);"," ","Argument"," ","Type"," ","Description"," ","string"," ","String"," ","The string to measure the width of."," ","sep"," ","Real"," ","The distance in pixels between lines of text as if the string was being drawn."," ","w"," ","Real"," ","The maximum width (in pixels) of the string before a line break as if the string was bring drawn."],[" ","Real"],[" ","var ww = string_width_ext(str_Story_Text[1], -1, 100);","\n    draw_text_ext(32, 32, str_Story_Text[1], -1, 100);","\n    draw_text_ext(32 + ww, 32, str_Story_Text[2], -1, 100);"," ","The above code will get the width of the given string, taking into account the line separation and line-break width, and then draw two lines of text, using the returned total string width as a separator."," ","Back: ","Strings"," ","Next: ","string_height"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["string_width_ext"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1756"})