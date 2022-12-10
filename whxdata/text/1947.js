rh._.exports({"0":[["math_set_epsilon"]],"1":[["math_set_epsilon"]],"2":[["math_set_epsilon"]],"3":[["\n  ","\n  "],["\n  ","The epsilon is used to determine whether two numbers subject to rounding errors are close enough to be considered \"equal\". The default epsilon is ","0.00001",".","\n  ","This is useful when dealing with floating point maths as it can reduce the \"rounding errors\" that make certain operations return values that appear incorrect or contrary to what we expect. For example, we may have added a value to the image index of a sprite and expect the result to be a single integer (5), but due to the nature of floating point maths, the actual final value ends up being something like 5.000002, so when we have the following check:","\n  ","if image_index == 5","\n    {","\n        //do something","\n    }","\n  ","The code does not behave as expected and returns ","false",". However, with the epsilon set to 0.00001, the ","image_index"," value is rounded to the nearest real number that is +/- 0.000001 of the original value, making the above comparison return true.","\n  ","Floating point calculations may behave differently depending on the platform your game is running on. The default epsilon of ","0.00001"," provides a safe range for rounding errors across different platforms.","\n  ","The epsilon value will be used for all the following integer ","operators",":","\n  ","\n    ","< ",": Less than","\n    ","> ",": Greater than","\n    ","== ",": Equal to","\n    ","<= ",": Less than or equal to","\n    ",">= ",": Greater than or equal to","\n    ","!= ",": Not equal to","\n  ","\n  ","Note that setting an epsilon value of 0 will disable all rounding, and using a value of 1 will give an error.","\n  "," ","\n  "],["\n  ","math_set_epsilon(epsilon);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","epsilon","\n        ","Real","\n        ","The new epsilon value (from 0 to 0.999999999).","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Real","\n  "," ","\n  "],["\n  ","math_set_epsilon(0.0001);","\n  ","This will set the epsilon value for all further floating point operations.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Number Functions","\n        ","Next: ","math_get_epsilon","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["math_set_epsilon"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1947"})