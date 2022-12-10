rh._.exports({"0":[["Burst Particles"]],"1":[["GML Visual Action - Burst Particles"]],"2":[["Burst Particles"]],"3":[["\n  ","\n  "],["\n  ","This action permits you to burst particles at any time without relying on an emitter. You supply the unique ID value for the system to create the particles within (as returned when you created the system with the action ","Create Particle System",")\n    and the unique ID of the particle type to create (as returned when you created the particle type with the action ","Create Particle Type","), as well as the x/y position to create them at and the number to create.\n    The position can be an absolute position within the room, or you can flag it as being a relative position to the instance that is calling the action.","\n  ","You can call this action every game frame to replicate the stream effect of an emitter, or you can call it once in an event (like the Destroy Event) to simply burst the particles.","\n  "," ","\n  "],["\n  ","\n  "],["\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","System","\n        ","The ID value of the particle system to use","\n      ","\n      ","\n        ","Type","\n        ","The ID value of the particle type to burst","\n      ","\n      ","\n        ","X","\n        ","The x position to burst the particles at","\n      ","\n      ","\n        ","Y","\n        ","They position to burst the particles at","\n      ","\n      ","\n        ","Count","\n        ","The number of particles to be burst","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","The above action block code will check to see if the instance has changed position\n    since the last game frame was updated and if it has it will burst some particles at the new position.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Particle Actions","\n        ","Next: ","Create Particle Emitter","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[[" Burst Particles"]],"5":[["Action Syntax:"],["Arguments:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1738"})