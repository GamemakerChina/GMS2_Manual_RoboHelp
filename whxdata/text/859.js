rh._.exports({"0":[[" ","path_positionprevious"]],"1":[["path_positionprevious"]],"2":[["path_positionprevious"]],"3":[[" ","path_positionprevious"]],"4":[[" ","This variable can be used to get or to set the position of an instance along its current path in the previous step, and is a normalised value between 0 and 1 ie: 0 is the start position of the path and 1 would be the end position. It is similar to the ","xprevious"," and ","yprevious"," variables in how it works, only it is specific for paths. It can be useful for things like temporarily stopping a path follower if something is in the way (see the example code below)."],[" ","path_positionprevious;"],[" ","Real"],[" ","var _x = x + lengthdir_x(16, direction);","\n    var _y = y + lengthdir_y(16, direction);","\n    if collision_circle(xx, yy, 16, obj_Player, false,true)","\n    {","\n        path_position = path_positionprevious;","\n    }"," ","The above code checks an area in front of the instance for a collision with the object \"obj_Player\" and if there is one, it sets the instance back to the previous position it occupied on the current path, as assigned by the function ","path_start()","."," ","Back: ","Path Variables"," ","Next: ","path_speed"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"859"})