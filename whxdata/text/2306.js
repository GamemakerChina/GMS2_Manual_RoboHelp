rh._.exports({"0":[["Set Particle Orientation"]],"1":[["GML Visual Action - Set Particle Orientation"]],"2":[["Set Particle Orientation"]],"3":[["\n  ","\n  "],["\n  ","This action is used to set the particle orientation - the angle at which the particle images will be drawn - which can be static or set to increase / decrease over time. You supply the unique ID value for the type to set the size of (as returned when\n    you created the type with the action ","Create Particle Type",") and then give a range of initial starting orientations, then the increase amount and finally the \"wiggle\". The orientation a particle is created\n    at is calculated such that 0 is right, 90 is up, 180 is left and 270 is down, so a minimum setting of 0 and a maximum setting of 360 will emit particles where each one will be rotated by a random amount around 360° (note that this does ","not","    affect particle direction).","\n  ","The option to increase a particle orientation enables you to input a value which will be added on to the base orientation angle each game frame of the particle lifetime. So setting this value to, for example, 0.1 will add 0.1 to the image angle each\n    game frame. Note that you can use negative values here too to make the particle rotate in the opposite direction too, so positive values will make the particle rotate anti-clockwise, and negative rotate clockwise. Note that the minimum orientation\n    ","decrement"," that is accepted is -0.01 and the minimum ","increment"," is 0.01.","\n  ","You can also set the \"wiggle\" option for the particle orientation. This is a value that will be generated randomly between 0 and the value you give and then added or subtracted to the particle image angle each step of the particles lifetime,\n    causing the drawn image to fluctuate in its rotation. Obviously larger values are more pronounced than smaller ones, and this value can even be a negative with the maximum range being between -20 and 20.","\n  ","Finally, you can choose to have the orientation as ","relative"," or not to the particle direction. This means that while the particle has a direction (and speed) set, the particle image will be orientated based on that vector. Bear in mind that if\n    you have the particle speed set to reduce and it reaches 0 during the particle lifetime, the lack of speed sets the direction to the default value of 0° and so a relative orientation will cause the particle image to \"jump\" to a different\n    orientation angle.","\n  "," ","\n  "],["\n  ","\n  "],["\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","Type","\n        ","The unique ID value for the particle type to set the orientation of","\n      ","\n      ","\n        ","Min Angle","\n        ","The minimum orientation for the particle type (from -360 to +360, default 0)","\n      ","\n      ","\n        ","Max Angle","\n        ","The maximum orientation for the particle type (from -360 to +360, default 360)","\n      ","\n      ","\n        ","Increase","\n        ","The value to add on to the particle type orientation every game frame (can be negative, minimum +/-0.01)","\n      ","\n      ","\n        ","Wiggle","\n        ","The maximum value to randomly be added or subtracted from the particles orientation per step (+/-20).","\n      ","\n      ","\n        ","Relative To Direction","\n        ","Whether to set the particle image angle relative to the direction of the particle's motion (enabled) or not (disabled).","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","The above action block code will create a new particle type and assign its unique\n    ID value to a global variable. It then proceeds to set all the properties for the particle type.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Particle Actions","\n        ","Next: ","Set Particle Gravity","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[[" Set Particle Orientation"]],"5":[["Action Syntax:"],["Arguments:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2306"})