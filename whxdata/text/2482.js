rh._.exports({"0":[[" ","clickable_add"]],"1":[["clickable_add"]],"2":[["clickable_add"]],"3":[[" ","clickable_add"]],"4":[[" ","With this function you can create a custom, clickable, icon that acts as a \"button\" outside of the game canvas, but within the browser window itself. The function will return an ID value which must be stored in a variable to be used in all further button functions that reference the new clickable. This function is very useful to prevent the browser creating a pop-up window when clicking on the button as it is all done through ","GameMaker"," itself."," ","You must first set the position, which is relative to the (0,0) of the browser window (top left corner) and then give the texture page entry for the sprite you wish the button icon to have (see: ","sprite_get_tpe()","). You can then specify either a URL to open or a script (from the Asset Browser of ","GameMaker",") to be opened or run. The \"target\" parameter that you specify is the same as the standard JavaScript \"name\" value when you use the ","open()"," method (be aware that all but '_self' may result in the browser blocking, or asking the user if they wish to allow it) and the \"params\" argument is the same as the JavaScript \"specs\" parameter for controlling what properties the new window/tab should display (not all browsers may support all features). If you are using the icon to run an internal script, these last two arguments can be left as empty strings \"\"."," ","Valid targets are:"," ","Target"," ","Description"," ","_blank"," ","Opens the linked document in a new window or tab."," ","_self"," ","Opens the linked document in the same frame as it was clicked (this is default)."," ","_parent"," ","Opens the linked document in the parent frame."," ","_top"," ","Opens the linked document in the full body of the window."," ","Valid parameters are:"," ","Parameters"," ","Description"," ","'height=[","px","]'"," ","The height of the window, with the minimum value being 100."," ","'width=[","px","]'"," ","The width of the window, with the minimum value being 100."," ","'left=[","px","]'"," ","The left position of the window."," ","'top=[","px","]'"," ","The top position of the window (IE only)."," ","'location=[","boolean","]'"," ","Whether or not to display the address field (default is 1)."," ","'menubar=[","boolean","]'"," ","Whether or not to display the menu bar (default is 1)."," ","'resizable=[","boolean","]'"," ","Whether or not the window is resizable (default is 1)."," ","'scrollbars=[","boolean","]'"," ","Whether or not to display scroll bars (default is 1)."," ","'status=[","boolean","]'"," ","Whether or not to add a status bar (default is 1)."," ","'titlebar=[","boolean","]'"," ","Whether or not to display the title bar. This is ignored unless the calling application is an HTML Application or a trusted dialog box (default is 1);"," ","'toolbar=[","boolean","]'"," ","Whether or not to display the browser toolbar (default is yes)."," ","\n    It is also worth noting that if the URL argument you pass in is the name of a ","script function"," (ie: it doesn't start with \"http://\") AND the script is called ","gmcallback_*"," then you can get direct feeds into an html5 event. ","GameMaker"," script function names are ","not"," obfuscated if they begin with ","gmcallback_","."],[" ","clickable_add(x, y, tpe, url, target, params);"," ","Argument"," ","Type"," ","Description"," ","x"," ","Real"," ","The x position within the ","window","."," ","y"," ","Real"," ","The y position within the ","window","."," ","tpe"," ","Texture Page Entry"," ","The texture page entry for the sprite to be used."," ","url"," ","String"," ","The URL (website address) to link to, or the script to be run."," ","target"," ","String"," ","This is the target area to open the URL in (see description)."," ","params"," ","String"," ","The various parameters for the icon (see description)."],[" ","Clickable ID"],[" ","home_but = clickable_add(32, 32, sprite_get_tpe(spr_MS_Home, 0), \"http://macsweeney_games.com\", \"_blank\", \"width=700, height=500, menubar=0, toolbar=0, scrollbars=0\");"," ","The above code creates a clickable DOM icon at the position (32, 32) of the page that the game canvas is running on. The icon uses the sprite referenced from the texture page as \"spr_MS_Home\" and when clicked the icon will open a new window for the specified URL and with the defined properties for that window."," ","Back: ","Web And HTML5"," ","Next: ","clickable_add_ext"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2482"})