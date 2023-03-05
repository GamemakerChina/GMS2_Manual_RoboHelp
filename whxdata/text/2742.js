rh._.exports({"0":[[" ","Surfaces"]],"2":[["Surfaces,application_surface,application surface,app surface"]],"3":[[" ","Surfaces"]],"4":[[" ","In the normal draw events, ","GameMaker"," doesn't actually draw directly to the screen, but rather draws to a ","surface"," called the ","application surface",". This surface is basically a blank \"canvas\" that can then later be manipulated before being drawn to the screen when needed, and in most cases ","GameMaker"," handles this for you (although you can also manipulate it yourself in code for shaders, scaling and many other things - further details are given below)."," ","However, apart from this application surface, you can also create your own surfaces and use them to create stunning or subtle special effects in your game. For example, you can use surfaces to \"catch\" instances, which can then be destroyed, and in this way you can create a decal effect where the sprite for the instance is displayed on the surface as if it still existed, permitting graphical effects like debris, blood, etc... without any real processing overhead. Another thing you can do with surfaces is use them as textures to be manipulated, or to create sprites \"on the fly\", or to create complex overlays. in fact, the uses for surfaces are endless!"," ","Normal surfaces are quite easy to use, but there are a few basic rules to be followed when you use them:"," ","First, you should realise that surfaces (","except"," the application surface) are \"volatile\". This means that if the device or window loses focus or is minimised (good examples are when you ALT +Tab to different window and back again on Windows, or on an Android device when the app loses focus due to a call) then the surface ","may be destroyed",". This is because it is stored ","only"," in the texture memory (","VRAM",") and may be overwritten when the target platform needs that memory for something else which means that you should ","always"," have some type of fail-safe code in place, usually with the ","surface_exists()"," function."," ","NOTE"," ","This doesn't appear to happen with sprites or other visual assets (but actually does!) as they are also stored in regular memory (RAM) and when they are removed from texture memory (VRAM) they immediately get restored from regular memory when the game regains focus."," ","Second, you should note that surfaces can require large quantities of VRAM to be used, and so you should attempt to keep them as small as possible. Normally you would try and keep them no larger than the size of the view or display window."," ","Third, you should ","only create surfaces in the draw event",". If you create a surface in the Create Event of an instance, you could potentially get the ","same"," index as the ","application_surface",". This can then cause lots of problems and confusion as you think you are using your own surface, but you are actually using the current render target. You should also always try to limit ","drawing"," to a surface in the draw event too, since due to the optimised way in which ","GameMaker"," draws to the screen, it is recommended that you keep all draw functions ","within the draw event"," - this includes clearing a surface when it is first created, etc... Drawing to a surface outside of the draw event is possible and may even be necessary for some effects, but it's not how it ","should"," be done."," ","Fourth, when drawing to a surface manually, the surface is ","always"," at the position of (0,0). This means that you may need to convert ","absolute"," coordinates into ","relative"," coordinates for the surface. For example, if you have a camera-sized surface and wish to draw something that is currently visible in the camera to that surface, you should subtract the camera view x and y coordinates from the actual x and y coordinates to get a relative position to the surface (0,0) position. So, the code would look something like this:"," ","if view_current = 0","\n    {","\n        surface_set_target(surf);","\n        with (obj_Effect)","\n        {","\n            var _vx = camera_get_view_x(view_camera[1]);","\n            var _vy = camera_get_view_y(view_camera[1]);","\n            draw_sprite(sprite_index, image_index, x - _vx, y - _vy);","\n        }","\n        surface_reset_target();","\n    }","\n    else","\n    {","\n        draw_surface(surf, 0, 0);","\n    }"," ","Finally, it is worth noting that drawing to a surface will take into consideration the colour ","and"," the alpha component of each pixel, both from the surface itself and also from what is being drawn to it. This may lead to some rather unintuitive results (for example, drawing a sprite with 0.5 alpha to a surface with 0 alpha will give a final alpha of 0.25). The reasons for this are explained on the following page, and we recommend that you read it before working with surfaces: ","Guide To Using Blendmodes"," ","NOTE"," This is not true of the ","application surface",", only user-created surfaces."," ","The basic use of a surface would be as follows:"," ","You first create a surface and assign its index to a variable."," ","You would then set the drawing target to the surface rather than the display."," ","Next, you would draw the things you wish as well as perform any other manipulations."," ","Once you are done you reset the drawing target so that all further drawing happens on the screen again."," ","Finally, you would draw the surface (or use it in a shader, or whatever is required)."," ","One thing to note is that should you require drawing the whole display to a surface (including tiles, backgrounds etc...) you can simply access the application surface itself (see below for further details) or you could assign a surface to a view port using the variable ","view_surface_id[0..7]"," as with this, all that is visible in that view port will be drawn to the corresponding surface."," ","The following functions exist to deal with surfaces (these functions are specific for creating and manipulating surfaces, but to actually draw them to the screen you should be using the specific draw functions that can be found below):"," ","surface_exists"," ","surface_create"," ","surface_create_ext"," ","surface_resize"," ","surface_set_target"," ","surface_set_target_ext"," ","surface_get_target"," ","surface_get_target_ext"," ","surface_reset_target"," ","surface_copy"," ","surface_copy_part"," ","surface_depth_disable"," ","surface_get_height"," ","surface_get_width"," ","surface_get_texture"," ","surface_get_depth_disable"," ","surface_getpixel"," ","surface_getpixel_ext"," ","surface_get_format"," ","surface_format_is_supported"," ","surface_free"," ","surface_save"," ","surface_save_part"," ","The following functions exist for drawing surfaces:"," ","NOTE"," ","When working with surfaces there is the possibility that they can cease to exist at any time due to them being stored in texture memory. You should ","ALWAYS"," check that a surface exists using ","surface_exists()"," before referencing them directly."," ","draw_surface"," ","draw_surface_ext"," ","draw_surface_part"," ","draw_surface_part_ext"," ","draw_surface_stretched"," ","draw_surface_stretched_ext"," ","draw_surface_tiled"," ","draw_surface_tiled_ext"," ","draw_surface_general"," ","Finally, you have two functions for storing and retrieving surfaces in ","Buffers",":"," ","buffer_get_surface"," ","buffer_set_surface"," ","As mentioned above, ","GameMaker"," doesn't actually render most things to the screen directly, but instead it renders them to the ","application surface",". This is essentially a surface - just like any that you can make yourself using the surface functions - and as such it can be manipulated, drawn to, sent to shaders, etc... Basically, anything that you would normally do with a surface you created can also be applied to the application surface."," ","NOTE",": The only thing you ","cannot"," do with the application surface is free it. It always exists, although the index value to access it may change."," ","When you run your game, this surface is created the first time that the ","draw event"," is called in each new room that you enter, which means that nothing is drawn until that point. However, you can still get the application surface position and resize it in the ","Create Event"," or any other event without getting any errors and the values used will be relevant to the surface when it is created. The actual sequence of events for the creation and drawing of the application surface is as follows:"," ","Pre-draw event","\n               --- > ","the application surface is created (if it doesn't exist) and the render target is set"," ","For each visible view port, or, if no views ports are active, once\n      "," ","Draw begin event"," ","Draw event"," ","Draw end event","\n                  --- > ","the application surface render target is reset here"," ","Post draw event","\n              --- > ","the application surface is now drawn to the ","display buffer"," by default"," ","(although you can switch this off using ","application_surface_draw_enable()",")"," ","Draw GUI begin event"," ","Draw GUI event"," ","Draw GUI end event"," ","The use of this surface means that you can easily create incredible transitions using shaders, or take the screen and wrap it around a 3D form, or simply scale a low-res game up to any resolution screen... The possibilities are endless!"," ","To access this surface, you need to use the built-in global variable ","application_surface"," which is explained on the following page:"," ","application_surface"," ","You also have a few specialist functions that are designed ","only ","for use with the application surface:"," ","application_surface_enable"," ","application_surface_is_enabled"," ","application_get_position"," ","application_surface_draw_enable"," ","Back: ","Drawing"," ","Next: ","Lighting"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2742"})