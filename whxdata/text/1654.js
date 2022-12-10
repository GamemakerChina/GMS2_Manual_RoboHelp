rh._.exports({"0":[["gpu_set_alphatestref"]],"1":[["gpu_set_alphatestref"]],"2":[["gpu_set_alphatestref"]],"3":[["\n  ","\n  "],["\n  ","This function will set the reference value for the alpha testing (when it has been enabled using the ","gpu_set_alphatestenable()","). This is the \"cut-off\" threshold at which pixels with alpha will not be drawn.","\n  ","Basically, if you have this value set to 0 and you have linear interpolation turned on (either in the Game Options or using ","gpu_set_texfilter()","), you can still get visual errors at the edges of overlapping objects. This is because you can have ","almost"," completely transparent areas that block things drawn behind them, but if you set this reference value to, for example, 254 (i.e. one below maximum), this guarantees that only 100% opaque pixels are going to be drawn. You can also turn texture interpolation off, which would normally allow you to use the default values with no problems and no need to use this function at all, however a lot depends on the source artwork.","\n  ","NOTE",": This is an advanced drawing feature, so if you are not sure whether you need it or not, or don't know exactly what it does, you are probably better off not using it as it can seriously corrupt how your game is drawn.","\n  "," ","\n  "],["\n  ","gpu_set_alphatestref(val);","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","val","Real","\n        ","Sets the reference value for alpha testing from 0 to 255 (default value is 0)","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","if !gpu_get_alphatestenable()","\n    {","\n        gpu_set_alphatestenable(true);","\n        gpu_set_alphatestref(128);","\n    }","\n  ","The above code will check to see if alpha testing is enabled and if not it will switch on alpha testing and set the test threshold to 128 (only pixels with an alpha over 0.5 will be drawn).","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","GPU Control","\n        ","Next: ","gpu_set_texfilter","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["gpu_set_alphatestref"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1654"})