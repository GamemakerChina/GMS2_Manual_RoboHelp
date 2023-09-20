rh._.exports({"0":[[" ","uwp_was_terminated"]],"1":[["uwp_was_terminated"]],"2":[[" ","uwp_was_terminated"," ","OBSOLETE"]],"3":[[" ","With this function you can find out if the game was previously shut down by the system (i.e. it's not the first run of the game). If it has been then the function will return ","true",", otherwise it will return ","false",". An example of use would be to check it and see if the game was previously terminated by the system, and then (if it returns ","true",") to load the previous stage that the player was at in the game. If targeting the XBox One then the required behavior of games if this is detected will be different between the different versions of the certification docs, so it's worth checking the latest version to see what the game ","should"," do."],[" ","uwp_was_terminated();"],[" ","Boolean"],[" ","if xboxlivewas_terminated()","\n    {","\n        buffer_load(\"Player_Save.sav\");","\n        global.GameLoaded = true;","\n    }"," ","The above code checks to see if the app has previously been terminated by the system, and if so, it loads a buffer and sets a global variable."," ","Back: ","UWP And XBox Live"," ","Next: ","uwp_was_closed_by_user"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["uwp_was_terminated"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"2812"})