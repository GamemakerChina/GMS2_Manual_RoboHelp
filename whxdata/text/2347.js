rh._.exports({"0":[["url_open_full"]],"1":[["url_open_full"]],"2":[["url_open_full"]],"3":[["\n  ","\n  "],["\n  ","This will open the specified URL on the browser of the chosen target device, or, if you are using the HTML5 module, in the currently open browser. The \"target\" parameter that you specify is the same as the standard JavaScript \"name\" value when you use the ","open()"," method (be aware that all but \"","_self","\" may result in the browser blocking, or asking the user if they wish to allow it) and the \"options\" is the same as the JavaScript \"specs\" parameter for controlling what properties the new window/tab should display (not all browsers may support all features).","\n  ","Valid targets are:","\n  ","\n    ","\n      ","\n        ","Target","\n        ","Description","\n      ","\n      ","\n        ","_blank","\n        ","Opens the linked document in a new window or tab (this will not work if pop-ups are being blocked by the user, in which case you can use the ","clickable_*"," functions instead).","\n      ","\n      ","\n        ","_self","\n        ","Opens the linked document in the same frame as it was clicked (this is default).","\n      ","\n      ","\n        ","_parent","\n        ","Opens the linked document in the parent frame.","\n      ","\n      ","\n        ","_top","\n        ","Opens the linked document in the full body of the window.","\n      ","\n    ","\n  ","\n  "," ","\n  ","Valid options are:","\n  ","\n    ","\n      ","\n        ","Parameters","\n        ","Description","\n      ","\n      ","\n        ","'height=[","px","]'","\n        ","The height of the window, with the minimum value being 100.","\n      ","\n      ","\n        ","'width=[","px","]'","\n        ","The width of the window, with the minimum value being 100.","\n      ","\n      ","\n        ","'left=[","px","]'","\n        ","The left position of the window.","\n      ","\n      ","\n        ","'top=[","px","]'","\n        ","The top position of the window (IE only).","\n      ","\n      ","\n        ","'location=[","boolean","]'","\n        ","Whether or not to display the address field (default is 1).","\n      ","\n      ","\n        ","'menubar=[","boolean","]'","\n        ","Whether or not to display the menu bar (default is 1).","\n      ","\n      ","\n        ","'resizable=[","boolean","]'","\n        ","Whether or not the window is resizable (default is 1).","\n      ","\n      ","\n        ","'scrollbars=[","boolean","]'","\n        ","Whether or not to display scroll bars (default is 1).","\n      ","\n      ","\n        ","'status=[","boolean","]'","\n        ","Whether or not to add a status bar (default is 1).","\n      ","\n      ","\n        ","'titlebar=[","boolean","]'","\n        ","Whether or not to display the title bar. This is ignored unless the calling application is an HTML Application or a trusted dialog box (default is 1);","\n      ","\n      ","\n        ","'toolbar=[","boolean","]'","\n        ","Whether or not to display the browser toolbar (default is yes).","\n      ","\n    ","\n  ","\n  ","\n  ","NOTE"," Antivirus software installed on the player's device may cause the URL to not open, so keep this in mind when using this function.","\n\n","\n  "," ","\n  "],["\n  ","url_open_full(url, target, options);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","url","\n        ","String","\n        ","The URL (website address) to link to.","\n      ","\n      ","\n        ","target","\n        ","String","\n        ","This is the target area to open the URL in (see description).","\n      ","\n      ","\n        ","options","\n        ","String","\n        ","Standard browser options (see description).","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","url_open_full(\"http://gamemaker.io\", \"_blank\", \"resizable=0, height=200, scrollbars=0\");","\n  ","This would open the GameMaker homepage in a new window that can't be resized, has a height of 200 pixels and no scrollbars.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Web And HTML5","\n        ","Next: ","url_get_domain","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["url_open_full"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2347"})