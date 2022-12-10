rh._.exports({"0":[["external_call"]],"1":[["external_call"]],"2":[["external_call"]],"3":[["\n  ","\n  "],["\n  ","If you have created an external function call to a ","dll"," or ","dylib"," using ","external_define()",", you can use this function to then call it. You supply the name of the previously defined function as well as each of the arguments it requires (each argument must be of the correct type, either real or string) and the function returns the result of the external call.","\n  "," ","\n  "],["\n  ","external_call(id, args[0...15]);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","id","\n        ","External Function","\n        ","The name of the function that you want to call","\n      ","\n      ","\n        ","args[0...10]","\n        ","Real"," or ","String","\n        ","The different arguments that you want to pass through to the external function","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Any"," (the type of value returned will depend on the defined function)","\n  "," ","\n  "],["\n  ","my_function = external_define(\"MyDLL.dll\", \"MyMin\", dll_cdecl, ty_real, 2, ty_real, ty_real);","\n    var _a = external_call(my_function, x, y);","\n  ","The above example code calls a previously defined external function and stores the returned value in a local variable.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","OS And Compiler","\n        ","Next: ","external_free","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["external_call"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1131"})