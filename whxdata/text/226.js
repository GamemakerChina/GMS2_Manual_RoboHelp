rh._.exports({"0":[["physics_particle_get_damping"]],"1":[["physics_particle_get_damping"]],"2":[["physics_particle_get_damping"]],"3":[["\n  ","\n  "],["\n  ","With this function you can find out what the current linear damping is for particles in the physics simulation (you can set this value using ","physics_particle_set_damping()",").","\n  "," ","\n  "],["\n  ","physics_particle_get_damping()","\n  "," ","\n  "],["\n  ","Real","\n  "," ","\n  "],["\n  ","if (physics_particle_get_damping() < 1)","\n    {","\n        physics_particle_set_damping(physics_particle_get_damping() + 0.01);","\n    }","\n  ","The above code will check the current damping value for all particles in the system and if it is less than 1 then it will add 0.01 to it.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Soft Body Particles","\n        ","Next: ","physics_particle_get_gravity_scale","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["physics_particle_get_damping"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"226"})