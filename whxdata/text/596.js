rh._.exports({"0":[["gpu_get_colourwriteenable"]],"1":[["gpu_get_colorwriteenable,gpu_get_colourwriteenable"]],"2":[["gpu_get_colorwriteenable,gpu_get_colourwriteenable"]],"3":[["\n  ","\n  "],["\n  ","This function can be used to retrieve the current colour write-enable values. The function returns a 4 element 1D array with the following elements in it which will be either ","true"," (enabled) or ","false"," (disabled). By default all colour writing is set to ","true",":","\n  ","\n    ","[0] = Red channel enabled/disabled","\n    ","[1] = Green channel enabled/disabled","\n    ","[2] = Blue channel enabled/disabled","\n    ","[3] = Alpha channel enabled/disabled","\n  ","\n  "," ","\n  "],["\n  ","gpu_get_colorwriteenable();","\n  "," ","\n  "],["\n  ","Array"," (4 elements only; see above for details)","\n  "," ","\n  "],["\n  ","var cw = gpu_get_colorwriteenable();","\n    cw[3] = false;","\n    gpu_set_colorwriteenable(cw);","\n  ","The above code gets the current colour write values and then sets the alpha component to ","false",".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","GPU Control","\n        ","Next: ","gpu_get_alphatestenable","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["gpu_get_colourwriteenable"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"596"})