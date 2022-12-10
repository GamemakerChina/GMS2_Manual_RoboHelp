rh._.exports({"0":[["path_insert_point"]],"1":[["path_insert_point"]],"2":[["path_insert_point"]],"3":[["\n  ","\n  "],["\n  ","With this function you can insert a new point into a path (the path can have been created in the path editor or through code using ","path_add()","). The point will be added into the path before the point \"n\" that is specified in the function.","\n  "," ","\n  "],["\n  ","path_insert_point(index, n, x, y, speed);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","index","\n        ","Path Asset","\n        ","The index of the path to insert the point into.","\n      ","\n      ","\n        ","n","\n        ","Real","\n        ","The defining point to insert the new point BEFORE.","\n      ","\n      ","\n        ","x","\n        ","Real","\n        ","The x coordinate (relative to the path) of the new point.","\n      ","\n      ","\n        ","y","\n        ","Real","\n        ","The y coordinate (relative to the path) of the new point.","\n      ","\n      ","\n        ","speed","\n        ","Real","\n        ","The speed factor of the point.","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","path_insert_point(mypath, 0, 50, 50, 100);","\n  ","This will insert a point at the very beginning of the path indexed in the variable \"mypath\", at (50,50), with a speed factor of 100%.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Path Manipulation","\n        ","Next: ","path_delete_point","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["path_insert_point"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1235"})