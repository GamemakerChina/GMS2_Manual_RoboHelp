rh._.exports({"0":[["device_mouse_check_button"]],"1":[["device_mouse_check_button"]],"2":[["device_mouse_check_button"]],"3":[["\n  ","\n  "],["\n  ","This function returns ","true"," or ","false"," depending on whether the given ","mouse button"," is being held down on the given ","device",". For the mouse button you can supply one of the constants listed ","on this page",".","\n  ","This function can be used for touch screens, and the ","device ","argument can be from 0 to ","n"," where ","n"," is the maximum number of \"fingers\" that can be touching the screen at once (the maximum number of touches that can\n    be detected will depend very much on the device being used and the OS it runs, but most devices should detect at least up to 4). Note that ","mb_right"," will only be detected if a double tap touch is detected (this behavior can be disabled using\n    the function ","device_mouse_dbclick_enable()",").","\n  "," ","\n  "],["\n  ","device_mouse_check_button(device, button);","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","device","Real","\n        ","The device (from 0 - ","n",") that is being checked","\n     ","\n      ","\n        ","button","Mouse Button Constant","\n        ","The button of the device that is being checked.","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Boolean","\n  "," ","\n  "],["\n  ","if device_mouse_check_button(0, mb_left) && device_mouse_check_button(1, mb_left)"," {\n    ","     room_goto(rm_Menu);"," }\n  ","\n  ","The above code checks to see if the two touches are being held down at the same time and if they then it goes to another room.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Device Input","\n        ","Next: ","device_mouse_check_button_pressed","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["device_mouse_check_button"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1585"})