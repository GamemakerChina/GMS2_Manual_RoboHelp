rh._.exports({"0":[[" ","script_exists"]],"1":[["script_exists"]],"2":[[" ","script_exists"]],"3":[[" ","This function will return ","true"," or ","false"," depending on whether the script or ","script function"," with the given index exists. Note, that this is ","not"," a string, but rather the asset name which holds the unique index for each script (as it would appear in the IDE) or the named script function, as defined within the script asset (note that this will not work for ","method variables","). For more information on scripts, see ","The Script Editor","."],[" ","script_exists(scr);"," ","Argument"," ","Type"," ","Description"," ","scr"," ","Script Asset"," ","The script index that you want to check."],[" ","Boolean"],[" ","script[0] = -1;","\n    script[1] = AI_Left;","\n    script[2] = AI_Right;","\n    var script_num = choose(0, 1, 2);","\n    if script_exists(script[script_num])","\n    {","\n        script_execute(script[script_num]);","\n    }"," ","The above example adds two script functions and a value into an array, then proceeds to get a random number and use that to choose a script function to run, unless the -1 is chosen in which case nothing will happen."," ","Back: ","Scripts"," ","Next: ","script_get_name"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["script_exists"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1095"})