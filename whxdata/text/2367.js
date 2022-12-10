rh._.exports({"0":[["typeof"]],"1":[["typeof"]],"2":[["typeof"]],"3":[["\n  ","\n  "],["\n  ","This function returns the data type of any given variable as a string. The possible return values are listed in the table below:","\n  ","\n    ","\n      ","\n        ","String","\n        ","Description","\n      ","\n      ","\n        ","\"number\"","\n        ","The variable holds a real (floating point) number - this can include ","NaN"," and ","infinity","\n      ","\n      ","\n        ","\"string\"","\n        ","The variable holds a string","\n      ","\n      ","\n        ","\"array\"","\n        ","The variable references an array","\n      ","\n      ","\n        ","\"bool\"","\n        ","The variable holds a boolean (","true"," / ","false",")","\n      ","\n      ","\n        ","\"int32\"","\n        ","The variable holds a 32bit integer","\n      ","\n      ","\n        ","\"int64\"","\n        ","The variable holds a 64 bit integer","\n      ","\n      ","\n        ","\"ptr\"","\n        ","The variable holds a pointer","\n      ","\n      ","\n        ","\"undefined\"","\n        ","The variable is undefined","\n      ","\n      ","\n        ","\"null\"","\n        ","The variable holds a null value (this should not be seen normally)","\n      ","\n      ","\n        ","\"vec3\"","\n        ","The variable holds a 3 value vector","\n      ","\n      ","\n        ","\"vec4\"","\n        ","The variable holds a 4 value vector","\n      ","\n      ","\n        ","\"method\"","\n        ","The variable holds a function reference","\n      ","\n      ","\n        ","\"struct\"","\n        ","The variable holds a struct reference","\n      ","\n      ","\n        ","\"ref\"","\n        ","The variable holds an instance reference","\n      ","\n      ","\n        ","\"unknown\"","\n        ","Value is unknown. This should ","never"," be seen and signifies that something has gone wrong at the most basic level like a memory overwrite","\n      ","\n    ","\n  ","\n  ","Please note that there are cases when this function may not return the correct value for a ","method",". Consider the following two function definitions:","\n  ","a = function()","\n    {","\n        // something","\n    }","\n    ","\n    function b()","\n    {","\n        // Something","\n    }\n  ","\n  ","Technically, these are both considered methods as they are binding a function to an instance scope variable, however calling ","typeof()"," on function ","b"," will return \"number\" and ","not ","\"method\", while calling it on ","a"," will return \"method\". This is due to the fact that methods created like the one for ","b"," are assigned script indices (which are integer values), since this is the way that the compiler recognises script functions, even if the function was not defined in a script.","\n  "," ","\n  "],["\n  ","typeof(variable);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","variable","\n        ","Any","\n        ","The variable to get the data type of.","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","String"," (see table above)","\n  "," ","\n  "],["\n  ","var _str = typeof(global.ExtensionInput);","\n    show_debug_message(\" ","global.ExtensionInput is a \" + _str);","\n  ","The above code gets the data type held by the given global variable and returns the string to a local variable which is then used to output a message to the console.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Variable Functions","\n        ","Next: ","bool","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["typeof"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2367"})