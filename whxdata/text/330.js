rh._.exports({"0":[["phy_dynamic"]],"1":[["phy_dynamic"]],"2":[["phy_dynamic"]],"3":[["\n  ","\n  "],["\n  ","A dynamic instance is one that is fully simulated within the physics world and this ","read-only"," variable will return ","true"," if the instance being checked is fully simulated or ","false"," if it is not","\n  "," ","\n  "],["\n  ","phy_dynamic;","\n  "," ","\n  "],["\n  ","Boolean"," (or ","undefined"," if the instance is not physics enabled)","\n  "," ","\n  "],["\n  ","if other.phy_dynamic","\n    {","\n        with (other)","\n        {","\n            var dir;","\n            dir = point_direction(x, y, other.x, other.y);","\n            physics_apply_impulse(x, y, x + lengthdir_x(100, dir), y + lengthdir_y(100, dir));","\n        }","\n    }","\n  ","The above code creates a new instance and then defines it as being a \"bullet\" in the physics world before giving it a massive impulse along the y axis.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Physics Variables","\n        ","Next: ","phy_kinematic","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["phy_dynamic"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"330"})