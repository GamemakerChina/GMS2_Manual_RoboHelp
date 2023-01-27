rh._.exports({"0":[[" ","physics_particle_set_category_flags"]],"1":[["physics_particle_set_category_flags,phy_particle_flag_water,phy_particle_flag_zombie,phy_particle_flag_wall,phy_particle_flag_spring,phy_particle_flag_elastic,phy_particle_flag_viscous,phy_particle_flag_powder,phy_particle_flag_tensile,phy_particle_flag_colourmixing,phy_particle_flag_colormixing"]],"2":[["physics_particle_set_category_flags,phy_particle_flag_water,phy_particle_flag_zombie,phy_particle_flag_wall,phy_particle_flag_spring,phy_particle_flag_elastic,phy_particle_flag_viscous,phy_particle_flag_powder,phy_particle_flag_tensile,phy_particle_flag_colourmixing,phy_particle_flag_colormixing"]],"3":[[" ","physics_particle_set_category_flags"]],"4":[[" ","With this function you can change the particle flags for a category of particles. The ","category"," value is that which you defined in the function ","physics_particle_create()"," or (if you created a group) ","physics_particle_group_begin()",", while the flags are the return value of a combination of the following ","constants",":"," ","Constant"," ","Description"," ","phy_particle_flag_water"," ","The default properties for a soft body particle."," ","phy_particle_flag_zombie"," ","A zombie particle is one that will be destroyed in a single step with all others flagged in this way."," ","phy_particle_flag_wall"," ","This defines the particle as ","static",", essentially creating it as an immovable object in the physics simulation, as they will remain in a fixed position no matter what collides with them. You should use this flag rather than set the density to 0."," ","phy_particle_flag_spring"," ","Spring particles produce the effect of being attached to one another, as if by a spring. Particles created with this flag are \"connected\" in pairs, with each particle being connected to the one that was closest to it at the time of creation. Once paired, particles do not change \"partners\" , and the farther an external force pulls them from one another, the greater the power with which they will collide when that external force is removed. Note that no matter how far paired particles get from each another, the connection between them will not snap."," ","phy_particle_flag_elastic"," ","Elastic particles deform and may also bounce when they collide with other rigid bodies in the physics simulation."," ","phy_particle_flag_viscous"," ","A viscous particle is one that exhibits \"clinginess\" or \"stickiness\", like oil. Viscous particles will clump and stick together more."," ","phy_particle_flag_powder"," ","Powder particles produce a scattering effect such as you might see with sand or dust."," ","phy_particle_flag_tensile"," ","Tensile particles are used to produce the effect of surface tension, or the taut curvature on the surface of a body of liquid. They might be used, for example, to create the surface tension you would see on a drop of water. Once the tension is broken, the particles bounce as if they were elastic, but also continue to attract each other. As a result, particles tend to form clusters as they bounce."," ","phy_particle_flag_colourmixing"," ","Colour-mixing particles take on some of the colour of other particles with which they collide. Note that if only one of the two colliding particles is a colour-mixing one, the other particle retains its pre-collision colour."," ","These flags use bit-masking to create a final output value that is then checked to set the different basic properties of the particle category (with the base property always being that of ","phy_particle_flag_water","). For example, if you want to simulate a viscous liquid with surface tension you would use the ","bitwise ","or"," \"|\" to mask off the appropriate bits as shown in the example below. In this way you can set different properties (other than the global properties) for each category of particle created."],[" ","physics_particle_set_category_flags(category, flags)"," ","Argument"," ","Type"," ","Description"," ","category"," ","Real"," ","The particle category to set."," ","flags"," ","Physics Particle Flag Constant","(s)"," ","The flags to set on the particle category."],[" ","N/A"],[" ","var flags = phy_particle_flag_water | phy_particle_flag_viscous | phy_particle_flag_tensile;","\n    physics_particle_set_category_flags(1, flags);"," ","The above code will create a variable to store the flags value and then use it to set the flags of all particles created with the category value of 1."," ","Back: ","Soft Body Particles"," ","Next: ","physics_particle_set_group_flags"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2511"})