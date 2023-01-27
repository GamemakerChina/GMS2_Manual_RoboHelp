rh._.exports({"0":[[" ","Draw Stacked Sprites"]],"1":[["GML Visual Action - Draw Stacked Sprites"]],"2":[["Draw Stacked Sprites"]],"3":[[" "," Draw Stacked Sprites"]],"4":[[" ","This action will draw a sprite a given number of sprites one after another at a given position within the room. You give the sprite to draw and the stack order, which can be either ","Row"," (horizontally, left to right), or ","column"," (vertically,\n    top to bottom), as well as the number of sprites to draw and the position. The position can be an absolute position within the room, or one relative to the position of the instance doing the drawing, and the spacing between images will be based on\n    the width or height of the sprite. Note that this simply draws a static image - the initial single image (frame 0) of the given sprite - and any further frames will be ignored, as will any transforms that have been added through changing the ","instance variables","    (like ","image_xscale"," or ","image_blend",")."," ","NOTE",": This action is only for use in the various ","Draw Events",", and will not draw anything if used elsewhere."],[" ","Argument"," ","Description"," ","Sprite"," ","The sprite to draw"," ","Stack Order"," ","The order to draw in (either Row or Column)"," ","Number"," ","The number of sprites to draw"," ","x"," ","The x position to draw at"," ","y"," ","The y position to draw at"],[" ","The above action block code gets the number of instances of the object \"obj_Player\"\n    and then uses this to draw a number of marker sprites to the screen."," ","Back: ","Drawing Actions"," ","Next: ","Draw Rectangle"]],"5":[[" ","Action Syntax:"," ","Arguments:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1911"})