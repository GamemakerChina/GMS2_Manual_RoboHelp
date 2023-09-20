rh._.exports({"0":[[" ","physics_apply_local_force"]],"1":[["physics_apply_local_force"]],"2":[[" ","physics_apply_local_force"]],"3":[[" ","Another way to use force in the physics world is to apply it ","locally"," to an instance. What this means is that the strength and direction of the force are calculated based on the origin (or the position if it has no sprite) of the instance, without taking into consideration the direction or rotation it may have in the game room or physics world. It should be noted that with this function, forces are not applied to the center of mass of the object, but rather at a point relative to the instance and they will not be instantly applied as they are dependent on any other forces that are working on the object (like gravity). This illustration demonstrates how a local force works:"," ","As you can see, the xlocal and ylocal coordinates are calculated based on the axis position ","always"," being considered as the origin of the instance (0,0), so no matter where in the room the object is, xlocal and ylocal are always going to be the same. You then have to decide where the vector components of the force (xforce and yforce) should be positioned relative to the xlocal/ylocal position. The exact force is defined by the vector we get from the components xforce/yforce in relation to those coordinates - which simply means that the force is calculated as the distance from xlocal/ylocal to xforce/yforce in Newtons, and the direction is the angle that we get from xlocal/ylocal to xforce/yforce. This may seem slightly confusing, but you just have to look at the illustration to see how this works, and it saves you some complicated maths!"," ","NOTE",": The physics world uses meters for all its calculations, and the ratio of pixels per meter is defined in the room editor or using ","physics_world_create()","."],[" ","physics_apply_local_force(xlocal, ylocal, xforce, yforce)"," ","Argument","Type"," ","Description"," ","xlocal","Real"," ","The x coordinate ","relative to the origin"," where the force will be applied"," ","ylocal","Real"," ","The y coordinate ","relative to the origin"," where the force will be applied"," ","xforce","Real"," ","the x component of the force vector"," ","yforce","Real"," ","the y component of the force vector"],[" ","N/A"],[" ","if keyboard_check(vk_right)","\n    {","\n        physics_apply_local_force(-25, 0, -50, 0);","\n    }"," ","The code above will apply a force to the instance of 50 Newtons from left to right ","relative"," to the origin while the right arrow key is pressed."," ","Back: ","Forces"," ","Next: ","physics_apply_local_impulse"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["physics_apply_local_force"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"2129"})