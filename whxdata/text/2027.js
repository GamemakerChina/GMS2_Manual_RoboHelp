rh._.exports({"0":[["show_debug_message"]],"1":[["show_debug_message"]],"2":[["show_debug_message"]],"3":[["\n  ","\n  "],["\n  ","This function creates a custom debug message that is shown in the compiler window at runtime.","\n  ","The syntax of this function is identical to that of the ","string"," function; aside from a single argument it can also take a ","Format String"," with placeholders and additional arguments to replace the placeholders with.","\n  ","\n  ","Values of type ","Real"," that are an integer will have no decimal places in the string. Values of type ","Real"," that have a fractional part will have two decimal places in the string. If you need more decimal places in the output string you can use the function ","string_format",".","\n  ","Values of type ","Struct"," or ","Instance"," will be converted to a string using that struct's or instance's ","toString() Method"," if one exists, or converted to a string implicitly.","\n  ","Values of type ","Array"," will be converted to a string of the format ","[element1, element2, element3, element4, element5]",", i.e. the concatenation of all elements in the array. If any of the elements in the array is a struct or an instance then its ","toString() Method"," will be called to convert it to a string.","\n\n","\n  ","Debug messages shown with this function will be shown in the ","Compiler Output Window"," at the bottom of the IDE as well as in the ","Graph View"," of the debugger when running the game in Debug Mode. If you only want to see messages in Debug Mode then you should probably be using ","debug_event()"," instead.","\n  "," ","\n  "],["\n  ","show_debug_message","(value_or_format [, value1, value2, ... max_val]);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","value_or_format","\n        ","Any"," (if value) or ","String"," (if format)","\n        ","The value to be turned into a string.","\n      ","\n      ","\n        ","[, value1, value2, ... max_val]","\n        ","Any","\n        ","OPTIONAL"," The values to be inserted at the placeholder positions.","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","if !instance_exists(obj_Exit)","\n    {","\n        show_debug_message(\"Exit not created!\");","\n        show_debug_message(\"Error Num: {0}\", global.error);","\n        game_end();","\n    }","\n  ","The above code checks to see if an instance exists and if it does not, a debug message is shown in the compile window and the game is ended.","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Debugging","\n        ","Next: ","show_debug_message_ext","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["show_debug_message"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2027"})