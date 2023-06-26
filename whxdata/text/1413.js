rh._.exports({"0":[[" ","ds_map_replace_map"]],"1":[["ds_map_replace_map"]],"2":[[" ","ds_map_replace_map"]],"3":[[" ","With this function you can replace a ","DS Map"," that has been stored in the given \"key\" with another map that has been created previously. This function is designed for creating JSON compatible maps which you would then encode using ","json_encode()"," and should only be used in conjunction with that functionality."],[" ","ds_map_replace_map(id, key, value)"," ","Argument"," ","Type"," ","Description"," ","id"," ","DS Map ID"," ","The id of the ds_map to use."," ","key"," ","String"," ","The key to replace."," ","value"," ","DS Map ID"," ","The id of the ds_map to use to replace the one previously stored in the given key."],[" ","N/A"],[" ","var temp_map = ds_map_create();","\n    ds_map_add_list(temp_map, \"list\", j_list);","\n    ds_map_add(temp_map, \"array\", j_array);","\n    ds_map_replace_map(j_map, \"maps\", temp_map);","\n    var j = json_encode(j_map);","\n    ds_map_destroy(temp_map);"," ","The above code will create a ","DS Map"," and populate it with an array and a ","DS List"," before replacing a previously stored map in the ","DS Map"," \"j_map\"."," ","Back: ","DS Maps"," ","Next: ","ds_map_is_list"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["ds_map_replace_map"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1413"})