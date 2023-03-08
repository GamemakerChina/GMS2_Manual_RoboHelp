rh._.exports({"0":[[" ","argument_count"]],"1":[["argument_count"]],"2":[["argument_count"]],"3":[[" ","argument_count"]],"4":[[" ","This ","read-only"," variable returns the number of \"arguments\" that are passed through to a ","script function"," or a ","method",". Normally used in conjunction with an argument array (","argument[0...15]",") to permit varying input arguments for a given function."],[" ","argument_count;"],[" ","Real"],[" ","function print(){","\n        var _str = \"\";","\n        for (var i = 0; i < argument_count; i ++)","\n        {","\n            _str += string(argument[i]);","\n        }","\n        show_debug_message(_str);","\n    }"," ","\n    // In an object","\n    print(\"Player : \", current_time, \" : \", id, \" : fired\");\n  "," ","The above function joins all the arguments passed into the function as one string, and then prints that string to the output log."," ","Back: ","Global Variables"," ","Next: ","async_load"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"538"})