rh._.exports({"0":[[" ","instanceof"]],"1":[["instanceof"]],"3":[[" ","instanceof"]],"4":[[" ","This function can be used to get the name of the ","constructor function"," that was used to create a struct. The struct itself should have been created using the "," ","new"," operator along with the constructor itself. You supply the variable with the struct reference to check and the function will return either a string with the constructor name or ","undefined","."," ","TIP"," It's recommended to use ","is_instanceof"," to check the constructor of a struct, as it additionally allows you to check using parent constructors (i.e. constructors that the struct's constructor may have inherited from). ","is_instanceof"," also allows you to check using the constructor function reference directly instead of strings."],[" ","If you pass the function a struct literal (i.e.: a struct that was created without using a constructor function) then it will simply return the string ","\"struct\"","."," ","The returned constructor name will include additional text if the constructor function was not created in a script. If it was created inside an object, its name will include the object and the event where it was created. For example, a constructor called ","test_constructor"," created in the Create event of ","Object1"," will be returned as ","\"test_constructor_gml_Object_Object1_Create_0\"",". To avoid this, create your constructors in a ","script","."," ","This function can also be used to check if a struct reference is a ","weak reference"," or not, in which case the function will return the string ","\"weakref\""," instead of the name of the function that created the struct. For more information, see the function ","weak_ref_create()","."],[" ","instanceof(struct_id);"," ","Argument"," ","Type"," ","Description"," ","struct"," ","Struct"," ","The struct reference to use."],[" ","String"," or ","undefined"],[" ","In this example we must first define the function that will be used as the constructor for our struct. The following function is defined in a script asset:"," ","function init_struct(_a, _b, _c) constructor","\n    {","\n        a = _a;","\n        b = _b;","\n        c = _c;","\n    }"," ","This function can then be used along with the ","new"," operator to create a struct and populate it with the variables set to the values of the arguments used in the function:"," ","mystruct = new init_struct(10, 100, \"Hello World\");"," ","We can then get the name of the constructor function that was used like this:"," ","var _name = instanceof(mystruct);","\n    if is_string(_name)","\n    {","\n        show_debug_message(_name);","\n    }"," ","This will print the string ","\"init_struct\""," to the output log, which is the name of the constructor function as defined in its script."," ","Back: ","Variable Functions"," ","Next: ","array_create"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Extended Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"10":[[" ","Usage Notes"]],"id":"2413"})