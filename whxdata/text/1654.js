rh._.exports({"0":[[" ","variable_instance_get_names"]],"1":[["variable_instance_get_names"]],"2":[["variable_instance_get_names"]],"3":[[" ","variable_instance_get_names"]],"4":[[" ","With this function you can retrieve an array populated with the ","instance"," variable names for an instance, or the ","global"," variables for a game. When you pass in an instance ID value, each entry in the array will be a string of the variable name that corresponds to an ","instance scope"," variable that has been created in the instance. However if you pass in the keyword ","global",", each entry in the array will be a string of the variable name that corresponds to an ","global scope"," variable."],[" ","variable_instance_get_names(instance_id/global);"," ","Argument"," ","Type"," ","Description"," ","instance_id/global"," ","Instance ID"," or ","global"," ","The unique ID value of the instance to check or the keyword ","global"],[" ","Array"," (each entry is a string)"],[" ","var str = \"\";","\n    var array = variable_instance_get_names(id);","\n    show_debug_message(\"Variables for \" + object_get_name(object_index) + string(id));","\n    for (var i = 0; i < array_length(array); i++;)","\n    {","\n        str = array[i] + \":\" + string(variable_instance_get(id, array[i]));","\n        show_debug_message(str);","\n    }"," ","The above code will retrieve an array of all instance scope variables for the instance running the code block and then display these along with their values in the debug output."," ","Back: ","Variable Functions"," ","Next: ","variable_instance_names_count"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1654"})