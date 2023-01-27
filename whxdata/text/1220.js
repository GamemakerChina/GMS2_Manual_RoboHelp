rh._.exports({"0":[[" ","layer_background_get_alpha"]],"1":[["layer_background_get_alpha"]],"2":[["layer_background_get_alpha"]],"3":[[" ","layer_background_get_alpha"]],"4":[[" ","This function can be used to get the alpha value of the background element. You give the background element ID (which you get when you create a background element using ","layer_background_create()"," or when you use the function ","layer_background_get_id()","), and the function will return a value between 0 (fully transparent) and 1 (fully opaque)."],[" ","layer_background_get_alpha(background_element_id);"," ","Argument","Type"," ","Description"," ","background_element_id","Background Element ID"," ","The unique ID value of the background element to get the information from"],[" ","Real"," (from 0 to 1)"],[" ","var lay_id = layer_get_id(\"Background_sky\");","\n    var back_id = layer_background_get_id(lay_id);","\n    if layer_background_get_alpha(back_id) < 0.1","\n    {","\n        layer_background_destroy(back_id);","\n    }"," ","The above code will get the layer ID for the layer named \"Background_sky\" and then use that to get the ID of the background element on that layer. This ID is then used to check the element alpha and if it is less than 0.1, then the layer element is destroyed."," ","Back: ","Background Layers"," ","Next: ","layer_background_get_index"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1220"})