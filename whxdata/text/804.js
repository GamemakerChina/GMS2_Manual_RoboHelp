rh._.exports({"0":[["phy_col_normal_y"]],"1":[["phy_col_normal_y"]],"2":[["phy_col_normal_y"]],"3":[["\n  ","\n  "],["\n  ","This ","read-only"," variable returns the y component of the collision normal corresponding to the ","phy_collision_y"," array value. For each contact point there is an associated contact normal (which is usually the same normal for all points of contact in the collision). This contact normal is a unit vector that points from one instance in the collision to another, and can be used, for example, to calculate the correct \"push\" direction to resolve collisions","\n  ","NOTE",": This variable is only available in the collision event of a physics enabled instance.","\n  "," ","\n  "],["\n  ","phy_col_normal_y;","\n  "," ","\n  "],["\n  ","Real"," (single precision floating point value, or ","undefined"," if the instance is not physics enabled)","\n  "," ","\n  "],["\n  ","repeat(5 + irandom(5))","\n    {","\n        with (instance_create_layer(x, y, \"Effects\", obj_Debris)","\n        {","\n            physics_apply_local_impulse(0, 0, other.phy_col_normal_x[0], other.phy_col_normal_y[0]);","\n        }","\n    }","\n  ","The above code uses the contact normal to set the direction of movement for an instance created in the collision event between two physics enabled instances.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Physics Variables","\n        ","Next: ","phy_active","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["phy_col_normal_y"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"804"})