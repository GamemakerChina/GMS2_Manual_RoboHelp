rh._.exports({"0":[["point_distance_3d"]],"1":[["point_distance_3d"]],"2":[["point_distance_3d"]],"3":[["\n  ","\n  "],["\n  ","This function takes the supplied components of the vector and returns the length (distance) of the vector. It works in exactly the same way as ","point_distance()"," but with the addition of factoring in the z value (depth) for use in 3D space.","\n  "," ","\n  "],["\n  ","point_distance_3d(x1, y1, z1, x2, y2, z2);","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","x1","Real","\n        ","The x coordinate of the first component of the vector","\n     ","\n      ","\n        ","y1","Real","\n        ","The y coordinate of the first component of the vector","\n     ","\n      ","\n        ","z1","Real","\n        ","The z coordinate of the first component of the vector","\n     ","\n      ","\n        ","x2","Real","\n        ","The x coordinate of the second component of the vector","\n     ","\n      ","\n        ","y2","Real","\n        ","The y coordinate of the second component of the vector","\n     ","\n      ","\n        ","z2","Real","\n        ","The z coordinate of the second component of the vector","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Real","\n  "," ","\n  "],["\n  ","var inst, ex, ey, ez;","\n    inst = instance_nearest(x, y, enemy);","\n    if inst","\n    {","\n        ex = inst.x;","\n        ey = inst.y;","\n        ez = inst.z;","\n        if point_distance_3d(x, y, z, ex, ey, ez) < 200","\n        {","\n            instance_create_layer(x, y, \"Bullets\", obj_Missile)","\n        }","\n    }","\n  ","The above code will get the x and y and z coordinates of the nearest enemy and then use them to check the distance (length) of the vector formed by them and the player coordinates. If the value is less than 200, the player object will create an instance of \"obj_Missile\".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Angles And Distance","\n        ","Next: ","distance_to_object","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["point_distance_3d"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1789"})