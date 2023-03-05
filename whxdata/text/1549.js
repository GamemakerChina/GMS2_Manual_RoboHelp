rh._.exports({"0":[[" ","shader_set_uniform_i"]],"1":[["shader_set_uniform_i"]],"2":[["shader_set_uniform_i"]],"3":[[" ","shader_set_uniform_i"]],"4":[[" ","With this function you can set the value (or values) of a shader constant. You must previously have gotten the \"handle\" of the constant using the function ","shader_get_uniform()",", and you will have to know what type of constant it is to pass the correct number of integer values through to it, ie: if you have a ","vec2"," you will need to pass two values to the function."," ","NOTE",": All uniforms must be set ","after"," calling the function ","shader_set()",", and before calling ","shader_reset()","."],[" ","shader_set_uniform_i(handle, value1 [, value2, value3, value4]);"," ","Argument"," ","Type"," ","Description"," ","handle"," ","Shader Uniform Handle"," ","The handle of the shader constant to set."," ","value1 ... value4"," ","Real"," ","The integer value (or values) to set the shader constant to."],[" ","N/A"],[" ","shader_set(shader_Glass);","\n    shader_params = shader_get_uniform(shader_glass, \"u_vParams\");","\n    shader_set_uniform_i(shader_params, 0, 65, 255);","\n    draw_self();","\n    shader_reset();"," ","The above code will get the handle of the shader constant \"u_vParams\" ( a ","vec3","), then set that constant to the given integer values."," ","Back: ","Shaders"," ","Next: ","shader_set_uniform_i_array"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1549"})