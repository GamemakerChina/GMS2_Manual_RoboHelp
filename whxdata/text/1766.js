rh._.exports({"0":[[" ","font_texture_page_size"]],"1":[["font_texture_page_size"]],"2":[["font_texture_page_size"]],"3":[[" ","font_texture_page_size"]],"4":[[" ","This ","built-in variable"," can be used to either get or set the texture page size when using the function ","font_add()",". On adding a font using that function, ","GameMaker"," will create a texture page cache of the required glyphs up to the size defined by this variable. The process is as follows:"," ","Each character you use is cached from the font into a texture page"," ","When the texture page is full (because you use big characters or a lot of different characters) ","GameMaker"," will remove characters from the cache and replace them with new ones you need"," ","GameMaker"," tries not to make the texture too big because not all devices can cope with large textures, and it tries not to make the texture too small because removing and re-adding characters to the texture takes CPU time and causes your game to run slowly"," ","If you think you require a larger or a smaller texture page size than the default 1024px that ","GameMaker"," uses, you can set the value using this built in variable. If you are not using the ","font_add()"," function, then setting this will have no effect on your games performance as fonts added in the IDE are cached on the regular texture pages (which you can control from the ","Font Editor"," and the ","Game Options"," for the target platform)."],[" ","font_texture_page_size;"],[" ","Real"," (maximum width/height in pixels)"],[" ","font_texture_page_size = 512;","\n    newfont = font_add(\"Arial\", 24, true, true, 32, 128);"," ","The above code sets the font cache texture page to a maximum size of 512px and then adds a new font to the game."," ","Back: ","Fonts"," ","Next: ","font_set_cache_size"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1766"})