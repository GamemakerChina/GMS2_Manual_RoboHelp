rh._.exports({"0":[["path_shift"]],"1":[["path_shift"]],"2":[["path_shift"]],"3":[["\n  ","\n  "],["\n  ","With this function you can shift a path along the horizontal and vertical axis. Please note that this will have no visible effect in-game if the instance following the path being shifted follows it relatively (rather than absolutely) as the path's\n    position is disregarded then. ","This function changes the actual path asset",", and so will permanently affect how the path is used by all instances in the game from the moment the function is used until the end of the game. If this is\n    not what you require, then you should use a function like ","path_duplicate()"," to create a copy of the path first, then call this function on the duplicated asset (don't forget to call\n    ","path_delete()"," on the asset when it is no longer required).","\n  "," ","\n  "],["\n  ","path_shift(index, xshift, yshift);","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","index","Path Asset","\n        ","The index of the path to change.","\n     ","\n      ","\n        ","xshift","Real","\n        ","The number of horizontal pixels to shift the path. Negative=left, positive=right.","\n     ","\n      ","\n        ","yshift","Real","\n        ","The number of vertical pixels to shift the path. Negative=up, positive=down.","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","my_path = path_duplicate(pth_AI);"," path_shift(my_path, 50, 50);"," path_start(my_path, 4, path_action_reverse, true);","\n  ","The above code duplicates a path asset and stores its ID value in a variable. This variable is then used to shift the duplicated path position and then the instance starts the path.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Path Manipulation","\n        ","Next: ","path_index","\n        \n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["path_shift"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1557"})