rh._.exports({"0":[["texturegroup_set_mode"]],"1":[["texturegroup_set_mode"]],"2":[["texturegroup_set_mode"]],"3":[["\n  "],["\n  ","This function allows you to set three things:","\n  ","\n    ","Mode",": You can set whether Dynamic Texture Groups use ","Implicit"," (default) or ","Explicit"," loading, by using ","false"," for Implicit and ","true"," for Explicit.","\n      ","\n      For information on modes, see: ","Dynamic Group Modes","\n    ","\n    ","Debug",": You can enable debugging, which will show you all of your game's Texture Pages along with their ","status"," in-game.","\n      ","\n    ","\n    ","Default Sprite",": This is the default sprite that appears when the mode is set to Explicit, and the texture you're drawing to draw has not been loaded.","\n      ","\n      For more information, see: ","Explicit","\n    ","\n  ","\n  "," ","\n  "," ","\n  "],["\n  ","texturegroup_set_mode(explicit, [debug=false, default_sprite=-1]);","\n  ","\n    ","\n      ","\n      ","\n      ","\n    ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","explicit","\n        ","Boolean","\n        ","The mode used for Dynamic Texture Groups: Implicit (","false","), or Explicit (","true",")","\n      ","\n      ","\n        ","debug","\n        ","Boolean","\n        ","OPTIONAL"," Enable/disable Texture Group debugging","\n      ","\n      ","\n        ","default_sprite","\n        ","Sprite Asset","\n        ","OPTIONAL"," Only used in Explicit mode: The sprite used as the \"fallback\" texture when another texture is not loaded (the whole texture page is drawn)","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","texturegroup_set_mode(true, false, spr_fallback);","\n  ","This will enable Explicit mode, disable debugging and set ","spr_fallback"," as the fallback sprite for unloaded textures.","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Textures","\n        ","Next: ","texturegroup_get_status","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["texturegroup_set_mode"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2235"})