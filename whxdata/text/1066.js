rh._.exports({"0":[[" ","path_set_closed"]],"1":[["path_set_closed"]],"2":[["path_set_closed"]],"3":[[" ","path_set_closed"]],"4":[[" ","This function can be used to flag a given path as being open (false) or closed (true). A closed path has its start point connected to its end point, forming a loop, and an open path has a definitive, unconnected start and finish. ","This function changes the actual path asset",", and so will permanently affect how the path is used by all instances in the game from the moment the function is used until the end of the game.If this is not what you require, then you should use a function like ","path_duplicate()"," to create a copy of the path first, then call this function on the duplicated asset (don't forget to call ","path_delete()"," on the asset when it is no longer required)."],[" ","path_set_closed(index, closed);"," ","Argument"," ","Type"," ","Description"," ","index"," ","Path Asset"," ","The index of the path to change."," ","closed"," ","Boolean"," ","Whether the path is closed (true) or not (false)."],[" ","N/A"],[" ","path_set_closed(pth_Patrol, true);"," ","This will set the given path to be a closed path."," ","Back: ","Path Manipulation"," ","Next: ","path_set_kind"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1066"})