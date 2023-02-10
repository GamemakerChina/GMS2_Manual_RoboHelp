rh._.exports({"0":[[" ","physics_particle_set_density"]],"1":[["physics_particle_set_density"]],"2":[["physics_particle_set_density"]],"3":[[" ","physics_particle_set_density"]],"4":[[" ","With this function you can set the density of the particles in a physics simulation. Setting the density of the particle will have a direct impact on how much inertia it has as well as how it reacts to collisions, so if you make a small particle with\n    a high density it will have a very large mass, but if you define a large particle with a low density it will have a much smaller mass. This function is ","global"," in scope, in that it will change the density not just for new particles created after\n    the change, but also for those already present in the simulation."],[" ","physics_particle_set_density(density)"," ","Argument","Type"," ","Description"," ","density","Real"," ","The density of the particle fixture."],[" ","N/A"],[" ","physics_particle_set_radius(15);"," physics_particle_set_density(0.5);\n    "," physics_particle_set_damping(1);\n    "," physics_particle_set_gravity_scale(1);\n  "," ","The above code will set the base properties for all particles in the simulation."," ","Back: ","Soft Body Particles"," ","Next: ","physics_particle_set_damping"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"842"})