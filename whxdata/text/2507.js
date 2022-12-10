rh._.exports({"0":[["sprite_add"]],"1":[["sprite_add"]],"2":[["sprite_add"]],"3":[["\n  ","\n  "],["\n  ","With this function you can add an image as a sprite, loading it from an external source where the image file to be loaded should ","always"," be in either ","*.png",", ","*.gif",", ","*.jpg/jpeg"," or ","*.json"," format (","*json"," files are used for loading ","skeleton animation sprites"," made with Spine). The function returns the new sprite index which must then be used in all further code that relates to the sprite. If you use this function with HTML5 or are getting an image from a URL, this function will also generate an ","Image Loaded"," asynchronous event. See ","this page"," for more information.","\n  ","All images that are to be turned into animated sprites - except for ","*.gif"," (see below) - should have a \"strip\" format (see the image below) and it will be split into the number of sub-images specified following the rule ","sprite width = strip width / sub images",".","\n  ","\n  ","As you can see in the above image, the sprite has been placed on a dark purple background, and this can be removed by setting the \"removeback\" argument to ","true",". This works by checking the ","bottom left"," pixel of the sprite for the colour there and then uses that as the colour to be removed. For example, in the above image, if we had the bottom left pixel colour as green, all the green parts of the sprite would have been removed and the rest of the purple background ignored.","\n  ","If you choose the \"removeback\" option, you may also want ","GameMaker"," to smooth the edges of the sprite by setting the \"smooth\" argument to ","true",". All this does is create a semi-transparent border around the edges of the sprite after it has had its background removed.","\n  ","Finally you can also specify the x and y ","origin"," for the sprite. This is the point where the sprite is \"fixed\" onto the instance that uses it, and is always calculated as relative to the 0,0 top left corner of one sprite sub-image. So, for example, a sprite that is 32 x 32 pixels with these values set to (16,16) will have its origin in the center.","\n  ","If you are adding a ","*.gif"," format image, then you only need to specify the filename and image number (which should be 1 for the first frame) and can leave all the other arguments as 0, noting that ","only the first image of the GIF will be loaded",". For ","*.json"," sprites, the image number should be 1, and the \"removeback\" and \"smooth\" settings will be ignored.","\n  ","By default all new sprites have their bounding boxes calculated automatically (the exact bounding box will depend on the size and transparency of the sprite), however you may wish to customise this, in which case you should also use the function ","sprite_collision_mask()",".","\n  ","It should be noted that the memory used when adding a sprite in this way will be larger than you may expect. This is because ","GameMaker"," will store the sprite as a texture page ","and"," it will also be stored in GPU memory, so the total memory will be larger than would be expected for an image file of the same sprite.","\n  ","NOTE",": When you load a sprite into ","GameMaker"," you must remember to remove it again (with ","sprite_delete()",") when no longer needed, otherwise there is risk of a memory leak which will slow down and eventually crash your game.","\n  ","NOTE",": On ","iOS",", if you are loading an included file from a folder, ie: with a path something like \"","Backgrounds/background1.png","\", you do NOT need to include the folder as part of the path and simply supplying the file name is sufficient. On all other platforms you must supply the folder(s) as part of the path to the file.","\n  ","NOTE",": On ","HTML5",", if you are loading a sprite from a secure server you may need to set the cross-origin type and use a relative path instead of an absolute path. See ","http_set_request_crossorigin()"," for more details.","\n  "," ","\n  "],["\n  ","sprite_add(fname, imgnumb, removeback, smooth, xorig, yorig);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","fname","\n        ","String","\n        ","The name (a string file path) of the file to add.","\n      ","\n      ","\n        ","imgnum","\n        ","Real","\n        ","Use to indicate the number of sub-images (1 for a single image or for a ","*.gif",").","\n      ","\n      ","\n        ","removeback","\n        ","Boolean","\n        ","Indicates whether to make all pixels with the background colour (left-bottom pixel) transparent.","\n      ","\n      ","\n        ","smooth","\n        ","Boolean","\n        ","Indicates whether to smooth the edges if transparent.","\n      ","\n      ","\n        ","xorig","\n        ","Real","\n        ","Indicate the x position of the origin in the sprite.","\n      ","\n      ","\n        ","yorig","\n        ","Real","\n        ","Indicate the y position of the origin in the sprite.","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Sprite Asset","\n  "," ","\n  "],["\n  ","spr = sprite_add(\"player_5.png\", 16, true, true, 0, 0);","\n  ","The above code loads a sprite into the game and stores its index in the variable \"spr\".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sprite Manipulation","\n        ","Next: ","sprite_replace","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["sprite_add"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2507"})