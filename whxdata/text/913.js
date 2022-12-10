rh._.exports({"0":[["part_type_life"]],"1":[["part_type_life"]],"2":[["part_type_life"]],"3":[["\n  ","\n  "],["\n  ","This is the function that governs how long each individual particle of the indicated type remains on the screen. As with other particle functions, you provide a minimum and a maximum value (in steps)and each particle lifespan will be a random number of steps from within the specified range. To have all particles with the same lifetime, set the two values to be the same.","\n  "," ","\n  "],["\n  ","part_type_life(ind, life_min, life_max);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","ind","\n        ","Particle Type ID","\n        ","The index of the particle type to change.","\n      ","\n      ","\n        ","life_min","\n        ","Real","\n        ","The minimum lifespan of the particles.","\n      ","\n      ","\n        ","life_max","\n        ","Real","\n        ","The maximum lifespan of the particles.","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","part_type_life(part_Flare, room_speed, room_speed * 2);","\n  ","The above code will set all particles created of the particle type indexed in the variable \"part_Flare\" to have a lifetime of between 1 and 2 seconds, based on the current room-speed.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Particle Types","\n        ","Next: ","part_type_step","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["part_type_life"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"913"})