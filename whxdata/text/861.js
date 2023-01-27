rh._.exports({"0":[[" ","variable_global_exists"]],"1":[["variable_global_exists"]],"2":[["variable_global_exists"]],"3":[[" ","variable_global_exists"]],"4":[[" ","With this function you can check whether a global scope variable exists or not. You supply the global variable name to check for ","as a string"," (see example code below) and the function will return ","true"," if a global variable with the given name exists or ","false"," otherwise."],[" ","variable_global_exists(name);"," ","Argument"," ","Type"," ","Description"," ","name"," ","String"," ","The name of the global variable to check for (as a string)"],[" ","Boolean"],[" ","if !variable_global_exists(\"enemy_num\")","\n    {","\n        global.enemy_num = instance_number(obj_Enemey_Parent);","\n    }"," ","The above code will check to see if the global variable called \"enemy_num\" exists and if it does not it is created and set a value."," ","Back: ","Variable Functions"," ","Next: ","variable_global_get"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"861"})