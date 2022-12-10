rh._.exports({"0":[["layer_background_get_visible"]],"1":[["layer_background_get_visible"]],"2":[["layer_background_get_visible"]],"3":[["\n  ","\n  "],["\n  ","This function can be used to get the visible state of the background element. You give the background element ID (which you get when you create a background element using ","layer_background_create()"," or when you use the function ","layer_background_get_id()","), and the function will return either ","true"," if the element is currently visible, or ","false"," if it is not. Note that this return value is ","not"," affected by whether the layer the element is on is visible or not.","\n  "," ","\n  "],["\n  ","layer_background_get_visible(background_element_id);","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","background_element_id","Background Element ID","\n        ","The unique ID value of the background element to get the information from","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Boolean","\n  "," ","\n  "],["\n  ","var lay_id = layer_get_id(\"Background_sky\");","\n    var back_id = layer_background_get_id(lay_id);","\n    if layer_background_get_visible(back_id)","\n    {","\n        layer_background_visible(back_id, false);","\n    }","\n  ","The above code will get the layer ID for the layer named \"Background_sky\" and then use that to get the ID of the background element on that layer. This ID is then used to check the element visibility and if it is visible, then this property is set to ","false",".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Background Layers","\n        ","Next: ","layer_background_get_sprite","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["layer_background_get_visible"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1422"})