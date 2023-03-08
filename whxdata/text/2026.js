rh._.exports({"0":[[" ","array_unique"]],"1":[["array_unique"]],"2":[["array_unique"]],"3":[[" ","array_unique"]],"4":[[" ","This function returns a ","new"," array containing the values of the input array (or a range of it) with any duplicate values removed."],[" ","array_unique","(array, [offset], [length]);"," ","Argument"," ","Type"," ","Description"," ","array"," ","Array"," ","The array to use"," ","offset"," ","Real"," ","OPTIONAL"," The offset, or the starting index, in the array. Setting a negative value will count from the end of the array. The starting index will then be ","array_length(array) + offset",". See: ","Offset And Length"," ","length"," ","Real"," ","OPTIONAL"," The number of elements to traverse. A negative value will traverse the array backwards (i.e. in descending order of indices, e.g. 2 > 1 > 0 instead of 0 > 1 > 2). See: ","Offset And Length"],[" ","Array"],[" ","var _values = [\"rock\", \"paper\", \"scissors\", \"rock\", \"rock\", \"scissors\", \"paper\", \"scissors\"];","\n    var _values_unique = ","array_unique","(_values);"," ","The above code first creates a temporary array ","values","."," ","It then calls ","array_unique"," and stores the result in a temporary variable ","values_unique",". This array contains the three possible values in the array ","values",": ","\"rock\"",", ","\"paper\""," and ","\"scissors\"","."," ","Back: ","Array Functions"," ","Next: ","array_copy_while"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2026"})