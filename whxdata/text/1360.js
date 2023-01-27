rh._.exports({"0":[[" ","shader_get_uniform"]],"1":[["shader_get_uniform"]],"2":[["shader_get_uniform"]],"3":[[" ","shader_get_uniform"]],"4":[[" ","Since you cannot change the value of a shader constant within the shader itself, you have to set it before calling the shader using one of the available ","uniform set"," functions. However, to be able to do that you must first call this function to get the \"handle\" of the shader constant that you will want to change."," ","NOTE",": Although a shader is made up of two discreet programs (vertex and fragment) this function will not differentiate between the two and will return the handle of the shader constant from either of them."],[" ","shader_get_uniform(shader, uniform);"," ","Argument"," ","Type"," ","Description"," ","shader"," ","Shader Asset"," ","The index of the shader to use."," ","uniform"," ","String"," ","The shader constant to get the handle of (a string)."],[" ","Shader Uniform Handle"],[" ","shader_params = shader_get_uniform(shd_glass, \"u_vRefractColour\");"," ","The above code will get the handle of the shader constant \"u_vRefractColour\"."," ","Back: ","Shaders"," ","Next: ","shader_get_sampler_index"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1360"})