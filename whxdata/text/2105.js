rh._.exports({"0":[["Web And HTML5"]],"2":[["Web"]],"3":[["\n  ","\n  "],["\n  ","GameMaker"," provides various functions for interacting with the internet or with a server, and they can be used on all the available target platforms. These functions are:","\n  ","\n    ","url_open","\n    ","url_open_ext","\n    ","url_open_full","\n    ","url_get_domain","\n    ","http_request","\n    ","http_get","\n    ","http_get_file","\n    ","http_post_string","\n  ","\n  "," ","\n  ","Apart from the general functions listed above, the ","HTML5 target"," has some additional web functions that are specifically designed to be used by the games that target it:","\n  ","\n    ","browser_height","\n    ","browser_width","\n    ","browser_input_capture","\n    ","webgl_enabled","\n    ","clickable_exists","\n    ","clickable_add","\n    ","clickable_add_ext","\n    ","clickable_change","\n    ","clickable_change_ext","\n    ","clickable_set_style","\n    ","clickable_delete","\n    ","analytics_event","\n    ","analytics_event_ext","\n    ","os_browser","\n    ","http_get_request_crossorigin","\n    ","http_set_request_crossorigin","\n  ","\n  "," ","\n  ","Apart from these functions for the HTML5 target module, there is also a special ","JavaScript variable"," that can be used on those rare occasions when the contents of the html5game folder are stored in a completely different place (URL). Normally this path is hard-coded in the JavaScript file and is relative to the location from where the JavaScript is called, but you can set the variable ","g_GameMakerHTML5Dir"," before the call to the game script and the game will be run from the newly defined location. For example:","\n  ","<script>var g_GameMakerHTML5Dir = \"http://mygamealternatedirectory.com/\";</script>","\n  ","It's also worth noting that you can flag script functions using the prefix ","gmcallback_"," which means they won't be obfuscated when you compile the project for HTML5. This is very uiseful when using the above listed ","clickable_*"," functions (for more information, please see ","here",").","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","GML Reference","\n        ","Next: ","Steam","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["Web And HTML5"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2105"})