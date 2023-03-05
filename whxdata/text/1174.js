rh._.exports({"0":[[" ","variable_global_get"]],"1":[["variable_global_get"]],"2":[["variable_global_get"]],"3":[[" ","variable_global_get"]],"4":[[" ","With this function you can get the value from a given named global variable. You supply the name of the global variable to get the value of ","as a string"," (see example code below) and the function will return the value held by the global variable or ","undefined"," if the variable does not exist."," ","IMPORTANT!"," If the global variable you are getting does not exist then the function will return the keyword ","undefined"," and you may get errors that will stop the game from functioning, so if in doubt use the function ","variable_global_exists"," first."],[" ","variable_global_get(name);"," ","Argument","Type"," ","Description"," ","name","String"," ","The name of the global variable to get (as a string)"],[" ","Any"," (any data type) or ","undefined"," (if the named variable does not exist)"],[" ","if variable_global_exists(\"enemy_num\")","\n    {","\n        show_debug_message(\"enemy_num = \" + string(variable_global_get(\"enemy_num\"));)","\n    }"," ","The above code will check to see if a global variable exists and if it does then it is output to the console."," ","Back: ","Variable Functions"," ","Next: ","variable_global_set"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1174"})