rh._.exports({"0":[["path_reverse"]],"1":[["path_reverse"]],"2":[["path_reverse"]],"3":[["\n  ","\n  "],["\n  ","With this function you can reverse the order in which the individual path points are numbered, so, for example, if the path has 5 points, point 0 would become point 4, point 1 would be point 3 and point 2 would not be changed. The actual position of\n    the points remains the same, only the order in which they are processed is changed. ","This function changes the actual path asset",", and so will permanently affect how the path is used by all instances in the game from the moment the\n    function is used until the end of the game. If this is not what you require, then you should use a function like ","path_duplicate()"," to create a copy of the path first, then call this function\n    on the duplicated asset (don't forget to call ","path_delete()"," on the asset when it is no longer required).","\n  "," ","\n  "],["\n  ","path_reverse(index);","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","index","Path Asset","\n        ","The index of the path to change.","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","path_reverse(pth_AI);","\n  ","This would reverse the order in which all points on the given path are processed.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Path Manipulation","\n        ","Next: ","path_rotate","\n        \n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["path_reverse"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"963"})