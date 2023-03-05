rh._.exports({"0":[[" ","font_set_cache_size"]],"1":[["font_set_cache_size"]],"2":[["font_set_cache_size"]],"3":[[" ","font_set_cache_size"]],"4":[[" ","When performing image blending and colouring, HTML5 cannot do it dynamically in the same way an executable could be performed. Therefore ","GameMaker"," has to temporarily save a blended copy of the images and load them in when needed. This function sets how many blended copies of the given font can be cached before old ones are overwritten. The default value is 4."," ","NOTE"," ","for sprite fonts you should be using the equivalent function for sprites, ","sprite_set_cache_size()","."],[" ","font_set_cache_size(ind, max);"," ","Argument"," ","Type"," ","Description"," ","ind"," ","Font Asset"," ","The index of the font to change the cache size of."," ","max"," ","Real"," ","The maximum number of cached copies of the font that can be stored."],[" ","N/A"],[" ","font_set_cache_size(fnt_MainMenu, 2);"," ","This will set the font cache of the font indexed in the variable \"fnt_MainMenu\" to 2 copies."," ","Back: ","Fonts"," ","Next: ","font_add_enable_aa"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1257"})