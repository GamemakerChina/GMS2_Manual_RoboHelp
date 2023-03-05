rh._.exports({"0":[[" ","shader_enable_corner_id"]],"1":[["shader_enable_corner_id"]],"2":[["shader_enable_corner_id"]],"3":[[" ","shader_enable_corner_id"]],"4":[[" ","With this function you can set a global state for all shaders being used where, when enabled, the shader \"steals\" 2 bits from the input colour values. The first is from the lower bit of the red colour value, and the second is from the lower bit of the blue colour value. These values can then be recovered in the shader to work out which vertex you are dealing with (ie: which corner)."],[" ","shader_enable_corner_id(enable);"," ","Argument"," ","Type"," ","Description"," ","enable"," ","Boolean"," ","Enable (","true",") or disable (","false",") this function."],[" ","N/A"],[" ","shader_enable_corner_id(true);"," ","The above code will enable the use of colour bits for the corner id for all shaders."," ","Back: ","Shaders"," ","Next: ","shader_get_name"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"597"})