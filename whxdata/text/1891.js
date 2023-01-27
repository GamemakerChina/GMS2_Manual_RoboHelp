rh._.exports({"0":[[" ","Emit Particles"]],"1":[["GML Visual Action - Emit Particles"]],"2":[["Emit Particles"]],"3":[[" "," Emit Particles"]],"4":[[" ","This action is used to create particles from an emitter. You supply the particle system ID that the emitter belongs to (as returned by the action ","Create Particle System",") and then the actual emitter ID (as returned\n    by the action ","Create Particle Emitter","), and finally the particle type to create (as returned by the action ","Create Particle Type","). You can then select to \"Burst\"\n    or \"Stream\" the particles from the emitter, as well as give the number of them you want to create."," ","When you choose to stream particles, you do not need to place this action in a game frame event like the Step Event or the Draw event, but instead simply call it once in the Create Event (for example) and the emitter will stream particles every game\n    frame until you call this action again to stop it (by setting the count value to 0). If you choose to burst the particles, then you can call this in any event you choose and the particles will be created once."],[" ","Argument"," ","Description"," ","System"," ","The ID of the system that the emitter is in"," ","Emitter"," ","The ID of the emitter to use"," ","Type"," ","The ID of the particle type to create"," ","Event"," ","The event type for the particles, either \"Burst\" or \"Stream\""," ","Count"," ","The the number of particles to burst or stream"],[" ","The above action block code will create a particle emitter, set it's region,\n    and then set it to emit a stream of particles."," ","Back: ","Particle Actions"," ","Next: ","Set Emitter Region"]],"5":[[" ","Action Syntax:"," ","Arguments:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1891"})