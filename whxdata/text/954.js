rh._.exports({"0":[[" ","move_wrap"]],"1":[["move_wrap"]],"2":[["move_wrap"]],"3":[[" ","move_wrap"]],"4":[[" ","This function will automatically \"wrap\" an instance that has left the room on either the horizontal or vertical (or both) axis. You can specify a margin outside the edges of the room for this to occur, and when the instance has travelled outside of that margin ","GameMaker"," will automatically wrap it back into the room at the other side. Note that the instance must have a speed for wrapping to work, because the direction of wrapping is based on the direction of the motion."],[" ","move_wrap(hor, vert, margin);"," ","Argument"," ","Type"," ","Description"," ","hor"," ","Boolean"," ","Whether to wrap horizontally (true) or not (false)."," ","vert"," ","Boolean"," ","Whether to wrap vertically (true) or not (false)."," ","margin"," ","Real"," ","How far outside the room, in pixels, the object must be to initiate wrapping."],[" ","N/A"],[" ","move_wrap(true, false, sprite_width);"," ","This will make the instance wrap horizontally but not vertically, when it is over its own sprite width outside of the room."," ","Back: ","Movement"," ","Next: ","place_snapped"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"954"})