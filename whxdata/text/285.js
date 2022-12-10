rh._.exports({"0":[["gpu_get_alphatestenable"]],"1":[["gpu_get_alphatestenable"]],"2":[["gpu_get_alphatestenable"]],"3":[["\n  ","\n  "],["\n  ","With this function you can check to see whether alpha testing is enabled (returns ","true",") or not (returns ","false","). For more information on alpha testing, see the function ","gpu_set_alphatestref()",".","\n  "," ","\n  "],["\n  ","gpu_get_alphatestenable();","\n  "," ","\n  "],["\n  ","Boolean","\n  "," ","\n  "],["\n  ","if !gpu_get_alphatestenable()","\n    {","\n        gpu_set_alphatestenable(true);","\n        gpu_set_alphatestref(128);","\n    }","\n  ","The above code will check to see if alpha testing is enabled and if not it will switch on alpha testing and set the test threshold to 128 (only pixels with an alpha over 0.5 will be drawn).","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","GPU Control","\n        ","Next: ","gpu_get_alphatestref","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["gpu_get_alphatestenable"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"285"})