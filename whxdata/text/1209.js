rh._.exports({"0":[["lengthdir_y"]],"1":[["lengthdir_y"]],"2":[["lengthdir_y"]],"3":[["\n\n\n\n\n  ","\n  "],["\n  ","This function is used to get the ","y"," component of a position \"len\" pixels from the starting point and in direction \"dir\". If you imagine a circle around your instance, and then imagine a point anywhere on that circle, to move\n    to that point we need to move the object so many pixels in that direction... so this function (when used with ","lengthdir_x()",") gets the position of that point on the circle to be used in code by the instance. See\n    the image below for details:","\n  ","\n  "],["\n  ","lengthdir_y(len, dir);","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","len","Real","\n        ","The length away of the point to return.","\n     ","\n      ","\n        ","dir","Real","\n        ","The direction of the point to return.","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Real","\n  "," ","\n  "],["\n  ","var _xx = x + lengthdir_x(64, image_angle);"," var _yy = y + lengthdir_y(64, image_angle);"," instance_create_layer(_xx, _yy, \"Bullets\", obj_bullet);","\n  ","This will create a bullet instance at (","_xx",", ","_yy","), which will be 64 pixels from the parent instance in the direction of the image angle.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Angles And Distance","\n        ","Next: ","arccos","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["lengthdir_y"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1209"})