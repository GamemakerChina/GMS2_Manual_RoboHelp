rh._.exports({"0":[["array_length_1d"]],"1":[["array_length_1d (Deprecated)"]],"2":[["array_length_1d"]],"3":[["\n  ","\n  "],["\n  ","WARNING!"," This function is deprecated (and replaced by ","array_length()",") as arrays are no longer limited to only 1 or 2 dimensions, and as such this function is only supplied for support of legacy projects. All new projects should use the current way of creating and accessing multi-dimension arrays (see ","here"," for more information).","\n  ","With this function you can get the length (number of entries) of a 1D array. For 2D arrays you should be using the ","array_height_2d"," and ","array_length_2d"," functions.","\n  ","IMPORTANT!: ","If the array has over 32,000 entries this function will return an erroneous value and should not be used.","\n  "," ","\n  "],["\n  ","array_length_1d(array_index);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","array_index","\n        ","Array","\n        ","The index of the array to check.","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Real","\n  "," ","\n  "],["\n  ","for (var i = array_length_1d(a) - 1; i > -1; i--;)","\n    {","\n        a[i] = -1;","\n    }","\n  ","The above code will loop through an array and set each entry to -1.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Array Functions","\n        ","Next: ","array_length_2d","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["array_length_1d ","DEPRECATED"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1504"})