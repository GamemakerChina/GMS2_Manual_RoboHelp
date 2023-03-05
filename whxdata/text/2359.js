rh._.exports({"0":[[" ","Skeletal Animation"]],"2":[["Skeletal Animation,gm_SpineTintBlackColour,tint black,Spine"]],"3":[[" ","Skeletal Animation Sprites"]],"4":[[" ","The functions found in this section are ","only"," for use with sprites that have been imported from a skeletal animation file (specifically, the JSON files that ","Spine"," exports) and can be used to get information about an animation asset in your game, as well as for setting certain properties within an animation. These functions can to be used along with the regular sprite functions and variables, permitting you to (for example) mix two skeleton animations using these special functions while setting the image scale using the normal sprite instance variables (for more information on the sprite instance variables see ","here",")."," ","NOTE"," For further information on importing skeletal animation sprites made with Spine, please see the section ","Importing Non-Bitmap Sprites","."," ","You can find out more about the functions for these kinds of sprites from the sections below:"," ","Animation"," ","Skins"," ","Attachments"," ","Bones"," ","Slots"," ","Drawing and Miscellaneous"],[" ","This feature allows the dark areas of Spine sprite slots to be tinted differently to the light areas (this is a Spine IDE feature, see the ","Tint black"," section ","here"," more details). Currently, in order to make use of this feature in ","GameMaker",", you are required to use a custom ","shader"," when drawing a Spine sprite that uses it. This shader contains a global uniform variable called \"","gm_SpineTintBlackColour","\" which the runner fills with the current tint-black colour, retrieved from the Spine data automatically. The shader required is shown below:"," ","The Vertex Shader (this is the same as the default passthrough vertex shader)"," ","attribute vec3 in_Position; // (x,y,z)","\n    attribute vec4 in_Colour; // (r,g,b,a)","\n    attribute vec2 in_TextureCoord; // (u,v)"," ","\n    varying vec2 v_vTexcoord;","\n    varying vec4 v_vColour;"," ","\n    void main()","\n    {","\n        vec4 object_space_pos = vec4( in_Position.x, in_Position.y, in_Position.z, 1.0);","\n        gl_Position = gm_Matrices[MATRIX_WORLD_VIEW_PROJECTION] * object_space_pos;","\n        v_vColour = in_Colour;","\n        v_vTexcoord = in_TextureCoord;","\n    }\n  "," ","The Fragment Shader:"," ","varying vec2 v_vTexcoord;","\n    varying vec4 v_vColour;"," ","\n    uniform vec4 gm_SpineTintBlackColour; // This is the uniform containing the tint-black colour"," ","\n    void main()","\n    {","\n        vec4 tb = gm_SpineTintBlackColour;","\n        vec4 texcol = texture2D( gm_BaseTexture, v_vTexcoord );","\n        vec4 outcol;","\n        outcol.rgb = v_vColour.rgb * texcol.rgb;","\n        outcol.rgb += tb.rgb * ((tb.a * (texcol.a - 1.0)) + (1.0 - texcol.rgb)); // This line performs the tint-    black blending logic","\n        outcol.a = v_vColour.a * texcol.a;","\n        gl_FragColor = outcol;","\n    }\n  "," ","You would use this by first calling the shader, then drawing the sprite, then resetting the shader, something like this:"," ","shader_set(shd_spine_tint_black);","\n    draw_self();","\n    shader_reset();"," ","Back: ","Sprites"," ","Next: ","Sprite Information"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"11":[[" ","Tint Black Support"]],"id":"2359"})