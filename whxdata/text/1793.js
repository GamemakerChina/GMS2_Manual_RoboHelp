rh._.exports({"0":[["buffer_get_surface"]],"1":[["buffer_get_surface,buffer_surface_copy (Deprecated)"]],"2":[["buffer_get_surface,buffer_surface_copy"]],"3":[["\n  ","\n  "],["\n  ","With this function you can write information from a surface to a given buffer. The buffer must have been created previously and should be a 1-byte aligned buffer large enough to store data for the surface you are going to write (if unsure, use a ","grow"," buffer or see the example at the bottom of this page).","\n  ","The information for the surface will always be written to the start of the buffer (regardless of the seek position) but you can choose an offset value (in bytes) to move the write position from the start of the buffer.","\n  ","Note that the function writes each pixel of the surface to the buffer using an ","RGBA"," formatting on the Windows target, but on other targets it may be different depending on the OS or even the device.","\n  "," ","\n  "],["\n  ","buffer_get_surface(buffer, surface, offset);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","buffer","\n        ","Buffer ID","\n        ","The index of the buffer to use.","\n      ","\n      ","\n        ","surface","\n        ","Surface ID","\n        ","The index of the surface to use.","\n      ","\n      ","\n        ","offset","\n        ","Real","\n        ","The data offset value (in bytes).","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","buffer = buffer_create(surf_width * surf_height * 4, buffer_fixed, 1);","\n    buffer_get_surface(buffer, surface, 0);","\n  ","This code will create a fixed-size buffer which has the capacity to store 4 bytes per pixel (for the R, G, B and A components) based on the exact size of the surface, and then copy the surface data into it.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Buffers","\n        ","Next: ","buffer_set_surface","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["buffer_get_surface"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1793"})