rh._.exports({"0":[[" ","layer_script_end"]],"1":[["layer_script_end"]],"2":[[" ","layer_script_end"]],"3":[[" ","With this function you can assign a ","script function"," to a layer and it will be called after the layer is rendered. When adding a function to a layer in this way, it will be run at the end of ","each of the different draw events"," so you may want to check in the function assigned which event is currently finished rendering and adapt the code to suit. This can be done by checking the ","event_type"," and/or the ","event_number"," (see the extended example below). Note that the function is ","not"," meant to be called in any draw events or step events, but rather only needs to be called at the start of the room in the ","Room Creation Code"," or in the ","Create Event ","/ ","Room Start Event"," of an instance."],[" ","layer_script_end","(layer_id, script);"," ","Argument"," ","Type"," ","Description"," ","layer_id"," ","String"," or ","Layer ID"," ","The unique ID value of the layer to target (or the layer name as a string)"," ","script"," ","Script Function"," ","The script function index to assign to the layer"],[" ","N/A"],[" ","In this extended example, we will first show you how a simple script function is structured to set some shader uniform data so that when the given layer is drawn, this function will be run and the shader will work correctly. In the example, it is worth noting how we check which event is being called so that the rest of the function is only run on the specific event that we require it to work on - in this case, only on the main draw event:"," ","/// @function layer_shader_start();","\n    function layer_shader_start()","\n    {","\n        if event_type == ev_draw","\n        {","\n            if event_number == ev_draw_normal","\n            {","\n                colour_to_find = shader_get_uniform(sShaderDemo5, \"f_Colour1\");","\n                colour_to_set = shader_get_uniform(sShaderDemo5, \"f_Colour2\");","\n                shader_set(s_ColourChanger);","\n                shader_set_uniform_f(colour_to_find, 1, 1, 1);","\n                shader_set_uniform_f(colour_to_set, 1, 0, 0);","\n            }","\n        }","\n    }"," ","We would then have a companion function to reset the shader after all the drawing is done:"," ","/// @function layer_shader_end();","\n    function layer_shader_end()","\n    {","\n        if event_type == ev_draw","\n        {","\n            if event_number == ev_draw_normal","\n            {","\n                shader_reset();","\n            }","\n        }","\n    }"," ","Now that we have defined our script functions for setting the shader, we then have to assign them to a specific layer so that the layer knows to call them. This would be done in the room creation code, or in the create event or room start event of some controller object (they do not need to be set every step, but rather once at the start of the room, or when the layer is initially created):"," ","var lay_id = layer_get_id(\"Instances\");","\n    layer_script_begin(lay_id, layer_shader_start);"," ","layer_script_end","(lay_id, layer_shader_end);\n  "," ","This final code block assigns the scripts to the layer."," ","Back: ","General Layer Functions"," ","Next: ","layer_shader"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["layer_script_end"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Extended Example:"]],"id":"2395"})