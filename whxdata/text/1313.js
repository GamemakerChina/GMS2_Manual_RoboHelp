rh._.exports({"0":[["string_copy"]],"1":[["string_copy"]],"2":[["string_copy"]],"3":[["\n  ","\n  "],["\n  ","With this function you can easily select a number of characters from within a string to be copied to another one. The first character in a string is always indexed as 1 and not 0 as you may expect, so to copy (for example) the first five characters of string you would have ","string_copy(str, 1, 5)",". A further example is provided below.","\n  "," ","\n  "],["\n  ","string_copy(str, index, count);","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","str","String","\n        ","The string to copy from.","\n     ","\n      ","\n        ","index","Real","\n        ","The position of the first character in the string to copy from (numbered from 1)","\n     ","\n      ","\n        ","count","Real","\n        ","The number of characters, starting from the position of the first, to copy","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","String","\n  "," ","\n  "],["\n  ","name = keyboard_string;","\n    if (string_length(name) > 15)","\n    {","\n        keyboard_string = string_copy(name, 1, 15);","\n    }","\n  ","The above code will allow the player to input a string through the keyboard which is then stored in the variable ","name",". This variable is then checked to see if it exceeds the maximum length of 15 characters and if it does, the keyboard_string is replaced by a 15 character copy of the ","name"," string. This effectively limits the player input to 15 characters.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Strings","\n        ","Next: ","string_count","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["string_copy"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1313"})