rh._.exports({"0":[["sprite_get_bbox_top"]],"1":[["sprite_get_bbox_top"]],"2":[["sprite_get_bbox_top"]],"3":[["\n  ","\n  "],["\n  ","This function returns the relative position of the top of the sprite bounding box. This value is given as a relative value based on the upper left corner of the base sprite asset being (0,0). it is the same value as can be found in the sprite editor\n    for the ","collision mask properties",". The image below shows how it is calculated:","\n  ","\n  "," ","\n  "],["\n  ","sprite_get_bbox_top(ind);","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","ind","Sprite Asset","\n        ","The index of the sprite to check.","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Real","\n  "," ","\n  "],["\n  ","var ww, hh;"," ww = sprite_get_bbox_left(sprite_index) - sprite_get_bbox_right(sprite_index);"," hh = sprite_get_bbox_bottom(sprite_index) - sprite_get_bbox_top(sprite_index);","\n  ","The above code calculates the width and height of the collision mask based on the relative bounding box side positions.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sprite Information","\n        ","Next: ","sprite_get_bbox_mode","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["sprite_get_bbox_top"]],"5":[["Syntax:"],["Returns"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"824"})