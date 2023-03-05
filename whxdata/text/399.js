rh._.exports({"0":[[" ","device_get_tilt_y"]],"1":[["device_get_tilt_y"]],"2":[["device_get_tilt_y"]],"3":[[" ","device_get_tilt_y"]],"4":[[" ","This function returns a value between -1 and 1 depending upon the angle of \"tilt\" of the device. The actual correlation between degrees of tilt and the value returned depends on the device and OS that it uses, but generally a value of 1 or -1 is the same as +/-90°. The image below shows how each if the available functions relates to the device:"],[" ","device_get_tilt_y()"],[" ","Real"],[" ","if display_get_orientation() = display_landscape","\n    {","\n        x += sign(device_get_tilt_y());","\n    }","\n    else","\n    {","\n        x += sign(device_get_tilt_x());","\n    }"," ","The above code checks the orientation of the display and then uses the corresponding tilt value to move the player along the x axis."," ","Back: ","Device Input"," ","Next: ","device_get_tilt_z"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"399"})