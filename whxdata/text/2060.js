rh._.exports({"0":[["Draw Instance Lives"]],"1":[["GML Visual Action - Draw Instance Lives"]],"2":[["Draw Instance Lives"]],"3":[["\n  ","\n  "],["\n  ","This action will draw a sprite to represent each of the lives the instance currently have. The number to draw is taken from the current value of the local instance variable ","lives",", which is a special variable that is created automatically within\n    the instance if you use any of the actions that require it. You give the sprite to draw for the lives and the stack order, which can be either ","Row"," (horizontally, left to right), or ","column"," (vertically, top to bottom), as well as the position.\n    The position can be an absolute position within the room, or one relative to the position of the instance doing the drawing, and the spacing between images will be based on the width or height of the sprite. Note that this simply draws a static image\n    - the initial single image (frame 0) of the given sprite - and any further frames will be ignored, as will any transforms that have been added to the instance through changing the instance variables (like ","image_xscale"," or ","image_blend",").\n    Caption text will be drawn preceding the lives value and if it is text it should be wrapped with \"\", and both will be formatted using the current draw font , colour and alignment.","\n  ","\n  ","NOTE",": This action is only for use in the various ","Draw Events",", and will not draw anything if used elsewhere.","\n  "," ","\n  "," ","\n  "],["\n  ","\n  "],["\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","Caption","\n        ","The string to draw along with the score value (preceding and can be left blank)","\n      ","\n      ","\n        ","Stack Order","\n        ","The order to draw in (either Row or Column)","\n      ","\n      ","\n        ","x","\n        ","The x position to draw the lives at","\n      ","\n      ","\n        ","y","\n        ","The y position to draw the lives at","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","The above action block code draws sprites relative to the instance to represent\n    the current ","lives"," value.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Drawing Actions","\n        ","Next: ","Set Draw Colour","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[[" Draw Instance Lives"]],"5":[["Action Syntax:"],["Arguments:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2060"})