rh._.exports({"0":[["object_set_sprite"]],"1":[["object_set_sprite"]],"2":[["object_set_sprite"]],"3":[["\n  ","\n  "],["\n  ","With this function you can set the sprite index of a specific object. This means that all instances of this object that are created ","after the sprite_index has been changed"," will be created with this new sprite_index, while instances that are already in the room may not be affected.","\n  ","Please note that this is not an instance function! You can set the sprite index of individual instances using the ","sprite_index"," variable and so have ten instances all with a different sprite to the object they are created from, and even if you change the sprite index of the object using this function, all instances that are currently in the room will remain as they were, and only instances created after calling the function will start with the new sprite.","\n  "," ","\n  "],["\n  ","object_set_sprite( index, spr );","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","index","\n        ","Object Asset","\n        ","The index of the object to change.","\n      ","\n      ","\n        ","spr","\n        ","Sprite Asset","\n        ","The sprite to assign to the object.","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","switch (room)","\n    {","\n        case rm_start: object_set_sprite(obj_Player, spr_uniform); break;","\n        case rm_middle: object_set_sprite(obj_Player, spr_swimsuit); break;","\n        case rm_end: object_set_sprite(obj_Player, spr_casual); break;","\n    }","\n    instance_create_layer(32, 32, \"Instances\", obj_Player);","\n  ","The above code will set the object \"obj_Player\" sprite index to different values depending on the room that the instance running the code is currently in. It then creates an instance of \"obj_Player\".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Objects","\n        ","Next: ","object_set_visible","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["object_set_sprite"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1634"})