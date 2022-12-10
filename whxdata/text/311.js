rh._.exports({"0":[["shader_get_name"]],"1":[["shader_get_name"]],"2":[["shader_get_name"]],"3":[["\n  ","\n  "],["\n  ","With this function you can retrieve the name of a shader resource. You supply the unique ID value for the shader to get the name of and the function will return the name of the resource as a string.","\n  "," ","\n  "],["\n  ","shader_get_name(shader);","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","shader","Shader Asset","\n        ","The index of the shader to get the name of.","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","String","\n  "," ","\n  "],["\n  ","var _shader = shader_current();"," var _name = shader_get_name(_shader);"," draw_text(32, 32, \"Debug - Currently Rendering = \" + _name);","\n  ","The above code will get the name of the given shader and draw it to the screen.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Shaders","\n        ","Next: ","shader_get_uniform","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["shader_get_name"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"311"})