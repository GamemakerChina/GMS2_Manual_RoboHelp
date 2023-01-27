rh._.exports({"0":[[" ","Device Input"]],"2":[["Device Input,mb_left,mb_middle,mb_right,mb_none,mb_any"]],"3":[[" ","Device Input"]],"4":[[" ","When your game is being targeted at those platforms that permit multi-touch, you should be using these functions. They work the same way a PC would work if it had multiple mice attached and the constants that are being checked for are the same as those used for the ","standard mouse functions",":"," ","Mouse Button Constant"," ","Constant"," ","Description"," ","mb_left"," ","The left mouse button"," ","mb_middle"," ","The middle mouse button (this may not be valid for all target platforms)"," ","mb_right"," ","The right mouse button"," ","mb_side1","*"," ","Mouse side button 1"," ","mb_side2","*"," ","Mouse side button 2"," ","mb_any"," ","Any of the mouse buttons"," ","mb_none"," ","No mouse button"," ","* ","NOTE"," The ","mb_side1"," and ","mb_side2 ","buttons are only for use on Windows, macOS, Ubuntu and HTML5."," ","The functions can all take a \"touch\" value that corresponds to a touch on the device display, however the maximum number of touches that can be detected will depend very much on the device and the OS being run. For example, some low end Android devices may only be able to detect 2 or 3 touches at the same time, while a Windows device may be able to detect up to 10."," ","On touch screen devices, a double tap is returned as the equivalent of a ","right mouse button"," event. So, if you need to detect multiple taps in quick succession, for example, you will need to check for ","both"," the ","mb_left"," and ","mb_right",". This functionality can be toggled on or off using ","device_mouse_dbclick_enable()","."," ","Below you can find a list of all the device specific control functions:"," ","device_mouse_check_button"," ","device_mouse_check_button_pressed"," ","device_mouse_check_button_released"," ","device_mouse_dbclick_enable"," ","device_mouse_x"," ","device_mouse_y"," ","device_mouse_raw_x"," ","device_mouse_raw_y"," ","device_mouse_x_to_gui"," ","device_mouse_y_to_gui"," ","device_is_keypad_open"," ","device_get_tilt_x"," ","device_get_tilt_y"," ","device_get_tilt_z"," ","Please note that on mobile devices (Android, iOS and Windows Phone), you can use the back button at any time, as it is mapped to the keyboard ","backspace"," which is the ","GameMaker"," ","keyboard constant"," ","vk_backspace",", so you can do checks for that key and perform actions on those devices as if the back button had been used."],[" ","Mouse coordinates are updated every frame, however some platforms (such as macOS) use an event handler for capturing mouse position."," ","This means there may be frames where the mouse moved, but its position remained unchanged -- which would mean that there was no mouse event between the current and previous frame."," ","Due to this, you may encounter frames where the mouse coordinates are the same as the previous frame, depending on the platform."," ","Back: ","Game Input"," ","Next: ","Gesture Input"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"10":[[" ","Note on Mouse Coordinates"]],"id":"2103"})