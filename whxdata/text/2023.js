rh._.exports({"0":[[" ","array_filter"]],"1":[["array_filter"]],"2":[[" ","array_filter"]],"3":[[" ","This function returns a ","new"," array that is the ","filtered"," version of the given array (or a range of it)."," ","You supply a ","Predicate Method"," which runs for all elements in the array. It should return either ","true"," or ","false"," based on a condition."," ","Elements for which the predicate function returns ","true"," are included in the returned array, and ones that get"," ","false"," are ignored."," ","By default the function checks the whole array. You can optionally supply ","Offset And Length"," arguments to check a part of the array, traversing the array forward or backward."," "," ","Predicate Function"," "," ","This function takes a ","Predicate Method"," that operates on the given array. The predicate function is passed the following arguments:"],[" ","function(element, index);"," ","Argument"," ","Type"," ","Description"," ","element"," ","Any"," ","The current array element's value"," ","index"," ","Real"," ","The current array index"," ","The predicate function should return a ","Boolean",", which affects how the original function modifies or reads the array","."," ","See information and examples on ","Predicate Method","."," ","NOTE"," See ","array_copy_while"," which is similar, but stops execution after the first ","false"," return of the predicate function."],[" ","array_filter","(array, function, [offset], [length]);"," ","Argument"," ","Type"," ","Description"," ","array"," ","Array"," ","The array to use"," ","function"," ","Function"," ","The ","Predicate Method"," to run on each element"," ","offset"," ","Real"," ","OPTIONAL"," The offset, or starting index, in the array. Setting a negative value will count from the end of the array. The starting index will then be ","array_length(array) + offset",". See: ","Offset And Length"," ","length"," ","Real"," ","OPTIONAL"," The number of elements to traverse. A negative value will traverse the array backwards (i.e. in descending order of indices, e.g. 2, 1, 0 instead of 2, 3, 4). See: ","Offset And Length"],[" ","Array"],[" ","function passed_the_test(element, index)","\n    {","\n        return element >= 50;","\n    }"," ","\n    scores = [0, 15, 4, 78, 96, 65, 49];","\n    passed = ","array_filter","(scores, passed_the_test);\n  "," ","The above code first defines a function ","passed_the_test"," that takes in ","element"," and ","index"," parameters, which is usual for array predicate functions."," ","The function returns ","true"," if the value of ","element"," is greater than or equal to 50, otherwise it returns ","false","."," ","It then creates an array ","scores"," with various values between 0 and 100. Finally it calls ","array_filter"," on this array and stores the new array in a variable ","passed","."," ","The ","passed"," array would only contain values from the ","scores"," array that were greater than or equal to 50, satisfying the condition set in the predicate function."," ","Back: ","Array Functions"," ","Next: ","array_map"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["array_filter"]],"6":[[" ","Syntax:"],[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"2023"})