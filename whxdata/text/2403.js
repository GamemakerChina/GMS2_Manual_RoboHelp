rh._.exports({"0":[["Script Functions vs. Methods"]],"1":[["Script Functions vs. Methods"]],"2":[["calling methods, calling script functions, method performance"]],"3":[["\n  ","\n  ","\n  ","\n  "],["\n  ","This page covers essential information about using script functions vs. methods.","\n  "],["\n  ","A ","script function"," is created with this syntax:","\n  ","function name()","\n    {","\n        code;","\n    }","\n  ","A ","method variable"," is created with this syntax:","\n  ","name = function()","\n    {","\n        code;","\n    }","\n  ","You should use the first syntax in scripts, to create global functions that can be called from any scope in your game.","\n  ","You should use the second syntax when creating functions in ","structs/constructors"," and objects. This syntax creates a variable containing a method.","\n  "],["\n  ","You can call both script functions and methods directly by using parentheses ","()",",  just like a ","runtime function",":","\n  ","// Create the function","\n    function reset_x()","\n    {","\n        x = xstart;","\n    }","\n    ","\n    // Call the function","\n    reset_x();\n  ","\n  ","You can also use the function ","script_execute()"," to run a script function, although it's now a legacy function and not recommended for use.","\n  "],["\n  ","You can store a reference to a method, in another variable, to call it later through that different variable:","\n  ","// Create method","\n    reset_alpha = function()","\n    {","\n        image_alpha = 1;","\n    }","\n    ","\n    // Pass reference and call","\n    temp_1 = reset_alpha;","\n    temp_1();\n  ","\n  ","NOTE"," See how the code doesn't put ","()"," after ","reset_alpha",". That's because we're reading the method reference and not calling it.","\n  ","In this example, calling ","temp_1"," will call ","reset_alpha",", as it stores a reference to that ","method",".","\n  ","You are completely fine to pass around a method reference in this way. When using script functions though, there is a caveat.","\n  "],["\n  ","You can also store a reference to a script function, in another variable:","\n  ","// Create function","\n    function reset_x()","\n    {","\n        x = xstart;","\n    }","\n    ","\n    // Store reference","\n    temp_1 = reset_x;\n  ","\n  ","Now, you can call ","temp_1"," by doing this:","\n  ","temp_1();","\n  ","However, since this variable refers to a ","script function",", it first has to convert it into a ","method",", and then call it.","\n  ","This can easily result in increased memory usage, especially if you're calling it every frame, because the engine now has to create a new method every frame for this call. ","\n  ","So, what is the solution?","\n  ","\n    ","Use ","script_execute()"," to call the script function via its reference, which will not create a method.","\n    ","Or, the better solution: convert your script function ","into a method"," when passing its reference.","\n  ","\n  ","To implement the second solution, your code would look like this:","\n  ","temp_1 = method(undefined, reset_x);","\n  ","This is creating a new method from the ","reset_x"," script function, using ","method()",".","\n  ","Calling ","temp_1()"," now using parentheses will not increase memory usage, as the method is already created for you.","\n  ","Again, this only applies if you're calling a script function ","indirectly",", via a reference stored in a variable. Calling it directly doesn't cause such problems.","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","GML Code Overview","\n        ","Next: ","Static Variables","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n","\n  ","\n  ","\n\n"]],"4":[["Script Functions vs. Methods"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"7":[["Basic Difference"],["Direct Calls"],["Indirect Calls: Methods"],["Indirect Calls: Script Functions"]],"id":"2403"})