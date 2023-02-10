rh._.exports({"0":[[" ","array_reduce"]],"1":[["array_reduce"]],"2":[["array_reduce"]],"3":[[" ","array_reduce"]],"4":[[" ","This function is used to obtain one value from an array, by processing all array elements one-by-one."," ","You supply a ","Callback Method"," which runs for each element of the given array. The callback function must return a value, which is passed to the next element's callback, in its ","previous"," argument."," "," ","Callback Function "," "],[" ","function(previous, current, index);"," ","Argument"," ","Type"," ","Description"," ","previous"," ","Any"," ","The value returned by the previous iteration"," ","current"," ","Any"," ","The element value of the current iteration"," ","index"," ","Real"," ","The index of the current iteration"," ","The first time this callback function is called, its ","previous"," argument is set to the value of the first array element (or the element at the given ","offset","), and the first iteration of the array range is skipped, meaning callbacks start from the second element in the given range."," ","If you supply the ","init"," parameter to this function, the first iteration will not be skipped, and the ","previous"," parameter for the first element's callback will be set to the ","init"," value you passed."," ","When the callback function returns a value, it's carried over into the next iteration. This process is repeated, until the given array (or the provided range) has been fully iterated. The function returns the value obtained from the final element's callback."],[" ","array_reduce","(array, function, [init], [offset], [length]);"," ","Argument"," ","Type"," ","Description"," ","array"," ","Array"," ","The array to use"," ","function"," ","Function"," ","The function to use for each element"," ","init"," ","Any"," ","OPTIONAL"," The initial value to use as the first carried value. If none is provided this defaults to ","array[offset]"," and the first iteration is skipped."," ","offset"," ","Real"," ","OPTIONAL"," The offset, or the starting index, in the array. Setting a negative value will count from the end of the array. The starting index will then be ","array_length(array) + offset",". See ","Offset And Length"," ","length"," ","Real"," ","OPTIONAL"," The number of elements to traverse. A negative value will traverse the array backwards (i.e. in descending order of indices, e.g. 2 > 1 > 0 instead of 0 > 1 > 2). See ","Offset And Length"],[" ","Any"],[" ","var _array = [2, 1, 3, 4, 5];"," ","\n    var _min_value = function(_previous, _current, _index)","\n    {","\n        return min(_previous, _current);","\n    }"," ","\n    var _value = ","array_reduce","(_array, _min_value);\n  "," ","The above code tries to find the smallest value in an array. It first creates a temporary array ","array"," and fills it with a set of numbers."," ","Then it creates a new function ","min_value"," that returns either the ","previous"," or ","current"," argument, whichever is smaller."," ","Finally it calls ","array_reduce"," on the array, using ","_min_value"," as the callback function, and stores the final result in a temporary variable ","value",". This variable will contain ","1"," as that is the smallest value in the array."," ","Back: ","Array Functions"," ","Next: ","array_concat"]],"5":[[" ","Syntax:"],[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2530"})