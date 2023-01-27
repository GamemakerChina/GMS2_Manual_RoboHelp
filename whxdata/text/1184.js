rh._.exports({"0":[[" ","physics_particle_get_group_flags"]],"1":[["physics_particle_get_group_flags"]],"2":[["physics_particle_get_group_flags"]],"3":[[" ","physics_particle_get_group_flags"]],"4":[[" ","With this function you can retrieve the group flags for a group of particles. The ","group"," value is that which was returned when you created the group of particles using the function ","physics_particle_group_end()",", and the function will return a value which is the combined value of the currently set flags."],[" ","physics_particle_get_group_flags(group)"," ","Argument"," ","Type"," ","Description"," ","group"," ","Physics Particle Group ID"," ","The particle group to get."],[" ","Real"],[" ","var flags = physics_particle_get_group_flags(group, flags);","\n    if flags != (phy_particle_group_flag_solid | phy_particle_group_flag_rigid)","\n    {","\n        flags = phy_particle_group_flag_solid | phy_particle_group_flag_rigid;","\n        physics_particle_set_group_flags(group, flags);","\n    }"," ","The above code will create a variable to store the flags value and then use it to check the flags of the group indexed in the variable \"group\". If they are not the same, the group is set with these flags."," ","Back: ","Soft Body Particles"," ","Next: ","physics_particle_group_get_inertia"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1184"})