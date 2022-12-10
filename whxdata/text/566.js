rh._.exports({"0":[["shaders_are_supported"]],"1":[["shaders_are_supported"]],"2":[["shaders_are_supported"]],"3":[["\n  ","\n  "],["\n  ","This function will do a check to see if the chosen target platform supports shaders, returning ","true"," if they do, and ","false"," if they do not. It is important to note that on ","Android",", if the project does not have any shader resources defined, then the function will ","always return ","false",", regardless of whether the device supports shaders or not.","\n  "," ","\n  "],["\n  ","shaders_are_supported();","\n  "," ","\n  "],["\n  ","Boolean","\n  "," ","\n  "],["\n  ","global.GFX = false;","\n    if shaders_are_supported()","\n    {","\n        if shader_is_compiled(sh_glass) && shader_is_compiled(sh_warp)","\n        {","\n            global.GFX = true;","\n        }","\n    }","\n  ","The above code will set a global variable to ","false",", and then if the platform supports shaders and both the shaders being checked have compiled correctly, it will be set to ","true",".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Shaders","\n        ","Next: ","shader_current","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["shaders_are_supported"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"566"})