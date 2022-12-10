rh._.exports({"0":[["Set Particle Direction"]],"1":[["GML Visual Action - Set Particler Direction"]],"2":[["Set Particle Direction"]],"3":[["\n  ","\n  "],["\n  ","This action is used to set the particle direction, which can be static or set to increase / decrease over time. You supply the unique ID value for the type to set the size of (as returned when you created the type with the action ","Create Particle Type",")\n    and then give a range of initial starting directions, then the increase amount and finally the \"wiggle\". The direction a particle is created at is calculated such that 0 is right, 90 is up, 180 is left and 270 is down, so a minimum setting\n    of -45 and a maximum setting of 45 will emit particles only moving to the right, for example.","\n  ","The option to increase a particle direction enables you to input a value which will be added on to the base direction value each game frame of the particle lifetime. So setting this value to, for example, 0.1 will add 0.1 to the direction each game\n    frame. Note that you can use negative values here too to make the particle move in the opposite direction down too, so positive values will make the particle spiral anti-clockwise, and negative clockwise. Note that the minimum direction ","decrement","    that is accepted is -0.01 and the minimum ","increment"," is 0.01.","\n  ","Finally you can set the \"wiggle\" option. This is a value that will be generated randomly between 0 and the value you give and then added or subtracted to the direction each step of the particles lifetime, causing the drawn image to fluctuate\n    in direction. Obviously larger values are more pronounced than smaller ones, and this value can even be a negative with the maximum range being between -20 and 20.","\n  "," ","\n  "],["\n  ","\n  "],["\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","Type","\n        ","The unique ID value for the particle type to set the direction of","\n      ","\n      ","\n        ","Min Dir","\n        ","The minimum direction for the particle type (from -360 to +360, default 0)","\n      ","\n      ","\n        ","Max Dir","\n        ","The maximum direction for the particle type (from -360 to +360, default 360)","\n      ","\n      ","\n        ","Increase","\n        ","The value to add on to the particle type direction every game frame (can be negative, minimum +/-0.01)","\n      ","\n      ","\n        ","Wiggle","\n        ","The maximum value to randomly be added or subtracted from the particles direction per step (+/-20).","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","The above action block code will create a new particle type and assign its unique\n    ID value to a global variable. It then proceeds to set all the properties for the particle type.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Particle Actions","\n        ","Next: ","Set Particle Orientation","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[[" Set Particle Direction"]],"5":[["Action Syntax:"],["Arguments:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2183"})