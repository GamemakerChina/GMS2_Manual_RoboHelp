rh._.exports({"0":[[" ","layer_destroy_instances"]],"1":[["layer_destroy_instances"]],"2":[["layer_destroy_instances"]],"3":[[" ","layer_destroy_instances"]],"4":[[" ","This function can be used to destroy all the instances assigned to the given layer. You supply the layer ID (which you get when you create the layer using ","layer_create()",") or the layer name (as a string - this will have a performance impact), and then all instances that are on the layer will be removed from the game, triggering their ","Destroy"," and ","Clean Up"," events."],[" ","layer_destroy_instances(layer_id)"," ","Argument"," ","Type"," ","Description"," ","layer_id"," ","String"," or ","Layer ID"," ","The unique ID value of the layer (or the layer name as a string)"],[" ","N/A"],[" ","if global.game_over","\n    {","\n        layer_destroy_instances(layer);","\n    }"," ","The above code will check a global variable and if it's ","true"," then all instances that are on the layer of the calling instance will be destroyed (including the calling instance)."," ","Back: ","General Layer Functions"," ","Next: ","layer_element_move"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"919"})