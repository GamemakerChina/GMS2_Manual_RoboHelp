rh._.exports({"0":[["gif_open"]],"1":[["gif_open"]],"2":[["gif_open"]],"3":[["\n  ","\n  "],["\n  ","With this function you can create an empty GIF format image, ready to have data added to it. When you call the function, you need to specify the width and height of the GIF (in pixels, and there is no upper limit on size except for available memory), and the function will return the unique ID value used to identify the gift in subsequent functions, or it will return -1 if the gif could not be initialized (for example, if the width/height are too big for the memory available). You may also specify an optional argument to set the \"clear colour\" for the GIF. This is an RGB value (no alpha component), and will clear the gif to this colour before anything is added to it. If you do not supply a clear colour argument, the default colour of black will be used.","\n  ","Note that when using this function you must call ","gif_save()"," to end the creation of the GIF before open another file for recording (so for every ","gif_open()"," there must be an accompanying ","gif_save()",").","\n  "," ","\n  "],["\n  ","gif_open(width, height, [clear_colour]);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","width","\n        ","Real","\n        ","The width of the gif to create","\n      ","\n      ","\n        ","height","\n        ","Real","\n        ","The height of the gif to create","\n      ","\n      ","\n        ","[clear_colour]","\n        ","Colour","\n        ","OPTIONAL"," The colour (RGB) to clear the gif to","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","GIF ID","\n  "," ","\n  "],["\n  ","if save_gif == true","\n    {","\n        if count == 0","\n        {","\n            gif_image = gif_open(room_width, room_height);","\n        }","\n        else if count < 30","\n        {","\n            gif_add_surface(gif_image, application_surface, 6/100);","\n        }","\n        else","\n        {","\n            gif_save(gif_image, \"GameCapture.gif\");","\n            count = 0;","\n            save_gif = false;","\n        }","\n        count++;","\n    }","\n  ","The above code will create a GIF image file with 30 frames taken from the application surface and then save it.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Cameras And Display","\n        ","Next: ","gif_add_surface","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["gif_open"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1916"})