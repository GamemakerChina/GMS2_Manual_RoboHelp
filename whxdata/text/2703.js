rh._.exports({"0":[[" ","Guide To Primitives And Vertex Building"]],"1":[["Guide To Primitives And Vertex Building"]],"2":[["primitive building,primitives,vertex,vertex buffers,vertex formats"]],"3":[[" ","Guide To Primitives And Vertex Building"]],"4":[[" ","This guide briefly covers how to build and use ","primitives"," using custom ","vertex formats"," and ","vertex buffers",". "," ","In general when you start working with 3D, special effects, complex drawing processes or shaders you don't need not worry too much about the vertex format being used, since ","GameMaker"," will automatically set up and pass through the ","vertex"," data for you. However, sometimes it is necessary to create your own vertex data and format it to suit, especially when you need to boost speed, or wish to pass in extra information. For example the standard vertex format includes an x, y, z 3D position, colour (with alpha), and UV texture coordinates, which, if you were creating it yourself, would look something like:"," ","vertex_format_begin();","\n    vertex_format_add_position_3d();","\n    vertex_format_add_colour();","\n    vertex_format_add_textcoord();","\n    my_format = vertex_format_end();"," ","However, if you are only using (for example) a shader to manipulate the position of the vertex, then there would be no need to pass through colour or texture data. In this case you would create your own format as so:"," ","vertex_format_begin();","\n    vertex_format_add_position_3d();","\n    my_format = vertex_format_end();"," ","In total there are five different vertex attributes that you can use when defining a vertex format:"," ","Colour"," ","Normal"," ","Position"," ","3D Position"," ","Texture coordinate"," ","In general you must ","always"," provide position or 3D position as part of the format, but all the others are optional."," ","You should note that once you have created your vertex format, the order in which you have defined the vertex attributes ","must be honoured"," when building your ","primitives",". So, if you have defined a vertex format as position, colour, and texture coordinate, then ","you ","must"," add these attributes to the primitive in the same order otherwise you will get an error",". Also note that like any other dynamic resource, a vertex format requires memory and therefore should be removed when not needed using the function ","vertex_format_delete()","."," ","Any primitives that you build are held in a ","vertex buffer",". This must be created beforehand and then referenced by the functions that are used to build your primitive. The vertex buffer can be re-used as many times as necessary to create different primitives, or it can be \"frozen\" to maintain a specific primitive type for the duration of your game or level (which is the fastest approach, so if you know that a primitive you build will not change then you should always use this option)."," ","An example of a single triangle primitive being built is shown in the following code:"," ","// CREATE EVENT","\n    v_buff = vertex_create_buffer();","\n    vertex_begin(v_buff, global.my_format);","\n    vertex_position(v_buff, 10, 10);","\n    vertex_colour(v_buff, c_white, 1);","\n    vertex_texcoord(v_buff, 0, 0);","\n    vertex_position(v_buff, 110, 10);","\n    vertex_colour(v_buff, c_white, 1);","\n    vertex_texcoord(v_buff, 1, 0);","\n    vertex_position(v_buff, 110, 110);","\n    vertex_colour(v_buff, c_white, 1);","\n    vertex_texcoord(v_buff, 1, 1);","\n    vertex_end(v_buff);"," ","\n    // DRAW EVENT","\n    var tex = sprite_get_texture(spr_Background, 0);","\n    shader_set(shd_shimmer);","\n    vertex_submit(v_buff, pr_trianglelist, tex);","\n    shader_reset();\n  "," ","Here we have first create our vertex buffer in the Create Event of the instance, then we begin the definition of the different vertices that make up our triangle primitive, giving the position, the colour, and the texture UV coordinate for each of the three points that we want to use. We then end the vertex definition, and we know that the vertex buffer with this vertex data is stored in the variable \"v_buff\".  "," ","NOTE",": If the contents of the buffer are going to be updated constantly, the buffer would be created, given the vertex data, and then be destroyed again - after it's been drawn - all in the same step."," ","We then draw the contents of the vertex buffer in the Draw Event using a shader. This is a very simple example, and is basically how ","GameMaker"," works internally, ie: When you draw a sprite, GameMaker creates a vertex buffer with four vertices creating two triangles (which make a square, also called a \"quad\"), and textures these two triangles with the sprite image. When we draw this sprite, we are submitting the vertex buffer and its contents are drawn to the screen."," ","You'll notice when we submit the vertex buffer for drawing, we supply a primitive type. The type of primitive you use can be a point, a line list or strip, or a triangle list or strip, but you are ","not"," permitted triangle fans since most mobile hardware will not accept that primitive type. Don't forget to format your vertex buffer correctly for the type of primitive that is going to be used to draw it. For example, drawing a two triangle primitive as a triangle list requires 6 points, but as a triangle strip it only requires 4 points. Which type you use is up to you and will depend on what you are wanting to draw and the effect that you want to achieve."," ","One final important point to note when using your own vertex buffers in this way is how it affects the vertex batches that are sent to the GPU. When you create a vertex buffer you are creating the lowest level of graphics data, so when you draw all that happens is that ","GameMaker"," sends your buffer directly to the graphics card. Because of this, if you want better batching, you must work it out yourself and store the things you want to batch inside the same buffer."," ","As we have already mentioned above, vertex formats are built up by using together the following 5 attribute types (added via the appropriate ","vertex_format_add_*"," function):"," ","Colour"," ","Normal"," ","Position"," ","3D Position"," ","Texture coordinate"," ","Within the GLSL ES shader, these kinds are recognised using the following 4 attributes:"," ","Colour"," ","Normal"," ","Position"," ","Texture coordinate"," ","Now, this might look odd as it seems that we can specify more attribute kinds in our vertex format than we can in the vertex shader. However, in the shader ","Position"," and ","3D Position"," are treated as the ","same ","attribute, except that ","Position"," is expected to have only \"x\" and \"y\" coordinates whereas ","3D Position"," has “x”, “y” and “z” coordinates. So how do you map what's in your vertex format to how you define attributes in your shader? Let's start by looking at a typical set of attributes from the default shader:"," ","attribute vec3 in_Position;        // (x,y,z)","\n    //attribute vec3 in_Normal;        // (x,y,z) unused in this shader.","\n    attribute vec4 in_Colour;          // (r,g,b,a)","\n    attribute vec2 in_TextureCoord;    // (u,v)"," ","And here's a chunk of code which sets up a vertex format compatible with this shader:"," ","vertex_format_begin();","\n    vertex_format_add_position_3d();","\n    vertex_format_add_colour();","\n    vertex_format_add_textcoord();","\n    my_format = vertex_format_end();"," ","Now, how does the shader attribute get matched to the vertex format type? It's just based on the naming convention:"," ","\"in_Position\""," maps to ","vertex_format_add_position","/","_3d()"," ","\"in_Colour\""," maps to ","vertex_format_add_colour()"," ","\"in_TextureCoord\""," maps to ","vertex_format_add_texcoord()"," ","Now, things get trickier when you have multiple attributes of the same kind, but things are still based on the same naming convention. We'll look at supplying additional ","colour"," and ","texture coordinates"," now, as there can only be ","one"," Position and ","one"," Normal attribute in the shader or vertex format, but there ","can"," be multiple colour or texture attributes."," ","When adding additional colour attributes to your shader, a number needs to be added to the end of the shader attribute to indicate which particular entry in the vertex format the attribute maps to. Here's an example - first the vertex format:"," ","vertex_format_begin();","\n    vertex_format_add_position_3d();","\n    vertex_format_add_colour();","\n    vertex_format_add_colour();","\n    vertex_format_add_textcoord();","\n    my_format = vertex_format_end();"," ","And now the associated shader attributes:"," ","attribute vec3 in_Position;      // (x,y,z)","\n    attribute vec4 in_Colour0;       // (r,g,b,a)","\n    attribute vec4 in_Colour1;       // (r,g,b,a)","\n    attribute vec2 in_TextureCoord;  // (u,v)"," ","In this case ","in_Colour0"," maps to the first ","vertex_format_add_colour()"," and ","in_Colour1"," maps to the second."," ","Texture coordinates are handled slightly differently to colour. Basically, anything which isn't called ","in_Position",", ","in_Normal"," or one of the ","in_Colour[0 ... ]"," attributes is treated as a texture coordinate. The order they are defined in, in the list of attributes in the shader, is what denotes which attribute in the vertex format they map to. See the following GML example:"," ","vertex_format_begin();","\n    vertex_format_add_position_3d();","\n    vertex_format_add_colour();","\n    vertex_format_add_textcoord();","\n    vertex_format_add_textcoord();","\n    vertex_format_add_textcoord();","\n    my_format = vertex_format_end();"," ","And the shader code would look something like this:"," ","attribute vec3 in_Position;      // (x,y,z)","\n    attribute vec4 in_Colour;        // (r,g,b,a)","\n    attribute vec2 in_myTexcoord;    // (u,v)","\n    attribute vec2 in_TextureCoord;  // (u,v)","\n    attribute vec2 in_Something;     // (u,v)"," ","In this example, ","in_myTexcoord",", ","in_TextureCoord"," and ","in_Something"," map to the three successive texture coordinate attributes defined in the vertex format."," ","You can find a full list of all the functions required to create vertex formats, vertex buffers and primitives from the following page:"," ","Primitives And Vertex Formats"," ","Back: ","Additional Information"," ","Next: ","Guide To Using Blendmodes"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2703"})