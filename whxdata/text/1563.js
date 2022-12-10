rh._.exports({"0":[["sprite_set_nineslice"]],"1":[["sprite_set_nineslice"]],"2":[["sprite_set_nineslice"]],"3":[["\n  ","\n  "],["\n  ","This function is used to apply a ","Nine Slice struct"," to a sprite. You supply the sprite index and the Nine Slice struct to apply, which can be retrieved using ","sprite_nineslice_create()"," or ","sprite_get_nineslice()",".","\n  ","NOTE"," ","This function affects the sprite ","asset"," so any changes you make with this function will affect ","all"," instances that are using this sprite and all future instances too. ","\n  "," ","\n  "],["\n  ","sprite_set_nineslice(ind, nineslice);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","ind","\n        ","Sprite Asset","\n        ","The index of the sprite to modify","\n      ","\n      ","\n        ","nineslice","\n        ","Nine Slice Struct","\n        ","The Nine Slice struct to apply","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","var _nineslice = sprite_nineslice_create();","\n    ","\n    _nineslice.enabled = true;","\n    _nineslice.left = 10;","\n    _nineslice.right = 10;","\n    _nineslice.top = 10;","\n    _nineslice.bottom = 10;","\n    ","\n    ","sprite_set_nineslice","(spr_box_0, _nineslice);\n  ","\n  ","The code above creates a new Nine Slice struct, enables it and sets the offsets for the guides. The struct is then applied to a sprite, changing its Nine Slice properties.","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sprite Manipulation","\n        ","Next: ","sprite_set_offset","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["sprite_set_nineslice"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1563"})