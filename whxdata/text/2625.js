rh._.exports({"0":[[" ","The Shader Editor"]],"1":[["shaders,shader,open GL,open GL ES"]],"2":[[" ","The Shader Editor"]],"3":[[" ","Shaders are a very powerful tool that can be used to manipulate the graphics that your game renders to the screen, permitting incredibly fast effects that can range from, for example, adding a subtle colour hue to a sprite, right up to full screen distortion effects. But what is a shader?"," ","A shader is basically a two-part program that runs directly on the graphics card itself, making it very fast since the GPU is doing all the work and freeing up CPU cycles for your game code. The full shader is comprised of a vertex shader program, and a fragment shader program (also known as a pixel shader). Both of these tiny programs work together in order to manipulate what the graphics card renders to the screen. This then permits you to manipulate in real time, the position, colour and alpha values that are actually ","rendered"," onto the ","display buffer","."," "," ","Vertex Shader"," "," ","The Vertex Shader is the programmable shader stage in the rendering pipeline that handles the processing of individual vertices (the points of the triangles used to render any image), and when you are rendering a geometry - like a sprite or a surface - ","GameMaker"," creates a stream of vertices - called a ","Vertex Buffer ","- that defines the geometry of these triangles. A sprite for example would have a geometry of two triangles (normally called ","polygons",") rendered together to form a \"quad\". This vertex stream from the Vertex Buffer is fed as an input to the Vertex Shader, which can process the vertices data in a programmable way. The Vertex Shader output is used by the GPU to assemble triangles, which are then properly clipped and culled to the view port and view camera, and then sent on to the rasterizer block of the GPU which generates a new output stream, constituted by something called ","Fragments",". These are tiny data structures, each of which is relative to a single pixel that appears on the screen."," "," ","Fragment Shader"," "," ","The Fragment Shader is the programmable shader stage in the rendering pipeline that deals with \"fragments\" - the interpolated pixels used to texture any given polygon - and they are responsible for outputting the final pixel colour of each rendered triangle pixel. Basically it works like this: the Fragment Shader receives as its input all those fragments (the individual pixels of the triangle being rendered) that have been passed along the pipeline by the Vertex Shader. It can then process these fragments to change the colour and alpha of the final destination pixel that will be drawn to the screen."," ","A complete overview of how shaders really work and what place they have in the graphics pipeline is outside the scope of this, but you can find a brief guide here:"," ","Guide To Using Shaders"],[" ","GameMaker"," supports the following shader languages:"," ","Shader Language"," ","Target Platform"," ","GLSL ES 1.0"," ","All target platforms"," ","GLSL"," ","Mac and Ubuntu (Linux)"," ","HLSL 11"," ","Windows and Xbox"," ","PSSL"," ","PlayStation 4 & 5"," ","When writing GLSL ES shaders, it is recommended to follow the ","official language specification"," as closely as possible to avoid errors as some target platforms can be stricter than others (such as the HTML5 and GX.games targets, which can be more restrictive than other platforms such as Windows, macOS, etc. when it comes to language limitations)."],[" ","To create a shader resource, simply right click "," inside the ","Asset Browser"," and select ","Create -> Shader",". Once you have created the base shader, you can then use the right mouse "," menu on the new resource to select the shader type before continuing to edit the code:"," ","The code editor itself is split into two the \"programs\" - Vertex and Fragment - when you create a new shader, with each one being available from tabs at the top of the editor. Both are created at once because you ","cannot create a shader without both parts",". Even if you wish to only use the fragment shader you will have to have created a \"pass through\" vertex shader first, which is why by default any new shader being created will have a vertex and fragment pass through shader already coded for you (in the screen shot at the top of the page, you can see that we have used the code editor pane view to show the two side by side... useful when working on both the shader programs together)."," ","It is worth noting that you can use GLSL ES shaders on ","all ","target platforms, but for them to work on the ","HTML5 ","target platform you must have enabled WebGL in the ","HTML5 Game Options"," otherwise they will not work."," ","For further details relating to shader functions and how they can be used in ","GameMaker"," please see the following pages:"," ","Shader Functions"," - The GML reference section for shaders."," ","Shader Constants"," - The constants built in to ","GameMaker"," that can be used when writing shaders."," ","GLSL ES 1.0 Specifications"," - PDF file for the OpenGL ES 1.0 Shader Language that ","GameMaker"," uses."," ","HLSL Language Reference"," - The Microsoft reference pages for using HLSL."," ","PSSL Language Presentation"," - Overview of the PSSL language in presentation format."," ","Back: ","The Asset Editors"," ","Next: ","The Sound Editor"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["Shader Editor"]],"7":[[" ","Language Support"],[" ","Creating a Shader"]],"id":"2625"})