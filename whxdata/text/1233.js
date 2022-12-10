rh._.exports({"0":[["ds_map_find_first"]],"1":[["ds_map_find_first"]],"2":[["ds_map_find_first"]],"3":[["\n  ","\n  "],["\n  ","This function returns the first key stored in the DS map. ","This is not the first key in the order you added them!"," DS maps are not stored in a linear form, for that use ","DS list",", so all this does is find the first key as stored by the computer. This can be useful if your have to iterate through the DS map looking for something, but should be avoided if possible as it can be slow.","\n  ","Note that this function will return ","undefined"," if the given DS map is empty.","\n  "," ","\n  "],["\n  ","ds_map_find_first(id);","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","id","DS Map ID","\n        ","The id of the map to use.","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Any"," or ","undefined","\n  "," ","\n  "],["\n  ","var size = ds_map_size(inventory) ;","\n    var key = ds_map_find_first(inventory);","\n    for (var i = 0; i < size; i++;)","\n    {","\n        if key != \"gold\"","\n        {","\n            key = ds_map_find_next(inventory, key);","\n        }","\n        else break;","\n    }","\n  ","The above code creates some temporary variables and then gets the DS map size and finds the first key as stored by the computer in the map. It then uses a ","for"," loop to iterate through the DS map looking for the key value \"gold\". If it finds it, it breaks out the loop.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","DS Maps","\n        ","Next: ","ds_map_find_last","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["ds_map_find_first"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1233"})