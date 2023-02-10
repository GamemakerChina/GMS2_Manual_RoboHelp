rh._.exports({"0":[[" ","show_debug_message"]],"1":[["show_debug_message"]],"2":[["show_debug_message"]],"3":[[" ","show_debug_message"]],"4":[[" ","This function creates a custom debug message that is shown in the compiler window at runtime."," ","The syntax of this function is identical to that of the ","string"," function; aside from a single argument it can also take a ","Format String"," with placeholders and additional arguments to replace the placeholders with."," ","Values of type ","Real"," that are an integer will have no decimal places in the string. Values of type ","Real"," that have a fractional part will have two decimal places in the string. If you need more decimal places in the output string you can use the function ","string_format","."," ","Values of type ","Struct"," or ","Instance"," will be converted to a string using that struct's or instance's ","toString() Method"," if one exists, or converted to a string implicitly."," ","Values of type ","Array"," will be converted to a string of the format ","[element1, element2, element3, element4, element5]",", i.e. the concatenation of all elements in the array. If any of the elements in the array is a struct or an instance then its ","toString() Method"," will be called to convert it to a string."," ","Debug messages shown with this function will be shown in the ","Compiler Output Window"," at the bottom of the IDE as well as in the ","Graph View"," of the debugger when running the game in Debug Mode. If you only want to see messages in Debug Mode then you should probably be using ","debug_event()"," instead."],[" ","show_debug_message","(value_or_format [, value1, value2, ... max_val]);"," ","Argument"," ","Type"," ","Description"," ","value_or_format"," ","Any"," (if value) or ","String"," (if format)"," ","The value to be turned into a string."," ","[, value1, value2, ... max_val]"," ","Any"," ","OPTIONAL"," The values to be inserted at the placeholder positions."],[" ","N/A"],[" ","if !instance_exists(obj_Exit)","\n    {","\n        show_debug_message(\"Exit not created!\");","\n        show_debug_message(\"Error Num: {0}\", global.error);","\n        game_end();","\n    }"," ","The above code checks to see if an instance exists and if it does not, a debug message is shown in the compile window and the game is ended."," ","Back: ","Debugging"," ","Next: ","show_debug_message_ext"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2026"})