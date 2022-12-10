rh._.exports({"0":[["sprite_flush"]],"1":[["sprite_flush"]],"2":[["sprite_flush"]],"3":[["\n  ","\n  "],["\n  ","With this function you can remove the texture page for the given sprite from texture memory (VRAM). The texture will stay in RAM after being flushed.","\n  ","You supply the sprite index (as defined when creating the sprite resource) and the texture page it is assigned to will be removed from texture memory. Note that if the texture page is used elsewhere in the room (by another instance sprite or a background, etc...) you may get a minor performance hit as the page is immediately reloaded, so care should be taken when using this function. Note that the function will return ","-1"," if flush is not supported for the chosen resource, or it will return ","0"," if all worked correctly.","\n  "," ","\n  "],["\n  ","sprite_flush(ind)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","ind","\n        ","Sprite Asset","\n        ","The index (resource name) of the sprite asset to flush","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Real"," (-1 or 0)","\n  "," ","\n  "],["\n  ","sprite_flush(spr_Player_Aura);","\n  ","The above code flushes the sprite \"spr_Player_Aura\" from memory.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sprite Manipulation","\n        ","Next: ","sprite_flush_multi","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["sprite_flush"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1063"})