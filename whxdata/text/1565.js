rh._.exports({"0":[[" ","device_mouse_check_button"]],"1":[["device_mouse_check_button"]],"2":[[" ","device_mouse_check_button"]],"3":[[" ","This function returns ","true"," or ","false"," depending on whether the given ","mouse button"," is being held down on the given ","device",". For the mouse button you can supply one of the constants listed ","on this page","."," ","This function can be used for touch screens, and the ","device ","argument can be from 0 to ","n"," where ","n"," is the maximum number of \"fingers\" that can be touching the screen at once (the maximum number of touches that can\n    be detected will depend very much on the device being used and the OS it runs, but most devices should detect at least up to 4). Note that ","mb_right"," will only be detected if a double tap touch is detected (this behavior can be disabled using\n    the function ","device_mouse_dbclick_enable()",")."],[" ","device_mouse_check_button(device, button);"," ","Argument","Type"," ","Description"," ","device","Real"," ","The device (from 0 - ","n",") that is being checked"," ","button","Mouse Button Constant"," ","The button of the device that is being checked."],[" ","Boolean"],[" ","if device_mouse_check_button(0, mb_left) && device_mouse_check_button(1, mb_left)"," {\n    ","     room_goto(rm_Menu);"," }\n  "," ","The above code checks to see if the two touches are being held down at the same time and if they then it goes to another room."," ","Back: ","Device Input"," ","Next: ","device_mouse_check_button_pressed"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["device_mouse_check_button"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1565"})