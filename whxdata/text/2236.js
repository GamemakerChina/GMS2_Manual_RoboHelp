rh._.exports({"0":[[" ","array_map"]],"1":[["array_map"]],"2":[["array_map"]],"3":[[" ","array_map"]],"4":[[" ","This function returns a modified version of the given array, based on a callback function."," ","You provide an array, and a ","Callback Method",", which is called for each element in the given array. The callback function can return any value, which is applied to that index in a new copy of the array."," ","After the callback is executed for all elements, the modified array is returned. The original array is ","not changed","; for that, see ","array_map_ext","."," "," ","Callback Function"," "," ","The callback function you pass into this function should take the following arguments:"],[" ","function(element, index);"," ","Argument"," ","Type"," ","Description"," ","element"," ","Any"," ","The current array element"," ","index"," ","Real"," ","The current array index"," ","This callback function should return a value of ","Any"," type that will be applied back to the array element."],[" ","array_map","(array, function, [offset], [length]);"," ","Argument"," ","Type"," ","Description"," ","array"," ","Array"," ","The array to use"," ","function"," ","Function"," ","The callback function to run on each element"," ","offset"," ","Real"," ","OPTIONAL"," The offset, or starting index, in the array. Setting a negative value will count from the end of the array. The starting index will then be ","array_length(array) + offset",". See: ","Offset And Length"," ","length"," ","Real"," ","OPTIONAL"," The number of elements to traverse. A negative value will traverse the array backwards (i.e. in descending order of indices, e.g. 2, 1, 0 instead of 2, 3, 4). See: ","Offset And Length"],[" ","Array"],[" ","var _numbers = [1, 2, 3, 4, 5];"," ","\n    var _double = function (_element, _index)","\n    {","\n        return _element * 2;","\n    }"," ","\n    var _numbers_doubled = array_map(_numbers, _double);\n  "," ","The above code creates an array ","_numbers"," with numbers from 1 to 5."," ","It creates a function ","_double"," that takes the array element and index, and returns the element multiplied by 2."," ","This function is then used in an ","array_map"," call, which returns a modified version of the array with all numbers doubled: ","[2, 4, 6, 8, 10]","."," ","Back: ","Array Functions"," ","Next: ","array_unique"]],"5":[[" ","Syntax:"],[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2236"})