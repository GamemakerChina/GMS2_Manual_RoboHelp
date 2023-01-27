rh._.exports({"0":[[" ","buffer_set_surface"]],"1":[["buffer_set_surface,buffer_surface_copy (Deprecated)"]],"2":[["buffer_set_surface,buffer_surface_copy"]],"3":[[" ","buffer_set_surface"]],"4":[[" ","With this function you can write information from a buffer to a given surface."," ","Both the buffer and the surface must have been created previously, and the buffer's size must be equal to or greater than the surface's size. If the buffer is smaller than the surface, the function will silently fail."," ","You can provide an offset into the buffer to start reading from. Reading will always start at the beginning of the buffer plus the offset value and ","not"," at the current seek position plus the offset value."],[" ","buffer_set_surface(buffer, surface, offset);"," ","Argument"," ","Type"," ","Description"," ","buffer"," ","Buffer ID"," ","The index of the buffer to use."," ","surface"," ","Surface ID"," ","The index of the surface to use."," ","offset"," ","Real"," ","The data offset value."],[" ","N/A"],[" ","buffer_set_surface(buff, application_surface, 0);"," ","The above code will copy all the data stored in the buffer indexed in the variable \"buff\" to the application surface with no offset."," ","Back: ","Buffers"," ","Next: ","buffer_resize"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1425"})