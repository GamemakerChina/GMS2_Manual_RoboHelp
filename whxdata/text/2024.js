rh._.exports({"0":[["array_reverse_ext"]],"1":[["array_reverse_ext"]],"2":[["array_reverse_ext"]],"3":[["\n  "],["\n  ","This function reverses the order of the elements of (a range of) the input array.","\n  "," ","\n  ","\n  ","IMPORTANT"," This function ","mutates"," the input array, i.e. changes it directly. Existing array elements in the range given by the offset and length parameter might be overwritten. For performance reasons the array is ","not"," resized and the new number of ","valid"," elements, starting at the offset position and in the direction given by the sign of the length parameter, is returned instead.","\n\n","\n  "],["\n  ","array_reverse_ext","(arguments);","\n  ","\n    ","\n      ","\n      ","\n      ","\n    ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","array","\n        ","Array","\n        ","The array to use","\n      ","\n      ","\n        ","offset","\n        ","Real","\n        ","OPTIONAL"," The offset, or the starting index, in the array. Setting a negative value will count from the end of the array. The starting index will then be ","array_length(array) + offset",".","\n      ","\n      ","\n        ","length","\n        ","Real","\n        ","OPTIONAL"," The number of elements to traverse. A negative value will traverse the array backwards (i.e. in descending order of indices, e.g. 2 > 1 > 0 instead of 0 > 1 > 2).","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Real"," (the number of valid elements in the array)","\n  "," ","\n  "],["\n  ","values = [1, 2, 3, 4, 8, 7, 6, 5];","\n    ","array_reverse_ext","(values, -4, 4);\n  ","\n  ","The above code first creates an array ","values",". It then reverses the order of the last four elements using ","array_reverse_ext",".","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Array Functions","\n        ","Next: ","array_create","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["array_reverse_ext"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2024"})