rh._.exports({"0":[["angle_difference"]],"1":[["angle_difference"]],"2":[["angle_difference"]],"3":[["\n  ","\n  "],["\n  ","This function will return the smallest difference between the two specified angles, where the difference is calculated from the source angle towards the destination angle. The returned value will be between -180 and 180 degrees (where a positive angle is anti-clockwise and a negative angle is clockwise).","\n  ","The relationship between the \"source\" and \"destination\" angles is such that the difference that you get by calling ","angle_difference(dest, src)",", when added back to the ","src"," value, gives you the ","dest"," angle (although the exact numeric values may differ). You can use a similar technique to move the source angle towards the destination angle gradually every step, where you add, say, 10% of the returned difference back to ","src"," to move it a little bit towards ","dest"," (this is demonstrated in the example below).","\n  "," ","\n  "],["\n  ","angle_difference(dest, src)","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","dest","Real","\n        ","The destination or target angle","\n     ","\n      ","\n        ","src","Real","\n        ","The source angle","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Real","\n  "," ","\n  "],["\n  ","var _dir = point_direction(x, y, mouse_x, mouse_y);","\n    var _diff = angle_difference(_dir, image_angle);","\n    image_angle += _diff * 0.1;","\n  ","The above code will get the direction from the instance to the mouse cursor, then get the difference between that angle and the current ","image_angle",", using this value to gradually rotate the instance towards the mouse.","\n  ","\n  "," ","\n  ","Interactive Example","\n  ","\n  ","\n    ","\n      ","\n        ","Back: ","Angles And Distance","\n        ","Next: ","lengthdir_x","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["angle_difference"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2177"})