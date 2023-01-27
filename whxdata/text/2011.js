rh._.exports({"0":[[" ","array_equals"]],"1":[["array_equals"]],"2":[["array_equals"]],"3":[[" ","array_equals"]],"4":[[" ","With this function you can check to see if two arrays are equal (equivalent or the same). You give the two arrays to check, and the function will return ","true"," if they are equal (either equivalent or the same) or ","false"," if they are not. Note that this is ","not"," the same as checking if two arrays are the same using ==, which will not check to see if the two arrays hold equivalent values, but only to see if the arrays are referencing the same initial array. For example:"," ","var a = [1,2,3,4];","\n    var b = [1,2,3,4];"," ","\n    if (a == b)","\n    {","\n        show_debug_message( \"This will never fire, as a and b do not reference the SAME array\" );","\n    }"," ","\n    if (array_equals(a, b))","\n    {","\n        show_debug_message( \"This will fire as both arrays contain similar values\" );","\n    }\n  "," ","Note that there are some constants that may not be equal to themselves, which can make this function fail. Here is an example:"," ","if (array_equals([NaN], [NaN]))","\n    {","\n        show_debug_message( \"This will never fire as NaN cannot be equal to itself\" );","\n    }"," ","See the ","Equality Table"," for more information."],[" ","array_equals(var1, var2);"," ","Argument"," ","Type"," ","Description"," ","var1"," ","Array"," ","The first array."," ","var2"," ","Array"," ","The second array."],[" ","Boolean"],[" ","if !array_equals(inventory_array, item_array)","\n    {","\n        var len = array_length(inventory_array);","\n        array_copy(item_array, 0, inventory_array, 0, len);","\n    }"," ","The above code will check two arrays to see if they hold equivalent values, and if they do not then the code will copy the entire contents of the array \"inventory_array\" to the array \"item_array\"."," ","Back: ","Array Functions"," ","Next: ","array_get"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2011"})