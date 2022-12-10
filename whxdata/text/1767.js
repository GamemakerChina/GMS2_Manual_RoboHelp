rh._.exports({"0":[["motion_add"]],"1":[["motion_add"]],"2":[["motion_add"]],"3":[["\n  ","\n  "],["\n  ","This function accelerates the instance with the given speed in the given direction. ","\n  ","This is the equivalent of calculating the ","x component"," and ","y component"," of the given speed in the given direction, and then adding them to ","hspeed"," and ","vspeed"," respectively.","\n  ","If you wish to simply set a speed instead of accelerating gradually, use ","motion_set()",".","\n  "," ","\n  "],["\n  ","motion_add(dir, speed);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","dir","\n        ","Real","\n        ","The added direction.","\n      ","\n      ","\n        ","speed","\n        ","Real","\n        ","The added speed.","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","var pdir;","\n    pdir = point_direction(other.x, other.y, x, y);","\n    motion_add(pdir, other.speed);","\n    if speed > 8 speed = 8;","\n  ","The above code would be called in the collision event with another object. It adds to the direction of motion and the speed of the instance a vector based on the position and speed of the other instance involved in the collision. It then limits the speed if it goes over 8 (pixels per step).","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Movement","\n        ","Next: ","motion_set","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["motion_add"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1767"})