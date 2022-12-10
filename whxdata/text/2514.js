rh._.exports({"0":[["Shader Constants"]],"1":[["gm_Matrices,MATRIX_VIEW,MATRIX_PROJECTION,MATRIX_WORLD,MATRIX_WORLD_VIEW,MATRIX_WORLD_VIEW_PROJECTION,MATRIX_MAX,MAX_VS_LIGHTS,gm_BaseTexture,gm_LightingEnabled,gm_FogStart,gm_RcpFogRange,gm_PS_FogEnabled,gm_FogColour,gm_VS_FogEnabled,gm_AlphaTestEnabled,gm_AlphaRefValue"]],"2":[["Shader Constants,gm_Matrices,MATRIX_VIEW,MATRIX_PROJECTION,MATRIX_WORLD,MATRIX_WORLD_VIEW,MATRIX_WORLD_VIEW_PROJECTION,MATRIX_MAX,MAX_VS_LIGHTS,gm_BaseTexture,gm_LightingEnabled,gm_FogStart,gm_RcpFogRange,gm_PS_FogEnabled,gm_FogColour,gm_VS_FogEnabled,gm_AlphaTestEnabled,gm_AlphaRefValue"]],"3":[["\n  ","\n  "],["\n  ","Apart from the shader functions and constants defined in the OpenGL ES Shading Language (GLSL ES) ","Reference Pages",", there are also a number of shader constants available to you that are unique to ","GameMaker",".","\n  ","The following display matrix constants can be used as array indices when using the shader array constant ","gm_Matrices",":","\n  ","\n    ","\n      ","\n        ","Constant","\n        ","Description","\n      ","\n      ","\n        ","MATRIX_VIEW","\n        ","This array index constant holds the index to the current view matrix. The index returned would be used as an array value when calling the ","gm_Matrices"," constant within the shader code.","\n      ","\n      ","\n        ","MATRIX_PROJECTION","\n        ","This array index constant holds the index to the current projection matrix. The index returned would be used as an array value when calling the ","gm_Matrices"," constant within the shader code.","\n      ","\n      ","\n        ","MATRIX_WORLD","\n        ","This array index constant holds the index to the current world matrix. This can be used for things like lighting if you have light information in world-space. The index returned would be used as an array value when calling the ","gm_Matrices"," constant within the shader code.","\n      ","\n      ","\n        ","MATRIX_WORLD_VIEW","\n        ","This array index constant holds the index to the result of the world and view matrices multiplied together. This is often used for things like fog. The index returned would be used as an array value when calling the ","gm_Matrices"," constant within the shader code.","\n      ","\n      ","\n        ","MATRIX_WORLD_VIEW_PROJECTION","\n        ","This array index constant holds the index to the result of the world, view and projection matrices multiplied together. This is the normal transformation matrix used for vertex positions. The index returned would be used as an array value when calling the ","gm_Matrices"," constant within the shader code.","\n      ","\n      ","\n        ","MATRIX_MAX","\n        ","This is not an array index, but rather returns the size of the matrix array in the vertex shader.","\n      ","\n      ","\n        ","MAX_VS_LIGHTS","\n        ","This is not an array index, but rather returns the number of the lights in the vertex shader.","\n      ","\n    ","\n  ","\n  "," ","\n  ","The following constant is also available for lighting:","\n  ","\n    ","\n      ","\n        ","Constant","\n        ","Description","\n      ","\n      ","\n        ","MAX_VS_LIGHTS","\n        ","The maximum number of point and directional lights available in the shader","\n      ","\n    ","\n  ","\n  "," ","\n  ","The following pre-defined matrix uniforms and constants can be used in your shader to access ","GameMaker"," specific values:","\n  ","\n    ","\n      ","\n        ","Constant","\n        ","Description","\n      ","\n      ","\n        ","gm_Matrices[matrix]","\n        ","This array constant returns a transform matrix and is one of the available pre-defined uniforms that ","GameMaker"," creates for you to use within the shader code editor. The array index is chosen from one of the above listed constants.","\n      ","\n      ","\n        ","gm_BaseTexture","\n        ","This is a 2D sampler constant that returns the texture of the current object, as set by ","GameMaker",". So it would be the current sprite, surface or texture that would normally be used when drawing without the shader being called.","\n      ","\n      ","\n        ","gm_LightingEnabled","\n        ","This can be used to get or set the ","GameMaker"," lighting when using 3D.","\n      ","\n      ","\n        ","gm_FogStart","\n        ","This can be used to get the distance where polygons start to be blended with the fog colour.","\n      ","\n      ","\n        ","gm_RcpFogRange","\n        ","This can be used to get the distance at which fog is maximal and nothing can be seen anymore.","\n      ","\n      ","\n        ","gm_PS_FogEnabled","\n        ","This will return ","true"," or ","false"," if the GPU has pixel fog enabled or not.","\n      ","\n      ","\n        ","gm_FogColour","\n        ","This can be used to get the fog colour used by ","GameMaker",".","\n      ","\n      ","\n        ","gm_VS_FogEnabled","\n        ","This will return ","true"," or ","false"," if the GPU has vertex fog enabled or not.","\n      ","\n      ","\n        ","gm_AlphaTestEnabled","\n        ","This can be used to get alpha testing in the shader. See ","gpu_set_alphatestenable()"," for more information on alpha testing.","\n      ","\n      ","\n        ","gm_AlphaRefValue","\n        ","This can be used to get the current alpha testing reference value. See ","gpu_set_alphatestref()"," for more information on the alpha test reference.","\n      ","\n    ","\n  ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Shaders","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["Shader Constants"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2514"})