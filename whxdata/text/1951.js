rh._.exports({"0":[["layer_get_all_elements"]],"1":[["layer_get_all_elements"]],"2":[["layer_get_all_elements"]],"3":[["\n  ","\n  "],["\n  ","You can use this function to get the ","element IDs"," of the given layer. You supply the layer ID (which you get when you create the layer using ","layer_create()",") or the layer name (as a string - this will have a performance impact) and the function will return an ","array"," of IDs, where each entry in the array is a unique ID for an element on that layer. For example, if the layer is an Asset Layer, the array will be populated with the ID values for each sprite asset that is assigned to the layer. Note that using code to work with layers means that you can assign different element types to the same layer - so you can have sprite assets along with instances, for example - in which case you can then use the function ","layer_get_element_type()"," to get the type of element the ID relates to.","\n  "," ","\n  "],["\n  ","layer_get_all_elements(layer_id)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","layer_id","\n        ","String"," or ","Layer ID","\n        ","The unique ID value of the layer to get the elements from (or the layer name as a string)","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Array"," of ","Layer Element ID","s","\n  "," ","\n  "],["\n  ","var a = layer_get_all_elements(layer);","\n    for (var i = 0; i < array_length(a); i++;)","\n    {","\n        if layer_get_element_type(a[i]) == layerelementtype_sprite","\n        {","\n            layer_sprite_destroy(a[i])","\n        }","\n    }","\n  ","The above code gets the IDs for all the instance elements assigned to the layer of the instance running the code. The code then checks to see if any of the returned elements are sprite assets and if they then they are destroyed.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","General Layer Functions","\n        ","Next: ","layer_get_element_layer","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["layer_get_all_elements"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1951"})