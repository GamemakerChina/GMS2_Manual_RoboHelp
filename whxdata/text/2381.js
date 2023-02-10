rh._.exports({"0":[[" ","Runtime Functions"]],"1":[["Runtime Functions"]],"2":[["functions,built-in functions"]],"3":[[" ","Runtime Functions"]],"4":[[" ","The general definition of a function is something like this:"," ","A function has an input and an output, and the output is related to the input."," ","In ","GameMaker"," this translates into two different things, but they both work the same way:"," ","Runtime Functions"," - A ","runtime"," function is one that is supplied as part of the ","GameMaker Language"," (GML). These are built in to the language and can be used to make things happen in your games and there are a great number of GML runtime functions available to you, all of which are explained in the ","Language Reference"," section of the manual."," ","Script Functions And Methods ","- ","Script ","functions"," and ","M","ethod Variables"," are functions that you have created yourself using the basic building blocks of the ","GameMaker Language"," (GML), and these can include runtime functions as part of their code."," ","In both of the above cases a function has the form of a function ","name",", followed by the ","input ","argument","s"," between brackets ","()"," and separated by commas (if the function has no input arguments then just brackets are used). This page concentrates on the ","runtime functions"," (ie: the ones that are built-in to GameMaker to form the GameMaker Language), but the general rules shown below follow for all function types."," ","Here is an outline of the structure of a function:"," ","<function>(<arg0>, <arg1> ,... <argN>);"," ","Some functions can return values and can be used in ","expression","s",", while others simply execute commands, as illustrated in the following two runtime function examples:"," ","// Destroy the calling instance","\n    // This requires no arguments and returns nothing","\n    instance_destroy();"," ","\n    // Get the distance from the current instance position to the mouse position","\n    // This takes four arguments and returns a real value","\n    dist = point_distance(x, y, mouse_x, mouse_y);\n  "," ","NOTE"," Anywhere the manual has \"N/A\" as a return value for a function, it means that the function is not meant to return any value as part of its operation. If you try to check for a return value from these functions then you will get the value ","undefined",". "," ","Sometimes the return value of a function may be a value that you want to use in an ","assignment",", but you should note that it is impossible to use any function ","directly"," as the left-hand side of an assignment. For example, the following code to set the speed on an instance would give you an error:"," ","instance_nearest(x, y, obj).speed = 0;"," ","The return value for the expression in that code example is an integer number (the unique ID value for the nearest instance) and so it must be enclosed in brackets to be used in this way and properly address the instance required (see ","Addressing Variables In Other Instances"," for more information). The above code would be correctly written as:"," ","(instance_nearest(x, y, obj)).speed = 0;"," ","\n    //or more correctly still"," ","\n    var inst = instance_nearest(x, y, obj);","\n    inst.speed = 0;"," ","\n    function test ()","\n    {","\n        test();"," ","\n        if (test)","\n        {","\n            test();","\n        }","\n    }\n  "," ","The ","Language Reference"," section of the manual lists all of the runtime functions available to you and gives examples of how they can be used as well as other important information about what they may return or any events that they may trigger, etc... For more information on user defined script functions and methods, see the section on ","Script Functions"," and the section on ","Method Variables","."," ","Back: ","GML Overview"," ","Next: ","Variables And Variable Scope"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2381"})