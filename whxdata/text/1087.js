rh._.exports({"0":[[" ","object_exists"]],"1":[["object_exists"]],"2":[["object_exists"]],"3":[[" ","object_exists"]],"4":[[" ","This function returns whether the specified value is an object asset (","true",") or not (","false","). Note that this checks to see if an object is present in the Asset Browser, and not actually in the game room. For that you should use the function ","instance_exists()","."],[" ","object_exists(obj);"," ","Argument","Type"," ","Description"," ","obj","Object Asset"," ","The index of the object to check."],[" ","Boolean"],[" ","var object_id = buffer_read(net_buffer, buffer_u16);","\n    var pos_x = buffer_read(net_buffer, buffer_u16);","\n    var pos_y = buffer_read(net_buffer, buffer_u16);"," ","\n    if (object_exists(object_id))","\n    {","\n        instance_create_layer(pos_x, pos_y, \"Instances\", object_id);","\n    }\n  "," ","The above code reads data from a buffer that was received via networking. Since it contains an object ID (used for spawning instances), we first need to ensure that the value is not invalid and that the object actually exists. For that we call ","object_exists()"," in a condition, and if that is true, we create an instance of that object at the received position."," ","Back: ","Objects"," ","Next: ","object_get_name"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1087"})