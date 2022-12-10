rh._.exports({"0":[["Particle Actions"]],"1":[["GML Visual Overview - Particle Actions Library"]],"2":[["Particle Actions"]],"3":[["\n  ","\n  "],["\n  ","For complex things in ","GameMaker"," you would normally have an ","object"," and then create ","instances"," of that object within the ","room",". However, for graphics effects, this can be expensive as every instance comes with a \"cost\" in processing due to the variables it contains and the codes it has in the different events. You can reduce this cost by turning to tiles for drawing your graphics, or even using the ","asset layer"," in the room editor, but both of those are generally only used for drawing simple graphics that maintain the same position over time and have few special effects. However, there is one other option for drawing fast yet versatile graphics effects in your games, and that is to use particles.","\n  ","Particles are graphic resources with certain properties which are defined within a ","particle system",". These properties cannot be manipulated directly for individual particles, but are changed through the actions that are used to define the individual ","particle types"," within the system. They are very useful for creating beautiful and flashy effects (or subtle and discreet ones!) like explosions, decals, rain, snow, star fields and debris in a game without the CPU or GPU overhead that using instances and/or tiles and assets have.","\n  ","The basic setup for a particle system follows three steps:","\n  ","\n    ","Create a Particle System",": The particle system is like a container that we will use to hold our different particle emitters as we use them. We use actions to define a series of visual aspects and behaviours for our particles, and then we use them from an emitter that has been placed in the \"container\" (the particle system) so that they can be seen.","\n    ","Create Particle Types",": Particle \"types\" are the definition of the graphic effect itself. You can have many different particle types, each with their own range of colours, alphas, sizes and movements, but its important to note ","that you do not have control over individual particles",". You define a series of parameters and the particle will be created to have a random spread of behaviours chosen from them.","\n    ","Create Particle Emitters",": Emitters are used to burst or stream particles from within very clearly defined limits, and can be given special parameters to define exactly ","how"," a given particle effect should be created. Emitters can be optional, as you can use the action ","Burst Particles"," to emulate many of the effects of an emitter, with the added bonus of not needing to worry about cleaning up the emitter later. Note, that emitters, unlike particles, must belong to a system for any particles being created to be seen.","\n  ","\n  ","You can get a more in-depth guide to setting up and using particles from the following page of the manual:","\n  ","\n    ","Guide To Using Particles","\n  ","\n  ","Although particles are an excellent tool for creating effects, they do come with certain restrictions and rules of good practice which need to be followed unless you want your game to have issues:","\n  ","\n    ","The particle system, particle types and particle emitters all take up ","memory"," and as such you should be very careful how you use them as it is very easy to cause a memory leak which will slow down and eventually crash your game, so each particle type and emitter (and possibly the system itself) should be destroyed the moment it is not needed.","\n    ","Particles may be fast and light on the CPU and GPU, but they still require some processing and so you shouldn't have 40,000 of them bursting across the screen at a time. Limit them to those that are necessary to achieve a specific effect and no more.","\n    ","If you define your own particle sprite instead of using one of the 14 included sprites, you should try to keep them as small as possible to achieve the effect you require.","\n    ","Particles do ","not"," interact with anything. Should you need them to have any type of interaction with the user or any other instances in your game, you should be looking at using instances instead as particles are purely graphic.","\n    ","Even though there is no technical limit to the amount of emitters and particles you can create in one game, you should try and limit everything to the minimum number possible to keep memory use as low as possible.","\n    ","On mobile devices, take care with particles as drawing them can be slow if they cover a large area of the screen (over-draw on mobile devices is one of the main causes of slowdown).","\n    ","When targeting the HTML5 platform, note that unless you have WebGL enabled, you cannot have colour blending either (only the first of the particle colours will be used on non-WebGL canvas).","\n  ","\n  ","The following sections cover all actions for making your own particle systems:","\n  ","\n    ","\n      ","\n        "," ","\n        "," ","\n      ","\n      ","\n        ","\n        ","Create Particle System","\n      ","\n      ","\n        ","\n        ","Destroy Particle System","\n      ","\n      ","\n        ","\n        ","Clear Particle System","\n      ","\n      ","\n        ","\n        ","Pause Particle System","\n      ","\n      ","\n        ","\n        ","Update Particle System","\n      ","\n      ","\n        ","\n        ","Create Particle Type","\n      ","\n      ","\n        ","\n        ","Destroy Particle Type","\n      ","\n      ","\n        ","\n        "," "," "," "," "," "," "," "," ","Set Particle Size"," ","\n      ","\n      ","\n        ","\n        ","Set Particle Sprite","\n      ","\n      ","\n        ","\n        ","Set Particle Shape","\n      ","\n      ","\n        ","\n        ","Set Particle Colour","\n      ","\n      ","\n        ","\n        ","Set Particle Alpha","\n      ","\n      ","\n        ","\n        ","Set Particle Life","\n      ","\n      ","\n        ","\n        ","Set Particle Speed","\n      ","\n      ","\n        ","\n        ","Set Particle Direction","\n      ","\n      ","\n        ","\n        ","Set Particle Orientation","\n      ","\n      ","\n        ","\n        ","Set Particle Gravity","\n      ","\n      ","\n        ","\n        ","Set Secondary Particles","\n      ","\n      ","\n        ","\n        ","Burst Particles","\n      ","\n      ","\n        ","\n        ","Create Particle Emitter","\n      ","\n      ","\n        ","\n        ","Destroy Particle Emitter","\n      ","\n      ","\n        ","\n        ","Emit Particles","\n      ","\n      ","\n        ","\n        ","Set Emitter Region","\n      ","\n      ","\n        ","\n        ","Do Effect","\n      ","\n    ","\n  ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Index","\n        ","Next: ","Time Source Actions","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["Particle Action Library"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2656"})