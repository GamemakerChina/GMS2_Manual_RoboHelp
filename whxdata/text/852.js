rh._.exports({"0":[["variable_struct_get_names"]],"1":[["variable_struct_get_names"]],"2":[["variable_struct_get_names"]],"3":[["\n  ","\n  "],["\n  ","With this function you can retrieve an array populated with the variable names from a struct. You pass in the struct reference to check, and each entry in the array will be a ","string"," of the variable names that the struct contains.","\n  "," ","\n  "],["\n  ","variable_struct_get_names(struct);","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","struct","Struct","\n        ","The struct reference to check.","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Array"," (each entry is a string)","\n  "," ","\n  "],["\n  ","var str = \"\";","\n    var array = variable_struct_get_names(mystruct);","\n    show_debug_message(\"Variables for struct: \" + string(array));","\n    for (var i = 0; i < array_length(array); i++;)","\n    {","\n        str = array[i] + \":\" + string(variable_struct_get(mystruct, array[i]));","\n        show_debug_message(str);","\n    }","\n  ","The above code will retrieve an array of the variable names for the given struct and then display these along with their values in the debug output.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Variable Functions","\n        ","Next: ","variable_struct_names_count","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["variable_struct_get_names"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"852"})