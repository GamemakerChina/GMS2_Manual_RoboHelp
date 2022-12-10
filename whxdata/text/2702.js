rh._.exports({"0":[["skeleton_attachment_replace_colour"]],"1":[["skeleton_attachment_replace_colour"]],"2":[["skeleton_attachment_replace_colour"]],"3":[["\n  "],["\n  ","This function replaces an existing custom attachment on the current instance's skeletal animation sprite with another one. It also sets the blend colour to use when drawing this attachment.","\n  ","The change to the attachment will be visible in all ","Slots"," that have the attachment assigned.","\n  "," ","\n  "],["\n  ","skeleton_attachment_replace_colour","(name, sprite, ind, xorigin, yorigin, xscale, yscale, rot, colour, alpha);","\n  ","\n    ","\n      ","\n      ","\n      ","\n    ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","name","\n        ","String","\n        ","The name of the attachment to replace","\n      ","\n      ","\n        ","sprite","\n        ","Sprite Asset","\n        ","The index of the sprite asset to use for the attachment","\n      ","\n      ","\n        ","ind","\n        ","Real","\n        ","The image_index of the sprite to use","\n      ","\n      ","\n        ","xorigin","\n        ","Real","\n        ","The x origin to use for the image. The sprite's origin is ignored.","\n      ","\n      ","\n        ","yorigin","\n        ","Real","\n        ","The y origin to use for the image. The sprite's origin is ignored.","\n      ","\n      ","\n        ","xscale","\n        ","Real","\n        ","The horizontal scale factor of the image","\n      ","\n      ","\n        ","yscale","\n        ","Real","\n        ","The vertical scale factor of the image","\n      ","\n      ","\n        ","rot","\n        ","Real","\n        ","The rotation of the image. This is ","added"," to the bone's rotation.","\n      ","\n      ","\n        ","colour","\n        ","Colour","\n        ","The blend colour to use when drawing the sprite","\n      ","\n      ","\n        ","alpha","\n        ","Real","\n        ","The alpha value to use when drawing the sprite","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Real"," (1 if successful, -1 if not)","\n  "," ","\n  "],["\n  ","if skeleton_attachment_exists(\"fruit_attachment\")","\n    {","\n        ","skeleton_attachment_replace_colour","(\"fruit_attachment\", spr_apple, 0, 0, 0, 1, 1, 0, c_lime, 1);","\n    }","\n  ","The above code first checks if an attachment with the name \"fruit_attachment\" exists on the skeleton. If it does, it replaces the attachment image with a sprite \"spr_apple\", with no change in offset, rotation or scale and a  colour of ","c_lime"," and alpha value of 1.","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Attachments","\n        ","Next: ","skeleton_attachment_destroy","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["skeleton_attachment_replace_colour"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2702"})