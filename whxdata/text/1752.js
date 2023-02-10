rh._.exports({"0":[[" ","string_pos_ext"]],"1":[["string_pos_ext"]],"2":[["string_pos_ext"]],"3":[[" ","string_pos_ext"]],"4":[[" ","This function will return the character position of an instance of a sub-string within a string, searching forwards through the string from the position given as the starting position. The function will return 0 if the search string is not found, or the position of the first character of the search string if it is. Keep in mind that for legacy support strings are indexed from 1, so 1 is the first position in the string, not 0 as you may expect."],[" ","string_pos_ext(substr, str, start_pos);"," ","Argument"," ","Type"," ","Description"," ","substr"," ","String"," ","The substring to look for in the string."," ","str"," ","String"," ","The string."," ","start_pos"," ","Real"," ","The starting position to search from."],[" ","Real"],[" ","if (string_pos_ext(\",\", text, 20) != 0)","\n    {","\n        string_insert(name, text, string_pos_ext(\",\", text, 20));","\n    }"," ","The above code searches the string stored in the variable \"text\" for a comma after the 20th character, and if it finds one it inserts the substring \"name\" at that position."," ","Back: ","Strings"," ","Next: ","string_last_pos"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1752"})