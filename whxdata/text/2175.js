rh._.exports({"0":[["Create Particle Emitter"]],"1":[["GML Visual Action - Create Particle Emitter"]],"2":[["Create Particle Emitter"]],"3":[["\n  ","\n  "],["\n  ","To be able to see your particles you need to have first created a ","Particle System",", then have defined some ","particle types"," and then finally created a ","particle emitter","    using this action. To create the emitter, you call this action and assign the emitter to a particle system that you have previously created (see ","Particle System",") and then give a target variable to store it's\n    unique ID value for use in further actions. You can choose to flag this variable as being a temporary local variable, but that will mean that it is discarded at the end of the action script or event, meaning that the emitter will still exist but leave\n    you without any means to access it, so care must be taken when using this (in general emitters will never need to be stored in a temporary local variable, but for certain things, like drawing particles to a surface, it may be required).","\n  ","IMPORTANT!"," If your particle system is ","persistent"," then you must either destroy all emitters at the end of each room using ","Destroy Particle Emitter"," and re-create them again in the next room as required,\n    or store their ID values in ","global"," variables so that they can be accessed anytime in any room, or have them created by a persistent object, so that the object will persist and be able to access them through instance variables. Also note that\n    if you call the ","Restart Game"," action you should destroy the particle system beforehand so that the system and the emitters assigned are removed from memory before starting again. Failure to properly remove emitters\n    from system memory as outlined above will lead to a ","memory leak",". This happens when a resource is added to memory and then \"de-referenced\", meaning that ","GameMaker"," has no way to interact with that resource any more. This leads\n    to the memory being clogged by inaccessible resources which in turn can cause issues with your game.","\n  "," ","\n  "],["\n  ","\n  "],["\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","System","\n        ","The ID value for the global emitter to create","\n      ","\n      ","\n        ","Target","\n        ","The target variable to hold the emitter ID","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","The above action block code will create a particle emitter, set it's\n    region, and then set it to emit a stream of particles.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Particle Actions","\n        ","Next: ","Destroy Particle Emitter","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[[" Create Particle Emitter"]],"5":[["Action Syntax:"],["Arguments:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2175"})