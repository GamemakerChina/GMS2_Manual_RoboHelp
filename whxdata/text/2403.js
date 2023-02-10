rh._.exports({"0":[[" ","skeleton_attachment_create"]],"1":[["skeleton_attachment_create"]],"2":[["skeleton_attachment_create"]],"3":[[" ","skeleton_attachment_create"]],"4":[[" ","When you create you skeletal animation sprite, you can assign ","attachment slots"," and ","attachments"," to go in them. These are simply images that are apart from the animation but when attached will move along with the bone they are attached to. Normally you would assign these attachments in your animation program (Spine), but with this function you can create your own at run-time using a sprite asset from your game. the function requires that you give the attachment a name (as a string) and then set the sprite_index and image_index to use, as well as the x and y origin (which can be different to that defined by the sprite in the sprite properties), and you can also set any transforms that you wish to be applied to the image when attached. If the attachment was successfully created the function will return ","1"," and if it was not (you supplied an invalid sprite index, or the base sprite is not a Spine sprite) then it will return ","-1","."," ","NOTE"," In case there is a possibility that an attachment with the given name already exists you can check this using ","skeleton_attachment_exists",", as trying to create an attachment with an existing name will throw an error."],[" ","skeleton_attachment_create","(name, sprite, ind, xorigin, yorigin, xscale, yscale, rot);"," ","Argument"," ","Type"," ","Description"," ","name"," ","String"," ","The name (as a string) of the attachment to create."," ","sprite"," ","Sprite Asset"," ","The sprite_index to get the attachment image from."," ","ind"," ","Real"," ","The image_index to get the attachment image from."," ","xorigin"," ","Real"," ","The x origin for the image being used."," ","yorigin"," ","Real"," ","The y origin for the image being used."," ","xscale"," ","Real"," ","The horizontal scaling of the image, as a multiplier: 1 = normal scaling, 0.5 is half etc..."," ","yscale"," ","Real"," ","The vertical scaling of the image, as a multiplier: 1 = normal scaling, 0.5 is half etc..."," ","rot"," ","Real"," ","The rotation of the image. 0=normal, 90=turned 90 degrees counter-clockwise etc."],[" ","Real"," (1 if successful, -1 if not)"],[" ","skeleton_attachment_create","(\"sword\", spr_Weapons, 0, 0, 80, 1, 1, 90);"," ","skeleton_attachment_create","(\"knife\", spr_Weapons, 1, 0, 45, 1, 1, 90);"," ","skeleton_attachment_create","(\"crossbow\", spr_Weapons, 0, 10, 30, 1, 1, 0);","\n    skeleton_attachment_set(\"slot_leftHand\", choose(\"sword\", \"knife\", \"crossbow\"));\n  "," ","The above code would check the currently assigned attachment name for the slot named \"slot_leftHand\" and if an empty string is returned, a new sprite is attached."," ","Back: ","Attachments"," ","Next: ","skeleton_attachment_create_colour"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2403"})