rh._.exports({"0":[[" ","string_lettersdigits"]],"1":[["string_lettersdigits"]],"2":[["string_lettersdigits"]],"3":[[" ","string_lettersdigits"]],"4":[[" ","This function will return a copy of a given string with everything but its letters and digits removed, which means it can be used to remove any unwanted characters (like \"#\" or \"?\") from, for example, a login name or a password."," ","NOTE"," This function only returns the 26 letter English alphabet from A - Z (upper or lower case) and the numbers 0 - 9."],[" ","string_lettersdigits(string);"," ","Argument"," ","Type"," ","Description"," ","string"," ","String"," ","The string to convert to letters and digits."],[" ","String"],[" ","if (string_length(password) > string_length(string_lettersdigits(password)))","\n    {","\n        draw_text(32,32, \"Invalid Password! Only Letters and numbers please!\");","\n    }"," ","The above code will check the length of a string against the length of the same string, but with all symbols removed. If they are not the same a message is drawn on the screen."," ","Back: ","Strings"," ","Next: ","string_lower"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1246"})