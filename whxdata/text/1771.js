rh._.exports({"0":[[" ","static_set"]],"1":[["static_set"]],"2":[["static_set"]],"3":[[" ","static_set"]],"4":[[" ","This function is used to change the ","static struct"," of a struct. You supply the struct to modify, and the new static struct to apply to the first struct, which you can get from other structs or functions using ","static_get","."," ","This will override the static chain for the struct, which is used to determine which constructor(s) a struct belongs to, using ","is_instanceof","."," ","WARNING"," It's not recommended to use this function aside from deserialisation use-cases, where you need to load a struct and apply a constructor to it. See: ","Changing The Static Struct"],[" ","static_set","(struct, static_struct);"," ","Argument"," ","Type"," ","Description"," ","struct"," ","Struct"," ","The struct to set the static struct for"," ","static_struct"," ","Struct"," ","The new static struct to use for the struct"],[" ","N/A"],[" ","var _potion = json_parse(_json_string);"," ","\n    show_debug_message(is_instanceof(_potion, potion)); // false (0)"," ","\n    var _static_potion = static_get(potion);","\n    static_set(_potion, _static_potion);"," ","\n    show_debug_message(is_instanceof(_potion, potion)); // true (1)\n  "," ","In the code above, upon loading the potion struct from a JSON string, it's only created as a simple struct and doesn't belong to a constructor, nor does it have any static variables."," ","After applying the static struct for ","potion"," to it (which is a constructor), it becomes an instance of ","potion"," (as tested with ","is_instanceof()",") and also gets any static variables and static methods contained in the ","potion"," constructor."," ","Back: ","Variable Functions"," ","Next: ","variable_instance_exists"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1771"})