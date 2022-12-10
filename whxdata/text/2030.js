rh._.exports({"0":[["array_map"]],"1":[["array_map"]],"2":[["array_map"]],"3":[["\n  "],["\n  ","This function returns a modified version of the given array, based on a callback function.","\n  ","You provide an array, and a callback function, which is called for each element in the given array. The callback function can return any value, which is applied to that index in a new copy of the array.","\n  ","After the callback is executed for all elements, the modified array is returned. The original array is ","not changed","; for that, see ","array_map_ext",".","\n  "," ","Callback Function"," ","\n  ","\n    ","The callback function you pass into this function should take the following arguments:","\n    "],["\n    ","function(element, index);","\n    ","\n      ","\n        ","\n          ","Argument","\n          ","Type","\n          ","Description","\n        ","\n        ","\n          ","element","\n          ","Any","\n          ","The current array element","\n        ","\n        ","\n          ","index","\n          ","Real","\n          ","The current array index","\n        ","\n      ","\n    ","\n    ","This callback function should return a value of ","Any"," type that will be applied back to the array element.","\n  ","\n  "," ","\n  "],["\n  ","array_map","(array, function, [offset], [length]);","\n  ","\n    ","\n      ","\n      ","\n      ","\n    ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","array","\n        ","Array","\n        ","The array to use","\n      ","\n      ","\n        ","function","\n        ","Function","\n        ","The callback function to run on each element","\n      ","\n      ","\n        ","offset","\n        ","Real","\n        ","OPTIONAL"," The offset, or starting index, in the array. Setting a negative value will count from the end of the array. The starting index will then be ","array_length(array) + offset",". See: ","Offset And Length","\n      ","\n      ","\n        ","length","\n        ","Real","\n        ","OPTIONAL"," The number of elements to traverse. A negative value will traverse the array backwards (i.e. in descending order of indices, e.g. 2, 1, 0 instead of 2, 3, 4). See: ","Offset And Length","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Array","\n  "," ","\n  "," ","\n  "],["\n  ","var _numbers = [1, 2, 3, 4, 5];","\n    ","\n    var _double = function (_element, _index)","\n    {","\n        return _element * 2;","\n    }","\n    ","\n    var _numbers_doubled = array_map(_numbers, _double);\n  ","\n  ","The above code creates an array ","_numbers"," with numbers from 1 to 5.","\n  ","It creates a function ","_double"," that takes the array element and index, and returns the element multiplied by 2.","\n  ","This function is then used in an ","array_map"," call, which returns a modified version of the array with all numbers doubled: ","[2, 4, 6, 8, 10]",".","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Array Functions","\n        ","Next: ","array_unique","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["array_map"]],"5":[["Syntax:"],["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2030"})