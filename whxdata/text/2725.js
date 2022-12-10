rh._.exports({"0":[["Runner Errors"]],"1":[["Runtime Errors,Runner Errors"]],"2":[["runner errors"]],"3":[["\n  ","\n  "],["\n  ","Even after syntax checking in the code editor and then having the compiler check your code for ","compiler errors",", there are still occasions when something can go wrong. In most cases this will throw a ","Virtual Machine (VM)"," runner error (also called a ","runtime exception",") which looks like this:","\n  ","\n    ","Caption","\n  ","\n  ","Runner errors are generally more serious than compile errors as it means that there is something seriously wrong with your code that neither the code editor nor the compiler have been able to detect, and as such you should pay attention to all such errors. When one occurs, you can use the ","Copy"," button on the pop-up to copy the error to the clipboard which you can then paste into a text file (or wherever) for future reference.","\n  ","The structure of this error is as follows:","\n  ","\n    ","\n      This shows the Event that the error has occurred in as well as the Object (where applicable).","\n    ","\n      This shows the actual error.  So, it shows the ","scope ","of the error and the type of error it is. The first value in the brackets will be the instance ID of the instance that was running the code - or it could be one of the special values listed in the table below - and the second is an internal value that ","GameMaker"," uses for identifying bugs and can be ignored. In the case of the image above, it's saying that the variable ","_image"," has not been set (ie: does not exist before being accessed) on the object ","obj_EA_DEMO_Control",".","\n    ","\n      This shows the line number that the error occurs on as well as a snippet of code showing the position. Note that this is not always 100% accurate due to the way the game is compiled, but it should be enough to help you find exactly where the issue is.","\n  ","\n  ","As mentioned above, certain error messages will be identify the scope not by an instance ID value, but rather by a ","negative ","value. These values can be used to pinpoint the exact nature of the error and what it refers to with the following values possible:","\n  ","\n    ","\n      ","\n        ","Prefix","\n        ","Scope","\n      ","\n      ","\n        ","-1","\n        ","Self","\n      ","\n      ","\n        ","-2","\n        ","Other","\n      ","\n      ","\n        ","-3","\n        ","All","\n      ","\n      ","\n        ","-4","\n        ","Noone","\n      ","\n      ","\n        ","-5","\n        ","Global","\n      ","\n      ","\n        ","-6","\n        ","Not Specified","\n      ","\n      ","\n        ","-7","\n        ","Local","\n      ","\n    ","\n  ","\n  "," ","\n  ","The possible errors from the VM runner are as follows:","\n  ","\n    ","\n      ","\n      ","\n      ","\n      ","\n    ","\n    ","\n      ","\n        ","Error","\n        ","Message","\n        ","Operation","\n        ","Description","\n      ","\n      ","\n        ","DoSet","\n        ","Invalid comparison type","\n        ","Data Types","\n        ","This denotes that the runner has tried to compare two incompatible data types, like a real number with a string.","\n      ","\n      ","\n        ","DoConv","\n        ","Execution Error","\n        ","Data Types","\n        ","This denotes an error in the conversion of one data-type into another.","\n      ","\n      ","\n        ","Argument Type","\n        ","(function) argument (index) incorrect type (wrong_type) expecting a (expected_type)","\n        ","Data Types","\n        ","A value with the wrong data type was passed as an argument to the function at (index) (where an index of 1 is the ","first"," argument). A value of wrong_type was given but it should be one of expected_type instead.","\n      ","\n      ","\n        ","\n          ","\n        ","\n      ","\n      ","\n        ","DoAdd","\n        ","Execution Error","\n        ","Maths","\n        ","Something has gone wrong when using the addition (","+",") expression.","\n      ","\n      ","\n        ","DoMul","\n        ","Execution Error","\n        ","Maths","\n        ","Something has gone wrong when using the multiplication (","*",") expression.","\n      ","\n      ","\n        ","DoSub","\n        ","Execution Error","\n        ","Maths","\n        ","Something has gone wrong when using the subtraction (","-",") expression.","\n      ","\n      ","\n        ","DoSub","\n        ","Execution Engine - Cannot operate on string type","\n        ","Maths","\n        ","You are trying to subtract the wrong type of variables (for example subtract a string from a real).","\n      ","\n      ","\n        ","DoDiv","\n        ","Execution Error","\n        ","Maths","\n        ","Something has gone wrong when using the division (","/"," or ","div",") expression.","\n      ","\n      ","\n        ","DoDiv","\n        ","Execution Engine - Cannot operate on string type","\n        ","Maths","\n        ","You are trying to divide the wrong type of variables (for example divide a string by a real).","\n      ","\n      ","\n        ","DoDiv","\n        ","Divide by zero","\n        ","Maths","\n        ","You are attempting to divide by 0 (note this will only happen when using integer division, dividing a (non-zero) real by 0 will give infinity as an answer, dividing zero by zero will give NaN as an answer). You can check for these values with (","is_infinity",") and (","is_nan",")","\n      ","\n      ","\n        ","DoMod","\n        ","Execution Error","\n        ","Maths","\n        ","Something has gone wrong when using the modulo (","mod",") expression.","\n      ","\n      ","\n        ","DoMod","\n        ","Execution Engine - Cannot operate on string type","\n        ","Maths","\n        ","You are trying to use modulo (","mod",") on the wrong type of variables (for example ","mod"," a string by a real).","\n      ","\n      ","\n        ","\n          ","\n        ","\n      ","\n      ","\n        ","DoAnd","\n        ","Execution Error","\n        ","Bitwise","\n        ","Something has gone wrong when using the bitwise \"and\" (","&",") expression.","\n      ","\n      ","\n        ","DoAnd","\n        ","Execution Engine - Cannot operate on string type","\n        ","Bitwise","\n        ","You are trying to use bitwise \"and\" (","&",") on the wrong type of variables (for example trying to \"and\" a string with a real).","\n      ","\n      ","\n        ","DoOr","\n        ","Execution Error","\n        ","Bitwise","\n        ","Something has gone wrong when using the bitwise \"or\" (","|",") expression.","\n      ","\n      ","\n        ","DoOr","\n        ","Execution Engine - Cannot operate on string type","\n        ","Bitwise","\n        ","You are trying to use \"or\" (","|",") on the wrong type of variables (for example trying to \"or\" a string with a real).","\n      ","\n      ","\n        ","DoXor","\n        ","Execution Error","\n        ","Bitwise","\n        ","Something has gone wrong when using the bitwise \"xor\" (","^",") expression.","\n      ","\n      ","\n        ","DoXor","\n        ","Execution Engine - Cannot operate on string type","\n        ","Bitwise","\n        ","You are trying to use \"xor\" (","^",") on the wrong type of variables (for example trying to \"xor\" a string with a real).","\n      ","\n      ","\n        ","DoShl","\n        ","Execution Error","\n        ","Bitwise","\n        ","Something has gone wrong when bitshifting left (","<<",") a value.","\n      ","\n      ","\n        ","DoShl","\n        ","Execution Engine - Cannot operate on string type","\n        ","Bitwise","\n        ","You are trying to left bitshift (","<<",") the wrong type of variables (for example trying to bitshift a string).","\n      ","\n      ","\n        ","DoShr","\n        ","Execution Error","\n        ","Bitwise","\n        ","Something has gone wrong when bitshifting right (",">>",") a value.","\n      ","\n      ","\n        ","DoShr","\n        ","Execution Engine - Cannot operate on string type","\n        ","Bitwise","\n        ","You are trying to right bitshift (",">>",") the wrong type of variables (for example trying to bitshift a string).","\n      ","\n      ","\n        ","\n          ","\n        ","\n      ","\n      ","\n        ","DoNeg","\n        ","Execution Error","\n        ","Negate","\n        ","You are trying to turn a variable type into a negative when this type does not permit such an operation.","\n      ","\n      ","\n        ","DoNot","\n        ","Execution Error","\n        ","Negate","\n        ","You are trying to \"not\" a variable type when this type does not permit such an operation.","\n      ","\n      ","\n        ","\n          ","\n        ","\n      ","\n      ","\n        ","Push","\n        ","Execution Error - Variable Index out of range (var)","\n        ","Stack","\n        ","The variable being accessed is out with the established range for the runner.","\n      ","\n      ","\n        ","Push","\n        ","Variable Get (var)","\n        ","Stack","\n        ","The given variable has not been defined or is unknown.","\n      ","\n      ","\n        ","Pop","\n        ","Variable Index out of range (var)","\n        ","Stack","\n        ","The variable being accessed is out with the established range for the runner.","\n      ","\n      ","\n        ","Pop","\n        ","Variable Get (var)","\n        ","Stack","\n        ","The given variable has not been defined or is unknown.","\n      ","\n      ","\n        ","\n          ","\n        ","\n      ","\n      ","\n        ","With","\n        ","Cannot use global in with statement","\n        ","With","\n        ","You have tried to use \"","global","\" as a variable within a \"","with","\" statement, ie:","\n          ","with (global)","\n               {","\n               //do something;","\n               }","\n        ","\n      ","\n      ","\n        ","With","\n        ","Cannot use local in with statement","\n        ","With","\n        ","You have tried to use \"","local","\" as a variable within a \"","with","\" statement, ie:","\n          ","with (local)","\n               {","\n               //do something;","\n               }","\n        ","\n      ","\n      ","\n        ","\n          ","\n        ","\n      ","\n      ","\n        ","DoCall","\n        ","Execution Engine type error","\n        ","Engine","\n        ","This is an undefined error within the Virtual Machine. You should file a bug report should this happen (see: The Help Menu for details on how to do this.","\n      ","\n      ","\n        ","Stack Overflow","\n        ","-","\n        ","Engine","\n        ","A stack overflow occurs when too much memory is used on the call stack and when your game attempts to use more space than is available on the call stack (that is, when it attempts to access memory beyond the call stack's bounds, which is essentially a buffer overflow), the stack is said to overflow, resulting in a program crash. Restart your computer and ","GameMaker"," and if the error persists please get in touch with support and/or file a bug (as explained above).","\n      ","\n      ","\n        ","\n          ","\n        ","\n      ","\n      ","\n        ","Read Variable","\n        ","Variable not set before reading it","\n        ","Variable Initialisation","\n        ","You are trying to access a variable that hasn't been set (i.e. ","initialised",") yet. Assign a value to it first before trying to read it, e.g. ","variable = 100;",". Only ","declaring"," a variable, using e.g. ","var variable;"," will also throw this error.","\n      ","\n    ","\n  ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Error Reporting","\n        ","Next: ","Syntax Errors","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["Runner Errors"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2725"})