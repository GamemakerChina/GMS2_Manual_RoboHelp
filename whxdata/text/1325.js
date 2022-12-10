rh._.exports({"0":[["sprite_prefetch_multi"]],"1":[["sprite_prefetch_multi"]],"2":[["sprite_prefetch_multi"]],"3":[["\n  ","\n  "],["\n  ","This function can be used to prefetch (place into texture memory) a number of texture pages that contain the sprites given. You supply an array populated with the sprite indices (as defined when you created the sprite asset) and the texture pages that they are on will be loaded into memory. Note that the function will return ","-1"," if prefetch is not supported for the chosen resource or the target platform is HTML5, or it will return ","0"," if all worked correctly.","\n  ","NOTE",": There is a performance hit as the texture is uploaded to texture memory on most devices, so it's recommended that you call ","sprite_prefetch_multi()"," on any required graphics at the start of a level to avoid any stalls.","\n  "," ","\n  "],["\n  ","sprite_prefetch_multi","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","array","\n        ","Array"," of ","Sprite Asset","s","\n        ","Array with the sprite indices to fetch","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Real"," (-1 or 0)","\n  "," ","\n  "],["\n  ","spr_a[0] = spr_Player_Aura1;","\n    spr_a[1] = spr_Player_Aura2;","\n    spr_a[2] = spr_Player_Aura3;","\n    spr_a[3] = spr_Player_Aura4;","\n    sprite_prefetch_multi(spr_a);","\n  ","The above code creates an array where each element holds a sprite index. This array is then used to place those sprite textures into memory.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sprite Manipulation","\n        ","Next: ","sprite_index","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["sprite_prefetch_multi"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1325"})