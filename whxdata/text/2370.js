rh._.exports({"0":[[" ","array_insert"]],"1":[["array_insert"]],"2":[[" ","array_insert"]],"3":[[" ","This function inserts a value (or multiple values) into an array at any given position."," ","You provide the array, the index (position) in the array to insert at, as well as at least ","one"," value to insert, although you can optionally provide further arguments and they'll all be inserted into the array in consecutive order from the given index."," ","NOTE"," If the given index is outside of the length of the array, the values will be added at the given index, and any empty slots in the array between its last value and the inserted values will be set to a default value of 0."],[" ","array_insert","(variable, index, value, [value], [value], [etc...]);"," ","Argument"," ","Type"," ","Description"," ","variable"," ","Array"," ","The variable that holds the array."," ","index"," ","Real"," ","The index (position) in the array to insert the value(s). Negative indices are supported and count from the end of the array. An offset of -1 refers to the last element of the array, an offset of -2 to the one before last element, etc. (see ","Offset And Length",")"," ","value"," ","Any"," ","The value to insert"," ","[value], [value], [etc...]"," ","Any"," ","OPTIONAL"," Additional values to insert into the array"],[" ","N/A"],[" ","array = [1, 2, 3, 5];","\n    var _missing_value = 4;"," ","array_insert","(array, 3, _missing_value);","\n    show_debug_message(array);\n  "," ","The above code inserts a missing value into an array ","array",", at index 3. A debug message shows the array's contents after insertion of the value."],[" ","var _array = [\"G\", \"a\", \"k\", \"e\", \"r\"];"," ","array_insert","(_array, 2, \"m\", \"e\", \"M\", \"a\");","\n    show_debug_message(string_join_ext(\"\", _array));\n  "," ","The above code creates a temporary array ","_array"," and then uses ","array_insert"," to insert a couple of values at index 6. After that, ","string_join_ext"," is called n the array to concatenate the letters and the resulting string is output as a debug message."," ","Back: ","Array Functions"," ","Next: ","array_delete"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["array_insert"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example 1: Inserting a single value"],[" ","Example 2: Inserting multiple values"]],"id":"2370"})