rh._.exports({"0":[["array_sort"]],"1":[["array_sort"]],"2":[["array_sort"]],"3":[["\n  ","\n  "],["\n  ","With this function you can sort an array in ascending order or descending order or using a custom function to define the sort order. The function requires you to provide the array to sort, and then either of the following:","\n  ","\n    ","The constants ","true"," or ","false"," to indicate an ","ascending (","true",") or descending (","false",") sort order","\n    ","A custom function to define the sort order","\n  ","\n  ","This function will modify the contents of the original array that was supplied. To create a sorted copy, use ","array_copy()"," to duplicate the array first, and then pass that into this function.","\n  "],["\n  ","If you use a custom function for sorting, it must take 2 arguments which will receive the values of the current element and the next element respectively. The function should return any of the following values to affect the sort order (where ","elm1"," is the current element and ","elm2"," is the next element):","\n  ","\n    ","0",": if ","elm1"," and ","elm2"," are equal","\n    ","<= -1"," (negative integer): if ","elm1"," goes before ","elm2","\n    ",">= 1"," (positive integer): if ","elm1"," goes after ","elm2","\n  ","\n  ","NOTE"," The value returned by your custom function must be an integer. Floating point values less than 1 will be read as 0, so you must use ","sign()"," or ","round()"," if your function works with floating point values.","\n  ","If the array contains a set of strings, then the strings will be sorted alphabetically based on the English alphabet when using the default ascending/descending sort type. All other data types will be sorted based on their numerical value, the exact values of which will depend on the data type itself (for example, an array of buffers would be sorted based on the numerical value of their memory addresses).","\n  "," ","\n  "],["\n  ","array_sort(variable, sorttype_or_function);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","variable","\n        ","Array","\n        ","The variable that holds the array.","\n      ","\n      ","\n        ","sorttype_or_function"," ","\n        ","Boolean"," or ","Script Function","/","Method","\n        ","The sort type (","true"," for ascending or ","false"," for descending) or a function reference to use for sorting.","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","var _a = [10, 9, 8, 7, 6, 5];","\n    ","\n    array_sort(_a, function(elm1, elm2)","\n    {","\n        return elm1 - elm2;","\n    });\n  ","\n  ","The above code uses a custom sorting function to sort the array in an ascending order. The sorting function takes the two array elements as ","elm1"," and ","elm2"," and performs a subtraction on them. If ","elm1"," is greater than ","elm2",", the subtraction results in a positive number which pushes ","elm1"," to be after ","elm2",", hence putting them in an ascending order.","\n  ","Here is an extended example:","\n  ","var _xx, _yy, _a;","\n    ","\n    for (var i = 0; i < 10; i++)","\n    {","\n        _xx = irandom(room_width);","\n        _yy = irandom(room_height);","\n        _a[i] = instance_create_layer(_xx, _yy, layer, obj_Bullet);","\n    }","\n    ","\n    show_debug_message(_a);","\n    ","\n    var _f = function(inst1, inst2)","\n    {","\n        return inst1.x - inst2.x;","\n    }","\n    ","\n    array_sort(_a, _f);","\n    show_debug_message(_a);\n  ","\n  ","The above code will create an array of 10 instances placed at random positions within the room. The debug message will show something like the following:","\n  ","[ 100003,100004,100005,100006,100007,100008,100009,100010,100011,100012 ]","\n  ","The code then creates a method to be used in the ","array_sort()"," function that returns the difference between each of the X positions of the instances in the room. Then the ","array_sort()"," function is run using that method, sorting the instances by X from lowest to highest. The output for the array would then look something like this:","\n  ","[ 100011,100004,100009,100006,100012,100008,100010,100005,100007,100003 ]","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Array Functions","\n        ","Next: ","array_resize","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["array_sort"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"10":[["Using a custom function"]],"id":"2541"})