rh._.exports({"0":[[" ","argument"]],"1":[["argument[n],argument0 - argument15"]],"2":[["argument"]],"3":[[" ","argument"]],"4":[[" ","This variable holds an ","array"," that is used along with the read-only variable ","argument_count"," in ","script functions"," or ","methods",". Each array position holds an input value for the function and is specifically for use with ","variable ","argument functions."," ","Note that there are also a series of independent global scope variables that can also be used in user-defined functions to reference the different input arguments: ","argument0",", ","argument1",", ","argument2",", etc... up to ","argument15","."," ","An argument that hasn't been passed in will be ","undefined","."],[" ","argument[","n","]","\n    argument1","\n    argument2","\n    ...","\n    argument15"],[" ","Any"," (can be of any data type supplied to the function)"],[" ","function print(){","\n        var _str = \"\";","\n        for (var i = 0; i < argument_count; i ++)","\n        {","\n            _str += string(argument[i]);","\n        }","\n        show_debug_message(_str);","\n    }"," ","\n    // In an object","\n    print(\"Player : \", current_time, \" : \", id, \" : fired\");\n  "," ","The above function joins all the arguments passed into the function as one string, and then prints that string to the output log."," ","Back: ","Global Variables"," ","Next: ","argument_count"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1290"})