rh._.exports({"0":[[" ","ds_map_values_to_array"]],"1":[["ds_map_values_to_array"]],"2":[[" ","ds_map_values_to_array"]],"3":[[" ","With this function you can retrieve all of the values that a DS map contains for each key in the map. You supply the DS map ID to get the keys from (as returned by ","ds_map_create()",") and the function will return an ","array"," where each entry in the array is a value from the DS map (for example, if the map has 10 keys, then an array of 10 entries will be returned with each entry corresponding to a value for a key). The function has an optional second argument where you can supply an array that you have created, in which case the map key value data will be appended onto any existing data in the array. Note that the function will modify the array supplied directly, but will also return a reference to it (or a reference to a new array if none is supplied)."],[" ","ds_map_values_to_array(id, [array])"," ","Argument"," ","Type"," ","Description"," ","id"," ","DS Map"," ","The id of the map to use."," ","[array]"," ","Array"," ","OPTIONAL"," The array to append the DS map values to."],[" ","Array"],[" ","var _values = ds_map_values_to_array(lvl_score);","\n    var _total = 0;","\n    var _length = array_length(_values);"," ","\n    for (var i = 0; i < _length; i ++)","\n    {","\n        _total += _values[i];","\n    }"," ","\n    draw_text(32, 32, \"Total score for all levels: \" + string(_total));\n  "," ","The above retrieves all the values from a DS map for each key in the map and stores them in a local variable as an array. It then loops through the array and adds each of the values to a local variable which is then used to display the total of all the values."," ","Back: ","DS Maps"," ","Next: ","ds_map_set"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["ds_map_values_to_array"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1853"})