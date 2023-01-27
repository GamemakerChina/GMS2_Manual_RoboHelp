rh._.exports({"0":[[" ","clickable_exists"]],"1":[["clickable_exists"]],"2":[["clickable_exists"]],"3":[[" ","clickable_exists"]],"4":[[" ","This function returns whether a clickable DOM icon has been created with the specified index exists or not. Please note, that the value used for checking ","must have been initialised previously"," or else you will get an error causing ","GameMaker"," to close."],[" ","clickable_exists(index);"," ","Argument"," ","Type"," ","Description"," ","index"," ","Clickable ID"," ","The index of the clickable to check."],[" ","Boolean"],[" ","if !clickable_exists(home_but)","\n    {","\n        home_but = clickable_add(32, 32, sprite_get_tpe(spr_MS_Home, 0), \"http://macsweeney_games.com\", \"_blank\", \"width=700, height=500, menubar=0, toolbar=0, scrollbars=0\");","\n    }"," ","The above code checks the variable \"home_but\" to see if it already exists, and if it does not it creates a clickable DOM icon at the position (32, 32) of the page that the game canvas is running on. The icon uses the sprite referenced from the texture page as \"spr_MS_Home\" and when clicked the icon will open a new window for the specified URL and with the defined properties for that window."," ","Back: ","Web And HTML5"," ","Next: ","clickable_add"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"964"})