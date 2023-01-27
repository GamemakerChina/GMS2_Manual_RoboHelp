rh._.exports({"0":[[" ","show_debug_message_ext"]],"1":[["show_debug_message_ext"]],"2":[["show_debug_message_ext"]],"3":[[" ","show_debug_message_ext"]],"4":[[" ","This function shows a custom debug message in ","The Output Window","."," ","The syntax of this function is identical to that of the ","string_ext"," function; aside from a single argument it can also take a ","Format String"," with placeholders and and array with additional arguments to replace the placeholders with."," ","Values of type ","Real"," that are an integer will have no decimal places in the string. Values of type ","Real"," that have a fractional part will have two decimal places in the string. If you need more decimal places in the output string you can use the function ","string_format","."," ","Values of type ","Struct"," or ","Instance"," will be converted to a string using that struct's or instance's ","toString() Method"," if one exists, or converted to a string implicitly."," ","Values of type ","Array"," will be converted to a string of the format ","[element1, element2, element3, element4, element5]",", i.e. the concatenation of all elements in the array. If any of the elements in the array is a struct or an instance then its ","toString() Method"," will be called to convert it to a string."],[" ","show_debug_message_ext","(value_or_format, values_array);"," ","Argument"," ","Type"," ","Description"," ","value_or_format"," ","Any"," (if value) or ","String"," (if format)"," ","The value to be turned into a string."," ","values_array"," ","Array"," of ","Any"," ","OPTIONAL"," An array containing the values to be inserted at the placeholder positions."],[" ","N/A"],[" ","show_debug_message_ext","(\"{0} - {1}\", [1, \"First item\"]);"],[" ","numbers = [59, 23, 656, 8, 54];","\n    array_sort(numbers, true);"," ","\n    show_debug_message_ext(\"The three lowest numbers are: {0}, {1} and {2}\", numbers);\n  "," ","The above code first defines an array with some numbers, and sorts them in an ascending order. It then uses that array in a ","show_debug_message_ext()"," to call to insert its first three numbers into a format string, and then print the resulting string to the Output Log."," ","Back: ","Debugging"," ","Next: ","show_debug_overlay"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example 1:"],[" ","Example 2:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2030"})