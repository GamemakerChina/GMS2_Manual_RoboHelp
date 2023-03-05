rh._.exports({"0":[[" ","Fixtures"]],"2":[["Fixtures,Density,Friction,Linear Damping,Angular Damping,Restitution"]],"3":[[" ","Fixtures"]],"4":[[" ","Before an instance in ","GameMaker"," can have physical properties it must have a fixture assigned to it. A fixture binds a shape or form to the instance and this adds material properties such as density, friction, and restitution. Fixtures can be boxes, circles, polygons or any other simple shape you wish as ","GameMaker"," provides functions that enable you to define your own shape point by point, and then once you have your shape you can go ahead and define its physical properties too. These properties are what govern the way the instance with the fixture assigned to it will react with other instance in the physics world and are listed below:"," ","Density:"," A material's density is defined as its mass per unit volume. It is, essentially, a measurement of how tightly matter is crammed together. If you wish your fixture to be ","static"," (ie: immovable) then the density should be set to 0, essentially making it infinitely dense. ","Kinematic"," objects that move with constant velocity and are not physically affected by collisions are also defined using a density of 0."," ","Friction:"," Friction is the force resisting the relative motion of solid surfaces, fluid layers, and material elements sliding against each other."," ","Linear Damping:"," This is the generalised force that causes a moving object to lose momentum. In the \"real world\" things don't generally happen forever. For example, A paper airplane will fly for a short while but eventually it will fall due to the air friction that acts upon it causing it to slow down. In the physics world that we create such things are difficult to model and so each fixture is given its own linear damping to simulate this type of \"generalised friction\"."," ","Angular Damping:"," As above, this is a generalised force that is applied to an object to stop it spinning eternally."," ","Restitution:"," In physics, restitution is defined as \"the return of an object or system to its original state after elastic deformation\", but as the fixtures in the ","GameMaker"," are really rigid bodies and cannot be deformed, think of this as basically how \"bouncy\" the fixture is."," ","So as you can see, with just a few simple functions, ","GameMaker"," can help you to create complex systems and interactions which will give your games an unprecedented sense of realism."," ","NOTE"," ","You can define one fixture and have it bound to multiple instances (think of a pool table, where all the balls have the same physical properties, yet each one is a discreet entity). You can also bind multiple fixtures to a single instance and combine the physical properties (for example, using two triangular polygon fixtures to create a star)"," ","The following functions are for creating, binding, setting collisions and then deleting fixtures:"," ","physics_fixture_create"," ","physics_fixture_bind"," ","physics_fixture_bind_ext"," ","physics_fixture_set_collision_group"," ","physics_fixture_delete"," ","physics_remove_fixture"," ","A fixture must be given a shape or else it will not be detected by the physics world, and this shape can be defined by the following functions:"," ","physics_fixture_set_box_shape"," ","physics_fixture_set_circle_shape"," ","physics_fixture_set_edge_shape"," ","physics_fixture_set_chain_shape"," ","physics_fixture_set_polygon_shape"," ","physics_fixture_add_point"," ","In order for your physics enabled instance to react properly to the world around it, the fixtures you use must have specific properties defined that will give the fixture bounce, friction, mass etc... The following functions are used to set these properties of the fixture:"," ","physics_fixture_set_density"," ","physics_fixture_set_friction"," ","physics_fixture_set_linear_damping"," ","physics_fixture_set_angular_damping"," ","physics_fixture_set_restitution"," ","physics_fixture_set_sensor"," ","physics_fixture_set_kinematic"," ","physics_fixture_set_awake"," ","You can also set certain properties of the fixture ","after"," it has been bound to an instance. When binding the \"base\" fixture, you can choose to store the unique index for the bound physical properties in a variable. This can then be used in the following functions to change certain properties, or to get the current values for them:"," ","physics_get_friction"," ","physics_get_density"," ","physics_get_restitution"," ","physics_set_friction"," ","physics_set_density"," ","physics_set_restitution"," ","physics_mass_properties"," ","Back: ","Physics"," ","Next: ","Joints"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2523"})