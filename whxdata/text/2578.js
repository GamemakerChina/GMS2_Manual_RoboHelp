rh._.exports({"0":[[" ","Nine Slice Struct"]],"2":[["Nine Slice,9slice,9-slice,9 slice"]],"3":[[" ","The Nine Slice Struct"]],"4":[[" ","A Nine Slice ","struct"," can be created using ","sprite_nineslice_create()",", or retrieved from a sprite using ","sprite_get_nineslice()",". This struct will contain properties that can be changed and applied to a sprite using ","sprite_set_nineslice()","."," ","If retrieved from a sprite, changing values in this struct ","will ","affect the original sprite."," ","The following properties will be available in this struct:"," ","Nine Slice Struct"," ","Variable"," ","Type"," ","Description"," ","enabled"," ","Boolean"," ","This ","boolean"," will be ","true ","if ","Nine Slicing"," is enabled for the sprite, and ","false ","if it is disabled. You can modify this to enable or disable ","Nine Slicing"," for the sprite."," ","left"," ","Real"," ","This is the offset for the left guide on the x axis, relative to the left edge of the sprite."," ","right"," ","Real"," ","This is the offset for the right guide on the x axis, relative to the right edge of the sprite."," ","top"," ","Real"," ","This is the offset for the top guide on the y axis, relative to the top edge of the sprite."," ","bottom"," ","Real"," ","This is the offset for the bottom guide on the y axis, relative to the bottom edge of the sprite."," ","tilemode"," ","Array"," of ","Tile Mode Constant","s"," ","This returns an ","array"," containing the ","Tile Modes"," for the edge and centre slices."],[" ","The ","Tile Mode"," of each slice can be read or modified using these constants as the array index:"," ","Nine Slice Edge Constant"," ","Constant"," ","Description"," ","nineslice_left"," ","The left edge slice"," ","nineslice_top"," ","The top edge slice"," ","nineslice_right"," ","The right edge slice"," ","nineslice_bottom"," ","The bottom edge slice"," ","nineslice_centre"," ","The centre slice"," ","The ","Tile Mode"," for a slice will be (or can be set to) one of the following constants:"," ","Tile Mode Constant"," ","Constant"," ","Description"," ","nineslice_stretch"," ","The slice will be stretched"," ","nineslice_repeat"," ","The slice will be repeated"," ","nineslice_mirror"," ","The slice will be repeated by mirroring"," ","nineslice_blank"," ","The slice will not be stretched or repeated, resulting in a blank area after it"," ","nineslice_hide"," ","The slice will not appear at all"," ","Since ","tilemode ","is an array, you need to use the array syntax to change the Tile Mode of a slice. The code example below sets the Tile Mode of the top slice to ","Repeat",":"],[" ","var _nineslice = sprite_get_nineslice(spr_box);"," ","\n            _nineslice.tilemode[","nineslice_top","] = ","nineslice_repeat",";"," ","See ","this page"," for more information on the Nine Slice technique."," ","Back: ","Asset Management"," ","Next: ","Tile Sets"]],"5":[[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"11":[[" ","Tile Modes"]],"id":"2578"})