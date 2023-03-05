rh._.exports({"0":[[" ","gamepad_get_axis_deadzone"]],"1":[["gamepad_get_axis_deadzone"]],"2":[["gamepad_get_axis_deadzone"]],"3":[[" ","gamepad_get_axis_deadzone"]],"4":[[" ","This function can be used to get the \"dead zone\" value of the joystick axis. You specify the device slot to get, and the function will return a value between 0 to 1, where value reflects the threshold under which the joystick axis is considered to be at 0."],[" ","gamepad_get_axis_deadzone(device);"," ","Argument","Type"," ","Description"," ","device","Real"," ","Which gamepad device \"slot\" to check."],[" ","Real"],[" ","if gamepad_get_axis_deadzone(global.PadId) != 0.5","\n    {","\n        gamepad_set_axis_deadzone(global.PadId, 0.5);","\n    }"," ","The above code checks the analogue axis threshold of the gamepad connected to the device \"slot\" stored in the global variable and if it is not the default value of 0.5, it is set to that value."," ","Back: ","Gamepad Input"," ","Next: "," gamepad_get_option "]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"580"})