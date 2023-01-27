rh._.exports({"0":[[" ","physics_world_update_speed"]],"1":[["physics_world_update_speed"]],"2":[["physics_world_update_speed"]],"3":[[" ","physics_world_update_speed"]],"4":[[" ","GameMaker"," updates things based on the room speed, so that if you set it to ,say, 30, ","GameMaker"," will run 30 steps in the course of a second. However, for the physics functions that may not be enough and you may want things to be updated at a slightly faster speed to increase stability or precision. To that end we use the function ","physics_world_update_speed()"," which sets the update speed for the physics system ","independently"," of the room speed. This means that you could have a room speed of 30, but set the physics to 60, effectively doubling the speed at which the physics system updates and performs its calculations compared to the speed at which the step are updated."," ","NOTE",": you cannot currently set this to any less than room speed, but future updates may change this."],[" ","physics_world_update_speed(speed)"," ","Argument"," ","Type"," ","Description"," ","speed"," ","Real"," ","The number of times per second that the physics system updates"],[" ","N/A"],[" ","physics_world_update_speed(room_speed * 2);"," ","The code above sets the physics system update speed to be twice that of the room speed."," ","Back: ","The Physics World"," ","Next: ","physics_world_draw_debug"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1174"})