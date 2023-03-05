rh._.exports({"0":[[" ","window_has_focus"]],"1":[["window_has_focus"]],"2":[["window_has_focus"]],"3":[[" ","window_has_focus"]],"4":[[" ","With this function you can poll the window (or tab) state and if it loses focus the function will return ","false"," otherwise it will return ","true",". In most cases you can simply use the ","os_is_paused()"," function to test this, but in some very specific cases (for example games on Chrome Apps) that function will not trigger, in which case you should use this function instead."," ","NOTE",": This function is only valid for the HTML5, Windows, and MacOS."],[" ","window_has_focus();"],[" ","Boolean"],[" ","if !window_has_focus()","\n    {","\n        PauseGame();","\n    }"," ","The above code will check to see if the game window is in focus or not, and if the function returns ","false"," a function will be called."," ","Back: ","The Game Window"," ","Next: ","window_device"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2629"})