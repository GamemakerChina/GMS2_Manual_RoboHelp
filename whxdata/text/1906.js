rh._.exports({"0":[[" ","alarm"]],"1":[["alarm"]],"2":[["alarm"]],"3":[[" ","alarm"]],"4":[[" ","This 1 dimension ","array"," is used to get the current value for any alarms that the instance may have, or it can be used to set those alarms. There are twelve alarms built into each instance of an object, and each one has its own ","event"," that will run when this variable reaches 0."," ","Alarms are counted down at the start of each step, ","after"," the Begin Step event but ","before"," the main Step event, and before anything is rendered for the frame. This means that if you set an alarm to ","1"," in the Begin Step event, its event will run in that same frame (as the alarm will be counted down to 0 after Begin Step has finished), but if you set an alarm to ","1"," in the Step event, it will run in the next frame."," ","It should be noted that the alarm is not finished when it reaches 0 (although the event has been triggered) as the next step it will go down to -1, so if you need to stop an alarm for any reason you should set its array value to -1 ","not"," 0. Alarm times are calculated in ","game steps",", with a value of 30 being 30 steps, 60 being 60 steps, etc..."," ","NOTE"," An alarm with no actions or code in it will not run. However, even with just a comment and no code, the alarm will count down."," ","You can set the alarm array directly (and retrieve the current alarm value directly by using the array too), but under some circumstances this is not the most appropriate method, so you can also use the function ","alarm_set()"," to set an alarm, and the function ","alarm_get()"," to get the value of an alarm."],[" ","alarm[val];"],[" ","Real"," (-1 if the alarm isn't running)"],[" ","if canshoot","\n    {","\n        if keyboard_check_pressed(vk_space)","\n        {","\n            canshoot = false;","\n            alarm[0] = room_speed;","\n            instance_create_layer(x, y, \"Bullets\", obj_Bullet);","\n        }","\n    }"," ","The above code checks a variable and then if it is true, checks for a key press and if that is true it finally sets the variable to false, sets an alarm (where it will be set to true again) and creates an instance."," ","Back: ","Instance Variables"," ","Next: ","direction"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1906"})