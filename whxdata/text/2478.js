rh._.exports({"0":[[" ","surface_create"]],"1":[["surface_create"]],"2":[["surface_create"]],"3":[[" ","surface_create"]],"4":[[" ","This function is used to create a surface and will return the index of the surface which should be stored in a variable for future function calls. When the surface is first created, it may contain \"noise\" as basically it is just an area of memory that is put aside for the purpose (and that memory may still contain information), so you may want to clear the surface before use with a function like ","draw_clear_alpha()","."," ","It is highly recommended that all surfaces be created with a size that is a power of 2, i.e. 16, 128, 512 or 1024 pixels in size, for example. This is not exactly necessary on certain platforms (like Windows and MacOS) but it will certainly increase compatibility on those targets, while for HTML5 and devices it is essential and very it's important that you remember this or you may run into problems later."],[" ","You can optionally specify the format that will be used to store the surface data in memory. The default format is ","surface_rgba8unorm","."," ","Any one of the following formats can be used when creating a surface:"," ","Surface Format Type Constant"," ","Constant"," ","Description"," ","surface_rgba8unorm"," ","(Default) ","This format supports 4 channels (red, green, blue, alpha) with 8 bits each, meaning each channel has a 0-255 range"," ","\n          \"unorm\" refers to these values being normalised into a 0-1 range when read in shaders\n        "," ","surface_r8unorm"," ","This format supports a single channel (red) with an 8-bit value (0-255)"," ","\n          Since it only contains one channel, it takes a quarter of the space compared to the format above (which stores RGBA)"," ","\n          When read in a shader, all channels except red will be 0\n        "," ","surface_rg8unorm"," ","This is similar to the format above, however it contains two channels: red and green"," ","surface_rgba4unorm"," ","This format supports 4 channels (red, green, blue, alpha) with 4 bits each, meaning each channel has a 0-15 range"," ","surface_rgba16float"," ","This format supports 4 channels (red, green, blue, alpha) with each channel being a 16-bit float, providing a higher precision"," ","\n          An example use case is HDR, as this format would allow you to use values past the default 0-255 colour range\n        "," ","surface_r16float"," ","This format supports a single channel (red) with a 16-bit floating point value"," ","\n          Since it only contains one channel, it takes a quarter of the space compared to the format above (which stores RGBA)"," ","\n          When read in a shader, all channels except red will be 0\n        "," ","surface_rgba32float"," ","This format supports 4 channels (red, green, blue, alpha) with each channel being a 32-bit float, providing the highest precision, however this is slower to render to than 16-bit formats and is not as widely supported"," ","surface_r32float"," ","This format supports a single channel (red) with a 32-bit floating point value"],[" ","surface_create(w, h, [format]);"," ","Argument"," ","Type"," ","Description"," ","w"," ","Real"," ","The width of the surface to be created"," ","h"," ","Real"," ","The height of the surface to be created"," ","format"," ","Surface Format Type Constant"," ","OPTIONAL"," The format to use for storing surface data, default is ","surface_rgba8unorm"],[" ","Surface ID"],[" ","if !surface_exists(surf)","\n    {","\n        surf = surface_create(1024, 1024);","\n        surface_set_target(surf);","\n        draw_clear_alpha(c_black, 0);","\n        surface_reset_target();","\n        view_surface_id[0] = surf;","\n    }"," ","The above code checks to see if a surface exists and if it does not it will create a surface that is 1024 pixels wide and 1024 pixels high, assigning the index to the variable \"surf\". The drawing target is then set to the new surface, which is cleared and made transparent before having the drawing target reset to the display. Finally the surface is assigned to a view."," ","Back: ","Surfaces"," ","Next: ","surface_create_ext"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"8":[[" ","Formats"]],"id":"2478"})