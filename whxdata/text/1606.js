rh._.exports({"0":[["part_particles_create"]],"1":[["part_particles_create"]],"2":[["part_particles_create"]],"3":[["\n  ","\n  "],["\n  ","This function is ideal for those effects that do not require any of the functionality offered by ","particle emitters"," (for example, to create smoke from a missile, or a simple explosion effect) as it permits you to quickly and easily create particles at any position in the game room. Note that you must have created the particle system and the particle type previously for this function to be used.","\n  "," ","\n  "],["\n  ","part_particles_create(ind, x, y, parttype, number);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","ind","\n        ","Particle System ID","\n        ","The index of the particle system.","\n      ","\n      ","\n        ","x","\n        ","Real","\n        ","The x coordinate of where to create the particles.","\n      ","\n      ","\n        ","y","\n        ","Real","\n        ","The y coordinate of where to create the particles.","\n      ","\n      ","\n        ","parttype","\n        ","Particle Type ID","\n        ","The index (type) of the particles to be created.","\n      ","\n      ","\n        ","number","\n        ","Real","\n        ","The number of particles to create.","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","if mouse_check_button(mb_left)","\n    {","\n        part_particles_create(sname, mouse_x, mouse_y, p_CursorEffect, 5);","\n    }","\n  ","The above code checks for the mouse button being pressed and if it returns ","true"," it generates 5 particles at the mouse position.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Particle Systems","\n        ","Next: ","part_particles_create_colour","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["part_particles_create"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1606"})