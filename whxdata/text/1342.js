rh._.exports({"0":[[" ","physics_particle_set_gravity_scale"]],"1":[["physics_particle_set_gravity_scale"]],"2":[["physics_particle_set_gravity_scale"]],"3":[[" ","physics_particle_set_gravity_scale"]],"4":[[" ","With this function you can set the gravity scale factor for particles in the physics simulation. The function is designed to help prevent instability in the physics simulation, especially when using very small particles which may behave unpredictably\n    (i.e. break conservation of momentum) in scenarios such as explosions. Slowing these particles down by reducing gravity scale can stabilize their behaviour. This function is ","global"," in scope, in that it will change the gravity scale not just\n    for new particles created after the change, but also for those already present in the simulation."," ","NOTE",": Adjusting the number of update iterations per step (using the function ","physics_world_update_iterations()","    can also affect the effect of gravity on particles. Larger iteration sizes confer greater resistance to gravity."],[" ","physics_particle_set_gravity_scale(scale)"," ","Argument","Type"," ","Description"," ","scale","Real"," ","The scaling factor to be applied to gravity for all particles."],[" ","N/A"],[" ","physics_particle_set_radius(15);"," physics_particle_set_density(0.5);\n    "," physics_particle_set_damping(1);\n    "," physics_particle_set_gravity_scale(1);\n  "," ","The above code will set the base properties for all particles in the simulation."," ","Back: ","Soft Body Particles"," ","Next: ","physics_particle_get_max_count"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"1342"})