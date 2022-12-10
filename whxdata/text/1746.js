rh._.exports({"0":[["part_system_draw_order"]],"1":[["part_system_draw_order"]],"2":[["part_system_draw_order"]],"3":[["\n  ","\n  "],["\n  ","With this function you can set the way in which particles are drawn when created on the screen. The default system uses an old > new look (the function is set to ","true","), where old particles are drawn at a higher depth than newer ones and so appear \"beneath\" them new particles, but by setting this function to ","false"," you can reverse this order and have the new particles drawn higher and so appear \"beneath\" the older ones. The images below illustrate this, with the image on the left being the default value of ","true"," and the image on the right being ","false",":","\n  "," ","\n  ","NOTE",": When the particles are being drawn with an additive blend mode, the effect of this function may not always be obvious.","\n  "," ","\n  "],["\n  ","part_system_draw_order(ind, oldtonew);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","ind","\n        ","Particle System ID","\n        ","The index of the particle system to change.","\n      ","\n      ","\n        ","oldtonew","\n        ","Boolean","\n        ","Whether old particles should be drawn behind newer ones (true) or vice versa (false).","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","mysystem = part_system_create();","\n    part_system_draw_order(mysystem, true);","\n  ","This will create a new particle system with the index \"","mysystem","\", and then it sets particles to draw newer particles atop older ones.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Particle Systems","\n        ","Next: ","part_particles_create","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["part_system_draw_order"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1746"})