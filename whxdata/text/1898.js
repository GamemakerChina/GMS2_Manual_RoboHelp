rh._.exports({"0":[["mp_potential_step_object"]],"1":[["mp_potential_step_object"]],"2":[["mp_potential_step_object"]],"3":[["\n  ","\n  "],["\n  ","This function lets the instance take a step towards a particular position defined by xgoal/ygoal, all the while trying to avoid obstacles. When the instance would run into an instance of the object specified by the \"obj\" argument it will change the direction of motion to try to avoid that instance and move around it. This approach is not guaranteed to work but in most easy cases it will effectively move the instance towards the goal. The function returns whether the goal was reached or not.","\n  "," ","\n  "],["\n  ","mp_potential_step_object(xgoal, ygoal, stepsize, obj)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","xgoal","\n        ","Real","\n        ","The target x position.","\n      ","\n      ","\n        ","ygoal","\n        ","Real","\n        ","The target y position.","\n      ","\n      ","\n        ","stepsize","\n        ","Real","\n        ","The speed the instance moves in pixels per step.","\n      ","\n      ","\n        ","obj","\n        ","Object Asset"," or ","Instance ID","\n        ","The object that is to block the path of the instance running the function. Can be an object index, an instance id or the special keyword ,","all",".","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Boolean","\n  "," ","\n  "],["\n  ","if instance_exists(obj_Enemy)","\n    {","\n        var inst;","\n        inst = instance_nearest(x, y, obj_Enemy);","\n        mp_potential_step_object(inst.x, inst.y, 5, obj_Wall);","\n    }","\n  ","The above code first checks to see if there are any instances of \"obj_Enemy\" in the room. If there are it then finds the nearest one and stores its id in a variable. This variable is then used to tell ","mp_potential_step_object"," to move the instance with the code towards the x/y position of the object that was found at a speed of 5 pixels per step while avoiding only instances of the object \"obj_Wall\".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Motion Planning","\n        ","Next: ","mp_potential_path","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["mp_potential_step_object"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1898"})