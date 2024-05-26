rh._.exports({"0":[[" ","array_copy_while"]],"1":[["array_copy_while"]],"2":[["array_copy_while"]],"3":[[" ","array_copy_while"]],"4":[[" ","This function creates a ","new"," array and adds elements of the input array to it ","while"," (or ","as long as",") the predicate function returns ","true","."," ","The function stops execution as soon as the predicate function returns ","false",". The first element for which the predicate function returns ","false"," and any elements that come after it are ","not"," added to the new array."," ","NOTE"," This function is identical to ","array_filter"," with the difference that this function stops execution after the first time the predicate function returns ","false",". ","array_filter"," on the other hand continues to check elements, even after encountering an element for which the predicate function returns ","false","."],[" ","array_copy_while","(array, function, [offset], [length]);"," ","Argument"," ","Type"," ","Description"," ","array"," ","Array"," ","The array to use"," ","function"," ","Function"," ","The ","Predicate Method"," to run on each element"," ","offset"," ","Real"," ","OPTIONAL"," The offset, or starting index, in the array. Setting a negative value will count from the end of the array. The starting index will then be ","array_length(array) + offset",". See: ","Offset And Length"," ","length"," ","Real"," ","OPTIONAL"," The number of elements to traverse. A negative value will traverse the array backwards (i.e. in descending order of indices, e.g. 2, 1, 0 instead of 2, 3, 4). See: ","Offset And Length"],[" ","Array"],[" ","array = [\"1\", \"2\", \"3\", \"STOP\", \"4\", \"5\", \"6\", \"STOP\", \"7\", \"8\", \"9\"];","\n    array_up_to_stop = ","array_copy_while","(array, function(element, index)","\n    {","\n        return (element != \"STOP\");","\n    }, -1, -infinity);"," ","The above code first creates an array ","array"," that stores strings containing the first 9 digits, with the string \"STOP\" in between."," ","Then the function ","array_copy_while"," is called on this array, with a predicate function that returns ","true"," if the element is ","not equal"," to the string \"STOP\"."," ","The offset parameter is set to -1 and the length to -","infinity",". This will start iterating over the values backwards starting at the last array index."," ","Finally the result is stored in the variable ","array_up_to_stop",", which should only contain ","\"9\"",", ","\"8\""," and ","\"7\"",", in that order, as the array was traversed in reverse."," ","Back: ","Variable Functions"," ","Next: ","array_create_ext"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"2023"})