rh._.exports({"0":[[" ","part_emitter_region"]],"1":[["part_emitter_region,ps_shape_rectangle,ps_shape_ellipse,ps_shape_diamond,ps_shape_line,ps_distr_linear,ps_distr_gaussian,ps_distr_invgaussian"]],"2":[["part_emitter_region,ps_shape_rectangle,ps_shape_ellipse,ps_shape_diamond,ps_shape_line,ps_distr_linear,ps_distr_gaussian,ps_distr_invgaussian"]],"3":[[" ","part_emitter_region"]],"4":[[" ","This function is used to set their position of a particle emitter within the current room. You specify the bounding box of the area within the function and then use any of a series of constants to define the final emitter shape within this bounding box as well as the distribution of particles within the shape. The available constants for distribution shapes are listed below:"," ","Particle Emitter Shape Constant"," ","Constant"," ","Description"," ","ps_shape_rectangle"," ","A rectangular shape that fills the given area."," ","ps_shape_ellipse"," ","An ellipse, with the width and height defined by the area."," ","ps_shape_diamond"," ","A diamond shape with the points at half width and half height."," ","ps_shape_line"," ","A single line, where the start point is the left and top and the end point is the right and bottom."," ","Apart from the distribution shapes, you can also define the distribution curve for the particles that are to be emitted. The available constants for distribution curves are listed below:"," ","Particle Emitter Distribution Constant"," ","Constant"," ","Description"," ","ps_distr_linear"," ","A Linear distribution where all particles have an equal chance of appearing anywhere in the area."," ","ps_distr_gaussian"," ","A gaussian distribution where more particles are generated in the center rather than the edges."," ","ps_distr_invgaussian"," ","An inverse gaussian distribution where more particles are generated at the edges than center."," ","NOTE",": If you need the emitter to move with an instance, you will have to use this function in the step event and update the emitter position that way. It is also worth noting that for point emissions where you do not need to create particles over an area or with a specific distribution, it is often easier to use ","part_particles_create()","."],[" ","part_emitter_region(ps, ind, xmin, xmax, ymin, ymax, shape, distribution);"," ","Argument"," ","Type"," ","Description"," ","ps"," ","Particle System ID"," ","The particle system that the emitter is in."," ","ind"," ","Particle Emitter ID"," ","The index of the emitter to set."," ","xmin"," ","Real"," ","The x coordinate of the left side of the region."," ","xmax"," ","Real"," ","The x coordinate of the right side."," ","ymin"," ","Real"," ","The y coordinate of the top of the region."," ","ymax"," ","Real"," ","The y coordinate of the bottom of the region."," ","shape"," ","Particle Emitter Shape Constant"," ","The shape of the region."," ","distribution"," ","Particle Emitter Distribution Constant"," ","The distribution style of the particles."],[" ","N/A"],[" ","part_emitter_region(global.Sname , emit_1, x - 50, x + 50, y - 50, y + 50, ps_shape_ellipse, ps_distr_linear);"," ","The above code will set an emitter to the a 100px tall and 100px wide elliptical shape around the current (x,y) position of the instance running the code."," ","Back: ","Particle Emitters"," ","Next: ","part_emitter_burst"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2494"})