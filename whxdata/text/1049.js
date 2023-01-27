rh._.exports({"0":[[" ","device_mouse_dbclick_enable"]],"1":[["device_mouse_dbclick_enable"]],"2":[["device_mouse_dbclick_enable"]],"3":[[" ","device_mouse_dbclick_enable"]],"4":[[" ","This function can be used to set the device to detect a double tap of the ","mb_left"," (left mouse button) as an ","mb_right"," (right mouse button) input."," ","By default this is set to ","true",", meaning that every time the user taps the device screen twice quickly and consecutively, the return value is the same as if the right mouse button had been clicked. When this is on, the first tap will be detected as ","mb_left",", and the second as ","mb_right",", so make sure that any code you use takes this into account."],[" ","device_mouse_dbclick_enable(bool);"," ","Argument"," ","Type"," ","Description"," ","bool"," ","Boolean"," ","Set double-click detection on (","true",") or off (","false",")."],[" ","Boolean"],[" ","if os_type == os_windows || os_type == os_mac","\n    {","\n        device_mouse_dbclick_enable(false);","\n    }"," ","The above code checks to see if the device running the game is a Windows PC or a Mac and if it is either of them, it disables the double tap function."," ","Back: ","Device Input"," ","Next: ","device_mouse_x"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1049"})