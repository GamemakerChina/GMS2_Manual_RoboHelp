rh._.exports({"0":[["Set Particle Colour"]],"1":[["GML Visual Action - Set Particle Colour"]],"2":[["Set Particle Colour"]],"3":[["\n  ","\n  "],["\n  ","This action will set the colour or colours to use when your sprite is created and over its lifetime. You first specify the particle type ID value (which should be the same as the value returned when you created the particle using the ","Create Particle Type","    action) and then you can set the colours to use.","\n  ","You can pick three colours to use, and the sprite will blend between them over the lifetime of the particle. For example, if a particle has red, green and yellow colours, and a lifetime of 60 game frames, then when it is created (frame 0) it will be\n    tinted red, then it will fade towards green at half way through its life (frame 30), before fading on into yellow at the end of its life (frame 60). If you are using a custom sprite instead of a particle shape, any colour other than white will blend\n    with the sprite used.","\n  ","NOTE",": The alpha component of the colour is ","not"," used, only the RGB components from the colour picker. To set the alpha use the ","Set Particle Alpha"," action.","\n  "," ","\n  "],["\n  ","\n  "],["\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","Type","\n        ","The unique ID value for the particle type to set the colour of","\n      ","\n      ","\n        ","Start","\n        ","The initial colour to use","\n      ","\n      ","\n        ","Middle","\n        ","The in between colour to use","\n      ","\n      ","\n        ","End","\n        ","The final colour to use","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","The above action block code will create a new particle type and assign its unique\n    ID value to a global variable. It then proceeds to set all the properties for the particle type.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Particle Actions","\n        ","Next: ","Set Particle Alpha","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[[" Set Particle Colour"]],"5":[["Action Syntax:"],["Arguments:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1836"})