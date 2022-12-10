rh._.exports({"0":[["draw_light_define_direction"]],"1":[["draw_light_define_direction"]],"2":[["draw_light_define_direction"]],"3":[["\n  ","\n  "],["\n  ","This function is for defining a directional light, where the direction and intensity are set by the values input for the x, y and z unit vector (meaning that they must be between -1 and 1, where 1 or -1 is full intensity, and 0 is no intensity). The\n    lights can also be given a colour, which will also affect the perceived intensity of the light as certain colours appear \"darker\" than others. You must also give the light an index number which what will be used in other functions to reference\n    it.","\n  ","NOTE",": There are only 8 hardware lights available, so only 8 defined lights can be enabled at any one time (although more can be defined).","\n  "," ","\n  "],["\n  ","draw_light_define_direction(ind, x, y, z, col);","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","ind","Real","\n        ","The index number of the light (arbitrary)","\n     ","\n      ","\n        ","x","Real","\n        ","The x component of the light vector","\n     ","\n      ","\n        ","y","Real","\n        ","The y component of the light vector","\n     ","\n      ","\n        ","z","Real","\n        ","The z component of the light vector","\n     ","\n      ","\n        ","col","Colour","\n        ","The colour to use for the light (either a constant, a real or a hex value).","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","draw_set_lighting(true);"," draw_light_define_direction(1, 0, 1, 0, c_white);"," draw_light_enable(1, true);","\n  ","The above code will enable lighting for the whole scene, then define a white directional light in the room space, and then finally turn that light on.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Lighting","\n        ","Next: ","draw_light_enable","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["draw_light_define_direction"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1676"})