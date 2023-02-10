rh._.exports({"0":[[" ","gesture_get_rotate_time"]],"1":[["gesture_get_rotate_time"]],"2":[["gesture_get_rotate_time"]],"3":[[" ","gesture_get_rotate_time"]],"4":[[" ","This function is used to get the time within which a pair of touches must be rotating in a consistent direction for a ","Rotate Start Gesture"," to be triggered. The time is measured in seconds and has a default value of 0.16s."," ","IMPORTANT!"," Currently for a 60fps game you can only set this to a maximum of one second otherwise no rotations will be detected. This will increase for a lower framrate, for example a 30fps game can have a maximum time of 2 seconds."],[" ","gesture_get_rotate_time();"],[" ","Real"," (inches)"],[" ","if gesture_get_rotate_time() != 0.1","\n    {","\n        gesture_rotate_time(0.1);","\n    }"," ","The above code checks to see if the rotate time for gestures is set to 0.1 seconds and if it is not it sets it to that value."," ","Back: ","Gesture Input"," ","Next: ","gesture_get_rotate_angle"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"383"})