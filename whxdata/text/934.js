rh._.exports({"0":[[" ","browser_width"]],"1":[["browser_width"]],"2":[["browser_width"]],"3":[[" ","browser_width"]],"4":[[" ","This variable holds the width (in pixels) of the browser the game is being run in. If no browser is present then the window size is returned."," ","See: ","The Game Window"],[" ","browser_width"],[" ","Real"],[" ","if (browser_height > window_get_height()) || (browser_width > window_get_width())","\n    {","\n        var xx, yy;","\n        if (browser_width > window_get_width())","\n        {","\n            xx = (browser_width - window_get_width()) / 2;","\n        }","\n        else","\n        {","\n            xx = 0;","\n        }","\n        if (browser_height > window_get_height())","\n        {","\n            yy = (browser_height - window_get_height()) / 2;","\n        }","\n        else","\n        {","\n            yy = 0;","\n        }","\n        window_set_position(xx, yy);","\n    }"," ","The above code checks the width and height of the browser to see if either is larger than the current window width and height. If either of them are, it then calculates a new position for the game window within the browser."," ","Back: ","Web And HTML5"," ","Next: ","browser_input_capture"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"934"})