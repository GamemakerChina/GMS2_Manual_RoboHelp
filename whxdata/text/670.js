rh._.exports({"0":[[" ","draw_texture_flush"]],"1":[["draw_texture_flush"]],"2":[["draw_texture_flush"]],"3":[[" ","draw_texture_flush"]],"4":[[" ","With this function you can remove all textures from video memory, and they will then be reloaded on first use. This is the only effective way to manage video memory when you have multiple texture pages for a game, and you should flush the texture memory between levels on your game and organise the graphics using the texture group feature to ensure that the minimum number of textures are used."," ","NOTE"," On all targets, texture pages will ","by default"," only be loaded as they are required and you can use the various prefetch and flush functions for sprites (found ","here",") to manage things as well as this function."],[" ","draw_texture_flush","();"],[" ","N/A"],[" ","Create Event"," ","draw_texture_flush","();"," ","The above code flushes the video memory of texture data, and would probably be placed in the create event of the first instance of an object placed in the room."," ","Back: ","Textures"," ","Next: ","texture_prefetch"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"670"})