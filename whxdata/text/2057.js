rh._.exports({"0":[[" ","Draw Instance Lives"]],"1":[["GML Visual Action - Draw Instance Lives"]],"2":[["Draw Instance Lives"]],"3":[[" "," Draw Instance Lives"]],"4":[[" ","This action will draw a sprite to represent each of the lives the instance currently have. The number to draw is taken from the current value of the local instance variable ","lives",", which is a special variable that is created automatically within\n    the instance if you use any of the actions that require it. You give the sprite to draw for the lives and the stack order, which can be either ","Row"," (horizontally, left to right), or ","column"," (vertically, top to bottom), as well as the position.\n    The position can be an absolute position within the room, or one relative to the position of the instance doing the drawing, and the spacing between images will be based on the width or height of the sprite. Note that this simply draws a static image\n    - the initial single image (frame 0) of the given sprite - and any further frames will be ignored, as will any transforms that have been added to the instance through changing the instance variables (like ","image_xscale"," or ","image_blend",").\n    Caption text will be drawn preceding the lives value and if it is text it should be wrapped with \"\", and both will be formatted using the current draw font , colour and alignment."," ","NOTE",": This action is only for use in the various ","Draw Events",", and will not draw anything if used elsewhere."],[" ","Argument"," ","Description"," ","Caption"," ","The string to draw along with the score value (preceding and can be left blank)"," ","Stack Order"," ","The order to draw in (either Row or Column)"," ","x"," ","The x position to draw the lives at"," ","y"," ","The y position to draw the lives at"],[" ","The above action block code draws sprites relative to the instance to represent\n    the current ","lives"," value."," ","Back: ","Drawing Actions"," ","Next: ","Set Draw Colour"]],"5":[[" ","Action Syntax:"," ","Arguments:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2057"})