rh._.exports({"0":[[" ","path_assign"]],"1":[["path_assign"]],"2":[["path_assign"]],"3":[[" ","path_assign"]],"4":[[" ","With this function you can copy the path data from one path to another. The path being copied ","to"," will be cleared first (should it have any path points) and be ","completely overwritten"," by the path being\n    copied from. Neither path is deleted in the process and the result is two paths, with two different indexes, but the exact same form and points. In general you would want to use this function on a path created using ","path_add()",",\n    since if you use it on a path asset, ","it will permanently affect the path for all instances in the game"," from the moment the function is used until the end of the game."],[" ","path_assign(index, path);"," ","Argument","Type"," ","Description"," ","index","Path Asset"," ","The index of the path to be overwritten."," ","path","Path Asset"," ","The index of the path that will overwrite 'index'."],[" ","N/A"],[" ","mypath = path_add();"," path_assign(mypath, choose(path_1, path_2, path_3));"," ","The above code will create a new, empty path indexed in the variable \"mypath\" and then copy over the path data from one of the three available path resources."," ","Back: ","Path Manipulation"," ","Next: ","path_delete"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1123"})