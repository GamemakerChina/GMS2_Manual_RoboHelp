rh._.exports({"0":[["mp_potential_path"]],"1":[["mp_potential_path"]],"2":[["mp_potential_path"]],"3":[["\n  ","\n  "],["\n  ","This function computes a path for the instance from its current position ","and orientation"," to the position specified by the xgoal,ygoal arguments. It uses the indicated step size while trying to avoid collision with either all instances or only\n    those flagged as solid. Like in the function ","mp_potential_step()"," it uses potential field steps to accomplish this and the manner in which it does this can be modified through the function ","mp_potential_settings()",".\n    The indicated path must already exist and it will be overwritten by the new path. The function will return whether a path was found (true) or not (false).","\n  ","To avoid the function continuing to compute forever you need to provide a factor of larger than 1 - the function will stop and report failure if it cannot find a path shorter than this factor times the distance between start and goal. A factor of 4\n    is normally good enough but if you expect long detours you might make it longer. If it fails a path is still created that runs in the approximate direction of the goal but it will not reach it.","\n  ","NOTE",": This function does not move the instance. It sets a path only, and you must use the ","Path"," functions for movement.","\n  "," ","\n  "],["\n  ","mp_potential_path(path, xgoal, ygoal, stepsize, factor, checkall)","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","path","Path Asset","\n        ","index of the path that is to be used by the function","\n     ","\n      ","\n        ","xgoal","Real","\n        ","The target x position.","\n     ","\n      ","\n        ","ygoal","Real","\n        ","The target y position.","\n     ","\n      ","\n        ","stepsize","Real","\n        ","The speed the instance moves in pixels per step.","\n     ","\n      ","\n        ","factor","Real","\n        ","This number is used to prevent an infinite loop. It should be larger than 1. See the function description for more information.","\n     ","\n      ","\n        ","checkall","Boolean","\n        ","Whether to check all instances (true) or just solid ones (false).","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Boolean","\n  "," ","\n  "],["\n  ","path = path_add();"," mp_potential_path(path, obj_Player.x, obj_Player.y, 3, 4, 0);"," path_start(path, 3, 0, 0);","\n  ","The above code creates a new path resource and stores its index in the variable \"path\". It then generates a path using ","mp_potential_path"," between the object with this code and the object \"obj_Player\", checking for collisions\n    with all instances in the room. Finally it starts the object along that path, even if the function has failed to return a complete route to the \"obj_Player\".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Motion Planning","\n        ","Next: ","mp_potential_path_object","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["mp_potential_path"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2145"})