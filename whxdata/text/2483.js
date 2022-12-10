rh._.exports({"0":[["physics_particle_set_flags"]],"1":[["physics_particle_set_flags,phy_particle_flag_water,phy_particle_flag_zombie,phy_particle_flag_wall,phy_particle_flag_spring,phy_particle_flag_elastic,phy_particle_flag_viscous,phy_particle_flag_powder,phy_particle_flag_tensile,phy_particle_flag_colourmixing,phy_particle_flag_colormixing"]],"2":[["physics_particle_set_flags,phy_particle_flag_water,phy_particle_flag_zombie,phy_particle_flag_wall,phy_particle_flag_spring,phy_particle_flag_elastic,phy_particle_flag_viscous,phy_particle_flag_powder,phy_particle_flag_tensile,phy_particle_flag_colourmixing,phy_particle_flag_colormixing"]],"3":[["\n  ","\n  "],["\n  ","With this function you can change the particle flags for an individual particle. The ","index"," value is the particle ID as returned by the function ","physics_particle_create()",", while the flags are the return value of a combination of the following ","constants",":","\n  ","\n    ","\n      ","\n        ","Constant","\n        ","Description","\n      ","\n      ","\n        ","phy_particle_flag_water","\n        ","The default properties for a soft body particle.","\n      ","\n      ","\n        ","phy_particle_flag_zombie","\n        ","A zombie particle is one that will be destroyed in a single step with all others flagged in this way.","\n      ","\n      ","\n        ","phy_particle_flag_wall","\n        ","This defines the particle as ","static",", essentially creating it as an immovable object in the physics simulation, as they will remain in a fixed position no matter what collides with them. You should use this flag rather than set the density to 0.","\n      ","\n      ","\n        ","phy_particle_flag_spring","\n        ","Spring particles produce the effect of being attached to one another, as if by a spring. Particles created with this flag are \"connected\" in pairs, with each particle being connected to the one that was closest to it at the time of creation. Once paired, particles do not change \"partners\" , and the farther an external force pulls them from one another, the greater the power with which they will collide when that external force is removed. Note that no matter how far paired particles get from each another, the connection between them will not snap.","\n      ","\n      ","\n        ","phy_particle_flag_elastic","\n        ","Elastic particles deform and may also bounce when they collide with other rigid bodies in the physics simulation.","\n      ","\n      ","\n        ","phy_particle_flag_viscous","\n        ","A viscous particle is one that exhibits \"clinginess\" or \"stickiness\", like oil. Viscous particles will clump and stick together more.","\n      ","\n      ","\n        ","phy_particle_flag_powder","\n        ","Powder particles produce a scattering effect such as you might see with sand or dust.","\n      ","\n      ","\n        ","phy_particle_flag_tensile","\n        ","Tensile particles are used to produce the effect of surface tension, or the taut curvature on the surface of a body of liquid. They might be used, for example, to create the surface tension you would see on a drop of water. Once the tension is broken, the particles bounce as if they were elastic, but also continue to attract each other. As a result, particles tend to form clusters as they bounce.","\n      ","\n      ","\n        ","phy_particle_flag_colourmixing","\n        ","Colour-mixing particles take on some of the colour of other particles with which they collide. Note that if only one of the two colliding particles is a colour-mixing one, the other particle retains its pre-collision colour.","\n      ","\n    ","\n  ","\n  ","These flags use bit-masking to create a final output value that is then checked to set the different basic properties of the particle (with the base property always being that of ","phy_particle_flag_water","). For example, if you want to simulate a viscous liquid with surface tension you would use the ","bitwise ","or"," \"|\" to mask off the appropriate bits as shown in the example below. In this way you can set different properties (other than the global properties) for each individual particle created, should you wish.","\n  "," ","\n  "],["\n  ","physics_particle_set_flags(index, flags)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","index","\n        ","Physics Particle ID","\n        ","The index of the particle.","\n      ","\n      ","\n        ","flags","\n        ","Physics Particle Flag Constant","(s)","\n        ","The flags to set on the particle.","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Real","\n  "," ","\n  "],["\n  ","var flags = phy_particle_flag_water | phy_particle_flag_viscous | phy_particle_flag_tensile;","\n    physics_particle_set_flags(p, flags);","\n  ","The above code will create a variable to store the flags value and then use it to set the flags on a previously created particle with the index stored in the variable \"p\".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Soft Body Particles","\n        ","Next: ","physics_particle_set_category_flags","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["physics_particle_set_flags"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2483"})