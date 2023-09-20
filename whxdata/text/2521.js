rh._.exports({"0":[[" ","struct_get_names"]],"1":[["variable_struct_get_names,struct_get_names"]],"2":[[" ","struct_get_names"]],"3":[[" ","This function returns an array with the variable names from a struct."," ","You pass in the struct reference to check, and each entry in the array will be a ","String"," of the variable names that the struct contains."," ","NOTE"," This function doesn't return the ","static"," variables of the struct. These belong to its ","Static Struct",", that you can get using ","static_get","."],[" ","struct_get_names","(struct);"," ","Argument"," ","Type"," ","Description"," ","struct"," ","Struct"," ","The struct reference to check."],[" ","Array"," (each entry is a ","String",")"],[" ","var _my_struct = {a: 7, str: \"a string\"};"," ","\n    var _arr_names = ","struct_get_names","(_my_struct);","\n    show_debug_message(\"Variables for struct: \" + string(_arr_names));"," ","\n    var _str = \"\", _len = array_length(_arr_names);","\n    for (var i = 0; i < _len; i++;)","\n    {","\n        _str = _arr_names[i] + \":\" + string(struct_get(_my_struct, _arr_names[i]));","\n        show_debug_message(_str);","\n    }\n  "," ","The above code first creates a temporary struct variable ","_my_struct"," with two variables in it: ","a"," and ","str",". Next, ","struct_get_names"," is called to get an array with the variable names for the given struct. These are displayed. Finally, a for loop is used to loop through all the variable names in the array and to look up the corresponding value in the struct ","by name"," using ","struct_get",". For each of these key-value pairs, a debug message is shown using ","show_debug_message","."],[" ","function vec3(_x, _y, _z) constructor","\n    {","\n        x = _x;","\n        y = _y;","\n        z = _z;"," ","\n        static add = function(_vec2)","\n        {","\n            x += _vec2.x;","\n            y += _vec2.y;","\n            z += _vec2.z;","\n        };","\n        static dot = function(_vec2)","\n        {","\n            return dot_product_3d(x, y, z, _vec2.x, _vec2.y, _vec2.z);","\n        };","\n    };","\n    var _v1 = new vec3(100, 20, 0);"," ","\n    var _arr_names = struct_get_names(_v1), _arr_names_static = struct_get_names(static_get(_v1));","\n    var _arr_names_all = array_concat(_arr_names, _arr_names_static);","\n    show_debug_message($\"Variable names for struct (including static): {_arr_names_all}\");\n  "," ","The extended example above shows how to include static variable names by retrieving a struct's static struct and appending those variable names to the array of variable names."," ","First a simple ","vec3"," struct is defined, which stores an ","x",", ","y"," and ","z"," variable, as well as two static methods ","add"," and ","dot",". A new struct ","_v1"," is created from this. Next, both ","_v1","'s and its static struct's variable names are retrieved using ","struct_get_names",". The two arrays are then concatenated using a call to ","array_concat",". Finally, a debug message shows the contents of this new array, that contains ","all"," of the struct's variable names."," ","NOTE"," In case the struct gets static variables from a chain or hierarchy of static structs you'll need to traverse the chain of static structs to get the names of ","all"," static variables."," ","Back: ","Variable Functions"," ","Next: ","struct_names_count"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["variable_struct_get_names,struct_get_names"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example 1: Basic Use"],[" ","Example 2: Including Static Variables"]],"id":"2521"})