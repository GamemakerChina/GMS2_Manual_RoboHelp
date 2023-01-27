rh._.exports({"0":[[" ","move_and_collide"]],"1":[["move_and_collide"]],"2":[["move_and_collide"]],"3":[[" ","move_and_collide"]],"4":[[" ","This function moves the instance by the given distance on the X and Y axes, while avoiding the given object."," ","It allows your instance to move while navigating slopes or small steps that would otherwise prevent it from being able to move."," ","The function returns an ","array"," containing the IDs of the instances it collided with."],[" ","The function will move your instance step-by-step, checking for collisions at each step/iteration. The ","obj"," argument is the object or instance it should avoid (like a wall object), and by default the function moves your instance in 4 steps (which you can change with the ","num_iterations"," argument)."," ","At each iteration, it moves your instance by ","point_distance(0, 0, dx, dy)/num_iterations"," pixels in the given direction, and then checks for collisions. If ","num_iterations"," is 4, and you want to move ","(8, 0)",",  it will move your instance by 2 pixels each iteration before checking for collisions."," ","If a collision is found during an iteration, it will try to move around it by moving your instance the same amount in a direction perpendicular to ","dx, dy",", or toward the vector given in the optional ","xoff, yoff"," arguments."," ","If, at any iteration, the function finds a collision in the direction ","dx, dy"," and is able to move around it (either in a perpendicular direction or in the ","xoff, yoff"," direction), movement in that other direction will be counted as an iteration."," ","NOTE"," This function uses the sprite collision mask of the instance to check for collisions (see ","The Sprite Editor"," for more info)."],[" ","move_and_collide","(dx, dy, obj, [num_iterations], [xoff], [yoff]);"," ","Argument"," ","Type"," ","Description"," ","dx"," ","Real"," ","The distance to try to move along the X axis"," ","dy"," ","Real"," ","The distance to try to move along the Y axis"," ","obj"," ","Object Asset"," or ","Instance ID"," ","The object index or instance ID to avoid, or the keyword ","all"," to avoid all objects"," ","num_iterations"," ","Real"," ","OPTIONAL"," The number of steps to take, e.g. if ","(dx, dy)"," is ","(10, 0)"," and the number of steps to take is 5, then every iteration the instance will move the instance by 10/5 = 2 pixels before checking collisions. The default value is 4."," ","xoff"," ","Real"," ","OPTIONAL"," The x component of the direction in which to move in case of a collision"," ","yoff"," ","Real"," ","OPTIONAL"," The y component of the direction in which to move in case of a collision"],[" ","Array"," of ","Instance ID","s"],[" ","move_and_collide","(8, 0, all);"," ","The above code will try to move the calling instance to the right 8 pixels and avoid instances of any object (indicated by the ","all"," keyword). Since the ","num_iterations"," argument is not provided, the number of iterations is 4."],[" ","var _colliding_instances = ","move_and_collide","(speed_x, speed_y, obj_terrain);"," ","\n    for (var i = 0; i < array_length(_colliding_instances); i++)","\n    {","\n        var _collider = _colliding_instances[i];","\n        with (_collider)","\n        {","\n            show_debug_message(\"Collision with instance {0}\", id);","\n        }","\n    }\n  "," ","The above code executes the ","move_and_collide"," function in the calling instance. It tries to move it using the custom ","speed_x"," and ","speed_y"," variables, and tries to avoid instances of ","obj_terrain",". The instances that the calling instance collides with are stored in a temporary array ","_colliding_instances"," and shown using a for loop and ","show_debug_message","."," ","Back: ","Movement"," ","Next: ","motion_add"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example 1: Basic Movement"],[" ","Example 2: Showing Instances Collided With"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"10":[[" ","How Does It Work?"]],"id":"2563"})