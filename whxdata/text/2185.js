rh._.exports({"0":[[" ","Objects"]],"2":[["Objects"]],"3":[[" ","Objects"]],"4":[[" ","In ","GameMaker"," you have objects and you have instances. Objects are essentially the base template for an instance, and as such are ","never"," present in a room directly... only ","instances"," of the object are placed in the room. This\n    means that if you want to change something for all instances you are going to create, then you can do it by changing the ","object","."," ","IMPORTANT!"," Changing anything about an object will ","not"," change any instances currently present in the room, only those that are created after the change."," ","You can also access information about a base object and use it to dictate behaviors or changes in the game. For example, you can do a check for a parent object ID, and in the following code if an instance with that parent is found you can then check\n    its ","object_index"," to decide what should be done."," ","GameMaker"," gives you a number of functions that permit you to get various details about an object. Note, an object is ","not"," an instance (an in-game entity), it is purely a resource from which all instances are created. This means\n    that the return values of these functions may be different to the actual values shown by instances in the room, as once an instance is created it can be changed through code and GML Visual actions."," ","object_index"," ","object_exists"," ","object_get_name"," ","object_get_mask"," ","object_get_parent"," ","object_get_persistent"," ","object_get_solid"," ","object_get_sprite"," ","object_get_visible"," ","object_get_physics"," ","object_is_ancestor"," ","There are also a number of functions that permit you set the properties for an object. It should be noted that any instances of this object that already exist in the room ","may not be affected by these functions",", but all new instances of this object\n    created in the room will be, so it is recommend that you never change an objects properties when instances of that object are present in the current room."," ","object_set_mask"," ","object_set_persistent"," ","object_set_solid"," ","object_set_sprite"," ","object_set_visible"," ","You can also use certain functions to generate events from code from within a specific instance or object. These functions can be very useful, especially when dealing with ","Parents and Children",",\n    and are outlined in the following section:"," ","Generating Object Events"," ","Back: ","Asset Management"," ","Next: ","Instances"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2185"})