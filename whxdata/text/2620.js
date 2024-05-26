rh._.exports({"0":[[" ","Particle Systems"]],"2":[["Particle Systems"]],"3":[[" ","Particle Systems"]],"4":[[" ","Before you can create particles you need to create a particle system. This is a \"container\" where you place your particles and emitters (if you need them) ready for use, and you can put as many or as few particles into any one system as you think necessary, and you can have as many systems as you think necessary too. However, it is always better to keep this number as small as possible due to the fact that each system, emitter and particle takes up memory and having too many of them may slow your game down or cause problems. For example, if you need some effects to appear above instances, and other effects to appear beneath instances, you would create two systems and set their depths to get the desired effect, with all particles that are added to each system being drawn at the depth you specify."," ","Since a particle system is a dynamically created resource, you must create it and store the returned index in a variable to reference the system in all further function calls, and it is very important that you also destroy the system when it is no longer needed or else you will have a memory leak that will slow down and eventually crash your game. It is also worth noting that particle systems will live on forever after they are created, even if the index is no longer stored. So even if you change room or restart the game, the systems and the particles will remain, and be visible, in all further rooms so you better make sure you destroy them once you no longer need them."," ","TIP"," If you prefer a more visual approach to creating particles and don't need the extensive functionality that ","GML Code"," offers, you can also create a ","Particle System Asset"," using ","The Particle System Editor",". Additionally, you can generate the ","GML Code"," for it using the editor's ","Copy GML to Clipboard"," ","."],[" ","Using ","The Particle System Editor","'s ","Copy GML to Clipboard"," button "," you can generate the ","GML Code"," needed to create a particle system that's identical to the one you created. The code could, for example, go in an object's Create event: "," ","Create Event"," ","var _ps = part_system_create();","\n    part_system_draw_order( _ps, true);"," ","\n    var _ptype1 = part_type_create();","\n    part_type_shape( _ptype1, pt_shape_sphere );","\n    part_type_size( _ptype1, 1, 1, 0, 0 );","\n    part_type_scale( _ptype1, 1, 1);","\n    part_type_speed( _ptype1, 2, 2, 0, 0);","\n    part_type_direction( _ptype1, 0, 0, 4, 0);","\n    part_type_gravity( _ptype1, 0, 270);","\n    part_type_orientation( _ptype1, 0, 0, 0, 0, false);","\n    part_type_colour3( _ptype1, $7F7FFF, $FFFFFF, $FFEFBC );","\n    part_type_alpha3( _ptype1, 1, 1, 0.169);","\n    part_type_blend( _ptype1, true);","\n    part_type_life( _ptype1, 80, 80);"," ","\n    var _pemit1 = part_emitter_create( _ps );","\n    part_emitter_region( _ps, _pemit1, -64, 64, -64, 64, ps_shape_rectangle, ps_distr_linear );","\n    part_emitter_stream(_ps, _pemit1, _ptype1, 1);"," ","\n    part_system_position(_ps, room_width/2, room_height/2);\n  "," ","As the above code shows, emitters start streaming particles if you've configured them to be in ","Stream"," mode. By default, the particle system's position is set to the center of the room."," ","IMPORTANT"," The particle system, emitters and types have to be destroyed manually (e.g. in the Clean Up event) to prevent memory leaks."],[" ","part_system_exists"," ","part_system_create"," ","part_system_create_layer"," ","part_system_get_layer"," ","part_system_layer"," ","part_system_depth"," ","part_system_position"," ","part_system_angle"," ","part_system_global_space"," ","part_system_colour"," ","part_system_clear"," ","part_system_destroy"," ","part_particles_clear"," ","part_particles_count"],[" ","Once particles are added to a particle system and then burst or streamed into the room, they are normally automatically updated each step and drawn based on the parameters that you have used to define them. However it can sometimes be necessary to control when and how the system is updated as well as how the system should be drawn, and for that ","GameMaker"," provides the following functions:"," ","part_system_automatic_update"," ","part_system_automatic_draw"," ","part_system_update"," ","part_system_drawit"," ","part_system_draw_order"],[" ","You can use ","particle emitters"," to burst or stream particles from an area, but in many cases these are not necessary and it is actually better to just create the particles directly using the following functions:"," ","part_particles_create"," ","part_particles_create_colour"," ","part_particles_burst"," ","Back: ","Particles"," ","Next: ","Particle Types"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"7":[[" ","Setting Up"],[" ","Updating and Drawing"],[" ","Creating Particles"]],"8":[[" ","Copy GML to Clipboard"],[" ","Function Reference"]],"id":"2620"})