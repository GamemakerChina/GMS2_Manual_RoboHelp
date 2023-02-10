rh._.exports({"0":[[" ","variable_struct_get_names"]],"1":[["variable_struct_get_names"]],"2":[["variable_struct_get_names"]],"3":[[" ","variable_struct_get_names"]],"4":[[" ","With this function you can retrieve an array populated with the variable names from a struct. You pass in the struct reference to check, and each entry in the array will be a ","string"," of the variable names that the struct contains."],[" ","variable_struct_get_names(struct);"," ","Argument","Type"," ","Description"," ","struct","Struct"," ","The struct reference to check."],[" ","Array"," (each entry is a string)"],[" ","var str = \"\";","\n    var array = variable_struct_get_names(mystruct);","\n    show_debug_message(\"Variables for struct: \" + string(array));","\n    for (var i = 0; i < array_length(array); i++;)","\n    {","\n        str = array[i] + \":\" + string(variable_struct_get(mystruct, array[i]));","\n        show_debug_message(str);","\n    }"," ","The above code will retrieve an array of the variable names for the given struct and then display these along with their values in the debug output."," ","Back: ","Variable Functions"," ","Next: ","variable_struct_names_count"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"835"})