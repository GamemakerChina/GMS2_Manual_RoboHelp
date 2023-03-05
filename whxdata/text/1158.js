rh._.exports({"0":[[" ","lengthdir_y"]],"1":[["lengthdir_y"]],"2":[["lengthdir_y"]],"3":[[" ","lengthdir_y"]],"4":[[" ","This function is used to get the ","y"," component of a position \"len\" pixels from the starting point and in direction \"dir\". If you imagine a circle around your instance, and then imagine a point anywhere on that circle, to move\n    to that point we need to move the object so many pixels in that direction... so this function (when used with ","lengthdir_x()",") gets the position of that point on the circle to be used in code by the instance. See\n    the image below for details:"],[" ","lengthdir_y(len, dir);"," ","Argument","Type"," ","Description"," ","len","Real"," ","The length away of the point to return."," ","dir","Real"," ","The direction of the point to return."],[" ","Real"],[" ","var _xx = x + lengthdir_x(64, image_angle);"," var _yy = y + lengthdir_y(64, image_angle);"," instance_create_layer(_xx, _yy, \"Bullets\", obj_bullet);"," ","This will create a bullet instance at (","_xx",", ","_yy","), which will be 64 pixels from the parent instance in the direction of the image angle."," ","Back: ","Angles And Distance"," ","Next: ","arccos"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1158"})