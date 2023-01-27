rh._.exports({"0":[[" ","layer_set_visible"]],"1":[["layer_set_visible"]],"2":[["layer_set_visible"]],"3":[[" ","layer_set_visible"]],"4":[[" ","With this function you can toggle the visibility of a layer. You supply the layer ID (which you get when you create the layer using ","layer_create()",") or the layer name (as a string - this will have a performance impact) as well as the toggle value for the layer where visible is ","true"," and invisible is ","false","."," ","When a layer is invisible, nothing that is assigned to the layer will be drawn, and if any instances are assigned to the layer then they will not even run their draw event (much the same as if you set the instance variable ","visible"," to ","false","). Note that any instances that are already flagged as invisible will ","not"," be flagged as visible if the layer they are on is set to visible, as these are two independent settings, although their behaviour is the same."],[" ","layer_set_visible(layer_id, visible)"," ","Argument"," ","Type"," ","Description"," ","layer_id"," ","String"," or ","Layer ID"," ","The unique ID value of the layer to target (or the layer name as a string)"," ","visible"," ","Boolean"," ","Whether the layer should be visible (","true",") or not (","false",")"],[" ","N/A"],[" ","var lay_id = layer_get_id(\"Instances\");","\n    if layer_get_visible(lay_id)","\n    {","\n        layer_set_visible(lay_id, false);","\n    }","\n    else","\n    {","\n        layer_set_visible(lay_id, true);","\n    }"," ","The above code gets the ID value for the layer named \"Instances\" in the room editor, then uses the ID to check if the layer is visible or not, toggling the layer visibility depending on the returned value."," ","Back: ","General Layer Functions"," ","Next: ","layer_get_visible"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1791"})