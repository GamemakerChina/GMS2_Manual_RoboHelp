rh._.exports({"0":[["clickable_add"]],"1":[["clickable_add"]],"2":[["clickable_add"]],"3":[["\n  ","\n  "],["\n  ","With this function you can create a custom, clickable, icon that acts as a \"button\" outside of the game canvas, but within the browser window itself. The function will return an ID value which must be stored in a variable to be used in all further button functions that reference the new clickable. This function is very useful to prevent the browser creating a pop-up window when clicking on the button as it is all done through ","GameMaker"," itself.","\n  ","You must first set the position, which is relative to the (0,0) of the browser window (top left corner) and then give the texture page entry for the sprite you wish the button icon to have (see: ","sprite_get_tpe()","). You can then specify either a URL to open or a script (from the Asset Browser of ","GameMaker",") to be opened or run. The \"target\" parameter that you specify is the same as the standard JavaScript \"name\" value when you use the ","open()"," method (be aware that all but '_self' may result in the browser blocking, or asking the user if they wish to allow it) and the \"params\" argument is the same as the JavaScript \"specs\" parameter for controlling what properties the new window/tab should display (not all browsers may support all features). If you are using the icon to run an internal script, these last two arguments can be left as empty strings \"\".","\n  ","Valid targets are:","\n  ","\n    ","\n      ","\n        ","Target","\n        ","Description","\n      ","\n      ","\n        ","_blank","\n        ","Opens the linked document in a new window or tab.","\n      ","\n      ","\n        ","_self","\n        ","Opens the linked document in the same frame as it was clicked (this is default).","\n      ","\n      ","\n        ","_parent","\n        ","Opens the linked document in the parent frame.","\n      ","\n      ","\n        ","_top","\n        ","Opens the linked document in the full body of the window.","\n      ","\n    ","\n  ","\n  "," ","\n  ","Valid parameters are:","\n  ","\n    ","\n      ","\n        ","Parameters","\n        ","Description","\n      ","\n      ","\n        ","'height=[","px","]'","\n        ","The height of the window, with the minimum value being 100.","\n      ","\n      ","\n        ","'width=[","px","]'","\n        ","The width of the window, with the minimum value being 100.","\n      ","\n      ","\n        ","'left=[","px","]'","\n        ","The left position of the window.","\n      ","\n      ","\n        ","'top=[","px","]'","\n        ","The top position of the window (IE only).","\n      ","\n      ","\n        ","'location=[","boolean","]'","\n        ","Whether or not to display the address field (default is 1).","\n      ","\n      ","\n        ","'menubar=[","boolean","]'","\n        ","Whether or not to display the menu bar (default is 1).","\n      ","\n      ","\n        ","'resizable=[","boolean","]'","\n        ","Whether or not the window is resizable (default is 1).","\n      ","\n      ","\n        ","'scrollbars=[","boolean","]'","\n        ","Whether or not to display scroll bars (default is 1).","\n      ","\n      ","\n        ","'status=[","boolean","]'","\n        ","Whether or not to add a status bar (default is 1).","\n      ","\n      ","\n        ","'titlebar=[","boolean","]'","\n        ","Whether or not to display the title bar. This is ignored unless the calling application is an HTML Application or a trusted dialog box (default is 1);","\n      ","\n      ","\n        ","'toolbar=[","boolean","]'","\n        ","Whether or not to display the browser toolbar (default is yes).","\n      ","\n    ","\n  ","\n  ","\n    It is also worth noting that if the URL argument you pass in is the name of a ","script function"," (ie: it doesn't start with \"http://\") AND the script is called ","gmcallback_*"," then you can get direct feeds into an html5 event. ","GameMaker"," script function names are ","not"," obfuscated if they begin with ","gmcallback_",".","\n  "," ","\n  "],["\n  ","clickable_add(x, y, tpe, url, target, params);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","x","\n        ","Real","\n        ","The x position within the ","window",".","\n      ","\n      ","\n        ","y","\n        ","Real","\n        ","The y position within the ","window",".","\n      ","\n      ","\n        ","tpe","\n        ","Texture Page Entry","\n        ","The texture page entry for the sprite to be used.","\n      ","\n      ","\n        ","url","\n        ","String","\n        ","The URL (website address) to link to, or the script to be run.","\n      ","\n      ","\n        ","target","\n        ","String","\n        ","This is the target area to open the URL in (see description).","\n      ","\n      ","\n        ","params","\n        ","String","\n        ","The various parameters for the icon (see description).","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Clickable ID","\n  "," ","\n  "],["\n  ","home_but = clickable_add(32, 32, sprite_get_tpe(spr_MS_Home, 0), \"http://macsweeney_games.com\", \"_blank\", \"width=700, height=500, menubar=0, toolbar=0, scrollbars=0\");","\n  ","The above code creates a clickable DOM icon at the position (32, 32) of the page that the game canvas is running on. The icon uses the sprite referenced from the texture page as \"spr_MS_Home\" and when clicked the icon will open a new window for the specified URL and with the defined properties for that window.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Web And HTML5","\n        ","Next: ","clickable_add_ext","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["clickable_add"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2470"})