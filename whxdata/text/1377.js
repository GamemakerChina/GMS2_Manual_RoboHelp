rh._.exports({"0":[[" ","ds_map_find_previous"]],"1":[["ds_map_find_previous"]],"2":[["ds_map_find_previous"]],"3":[[" ","ds_map_find_previous"]],"4":[[" ","This function returns the previous key stored in the DS map ","before"," the one specified in the function. This can be useful if your have to iterate through the DS map looking for something, but should be avoided if possible as it can be slow. If no such key exists then the function will return ","undefined",". You should always check this using the ","is_undefined()"," function."],[" ","ds_map_find_previous(id, key);"," ","Argument","Type"," ","Description"," ","id","DS Map ID"," ","The id of the map to use."," ","key","String"," ","The key to find the previous one to."],[" ","Any"," or ","undefined"],[" ","var size = ds_map_size(inventory) - 1;","\n    var key = ds_map_find_last(inventory);","\n    for (var i = size; i > 0; i--;)","\n    {","\n        if (key != \"gold\")","\n        {","\n            key = ds_map_find_previous(inventory, key);","\n        }","\n        else break;","\n    }"," ","The above code creates some temporary variables and then gets the ds_map size and finds the last key as stored by the computer in the map. It then uses a ","for"," loop to iterate back through the ds_map looking for the key value \"gold\". If it finds it, it breaks out the loop."," ","Back: ","DS Maps"," ","Next: ","ds_map_find_value"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1377"})