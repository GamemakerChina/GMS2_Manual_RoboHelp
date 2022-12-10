rh._.exports({"0":[["physics_particle_group_add_point"]],"1":[["physics_particle_group_add_point"]],"2":[["physics_particle_group_add_point"]],"3":[["\n  ","\n  "],["\n  ","This function sets a point in the room to define the shape of a polygon which will be used to create a group of soft body particles. You must have previously signaled to ","GameMaker"," that you are going define a polygon shape using the function\n    ","physics_particle_group_polygon()"," and then use this function to define the individual points of the polygon. You must give at least three points when defining the polygon shape, but can give up to eight,\n    and the function will permit the definition of concave polygons. However, if you generate a polygon with any cavities, the points within will be ignored and a convex shape will be created for the particle group.","\n  "," ","\n  "],["\n  ","physics_particle_group_add_point(x, y)","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","x","Real","\n        ","The x position in the room for the point.","\n     ","\n      ","\n        ","y","Real","\n        ","The y position in the room for the point.","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","var flags = phy_particle_flag_water | phy_particle_flag_viscous | phy_particle_flag_tensile;"," var groupflags = phy_particle_group_flag_solid;"," physics_particle_group_begin(flags, groupflags, mouse_x, mouse_y, 0, 0, 0, 0, c_white, 1, 1, 2);","    physics_particle_group_polygon();\n    "," physics_particle_group_add_point(200, 200);"," physics_particle_group_add_point(300, 300);"," physics_particle_group_add_point(100, 300);"," mLastGroup = physics_particle_group_end();","\n  ","The above code stores the flags for the particle type and the particle group properties in variables then uses these to create a polygon particle group of three sides at the mouse position.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Soft Body Particles","\n        ","Next: ","physics_particle_group_end","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["physics_particle_group_add_point"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1676"})