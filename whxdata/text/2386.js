rh._.exports({"0":[["external_define"]],"1":[["external_define,dll_cdecl,dll_stdcall,ty_real,ty_string"]],"2":[["external_define,dll_cdecl,dll_stdcall,ty_real,ty_string"]],"3":[["\n  ","\n  "],["\n  ","This function can be used to define an external function call to a specific dll (for Windows) or dylib (for Mac). This file can be either an included file or part of an extension.","\n  ","You supply the name (and path) of the file, then the name of the function that you wish to define. Next you need to define the calling convention to be used (see the constants list below) as well as the type of result to be expected (also a constant, as listed below).","\n  ","Finally you must give the number of arguments that the function can take (from 0 to 15) and for each of the arguments you must specify its type too. Please note that for functions with 4 or more arguments, all of them ","must"," be of type ","ty_real",".","\n  ","NOTE",": This is only for dll or dylib that have been added as \"Included Files\" to the ","GameMaker"," IDE. It will not work with those files added as extensions, since those require that you define the functions in the extension package itself.","\n  ","\n    ","\n      ","\n      ","\n    ","\n    ","\n      ","\n        ","External Call Type Constants","\n      ","\n      ","\n        ","Constant","\n        ","Description","\n      ","\n      ","\n        ","dll_cdecl","\n        ","This is the default C, C++ call","\n      ","\n      ","\n        ","dll_stdcall","\n        ","This is the standard WinAPI call (Windows ","dll"," only)","\n      ","\n    ","\n  ","\n  ","\n    ","\n      ","\n      ","\n    ","\n    ","\n      ","\n        ","External Data Type Constants","\n      ","\n      ","\n        ","Constant","\n        ","Description","\n      ","\n      ","\n        ","ty_real","\n        ","A real number argument","\n      ","\n      ","\n        ","ty_string","\n        ","A null-terminated string argument","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","external_define(dll, name, calltype, restype, argnumb, argtype[0], argtype[1], ...argtype[10]);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","dll","\n        ","String","\n        ","The name of the DLL file (string)","\n      ","\n      ","\n        ","name","\n        ","String","\n        ","The name of the function (string)","\n      ","\n      ","\n        ","calltype","\n        ","External Call Type Constant (dll_*)","\n        ","The calling convention used","\n      ","\n      ","\n        ","restype","\n        ","External Data Type Constant (ty_*)","\n        ","The type of the result to expect","\n      ","\n      ","\n        ","argnumb","\n        ","Real","\n        ","The number of arguments (0 - 10)","\n      ","\n      ","\n        ","argtype[0 ... 10]","\n        ","External Data Type Constant (ty_*)","\n        ","The types of the arguments being used","\n      ","\n    ","\n  ","\n  "," ","\n  "," ","\n  "],["\n  ","External Function","\n  "," ","\n  "],["\n  ","my_funcion = external_define(\"MyDLL.dll\", \"MyMin\", dll_cdecl, ty_real, 2, ty_real, ty_real);","\n  ","The above example code will define an external function called \"MyMin\" with two arguments.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","OS And Compiler","\n        ","Next: ","external_call","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["external_define"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2386"})