rh._.exports({"0":[[" ","array_filter_ext"]],"1":[["array_filter_ext"]],"2":[[" ","array_filter_ext"]],"3":[[" ","This function is similar to ","array_filter",", but instead of returning a new array, it modifies the original array that was passed as an argument."," ","You supply a ","Predicate Method"," which runs for all elements in the array. It should return either ","true"," or ","false"," based on a condition."," ","The first element for which the predicate function returns ","true"," is written at the index given by ","offset",", others are written to subsequent indices (in the direction given by the sign of the ","length"," parameter)."," ","This function returns the new number of valid elements, starting at the given offset position and in the direction set by the length argument. For this function, it's the number of elements for which the predicate returned ","true",", and were written back to the array."," "," ","Predicate Function"," "," ","This function takes a ","Predicate Method"," that operates on the given array. The predicate function is passed the following arguments:"],[" ","function(element, index);"," ","Argument"," ","Type"," ","Description"," ","element"," ","Any"," ","The current array element's value"," ","index"," ","Real"," ","The current array index"," ","The predicate function should return a ","Boolean",", which affects how the original function modifies or reads the array","."," ","See information and examples on ","Predicate Method","."," ","IMPORTANT"," This function ","mutates"," the input array, i.e. changes it directly. Existing array elements in the range given by the offset and length parameter might be overwritten. For performance reasons the array is ","not"," resized and the new number of ","valid"," elements is returned instead."],[" ","array_filter_ext","(array, function, [offset], [length]);"," ","Argument"," ","Type"," ","Description"," ","array"," ","Array"," ","The array to use"," ","function"," ","Function"," ","The ","Predicate Method"," to run on each element"," ","offset"," ","Real"," ","OPTIONAL"," The offset, or starting index, in the array. Setting a negative value will count from the end of the array. The starting index will then be ","array_length(array) + offset",". See: ","Offset And Length"," ","length"," ","Real"," ","OPTIONAL"," The number of elements to traverse. A negative value will traverse the array backwards (i.e. in descending order of indices, e.g. 2, 1, 0 instead of 2, 3, 4). See: ","Offset And Length"],[" ","Real"," (the number of valid elements in the array)"],[" ","var _is_even = function(_element, _index) {","\n        return (_element mod 2) == 0;","\n    }"," ","\n    var _values = [1, 2, 3, 4, 5, 6, 7, 8, 9];","\n    var _valid_elements = array_filter_ext(_values, _is_even, -2, -infinity);\n  "," ","The above code first defines a function ","_is_even"," that takes ","element"," and ","index"," parameters and returns ","true"," when the element is an even number."," ","An array ","values"," is then initialised with the digits from 1 to 9."," ","Finally ","array_filter_ext"," is called on this array with the predicate function. It takes a starting index of ","-2"," (the second-last index) and a length of ","-infinity",". This will start checking at 8 and go backwards to the beginning of the array."," ","From there the function finds 4 even numbers (","8, 6, 4, 2","), so it returns 4 as the new valid number of elements."," ","Since this function mutates the original array, ","_values"," becomes ","[1, 2, 3, 4, ","2, 4, 6, 8,"," 9]",", writing the even numbers into the array from the index where it started searching."," ","Back: ","Array Functions"," ","Next: ","array_map_ext"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["array_filter_ext"]],"6":[[" ","Syntax:"],[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"2220"})