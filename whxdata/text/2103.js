rh._.exports({"0":[["Clipping Masks"]],"1":[["Sequences - Clipping Masks"]],"2":[["masks,clip masks,clipping,clipping masks"]],"3":[["\n  ","\n  "],["\n  ","As mentioned in the ","Track Panel"," page, there is an action to create what is called a ","clipping mask group ","in the track editor. This is accessed by clicking on the "," button at the bottom of the Track Panel:","\n  ","Clicking this will create a clipping mask group that is comprised of two sub-sets of assets that can be used as either\n    the ","subject ","or the ","mask ","of the group. Basically the subject is the asset that is going to be masked, and the mask is the asset that is going to do the masking:","\n  ","The idea behind using a clipping mask is that you add a subject sprite, and then a mask sprite, and the mask sprite will \"hide\"\n    (mask) the subject. You can then use the mask sprite animation, or move or scale the mask sprite to change the visibility of the subject (or parts of the subject). Each group (mask and subject) can contain multiple assets, and each of the assets can\n    have multiple parameter tracks.","\n  ","To add a subject and mask, simply drag the sprite, object or sequence from the Asset Browser over the folder that you want to add it to:","\n  ","\n  ","The mask sprite ","alpha ","will be used to \"hide\" whatever subject is underneath it, where a value of 100% alpha (opaque) will mask completely and a value of 0% alpha (transparent) will show it. For example, we have this sprite for masking:","\n  ","We can then apply this as a clipping mask to icons to create a \"cooldown\" effect, like this:","\n  ","In the above example \"","Sprite_2","\" is simply a static sprite asset that is the base icon,\n    and then over that we've created a clipping mask group with a greyscale version of the sprite, as well as a mask (using the example sprite shown above). When combined and the sequence is played, the clipping mask group reveals the base sprite\n    underneath, creating our cooldown effect.","\n  ","Note that clipping mask groups can be treated as a single item in the track list and dope sheet, and you can add rotation and position parameter tracks to the group ","as a whole",". You can also apply clipping mask groups to group folders of assets\n    or even to ","other"," clipping mask groups, making them a very powerful tool.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sequences","\n        ","Next: ","Using The Dope Sheet","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["Clipping Masks"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2103"})