rh._.exports({"0":[[" ","array_get_index"]],"1":[["array_get_index"]],"2":[["array_get_index"]],"3":[[" ","array_get_index"]],"4":[[" ","This function gets the index of a specific value in the given array."," ","Optionally an offset and length parameter can be provided to the function to define the range of the array in which to search."," ","If the value isn't found, -1 is returned."," ","TIP"," If you're looking for the index of the first array element ","that satisfies a condition",", use ","array_find_index","."],[" ","array_get_index","(array, value, [offset], [length]);"," ","Argument"," ","Type"," ","Description"," ","array"," ","Array"," ","The array in which to look for the value"," ","value"," ","Any"," ","The value to look for"," ","offset"," ","Real"," ","OPTIONAL"," The offset, or starting index, in the array. Setting a negative value will count from the end of the array. The starting index will then be ","array_length(array) + offset",". See: ","Offset And Length"," ","length"," ","Real"," ","OPTIONAL"," The number of elements to traverse. A negative value will traverse the array backwards (i.e. in descending order of indices, e.g. 2, 1, 0 instead of 2, 3, 4). See: ","Offset And Length"],[" ","Real"," (the index of the first occurrence of the value if found or -1 if it isn't found)"],[" ","var _array = array_create(100, 1);","\n    _array[7] = 13;","\n    var _index = ","array_get_index","(_array, 13);","\n    show_debug_message(\"The value 13 was found at index {0}\", _index);"," ","The above code first creates a temporary array ","_array"," of size 100 and sets the value at index 7 to 13. It then looks for the index of that value 13 using ","array_get_index",". Finally a debug message is shown showing the index."],[" ","var _array = [\"a\", \"b\", \"c\", \"d\", \"e\", \"d\", \"c\", \"b\", \"a\"];","\n    var _pos1 = ","array_get_index","(_array, \"d\");                 // 3","\n    var _pos2 = ","array_get_index","(_array, \"d\", 6);              // -1","\n    var _pos3 = ","array_get_index","(_array, \"d\", -1, -infinity);  // 5"," ","In the above code an array ","_array"," is initialised with a set of letters. The position of the letter \"d\" is then looked up three times, with different values for offset and length. The results of the calls to ","array_get_index"," are shown in the comments."," ","Back: ","Array Functions"," ","Next: ","array_contains"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example 1:"],[" ","Example 2:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2427"})