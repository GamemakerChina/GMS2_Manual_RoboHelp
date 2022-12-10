rh._.exports({"0":[["gamepad_set_colour"]],"1":[["gamepad_set_colour"]],"2":[["gamepad_set_colour,gamepad_set_color"]],"3":[["\n  ","\n  "],["\n  ","This function can be used to set the colour of the LEDs within a PlayStation controller. You specify the device slot to set, and then give a colour, which can be any of the ","colour constants"," or a colour value created using the specific colour functions or a HEX value(like $FFFFFFF).","\n  "," ","\n  "],["\n  ","gamepad_set_colour(device, colour);","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","device","Real","\n        ","Which gamepad device \"slot\" to set.","\n     ","\n      ","\n        ","colour","Colour","\n        ","The colour to use.","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","if health < 10","\n    {","\n        gamepad_set_colour(0, c_red);","\n    }","\n  ","The above code will set the PlayStation controller LEDs to red if the ","health"," variable falls below 10.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Gamepad Input","\n        ","Next: "," gamepad_set_option ","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["gamepad_set_colour"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"630"})