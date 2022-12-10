rh._.exports({"0":[["http_set_request_crossorigin"]],"1":[["http_set_request_crossorigin"]],"2":[["http_set_request_crossorigin"]],"3":[["\n  ","\n  "],["\n  ","With this function you can set the cross origin type to use when loading images from a file (using ","sprite_add()","), or sending custom HTTP requests to servers (e.g. using ","http_post_string()","). The function is exclusively for the HTML5 platform.","\n  ","When set to ","\"use-credentials\""," you no longer need to give an absolute path to the sprite being loaded, but instead would give a ","relative"," path (as shown in the example below).","\n  ","By default the cross origin type is set to ","\"anonymous\"",".","\n  "," ","\n  "],["\n  ","http_set_request_crossorigin(origin_type);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","origin_type","\n        ","String","\n        ","The cross origin type to use (a string)","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","if string_lower(http_get_request_crossorigin()) != \"use-credentials\"","\n    {","\n        http_set_request_crossorigin(\"use-credentials\");","\n    }","\n    sprite_add(\"sprites/player_outfit_1.png\", 0, false, false, 0, 0);","\n  ","The above code will first check the currently set cross origin type and if it is not \"use-credentials\" then it is set to \"use-credentials\" and then a sprite is added from a file.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","HTTP","\n        ","Next: ","http_request","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["http_set_request_crossorigin"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1388"})