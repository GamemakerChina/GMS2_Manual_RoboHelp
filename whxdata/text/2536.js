rh._.exports({"0":[["Static Variables"]],"1":[["Static Variables"]],"2":[["Static Variables,static"]],"3":[["\n  ","\n  "],["\n  ","An interesting feature of ","script functions"," and ","method variables"," is that they can have ","static variables",". A static variable is one that is defined the first time that the function is called and that will maintain its value from then onward. To create a static variable you need to define it using the ","static"," keyword, as shown in this simple example:","\n  ","counter = function()","\n    {","\n        static num = 0;","\n        return num++;","\n    }","\n  ","In the above example, the variable ","num"," is a static variable, and so will be defined as ","0"," the first time the function is called, but every time the function is called after that, the variable initialization will be ignored. So, if you then call this function like this:","\n  ","for (var i = 0; i < 10; ++i;)","\n    {","\n        show_debug_message(counter());","\n    }","\n  ","The output will be:","\n  ","0","\n    1","\n    2","\n    3","\n    4","\n    5","\n    6","\n    7","\n    8","\n    9","\n  ","If you didn't use the ","static"," keyword here then the output would simply be ","0"," for every iteration of the loop, since the variable ","num"," will be getting defined as ","0"," every time the function is called before being returned. Note that a static variable can only be changed inside the original function, and returning it will simply give you a copy of its value - essentially the shared static variable can only be changed by the function that contains it.","\n  ","A static variable is always initialized at the top of the function, so no matter where you define a static variable in the function, it will always be available to be read and changed throughout the function (even if it's used before being defined). See the following example:","\n  ","function add_health()","\n    {","\n        my_health++;","\n        show_debug_message(my_health);","\n        static my_health = 1;","\n    }","\n  ","Here the static variable \"","my_health","\" is being changed and printed to the compiler output ","before"," being initialized. While that looks wrong, it is perfectly fine because static variables are initialized ","before ","any function code is executed. Note that if there are multiple static variables in a function, the order in which they were defined will be kept when they are initialized at the top.","\n  ","You can also use the ","static"," keyword within a function to create a ","static function",", which - like with variables - simply means that the function will only be defined once, which is the first time the function is called, for example:","\n  ","function(_x, _y) Vector2 constructor","\n    {","\n        x = _x;","\n        y = _y;","\n    ","\n        static Add = function( _other )","\n        {","\n            x += _other.x;","\n            y += _other.y;","\n        }","\n    }\n  ","\n  ","In the above example, the constructor function ","Vector2"," can be used to create a struct, and the struct will have some variables, one of which is the method variable ","Add",". Since this variable has been defined as static, the function it contains will only be initialized ","once ","the first time the ","Vector2"," function is called, and all further structs created with this constructor will reference the function ","Add"," that was created initially, instead of creating a new function for each struct (for more information on structs and the ","constructor"," keyword please see ","here",").","\n  ","When using inheritance with constructors, any static variables in the child constructor will only be initialized once the parent constructor has been executed, so the child constructor's static variables will not override the parent's static variables. See the following example:","\n  ","function Parent() constructor","\n    {","\n        show_debug_message(value);","\n        static value = 10;","\n    }","\n    ","\n    function Child() : Parent() constructor","\n    {","\n        show_debug_message(value);","\n        static value = 20;","\n    }","\n    ","\n    var _child = new Child();\n  ","\n  ","Calling the ","Child()"," constructor prints this to the output log:","\n  ","10","\n    20","\n  ","The first value is from the parent constructor, and the second is from the child constructor. This shows that the child's static variable ","value"," was not initialized until the parent constructor was finished, and that in each constructor the static variable was initialized before the ","show_debug_message()"," call.","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","GML Overview","\n        ","Next: ","Arrays","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["Static Variables"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2536"})