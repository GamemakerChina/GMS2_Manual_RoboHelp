rh._.exports({"0":[["Set Secondary Particles"]],"1":[["GML Visual Action - Set Secondary Particles"]],"2":[["Set Secondary Particles"]],"3":[["\n  ","\n  "],["\n  ","This action permits you to use a second particle type along with the primary particle. You give the primary particle type ID value (which should be the same as the value used when you created the particle using the ","Create Particle Type","    action) and then you can choose to have it emit a secondary particle type each game frame that it exists and/or at the end of each primary particle's lifespan. You must give another particle ID value for the \"Secondary\" and then a number\n    to be created in the \"Count\".","\n  ","If the Event selected is \"Per Step\" then each game frame that a primary particle exists on screen it will emit the given number of secondary particles - for example, you could have a rocket with \"flame\" particles, and each flame\n    particle emits a secondary \"smoke\" particle. If the event is set to \"On Death\", then the secondary particles will now only be emitted when a particle of the primary type reaches the end of its lifespan - for example, you could\n    have an \"explosion\" particle that emits a \"dust\" particle at the end of its life.","\n  ","It is important to note that you ","cannot"," use the same particle type ID as the primary particle as for secondary particles, and that you can very quickly encounter performance issues when using this action as it's easy to create thousands of\n    particles very quickly this way - so take care to limit the lifespan and number of particles being created by both the primary and secondary particle types. Also note that you can assign a secondary particle to any particle type and so can create\n    \"particle chains\" where one particle creates another each step and then this particle creates another when it reaches the end of its lifespan, etc... Although, again, care should be taken when chaining particles in this way to make sure\n    that performance does not suffer. You can also call this action twice for a single particle type and have it stream on step as well as burst on death.","\n  "," ","\n  "],["\n  ","\n  "],["\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","Type ID","\n        ","The ID value for the particle type to give the secondary particle to","\n      ","\n      ","\n        ","Event","\n        ","When to create the secondary particle, either \"Per Step\" or \"On Death\"","\n      ","\n      ","\n        ","Secondary","\n        ","The ID value for the particle type to emit in the chosen secondary Event","\n      ","\n      ","\n        ","Count","\n        ","The number of secondary particles to be created in the chosen secondary Event","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","The above action block code will assign two secondary particles to\n    the particle with the ID stored in the variable \"p_fire\".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Particle Actions","\n        ","Next: ","Burst Particles","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[[" Set Secondary Particles"]],"5":[["Action Syntax:"],["Arguments:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2263"})