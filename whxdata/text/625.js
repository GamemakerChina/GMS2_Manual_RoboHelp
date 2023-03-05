rh._.exports({"0":[[" ","gamepad_set_colour"]],"1":[["gamepad_set_colour"]],"2":[["gamepad_set_colour,gamepad_set_color"]],"3":[[" ","gamepad_set_colour"]],"4":[[" ","This function can be used to set the colour of the LEDs within a PlayStation controller. You specify the device slot to set, and then give a colour, which can be any of the ","colour constants"," or a colour value created using the specific colour functions or a HEX value(like $FFFFFFF)."],[" ","gamepad_set_colour(device, colour);"," ","Argument","Type"," ","Description"," ","device","Real"," ","Which gamepad device \"slot\" to set."," ","colour","Colour"," ","The colour to use."],[" ","N/A"],[" ","if health < 10","\n    {","\n        gamepad_set_colour(0, c_red);","\n    }"," ","The above code will set the PlayStation controller LEDs to red if the ","health"," variable falls below 10."," ","Back: ","Gamepad Input"," ","Next: "," gamepad_set_option "]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"625"})