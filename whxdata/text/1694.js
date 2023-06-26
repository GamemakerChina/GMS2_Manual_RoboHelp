rh._.exports({"0":[[" ","os_is_paused"]],"1":[["os_is_paused"]],"2":[[" ","os_is_paused"]],"3":[[" ","When developing for mobile devices, you need to have a way to check that the device is still focused on your game or not, especially as if your game is on an iOS, Android or Windows Phone device then it can be interrupted by phone calls and other apps. You can use this function to check if the device is paused or not."," ","It is worth noting that this function will run any code that is contained within the code block on devices but then ","GameMaker"," will be paused immediately after as the device caches the game as a background process. So if you have something like the example code provided below, the instance to be created will not actually appear or run any of its events ","until after the game has been restarted from the cached state",". This means that you may prefer to have the ","os_is_paused"," function call an alarm and then in the alarm event (which will be set when the device is paused but not run until it is un-paused) create a pause menu, restart music etc..."," ","If you are using this function on Windows, Ubuntu (Linux), MacOS or HTML5 platforms, then the function is only toggled for ","one step"," to ","true"," when the game loses focus, and then it will return ","false"," again until the game is returned to focus (and loses it again). This is because these platforms do not cache apps and games, and so these will continue to run in the background."," ","NOTE",": On mobile devices, sounds and music will be stopped when the os is paused. They will ","not"," restart again unless you specifically start them with the appropriate function."],[" ","os_is_paused()"],[" ","Boolean"],[" ","if os_is_paused()","\n    {","\n        if !instance_exists(obj_PauseMenu)","\n        {","\n            instance_create_layer(0, 0, \"Controllers\", obj_PauseMenu);","\n        }","\n    }"," ","The above code checks to see if the game has been paused, and if it has then it creates an instance of the object \"obj_PauseMenu\" if none exist already."," ","Back: ","OS And Compiler"," ","Next: ","os_is_network_connected"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["os_is_paused"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1694"})