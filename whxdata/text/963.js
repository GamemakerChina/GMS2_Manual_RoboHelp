rh._.exports({"0":[[" ","string_width"]],"1":[["string_width"]],"2":[[" ","string_width"]],"3":[[" ","This function will return the width (in pixels) of the input string, taking into account any line-breaks the text may have. It is very handy for calculating distances between text elements based on the total width of the letters that make up the string as it would be drawn with ","draw_text()"," using the currently defined font."],[" ","string_width(string);"," ","Argument"," ","Type"," ","Description"," ","string"," ","String"," ","The string to measure the width of."],[" ","Real"],[" ","var ww = string_width(str_Name + \" \");","\n    draw_text(32, 32, str_Name));","\n    draw_text(32 + ww, 32, \"has won the game!\");"," ","The above code will get the width of the given string and then draw two lines of text, using the returned string width as a separator."," ","Back: ","Strings"," ","Next: ","string_width_ext"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["string_width"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"963"})