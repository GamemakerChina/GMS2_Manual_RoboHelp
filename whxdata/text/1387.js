rh._.exports({"0":[["layer_background_get_blend"]],"1":[["layer_background_get_blend"]],"2":[["layer_background_get_blend"]],"3":[["\n  ","\n  "],["\n  ","This function can be used to get the blend colour of the background element. You give the background element ID (which you get when you create a background element using ","layer_background_create()"," or when you use the function ","layer_background_get_id()","), and the function will return real value that represents the colour assigned.","\n  "," ","\n  "],["\n  ","layer_background_get_blend(background_element_id);","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","background_element_id","Background Element ID","\n        ","The unique ID value of the background element to get the information from","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Colour","\n  "," ","\n  "],["\n  ","var lay_id = layer_get_id(\"Background_sky\");","\n    var back_id = layer_background_get_id(lay_id);","\n    if layer_background_get_blend(back_id) == c_white","\n    {","\n        layer_background_blend(back_id, make_colour_rgb(random(255), random(255), 255));","\n    }","\n  ","The above code will get the layer ID for the layer named \"Background_sky\" and then use that to get the ID of the background element on that layer. This ID is then used to check the element blend colour and if it is equivalent to the constant ","c_white",", then the layer blend is set to a random colour.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Background Layers","\n        ","Next: ","layer_background_get_alpha","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["layer_background_get_blend"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1387"})