rh._.exports({"0":[[" ","Dynamic Textures"]],"1":[["Dynamic Texture Groups"]],"2":[["Dynamic Texture Groups"]],"3":[[" ","Dynamic Textures"]],"4":[[" ","In the ","Texture Group"," settings, you can mark a group as \"","Default","\" or \"","Dynamic","\"."],[" ","A Texture Group is loaded into RAM when the game starts, unless it's a ","Dynamic Texture Group",", which is loaded later."," ","While in the RAM, the Texture Group stays compressed, as it was on disk."," ","When an image from a Texture Group is drawn, or one of the ","pre-fetch"," functions is run, then the Texture Group is decompressed and loaded into VRAM (video memory)."," ","NOTE"," Texture decompression is asynchronous on all platforms except GX.games, which might cause stutters as textures are decompressed in-game. To avoid this, ensure your textures are prefetched during loading screens or another inactive parts of your game."," ","You can ","flush"," a Texture Group to remove it from VRAM (this doesn't remove them from RAM)."],[" ","A Default Texture Group is included in your final game's package (WAD file). Any such texture groups are loaded into RAM as soon as the game starts, and pre-fetched into VRAM when required or ","asked","."],[" ","A Dynamic Texture Group is not loaded when the game starts. It's either loaded when required (i.e. when an image from it is drawn) or when you load it manually."," ","You load a Dynamic Texture Group into RAM manually by calling ","texturegroup_load()",". By default, this function will also decompress the group and pre-fetch it into VRAM."," ","You can disable pre-fetching by setting the function's second argument to ","false",". This will leave you to manually ","pre-fetch"," it later, or have it fetched automatically when an image is drawn from it (the latter is not recommended due to it being synchronous)."," ","You can also unload a texture group using ","texturegroup_unload()",", which will remove it from memory and place it back into disk in its original, compressed form."," ","NOTE"," Before a Dynamic Texture Group is loaded, you can't run operations that require reading its contained assets, such as ","duplicating a sprite"," (this will trigger the texture group to load but the function will still fail as it can't load immediately). You can however read texture information such as ","UVs"," and ","TPE","."],[" ","Using ","texturegroup_set_mode()"," you can set the \"mode\" for Dynamic groups to either \"","Implicit","\" (default) or \"","Explicit","\". This changes whether Dynamic groups can be loaded automatically."," ","This setting is global and can't be applied per-group."],[" ","texturegroup_set_mode(false, ...)"," ","This is the default setting. This enables automatic loading of Dynamic groups, so when an image from an unloaded Dynamic group is drawn, it will trigger the loading of that Texture Group."," ","\n    This may cause a small freeze as the texture is loaded into VRAM and decompressed, so making use of implicit loading is ","not recommended","."," ","\n    When a Texture Group is triggered implicitly, only the required Texture Page is loaded. For example, if your unloaded Texture Group has 4 Texture Pages, and you attempt to draw something from Texture Page 2, only that page will be loaded, and Texture Pages 1, 3 and 4 will remain on disk.\n  "],[" ","texturegroup_set_mode(true, ...)"," ","This setting disables automatic loading of Dynamic groups, meaning you have to ","load them manually",". When you try drawing an image from a Texture Group that hasn't been loaded, the image will not draw, and an error will be printed to the output log."," ","\n    You can set a \"fallback\" sprite in ","texturegroup_set_mode()"," which would be drawn in place of a texture that hasn't been loaded.\n  "," ","Textures being unloaded at runtime, showing the fallback sprite"," ","When the fallback sprite is displayed, its whole texture page is drawn, so it's recommended to enable ","Separate Texture Page"," for your fallback sprite, preventing unintended graphics from appearing. The texture page for the fallback sprite is automatically loaded even if it's set as a Dynamic page."," ","The ","fallback sprite"," used in the example above was created as a gradient checkerboard, so you can tell which part of the fallback texture is being drawn at any moment, and what scale it's being drawn at, which may help diagnose texture-related issues."],[" ","In the ","Texture Groups"," settings, you can set the path where the Dynamic group will be placed within the final game directory. Without a set path, the textures will be placed at the root of the game's directory."," ","If you set the group format to \"PNG\", the exported texture files will become directly editable, allowing them to be modified by players."],[" ","Here are some more functions relating to Dynamic groups:"," ","texturegroup_set_mode()",": In addition to setting the mode, you can also enable debugging with this function, which will display information about all Texture Pages on-screen:"," ","texturegroup_get_status()",": This returns the status of a texture group, telling you whether it's loaded, unloaded, currently loading, or fetched into VRAM."," ","Back: ","Texture Groups"," ","Next: ","Texture Pages"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"10":[[" ","Implicit"],[" ","Explicit"]],"11":[[" ","How Textures Work"],[" ","\"Default\" Groups"],[" ","\"Dynamic\" Groups"],[" ","Dynamic Group Modes"],[" ","Paths and Modding"],[" ","More Functions"]],"id":"2672"})