rh._.exports({"0":[["array_all"]],"1":[["array_all"]],"2":[["array_all"]],"3":[["\n  "],["\n  ","This function is used to check if all of the elements in the given array match the same condition. You check that by passing a ","Predicate Function"," that runs on each element of the given array, and returns ","true"," or ","false",".","\n  ","This function returns ","true"," if your predicate function returns ","true"," for ","all"," of the elements in the given array range, otherwise it returns ","false",".","\n  ","\n  "," ","Predicate Function"," ","\n  ","\n    ","This function takes a ","Predicate Function"," that operates on the given array. The predicate function is passed the following arguments:","\n    "],["\n    ","function(element, index);","\n    ","\n      ","\n        ","\n          ","Argument","\n          ","Type","\n          ","Description","\n        ","\n        ","\n          ","element","\n          ","Any","\n          ","The current array element's value","\n        ","\n        ","\n          ","index","\n          ","Real","\n          ","The current array index","\n        ","\n      ","\n    ","\n    ","The predicate function should return a ","Boolean",", which affects how the original function modifies or reads the array",".","\n    ","See information and examples on ","Predicate Function",".","\n  ","\n\n","\n  ","\n    \n  ","\n  ","\n  ","\n  "],["\n  ","array_all","(array, function, [offset], [length]);","\n  ","\n    ","\n      ","\n      ","\n      ","\n    ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","array","\n        ","Array","\n        ","The array to use","\n      ","\n      ","\n        ","function","\n        ","Function","\n        ","The ","Predicate Function"," to run on each element","\n      ","\n      ","\n        ","offset","\n        ","Real","\n        ","OPTIONAL"," The offset, or starting index, in the array. Setting a negative value will count from the end of the array. The starting index will then be ","array_length(array) + offset",". See: ","Offset And Length","\n      ","\n      ","\n        ","length","\n        ","Real","\n        ","OPTIONAL"," The number of elements to traverse. A negative value will traverse the array backwards (i.e. in descending order of indices, e.g. 2, 1, 0 instead of 2, 3, 4). See: ","Offset And Length","\n      ","\n    ","\n  ","\n\n","\n\n","\n  "],["\n  ","Boolean"," (whether the function returned ","true"," for all elements in the array or range)","\n  "," ","\n  "],["\n  ","function is_even(element, index)","\n    {","\n        return (element mod 2 == 0);","\n    }","\n    values = [2, 4, 8, 10, 12, 14, 18, 22, 46];","\n    var all_elements_are_even = array_all(values, is_even);","\n  ","The above code first defines a function ","is_even"," that returns ","true"," if the value is even.","\n  ","It then creates an array ","values"," and adds some numbers to it.","\n  ","Finally it calls ","array_all"," on the array and stores the result in a temporary variable ","all_elements_are_even",". As all values in the array are even, ","all_elements_are_even"," will be set to ","true",".","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Array Functions","\n        ","Next: ","array_foreach","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["array_all"]],"5":[["Syntax:"],["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1530"})