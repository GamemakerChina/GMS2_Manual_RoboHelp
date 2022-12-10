rh._.exports({"0":[["string_last_pos"]],"1":[["string_last_pos"]],"2":[["string_last_pos"]],"3":[["\n  ","\n  "],["\n  ","This function will return the character position of an instance of a sub-string within a string, searching from the end of the string to the beginning (so the reverse of ","string_pos()",". The function will return 0 if the search string is not found, or the position of the first character of the search string if it is. Keep in mind that for legacy support strings are indexed from 1, so 1 is the first position in the string, not 0 as you may expect.","\n  "," ","\n  "],["\n  ","string_last_pos(substr, str);","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","substr","String","\n        ","The substring to look for in the string.","\n     ","\n      ","\n        ","str","String","\n        ","The string.","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Real","\n  "," ","\n  "],["\n  ","if (string_last_pos(\",\", text) != 0)","\n    {","\n        string_insert(name, text, string_last_pos(\",\", text));","\n    }","\n  ","The above code searches the string stored in the variable \"text\" for a comma starting the search from the end of the string. If it finds one it inserts the substring \"name\" at that position.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Strings","\n        ","Next: ","string_last_pos_ext","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["string_last_pos"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"966"})