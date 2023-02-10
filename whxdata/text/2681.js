rh._.exports({"0":[[" ","Structs & Constructors"]],"1":[["Structs"]],"2":[["structs,new,delete,struct"]],"3":[[" ","Structs & Constructors"]],"4":[[" ","A ","struct ","is a variable that holds a collection of other variables. The variables that a struct holds can be of any ","data type"," previously mentioned and these variables can be read from and written to after the initial struct declaration, and you can also add more variables to a struct after it has been declared."," ","The variables used in a struct should follow the usual variable naming scheme, i.e.: they cannot start with a number and should only be made up of alphanumeric characters and the underscore \"_\" character, and also note that the contents of a struct are ","independent of the instance or function that created it",", and as such you can - if you wish - use built-in variable names such as ","image_index"," or ","x"," and ","y","."," ","After the initial creation, structs have no processing overhead while they exist, although they ","will"," take up space in memory. The struct syntax is as follows:"," ","<variable>"," =","\n    {"," ","    <variable>"," : ","<value>",","," ","    <variable>"," : ","<value>",",","\n        etc...","\n    };\n  "," ","So, an example of this in practice would be:"," ","mystruct =","\n    {","\n        a : 20,","\n        b : \"Hello World\"","\n    };"," ","The above code creates an instance scope struct in the variable ","mystruct"," and populates it with some values (structs can be created at local, instance and global scopes, just like any other variable - see the section on ","Variables and Variable Scope"," for more information). Note that you don't have to populate the contents of a struct when it is created initially and you can create an empty struct by simply doing this:"," ","mystruct = {};"," ","Variables can then be added to this struct at a later point in the game code. To add them afterwards you use the dot operator (in the same way as in ","Addressing Variables In Other Instances","): "," ","mystruct.newItem = \"Some Text\";"," ","This has the same result as initializing the struct like this: "," ","mystruct =","\n    {","\n        newItem : \"Some Text\"","\n    };"," ","Here is an example of a struct with various variables and data types:"," ","var _xx = 100;","\n    mystruct =","\n    {","\n        a : 10,","\n        b : \"Hello World\",","\n        c : int64(5),","\n        d : _xx + 50,","\n        e : function(a, b)","\n            {","\n                return a + b;","\n            },","\n        f : [ 10, 20, 30, 40, 50 ],","\n        g : image_index","\n    };"," ","You can see in the above code that you can define methods and use runtime functions in structs, and you can also use local and instance variables within the struct declaration."],[" ","You'll notice in the above example that the struct variable \"g\" is being set to ","image_index",", which is an instance variable. You might think that you'd need to use the ","keyword"," ","other"," in this case to get the instance variable, but this is not necessary. Essentially, when you define a struct",", all member variables on the left-hand side of the colon \":\" are the ","struct"," variables, and the values and variables on the right-hand side use the scope of whatever is defining the struct"," (in this case, an instance)."," ","Let's look at a simple example to illustrate this. Say you want to define a struct with the variables \"x\" and \"y\" and you want to set them to the \"x\" and \"y\" of the instance defining the struct. In practice the code would look like this:"," ","mystruct =","\n    {","\n        x : x,","\n        y : y","\n    };"," ","In the above code the struct member variables ","x"," and ","y"," are being set to the values held in the instance variables ","x"," and ","y",", since the right-hand side of the colon \":\" refers to the instance that is defining the struct. It is worth noting that this means you ","cannot"," use struct member variables for defining subsequent variables within the struct declaration. For example, the following would give you an error:"," ","mystruct =","\n    {","\n        a : 10,","\n        b : 10,","\n        c : a + b","\n    }"," ","The error occurs because the variables ","a"," and ","b"," are actually being evaluated at the scope of whatever is defining the struct (they are on the right-hand side of the colon \":\"), and are ","not"," the ones being defined within the struct itself."," ","IMPORTANT"," You cannot use any built-in ","global variables"," as struct member names, eg: ","game_id"," or ","fps",". You can find a full list of these global variables on ","Struct Forbidden Variables","."],[" ","Once a struct has been defined, you can access the data within it using the \"point\" notation, like this:"," ","mystruct =","\n    {","\n        a : 20,","\n        b : \"Hello World\"","\n    }"," ","\n    mystring = mystruct.b + string(mystruct.a);\n  "," ","You can also perform operations on the variables within a struct or use them in functions, just as you would with any other variable. For example:"," ","mystruct.a += 1;","\n    mystruct.b = mystruct.a + 20;","\n    mydir = point_direction(mouse_x, mouse_y, mystruct.xx, mystruct.yy);"," ","Finally, structs can have other structs nested inside them, like this:"," ","mystruct =","\n    {","\n        a :","\n        {","\n            aa : \"This is an example\"","\n        },","\n        b :","\n        {","\n            bb : \"And another one\"","\n        },","\n    };"," ","To access such nested structs you would still use the point notation, like this:"," ","var _str = mystruct.a.aa + \" \" + mystruct.b.bb;","\n    show_debug_message(_str);"," ","Another way to access data in a struct is by using the ","with"," statement. So, for example, you could do this:"," ","with (mystruct)","\n    {","\n        a += other.x;","\n    }"," ","Using ","with"," changes the scope of the code to the given struct where you can manipulate the member variables at the struct scope. Note that in the example we also use the ","other"," keyword",". This works just like in an instance when using ","with"," and will reference the instance (or struct) that is actually running the code block."," ","A last way to access data in a struct is by using the struct accessor ","$",". This allows access to struct variables using strings, for both reading: "," ","var _value = mystruct[$ \"x\"];"," ","and writing: "," ","mystruct[$ \"x\"] = 200;"," ","When a struct is no longer required it can be removed from memory using the ","delete"," operator, which flags the struct as being able to be garbage collected. This is not strictly required as the ","garbage collector"," may do this automatically if the struct is no longer referenced in your code, but it is good practice to do so and we recommend it (for example, call ","delete"," in the ","Clean Up event"," of an instance to explicitly tell the garbage collector that an instance scope struct is to be deleted). Here is an example:"," ","// Create event","\n    mystruct =","\n    {","\n        pos_x : x,","\n        pos_y : y,","\n        count : 1000","\n    };"," ","\n    // Clean Up event","\n    delete mystruct;\n  "],[" ","You can also use ","script functions"," or ","methods"," to create functions that can be used to generate new structs, which requires the use of the ","constructor"," keyword for the function and the ","new"," operator when creating a struct from such a function. See the following function:"," ","function Vector2(_x, _y) ","constructor","\n    {","\n        x = _x;","\n        y = _y;"," ","\n        static Add = function(_vec2)","\n        {","\n            x += _vec2.x;","\n            y += _vec2.y;","\n        }","\n    }\n  "," ","Or, using the method variable syntax:"," ","Vector2 = function(_x, _y) constructor","\n    {","\n        x = _x;","\n        y = _y;"," ","\n        static Add = function(_vec2)","\n        {","\n            x += _vec2.x;","\n            y += _vec2.y;","\n        }","\n    }\n  "," ","Here we are creating a function called ","Vector2"," and telling ","GameMaker"," that this is a function used for creating structs by adding the ","constructor"," keyword after its definition. You can then call this constructor function like this:"," ","v2 = new Vector2(10, 10);"," ","The variable ","v2"," will now contain a struct with the variables ","x"," and ","y"," and the ","static"," ","method variable"," ","Add","."," ","You can also make use of optional arguments in your constructor functions:"," ","function Vector2(","_x = 0, _y = 0",") constructor","\n    {","\n        x = _x;","\n        y = _y;","\n    }"," ","This constructor will now use ","0"," for the ","_x"," and ","_y"," arguments if they are not specified when the function is called. This means that you can create a new ","Vector2"," struct without having to specify any arguments:"," ","empty_vector = new Vector2();"],[" ","Functions created this way will also support single ","inheritance",", i.e.: you can create a constructor function that inherits data from another constructor function."," ","NOTE"," When working with inheritance, you cannot use method variables to define the constructor function, only script functions."," ","For example, we created the ","Vector2"," constructor function above, so we can then use that as the \"parent\" for another constructor function, which we'll call ","Vector3",":"," ","function ","Vector3(_x, _y, _z) ",":"," Vector2(_x, _y) ","constructor","\n    {","\n        z = _z;"," ","\n        static Add = function( _vec3 )","\n        {","\n            x += _vec3.x;","\n            y += _vec3.y;","\n            z += _vec3.z;","\n        }","\n    }\n  "," ","As you can see, when defining the function we use a colon \"",":","\" to separate the new constructor from the parent constructor to be inherited from. The child constructor (","Vector3",") passes the ","_x"," and ","_y"," arguments into the parent (","Vector2",") constructor, which are used to run the parent's constructor first, after which the child's constructor is executed. This way the child constructor gets the parent's variables (","x"," and ","y",") and can also define its own (","z",")."," ","You can also pass constant values into the parent constructor, so that a certain child constructor always provides the same values to its parent constructor:"," ","function item(damage) constructor","\n    {","\n        my_damage = damage;","\n    }"," ","\n    function basic_sword() : item(10) constructor {}"," ","\n    var _basic_sword = new basic_sword();","\n    show_debug_message(_basic_sword.my_damage); // Prints 10\n  "," ","This means that the damage of a basic sword will always be ","10",", since it passes that value to its parent constructor irrespective of what its own arguments might be."," ","Note that assigning a default value to an argument in a child constructor will override the parent's default value for that argument. See the following example:"," ","function parent(value = 10) constructor","\n    {","\n        show_debug_message(value);","\n    }"," ","\n    function child(value = 20) : parent(value) constructor","\n    {","\n        show_debug_message(value);","\n    }"," ","\n    var _child = new child();\n  "," ","Both of these constructors will print ","20"," to the output log, as that was the default value for the argument set by the child constructor, and the same value was passed into the parent constructor."," ","For more details on the ","new"," and ","delete"," operators, please see the following pages:"," ","new"," ","delete"],[" ","You can use ","is_instanceof"," to check if a struct belongs to the given constructor, or has the constructor as a parent constructor."," ","function item() constructor {}"," ","\n    function potion() : item() constructor {}"," ","\n    function enemy() constructor {}"," ","\n    var _potion = new potion();"," ","\n    show_debug_message(is_instanceof(_potion, potion)); // true (1)","\n    show_debug_message(is_instanceof(_potion, item)); // true (1)","\n    show_debug_message(is_instanceof(_potion, enemy)); // false (0)\n  "," ","The above code shows three constructors: ","item",", ","potion"," which is a child of ","item",", and ","enemy",", which is a separate constructor."," ","It creates a struct from the ","potion"," constructor. Using ","is_instanceof()",", we can check that the new struct:"," ","is a ","potion"," ","is an ","item"," ","is not an ","enemy"," ","This way you can check whether a struct \"is\" something, as ","a potion is an item",", so it returns ","true"," for both constructors. However if wouldn't be true the other way around: ","an item is not a potion","."," ","This functionality makes use of \"static structs\". See: ","Static Struct"],[" ","One final thing to mention about structs is that you can change what is output to the console from them for debugging. By default, calling the function ","show_debug_message()"," on a struct will output the contents of the struct (as shown above). However, it's possible to customise this message by adding a specifically named method to the struct called ","toString",":"," ","mystruct =","\n    {","\n        a : 20,","\n        b : \"Hello World\","," ","\n        toString : function()","\n        {","\n            return \"This stuct says \" + b + \", \" + string(a) + \" times!\";","\n        }","\n    }","\n    show_debug_message(mystruct);\n  "," ","Now when the ","show_debug_message()"," function is called, the ","toString"," method will be used to generate the output and - with the above example - you'll get:"," ","This struct says Hello World, 20 times!"," ","Note that you can also call the ","string()"," function on a struct reference and use that to display the contents - or the ","toString"," method - to the screen, or save it to a file, or whatever, eg:"," ","var _str = string(mystruct);","\n    draw_text(32, 32, _str);"," ","Finally, there are a number of runtime functions that you can use on structs to get the variables they contain as well as a few other things. You can find them in the following section:"," ","Variable Functions"," ","Back: ","GML Overview"," ","Next: ","Static Struct"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"7":[[" ","Instance Variables in Struct Declaration?"],[" ","Accessing Struct Variables"],[" ","Checking Constructor Inheritance"]],"8":[[" ","Constructor Functions"],[" ","Inheritance"],[" ","String Output"]],"id":"2681"})