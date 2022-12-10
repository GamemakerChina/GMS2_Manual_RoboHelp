rh._.exports({"0":[["HTTP"]],"2":[["HTTP"]],"3":[["\n  ","\n  "],["\n  ","This section lists all the different Asynchronous HTTP functions available in ","GameMaker",". These functions will generate an ","Asynchronous HTTP Event"," in all instances that have it:","\n  ","\n    ","http_request","\n    ","http_get","\n    ","http_get_file","\n    ","http_post_string","\n  ","\n  "],["\n  ","Please note that the above ","http_*"," functions may not function as expected due to ","cross domain security"," issues. This means that requests to your server or attempts to load resources from across domains are blocked and may appear to return blank results or 404 errors.","\n  ","For image load or HTTP requests where determining or setting their cross-origin type is important, the following functions exist:","\n  ","\n    ","http_get_request_crossorigin","\n    ","http_set_request_crossorigin","\n  ","\n  ","In most cases these functions should not need to be used, but if the game is stored on a secured server - where certain assets may require basic authentication to be accessed and are generating security errors when loading - setting the cross-origin type for image requests to ","\"use-credentials\""," may be necessary (as opposed to the default ","\"anonymous\""," setting).","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Asynchronous Functions","\n        ","Next: ","Dialog","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["HTTP"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"7":[["Cross Domain Issues"]],"id":"1096"})