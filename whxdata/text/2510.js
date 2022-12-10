rh._.exports({"0":[["Collisions"]],"2":[["collisions,collision functions"]],"3":[["\n  ","\n  "],["\n  ","When planning motions or deciding on certain actions, it is often important to see whether there are collisions with other objects at certain places within the game world, and often choosing the right collision for the job is the most important task of all. ","GameMaker"," has a number of built in functions to help you deal with collisions correctly and in accordance with the needs of your project.","\n  ","NOTE"," Collision functions used to use integer values in previous versions of GameMaker, however they now use floating point values meaning that collision functions will no longer round non-integer arguments. For more information, please read ","Collision Compatibility Mode",".","\n  "],["\n  ","The following functions deal with the various ways in which you can have an instance check for collisions with another instance:","\n  ","\n    ","place_empty","\n    ","place_free","\n    ","place_meeting","\n    ","position_empty","\n    ","position_meeting","\n    ","position_change","\n    ","position_destroy","\n    ","instance_place","\n    ","instance_place_list","\n    ","instance_position","\n    ","instance_position_list","\n  ","\n  "," ","\n  "],["\n  ","The following routines can be used for this (as well as other functions detailed in the sections relating to ","Moving Around"," and ","Instances","). These collision functions all work slightly differently but they maintain three common arguments which we will explain here:","\n  ","\n    ","obj",": This is where we specify the object that the function has to check for a collision with. It can be an instance id, an object type, or the special GM keyword ","all",". It is also worth noting that if the object type chosen is the designated ","parent"," of other objects, then all ","children"," of that object will be included in this check too.","\n    ","prec",": This can be either ","true"," or ","false"," and relates to the precision of the collision checking. If set to ","true",", then precise collisions are to be calculated (but only if the object being checked for has \"precise\" marked for its collision detection in its mask properties) which is a slightly more complex task for the CPU and so should be used with caution. If ","false"," then collisions will be calculated based on the bounding box of the object to be checked for.","\n    ","notme",": You may need to check for collisions with an object that has the same index as the object that runs the code, so to prevent the code finding a collision with itself, you can set this to ","true",". If you are specifically looking for the instance of the object running the code, or it's not important, it can be left as ","false",".","\n  ","\n  ","The basic functions will return either the ID of an instance found to be colliding, or the special keyword ","noone"," when there is no collision, while the ","list"," functions will return the number of instances that are in collision and populate a pre-made DS list with their IDs. Note that if there are multiple collisions with the areas defined by these functions and instances of the given object, only ","one"," instance ID is returned, and it can be ","any one of the instances in the collision",".","\n  ","The following functions exist that deal with advanced collisions.","\n  ","\n    ","collision_circle","\n    ","collision_circle_list","\n    ","collision_ellipse","\n    ","collision_ellipse_list","\n    ","collision_line","\n    ","collision_line_list","\n    ","collision_point","\n    ","collision_point_list","\n    ","collision_rectangle","\n    ","collision_rectangle_list","\n  ","\n  "," ","\n  "],["\n  ","All of the above functions are related to collision checking ","instances",", and as such rely on the collision mask that is defined for the instance. However, there are many moments when you require to check for \"collisions\" with a point or an area, especially when your instance does not have a sprite assigned, or when you are working with the mouse etc... Therefore ","GameMaker"," also provides the following functions to help you in these situations:","\n  ","\n    ","point_in_rectangle","\n    ","point_in_triangle","\n    ","point_in_circle","\n    ","rectangle_in_rectangle","\n    ","rectangle_in_triangle","\n    ","rectangle_in_circle","\n  ","\n  "," ","\n  "],["\n  ","When using the built-in physics, the above collision functions are not guaranteed to work for physics enabled instances. This is mainly due to the fact that these instances no longer use the majority of the regular built in variables (instead, physics enabled instances have their ","own set of variables",") and neither do they use the collision mask or bounding box, as they use ","fixtures"," instead. However there is a special function for testing collisions with physics enabled that checks for overlapping fixtures:","\n  ","\n    ","physics_test_overlap","\n  ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Movement And Collisions","\n        ","Next: ","Movement","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["Collisions"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"7":[["Simple Collision Checking"],["Advanced Collision Checking"],["Collision Checking Without A Mask"],["Physics Collisions"]],"id":"2510"})