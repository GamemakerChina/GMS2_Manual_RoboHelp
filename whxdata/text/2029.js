rh._.exports({"0":[["texturegroup_get_status"]],"1":[["texturegroup_get_status"]],"2":[["texturegroup_get_status"]],"3":[["\n  "],["\n  ","This function returns the status of the given Dynamic Texture Group. The status will be one of the following constants:","\n  ","\n    ","\n      ","\n        ","Texture Group Status Constant","\n      ","\n      ","\n        ","Constant","\n        ","Description","\n        ","Value","\n      ","\n      ","\n        ","texturegroup_status_unloaded","\n        ","The Texture Group is still on disk and not in memory","\n        ","0","\n      ","\n      ","\n        ","texturegroup_status_loading","\n        ","The Texture Group is currently being loaded from disk","\n        ","1","\n      ","\n      ","\n        ","texturegroup_status_loaded","\n        ","The Texture Group has been loaded into RAM","\n        ","2","\n      ","\n      ","\n        ","texturegroup_status_fetched","\n        ","The Texture Group has been loaded and fetched into VRAM, ready for use","\n        ","3","\n      ","\n    ","\n  ","\n  ","For information on its use, see: ","Dynamic Textures","\n  "," ","\n  "],["\n  ","texturegroup_get_status(groupname);","\n  ","\n    ","\n      ","\n      ","\n      ","\n    ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","groupname","\n        ","String","\n        ","The name of the Texture Group as a string. These are defined in the ","Texture Groups"," window.","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Texture Group Status Constant","\n  "," ","\n  "],["\n  ","var _tg = \"tg_UI\";","\n    var _status = texturegroup_get_status(_tg);","\n    ","\n    if (_status == texturegroup_status_unloaded)","\n    {","\n        texturegroup_load(_tg);","\n    }\n  ","\n  ","This gets the status of the \"","tg_UI","\" Texture Group, and if it's unloaded, it loads it.","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Textures","\n        ","Next: ","​texture_get_width","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["texturegroup_get_status"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2029"})