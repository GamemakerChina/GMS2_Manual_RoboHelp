rh._.exports({"0":[[" ","gamepad_set_button_threshold"]],"1":[["gamepad_set_button_threshold"]],"2":[["gamepad_set_button_threshold"]],"3":[[" ","gamepad_set_button_threshold"]],"4":[[" ","This function can be used to set the current threshold setting of the analogue buttons for a given device. The default threshold for all analogue buttons is 0.5, with the range being from 0 to 1."," ","The threshold defines at what point the button is considered as being \"pressed\" for games that require them to act as a digital button."," ","This function will affect the ","check",", ","pressed"," and ","released"," states for analogue buttons, but will ","not"," affect the value returned by the function ","gamepad_button_value()",", which will always return the raw value for the button."],[" ","gamepad_set_button_threshold(device, threshold);"," ","Argument"," ","Type"," ","Description"," ","device"," ","Real"," ","Which gamepad device \"slot\" to check."," ","threshold"," ","Real"," ","The new threshold value (from 0 - 1, default 0.5)."],[" ","N/A"],[" ","if gamepad_get_button_threshold(0) != 0.5","\n    {","\n        gamepad_set_button_threshold(0, 0.5);","\n    }"," ","The above code checks the analogue button threshold of the gamepad connected to device \"slot\" 0 and if it is not the default value of 0.5, it is set to that value."," ","Back: ","Gamepad Input"," ","Next: "," gamepad_set_axis_deadzone "]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1612"})