rh._.exports({"0":[["Method Variables"]],"1":[["Method Variables"]],"2":[["Method Variables,methods,method"]],"3":[["\n  ","\n  "],["\n  ","A method variable is essentially a variable that has had a function assigned to it, \"binding\" the function to an instance and enabling you to use the variable to refer to the function - much like you use a ","runtime function name"," to refer to a built-in GML function. The variable used can be ","local",", ","instance"," or ","global"," in scope (see ","here"," for more information on variable scope).","\n  ","Also see: ","Script Functions vs. Methods","\n  "],["\n  ","The syntax for creating a method variable is as follows:","\n  ","name = ","function( parameter1, parameter2, ... )","\n    ","{","\n    ","    statement1;","\n    ","    statement2;","\n    ","    ...","\n    ","}","\n  ","\n  ","or","\n  ","function name( parameter1, parameter2, ... )","\n      {","\n    ","    statement1;","\n    ","    statement2;","\n    ","    ...","\n    ","}","\n  ","\n  ","To create a function in GML Visual, use ","Declare A New Function",". Enable its \"Temp\" option to create a method variable (first syntax shown above).","\n  ","In general, however, you would use the ","first ","form for methods, and the second form for defining ","script functions",", since the second form will also assign a script index to the function name while the first form will be a \"true\" method (and require the use of the ","global"," prefix if used to define a scripted function).","\n  ","NOTE"," You can check this by using both forms in project and then calling the runtime function ","typeof()"," on each of them. One will be classed as a \"number\" - since it returns a script index ID - and the other will be classed as a \"method\".","\n  ","So, keep in mind that - in general - we will always be referring to functions that have ","not ","been defined with a script index when we are talking about methods and method variables. ","\n  ","Below you can see three simple examples of creating a method variable using different scopes:","\n  ","// Local","\n    var _debug = function(message)","\n    {","\n        show_debug_message(message);","\n    }","\n    ","\n    // Instance","\n    do_maths = function(val1, val2, val3)","\n    {","\n        return (val1 * val2) - val3;","\n    }","\n    ","\n    // Global","\n    global.pd = function(_x1, _y1, _x2, _y2);","\n    {","\n        return point_distance(_x1, _y1, _x2, _y2);","\n    }\n  ","\n  ","Notice that in the above code, the various parameters that are given as inputs for the function are all named and these names are what should be used within the function to refer to the different inputs. Also note that you can use the ","return"," statement to return a value from a function for use elsewhere in your code, and that a function with ","no"," return value defined, will return ","undefined",".by default.","\n  ","NOTE"," While the variable will be in the chosen scope, the actual function will be bound to the scope that it was initially defined in. For example, ","script functions"," are all global scope and \"unbound\" (ie: they are not associated with any instances), but if you have a script function that creates another function as a method variable within it and then you call this script function from an instance, the function used within the script will ","be bound to the instance variable as a method",". In general this is not something you ever need to think about but for more complex operations with method variables it's worth taking into consideration. This also applies when using other constructs like ","with"," - when you create a method variable inside a with, the function will be bound to the instance that is currently in scope.","\n  ","Once created, the method variable can be used just as you would a runtime function or a script function, for example:","\n  ","create_vec = function(_x1, _y1, _x2, _y2);","\n    {","\n        var _array;","\n        _array[0] = point_distance(_x1, _y1, _x2, _y2);","\n        _array[1] = point_direction(_x1, _y1, _x2, _y2);","\n        return _array;","\n    }","\n    ","\n    vec = create_vec(x, y, mouse_x, mouse_y);\n  ","\n  ","Variables created within a function will follow the same rules as normal and will be scoped according to the keyword used or the scope of the function call. In the above example, we use ","var"," so the array variable is in the ","local ","scope of the function. If we didn't use the keyword, then the variable would have been created on the scope of the instance that called the function.","\n  ","Methods, just like script functions, can also take optional arguments that have default values for when they're not passed in:","\n  ","create_attachment = function(_attachment, ","_x = x",", ","_y = y",")","\n    {","\n        return instance_create_layer(_x, _y, layer, _attachment);","\n    }","\n  ","The above function takes three arguments, where the last two are optional. If they are not passed in when the function is called, then they'll use the instance's ","x"," and ","y"," coordinates by default.","\n  ","Note that if an argument is not passed in, and it does not have a default value, then it will be equal to ","undefined",".","\n  ","Methods can also make use of static variables, which maintain their values throughout every function call. Please ","read this page"," for more information.","\n  ","Below we list a few helper functions associated with method variables:","\n  ","\n    ","is_method","\n    ","method","\n    ","method_get_self","\n    ","method_get_index","\n  ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","GML Overview","\n        ","Next: ","Script Functions vs. Methods","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["Method Variables"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"7":[["Creating Methods"]],"id":"2511"})