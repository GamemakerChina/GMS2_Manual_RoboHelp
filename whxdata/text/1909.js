rh._.exports({"0":[["Image Loaded"]],"1":[["Objects - Async Image Loaded Event"]],"2":[["Image Loaded,ev_web_image_load"]],"3":[["\n  ","\n  "],["\n  ","This event is triggered when you load an image into ","GameMaker"," either on HTML5, or through a ","URL",". For example, say you want to load a sprite image, and only change the current sprite for the instance to the new one after it has loaded. You would have something like this in the Create event (or any other event):","\n  ","var _url = \"http://www.angusgames.com/game/background1.png\";"," spr = sprite_add(_url, 0, false, false, 0, 0);","\n  ","This will now start to load the image into the device or the browser, but it will not block ","GameMaker"," while it waits for the file to be loaded. Instead ","GameMaker"," will keep running as normal until the image is loaded and the ","callback"," triggers the ","Image Loaded Event",", where a ","DS Map"," is created and stored in the special variable\n    ","async_load",". The map contains the following information:","\n  ","\n    ","\"","filename","\": The complete path to the file you requested.","\n    ","\"","id","\": The ID of the resource that you have loaded. This will be the same as the variable that you have assigned the resource to.","\n    ","\"","status","\": Returns a value of less than 0 for an error.","\n  ","\n  ","You would then assign the newly loaded image to a sprite in this event. The following code example demonstrates how the returned information would be used:","\n  ","if ds_map_find_value(async_load, \"id\") == spr"," {\n    ","     if ds_map_find_value(async_load, \"status\") >= 0","     {","         sprite_index = spr;","     }"," }\n  ","\n  ","The above code will first check the ","id"," of the DS map that has been created, then check the ","status"," of the callback. If the value is greater than or equal to 0 (signalling success) the result from\n    the callback will then be used to set the sprite index to the newly loaded image.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Async Events","\n        ","Next: ","Networking","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["Image Loaded"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1909"})