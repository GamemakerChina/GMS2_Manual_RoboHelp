rh._.exports({"0":[[" ","layer_background_htiled"]],"1":[["layer_background_htiled"]],"2":[["layer_background_htiled"]],"3":[[" ","layer_background_htiled"]],"4":[[" ","Using this function you can change whether the given background element on a layer should be tiled horizontally or not. You give the background element ID (which you get when you create a background element using ","layer_background_create()"," or when you use the function ","layer_background_get_id()","), and then set the tiling value. If set to ","true"," then the element will be displayed tiled horizontally across the room, and when set to ","false",", the element will not be tiled. This function is for 2D projects only, and will not work correctly when a 3D camera projection is used."],[" ","layer_background_htiled(background_element_id, tiled);"," ","Argument"," ","Type"," ","Description"," ","background_element_id"," ","Background Element ID"," ","The unique ID value of the background element to change"," ","tiled"," ","Boolean"," ","The horizontal tiling toggle, which can be ","true"," or ","false"],[" ","N/A"],[" ","var back = layer_background_get_id(layer);","\n    if !layer_background_get_htiled(back) || !layer_background_get_vtiled(back)","\n    {","\n        layer_background_htiled(back, true);","\n        layer_background_vtiled(back, true);","\n    }"," ","The above code will check the background element assigned to the layer the instance running the code is on and if it is not tiled in either direction it will set it to tile vertically and horizontally."," ","Back: ","Background Layers"," ","Next: ","layer_background_vtiled"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1683"})