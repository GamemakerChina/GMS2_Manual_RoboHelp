rh._.exports({"0":[["layer_element_move"]],"1":[["layer_element_move"]],"2":[["layer_element_move"]],"3":[["\n  ","\n  "],["\n  ","You can use this function to move an element from one layer to another. You give the ","element ID",", as returned by the function used to create the element or the room editor or the function ","layer_get_all_elements()",", and then you give the layer ID (which you get when you create the layer using ","layer_create()",") or the layer name (as a string - this will have a performance impact).","\n  "," ","\n  "],["\n  ","layer_element_move(element_id, layer_id)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","element_id","\n        ","Layer Element ID","\n        ","The unique ID value of the element to move","\n      ","\n      ","\n        ","layer_id","\n        ","String"," or ","Layer ID","\n        ","The unique ID value of the layer to move the element to (or the layer name as a string)","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","var a = layer_get_all_elements(layer);","\n    asset_layer = layer_create(-100);","\n    for (var i = 0; i Alt; array_length(a); i++;)","\n    {","\n        if layer_get_element_type(a[i]) == layerelementtype_sprite","\n        {","\n            layer_element_move(a[i], asset_layer)","\n        }","\n    }","\n  ","The above code gets the elements on the layer that the instance running the code is assigned to, then checks them to see if they are sprite assets, and if they are then they are moved to the layer with the ID stored in the variable \"asset_layer\".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","General Layer Functions","\n        ","Next: ","layer_set_visible","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["layer_element_move"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1460"})