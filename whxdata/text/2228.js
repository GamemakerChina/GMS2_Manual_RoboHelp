rh._.exports({"0":[[" ","static_get"]],"1":[["static_get"]],"2":[["static_get"]],"3":[[" ","static_get"]],"4":[[" ","This function returns the static struct for the given function, or ","undefined"," if it has no static. The static struct is where all static variables for a function are stored."," ","You can also supply a struct, in which case it will give you the static struct for the constructor that was used to create the struct (or it may be a different struct if it was changed using ","static_set",")."," ","When using constructor inheritance, static structs are chained, i.e. you can get the static struct of a static struct, if the constructor has a parent constructor."," ","See: ","Static Struct"],[" ","static_get","(struct_or_func_name);"," ","Argument"," ","Type"," ","Description"," ","struct_or_func_name"," ","Struct"," or ","Function"," ","The struct or function for which to get the static struct"],[" ","Struct"," or ","undefined"," if no static struct is set"],[" ","function counter() {","\n        static count = 0;","\n        return count ++;","\n    }"," ","\n    repeat (10) counter()"," ","\n    // Get static struct of counter()","\n    var _static_counter = static_get(counter);"," ","\n    // Both of these read the same variable","\n    show_debug_message(counter.count); // 10","\n    show_debug_message(_static_counter.count); // 10\n  "," ","The above code creates a function ","counter()"," with a static variable. The function is called repeatedly so its static variable's value is increased."," ","The static struct for that function is then returned, and stored in a variable (","_static_counter","). Then it prints the static variable from the function, by first reading it from the function directly (","counter.count",") and then reading it from the static struct (","_static_counter.count","). Both print the same value, as they refer to the exact same variable."," ","Back: ","Variable Functions"," ","Next: ","static_set"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2228"})