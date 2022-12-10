rh._.exports({"0":[["vertex_format_add_custom"]],"1":[["vertex_format_add_custom,vertex_type_float1,vertex_type_float2,vertex_type_float3,vertex_type_float4,vertex_type_colour,vertex_type_ubyte4,vertex_usage_position,vertex_usage_colour,vertex_usage_normal,vertex_usage_textcoord,vertex_usage_blendweight,vertex_usage_blendindices,vertex_usage_depth,vertex_usage_tangent,vertex_usage_binormal,vertex_usage_fog,vertex_usage_sample"]],"2":[["vertex_format_add_custom,vertex_type_float1,vertex_type_float2,vertex_type_float3,vertex_type_float4,vertex_type_colour,vertex_type_ubyte4,vertex_usage_position,vertex_usage_colour,vertex_usage_normal,vertex_usage_textcoord,vertex_usage_blendweight,vertex_usage_blendindices,vertex_usage_depth,vertex_usage_tangent,vertex_usage_binormal,vertex_usage_fog,vertex_usage_sample"]],"3":[["\n  ","\n  "],["\n  ","This function permits you to use a custom data type for specific vertex format attributes as part of the new vertex format being created. The available values to use are defined by the data type constant that you choose, listed below:","\n  ","\n    ","\n      ","\n      ","\n    ","\n    ","\n      ","\n        ","Vertex Data Type Constant","\n      ","\n      ","\n        ","Constant","\n        ","Description","\n      ","\n      ","\n        ","vertex_type_float1","\n        ","A single floating point value","\n      ","\n      ","\n        ","vertex_type_float2","\n        ","Two floating point values","\n      ","\n      ","\n        ","vertex_type_float3","\n        ","Three floating point values","\n      ","\n      ","\n        ","vertex_type_float4","\n        ","Four floating point values","\n      ","\n      ","\n        ","vertex_type_colour","\n        ","Four component values (r, g, b, a)","\n      ","\n      ","\n        ","vertex_type_ubyte4","\n        ","Four component unsigned byte values (from 0 to 255)","\n      ","\n    ","\n  ","\n  ","\n    The use that these constants will be put too also needs to be defined so that the values can be \"bound\" properly within the shader being created. This is necessary due to the fact that DX and OpenGL have different requirements so if you don't bind them properly, they won't come through right in the shader. The available usage constants that you can choose are listed below and those you use will depend on the specifics of the shader being created:","\n  ","\n    ","\n      ","\n      ","\n    ","\n    ","\n      ","\n        ","Vertex Usage Type Constant","\n      ","\n      ","\n        ","Constant","\n        ","Description","\n      ","\n      ","\n        ","vertex_usage_position","\n        ","position values (x, y, z)","\n      ","\n      ","\n        ","vertex_usage_colour","\n        ","colour values (r, g, b, a)","\n      ","\n      ","\n        ","vertex_usage_normal","\n        ","vertex normal values (nx, ny, nz)","\n      ","\n      ","\n        ","vertex_usage_textcoord","\n        ","UV coordinates (u, v)","\n      ","\n      ","\n        ","vertex_usage_blendweight","\n        ","the blendweight of the input matrix (for skeletal animation, for example)","\n      ","\n      ","\n        ","vertex_usage_blendindices","\n        ","the indices of the matrices to use (for skeletal animation, for example)","\n      ","\n      ","\n        ","vertex_usage_depth","\n        ","vertex depth buffer value","\n      ","\n      ","\n        ","vertex_usage_tangent","\n        ","tangent values","\n      ","\n      ","\n        ","vertex_usage_binormal","\n        ","binormal values","\n      ","\n      ","\n        ","vertex_usage_fog","\n        ","fog values","\n      ","\n      ","\n        ","vertex_usage_sample","\n        ","sampler index","\n      ","\n    ","\n  ","\n  ","\n    There are some important things to note when using custom formats like these:","\n  ","\n    ","The ","vertex_format_add_custom()"," function only supports ","vertex_usage_position",", ","vertex_usage_colour",", ","vertex_usage_normal"," and ","vertex_usage_textcoord"," when using GLSL shaders. These will map to the shader attributes ","in_Position",", ","in_Colour[0 - ...]",", ","in_Normal"," respectively (anything that is not one of these three attributes - eg: texture coordinates - can be mapped to any attribute you define).","\n    ","In general you should use ","vertex_usage_textcoord"," for all extra parameters where possible, as types like ","vertex_usage_blendweight"," and ","vertex_usage_tangent"," are close to deprecated in most shader languages, and probably won't convert properly. Instead use ","vec",", ","vec2",", ","vec3"," or ","vec4"," types ","vertex_usage_textcoord"," and everything should work fine.","\n    ","GLSL ES does ","not"," support integer attributes, so passing in ","ivec4","'s does not work (this type is usually used when passing in ","vertex_usage_blendindices","). What you need to do is pass in texture coordinates and then in the shader, convert them to ","ivec4"," like this:","\n  ","\n  "," ","\n  ","attribute vec3 in_Position;","\n    attribute vec4 in_BlendIndices;","\n    attribute vec4 in_BlendWeights;","\n    ","\n    varying vec4 v_vColour;","\n    varying mat4 v_mat;","\n    ","\n    void main()","\n    {","\n        gl_Position = gm_Matrices[MATRIX_WORLD_VIEW_PROJECTION] * vec4( in_Position.xyz, 1.0);","\n        v_vColour = in_BlendWeights;","\n         ivec4 t = ivec4(in_BlendIndices);","\n         v_mat = gm_Matrices[ t.x ];","\n    }\n  ","\n  ","\n    ","Blend weights are usually stored in an array and then accessed using blend indices, but you can see here that instead of defining ","in_BlendIndices"," as an ","ivec4"," attribute, it's a ","vec4",", then cast to an ","ivec4"," in the code. This is then used to index the array created using the ","gm_Matrix"," (you can only access an array using an ","INT"," value - not a float).","\n    ","\n     \n  ","\n  "],["\n  ","vertex_format_add_custom(type, usage);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","type","\n        ","Vertex Data Type Constant","\n        ","The data type that this custom vertex data will hold (see the ","type constants"," listed above).","\n      ","\n      ","\n        ","usage","\n        ","Vertex Usage Type Constant","\n        ","The use that the data will get(see the ","usage constants"," listed above).","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","vertex_format_begin();","\n    vertex_format_add_textcoord();","\n    vertex_format_add_custom(vertex_type_float3, vertex_usage_position);","\n    my_format = vertex_format_end();","\n  ","The above code will create a new vertex format with just texture and 3 custom floating point values for position. It is then stores the format id in the variable \"my_format\".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Primitives And Vertex Formats","\n        ","Next: ","vertex_format_end","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["vertex_format_add_custom"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2576"})