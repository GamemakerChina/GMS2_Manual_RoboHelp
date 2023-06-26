rh._.exports({"0":[[" ","directory_destroy"]],"1":[["directory_destroy"]],"2":[[" ","directory_destroy"]],"3":[[" ","This function will remove a directory with the given name in the save area."," ","NOTE",": This function will not work on HTML5 as you cannot create or remove directories in the browser local storage."," ","WARNING!"," This function may not work as you expect due to ","GameMaker"," being sandboxed! Please see the section on the ","File System"," for more information."],[" ","directory_destroy(dname)"," ","Argument","Type"," ","Description"," ","dname","String"," ","The name of the directory to remove."],[" ","N/A"],[" ","if directory_exists(\"DLC\")","\n    {","\n        directory_destroy(\"DLC\");","\n    }"," ","This will check to see if the specified directory exists in the local data folder and, if it does, it is removed."," ","Back: ","File Directories"," ","Next: ","temp_directory"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["directory_destroy"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"584"})