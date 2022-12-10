rh._.exports({"0":[["gamepad_axis_value"]],"1":[["gamepad_axis_value"]],"2":[["gamepad_axis_value"]],"3":[["\n  ","\n  "],["\n  ","You can use this function to get the value of the different axes from a given gamepad slot. You supply the gamepad slot index to check, along with either an axis index constant (as listed ","here","), or an integer value between ","0"," and ","gamepad_axis_count()","-1",". The returned value will be between ","-1"," and ","1"," for each of the available horizontal and vertical axes.","\n  ","Note that the returned value is normalised to take into consideration the value set for the axis deadzone (using the function ","gamepad_set_axis_deadzone()","), and so will always be between -1 and 0, and 0 and 1. For example, setting the deadzone to 0.2 will mean that pushing the stick right will only start returning a value from 0 - 1 when the ","raw"," axis value is over 0.2 - so for example, when the raw value is 0.2, the return value will be 0, when the raw value is at 0.5, the return value will be 0.375, or if the raw value is 0.9, then the return value would be 0.875.","\n  "," ","\n  "],["\n  ","gamepad_axis_value(device, axisIndex);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","device","\n        ","Real","\n        ","Which gamepad device \"slot\" to check.","\n      ","\n      ","\n        ","axisIndex","\n        ","Gamepad Axis Constant","\n        ","The axis index to check (see the ","constants list",").","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Real","\n  "," ","\n  "],["\n  ","var haxis = gamepad_axis_value(0, gp_axislh);","\n    var vaxis = gamepad_axis_value(0, gp_axislv);","\n    direction = point_direction(0, 0, haxis, vaxis);","\n    speed = point_distance(0 ,0, haxis, vaxis) * 5;","\n  ","The above code sets the speed and direction of the instance based on the returned values of the left analog controller of the gamepad plugged into device \"slot\" 0.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Gamepad Input","\n        ","Next: "," gamepad_button_check ","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["gamepad_axis_value"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1879"})