rh._.exports({"0":[[" ","layer_background_visible"]],"1":[["layer_background_visible"]],"2":[["layer_background_visible"]],"3":[[" ","layer_background_visible"]],"4":[[" ","Using this function you can toggle a background elements visibility. You supply the background element ID (which you get when you create a background element using ","layer_background_create()"," or when you use the function ","layer_background_get_id()","), and then set the visible argument to ","true"," or ","false",". When set to ","true"," the element will be displayed, and when set to ","false",", the element will not be displayed. Note that this is dependent on the layer visibility, and even if the background element is flagged as visible, it will not be drawn if the layer it is on is flagged as not visible."],[" ","layer_background_visible(background_element_id, visible)"," ","Argument"," ","Type"," ","Description"," ","background_element_id"," ","Background Element ID"," ","The unique ID value of the background element to change"," ","visible"," ","Boolean"," ","The visibility toggle, which can be ","true"," or ","false"],[" ","N/A"],[" ","if mouse_check_button_pressed(mb_left)","\n    {","\n        var back = layer_background_get_id(layer);","\n        if layer_background_get_visible(back)","\n        {","\n            layer_background_visible(back, false);","\n        }","\n        else","\n        {","\n            layer_background_visible(back, true);","\n        }","\n    }"," ","The above code checks for a mouse button press and if one is detected it will toggle the background visibility of the background element assigned to the layer the instance running the code is on."," ","Back: ","Background Layers"," ","Next: ","layer_background_sprite"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1835"})