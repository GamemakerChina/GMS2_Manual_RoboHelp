rh._.exports({"0":[["variable_struct_set"]],"1":[["variable_struct_set"]],"2":[["variable_struct_set"]],"3":[["\n  ","\n  "],["\n  ","With this function you can set the value of a given variable in a struct. You supply the struct reference as well as the name of the variable to set the value of ","as a string"," (see example code below), and then finally the value to set (can be any valid ","data type","). If the variable does not exist already in the struct it will be created and then assigned the value.","\n  "," ","\n  "],["\n  ","variable_struct_set(struct, name, val);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","struct","\n        ","Struct","\n        ","The struct reference to set","\n      ","\n      ","\n        ","name","\n        ","String","\n        ","The name of the variable to set (as a string)","\n      ","\n      ","\n        ","val","\n        ","Any","\n        ","The value to set the variable to","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","if !variable_struct_exists(mystruct, \"shields\")","\n    {","\n        variable_struct_set(mystruct, \"shields\", 0);","\n    }","\n  ","The above code will check to see if the given variable exists in the given struct and if it does not then it is created and set to 0.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Variable Functions","\n        ","Next: ","variable_struct_remove","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["variable_struct_set"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1142"})