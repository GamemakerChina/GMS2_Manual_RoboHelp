rh._.exports({"0":[[" ","part_particles_create_colour"]],"1":[["part_particles_create_colour,part_particles_create_color"]],"2":[["part_particles_create_colour,part_particles_create_color"]],"3":[[" ","part_particles_create_colour"]],"4":[[" ","This function is ideal for those effects that do not require any of the functionality offered by ","particle emitters"," (for example, to create smoke from a missile, or a simple explosion effect) as it permits you to quickly and easily create particles at any position in the game room. You can also colour the particles \"on the fly\" as they are created with this function, and this colour will over-ride the predefined colour of the particle, but it does not blend this colour over the particles lifetime. Note that you must have created the particle system and the particle type previously for this function to be used."],[" ","part_particles_create_colour(ind, x, y, parttype, colour, number);"," ","Argument"," ","Type"," ","Description"," ","ind"," ","Particle System ID"," ","The index of the particle system."," ","x"," ","Real"," ","The x coordinate of where to create the particles."," ","y"," ","Real"," ","The y coordinate of where to create the particles."," ","parttype"," ","Particle Type ID"," ","The index (type) of the particles to be created."," ","colour"," ","Colour"," ","The colour blending for the particles."," ","number"," ","Real"," ","The number of particles to create."],[" ","N/A"],[" ","if (speed > 1)","\n    {","\n        var _c = choose(c_aqua, c_lime, c_fuchsia, c_orange);","\n        part_particles_create_colour(sname, x, y, p_Smoke, _c, 1);","\n    }"," ","The above code will generate a single particle every step that the instance with the code has a speed greater than one. These particles will be of a random colour."," ","Back: ","Particle Systems"," ","Next: ","part_system_exists"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1907"})