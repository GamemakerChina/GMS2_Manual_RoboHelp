rh._.exports({"0":[[" ","device_mouse_x_to_gui"]],"1":[["device_mouse_x_to_gui"]],"2":[["device_mouse_x_to_gui"]],"3":[[" ","device_mouse_x_to_gui"]],"4":[[" ","This function returns the x position of the touch on the device in relation to the GUI layer. Since the GUI layer can be set to be a different size independently of the screen resolution ","and"," the room size, it can sometimes be complicated to get the exact point on the GUI layer that a user has touched the screen. With this function you can get that position based on the actual GUI size, making GUI buttons and HUD elements easier to create and interact with. If you are running this on a the HTML5 or PC and Mac modules then this value is updated constantly, as long as the device (usually a mouse) is plugged in, however for mobile devices, this will only be updated while the screen is being touched, and note that the maximum number of touches that can be detected will depend very much on the device being used and the OS it runs."],[" ","device_mouse_x_to_gui(device);"," ","Argument","Type"," ","Description"," ","device","Real"," ","The device (from 0 - ","n",") that is being checked."],[" ","Real"],[" ","if device_mouse_check_button(0, mb_left)","\n    {","\n        if device_mouse_x_to_gui(0) > 0 && device_mouse_x_to_gui(0) < 32","\n        {","\n            pressed = true;","\n        }","\n        else","\n        {","\n            pressed = false;","\n        }","\n    }"," ","The above code checks to see if the device mouse is being pressed and if so it then polls the device x position on the GUI layer to see if it is within the parameters. If it is it sets the variable \"pressed\" to ","true",", other wise it sets it to ","false","."," ","Back: ","Device Input"," ","Next: ","device_mouse_y_to_gui"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1597"})