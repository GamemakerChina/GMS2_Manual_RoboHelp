rh._.exports({"0":[[" ","gif_save_buffer"]],"1":[["gif_save_buffer"]],"2":[["gif_save_buffer"]],"3":[[" ","gif_save_buffer"]],"4":[[" ","With this function you can save out a GIF animation. You supply the GIF index (as returned by the function ","gif_open()",") and the function will return a 1 byte-aligned grow buffer with the GIF data. Note that the final GIF data will have been palletized using the Universal 884 Palette (see ","here"," for more information)."],[" ","gif_save_buffer(gif_index);"," ","Argument","Type"," ","Description"," ","gif_index","GIF ID"," ","The ID of gif to save"],[" ","Buffer ID"],[" ","if save_gif == true","\n    {","\n        if count == 0","\n        {","\n            gif_image = gif_open(room_width, room_height);","\n        }","\n        else if count < 30","\n        {","\n            gif_add_surface(gif_image, application_surface, 6/100);","\n        }","\n        else","\n        {","\n            global.capture_buff = gif_save_buffer(gif_image);","\n            count = 0;","\n            save_gif = false;","\n        }","\n        count++;","\n    }"," ","The above code will create a GIF image file with 30 frames taken from the application surface and then save it to a buffer."," ","Back: ","Cameras And Display"," ","Next: ","display_reset"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1145"})