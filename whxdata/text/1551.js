rh._.exports({"0":[[" ","layer_background_xscale"]],"1":[["layer_background_xscale"]],"2":[["layer_background_xscale"]],"3":[[" ","layer_background_xscale"]],"4":[[" ","This function can be used to set the scale along the x-axis of a background element. You give the background element ID (which you get when you create a background element using ","layer_background_create()","    or when you use the function ","layer_background_get_id()","), and then set the scale value. The scale value you give is a multiplier that will be used to change the way the background element is displayed,\n    where a value of 0.5 would display the element at half scale, and a value of 2 would display at double scale. Note that negative values are valid, and will \"flip\" the element around the (0,0) position, so an x scale of -1 would show the\n    image reversed."],[" ","layer_background_xscale(background_element_id, xscale);"," ","Argument","Type"," ","Description"," ","background_element_id","Background Element ID"," ","The unique ID value of the background element to change"," ","xscale","Real"," ","The scale value to use (1 is no scaling)"],[" ","N/A"],[" ","var lay_id = layer_get_id(\"Background_water\");"," var back_id = layer_background_get_id(lay_id);"," layer_background_xscale(back_id, -1);"," ","The above code will get the layer ID for the layer named \"Background_water\" and then use that to get the ID of the background element on that layer. This ID is then used to change the element xscale."," ","Back: ","Background Layers"," ","Next: ","layer_background_yscale"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1551"})