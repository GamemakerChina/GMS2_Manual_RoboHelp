rh._.exports({"0":[["argument"]],"1":[["argument[n],argument0 - argument15"]],"2":[["argument"]],"3":[["\n  ","\n  "],["\n  ","This variable holds an ","array"," that is used along with the read-only variable ","argument_count"," in ","script functions"," or ","methods",". Each array position holds an input value for the function and is specifically for use with ","variable ","argument functions.","\n  ","Note that there are also a series of independent global scope variables that can also be used in user-defined functions to reference the different input arguments: ","argument0",", ","argument1",", ","argument2",", etc... up to ","argument15",".","\n  ","An argument that hasn't been passed in will be ","undefined",".","\n  "," ","\n  "],["\n  ","argument[","n","]","\n    argument1","\n    argument2","\n    ...","\n    argument15","\n  "," ","\n  "],["\n  ","Any"," (can be of any data type supplied to the function)","\n  "," ","\n  "],["\n  ","function print(){","\n        var _str = \"\";","\n        for (var i = 0; i < argument_count; i ++)","\n        {","\n            _str += string(argument[i]);","\n        }","\n        show_debug_message(_str);","\n    }","\n    ","\n    // In an object","\n    print(\"Player : \", current_time, \" : \", id, \" : fired\");\n  ","\n  ","The above function joins all the arguments passed into the function as one string, and then prints that string to the output log.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Global Variables","\n        ","Next: ","argument_count","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["argument"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1302"})