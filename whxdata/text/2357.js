rh._.exports({"0":[[" ","asset_add_tags"]],"1":[["asset_add_tags,asset_object,asset_sprite,asset_sound,asset_room,asset_tiles,asset_path,asset_script,asset_font,asset_timeline,asset_shader,asset_animationcurve,asset_sequence,asset_particlesystem,asset_unknown"]],"2":[["asset_add_tags,asset_object,asset_sprite,asset_sound,asset_room,asset_tiles,asset_path,asset_script,asset_font,asset_timeline,asset_shader,asset_animationcurve,asset_sequence,asset_particlesystem,asset_unknown"]],"3":[[" ","asset_add_tags"]],"4":[[" ","This function adds one or more tag strings to any asset from ","The Asset Browser","."," ","You supply either the asset name (as a string) or its asset index, as well as either a single tag string or an array where each item is a single tag string. If you supply an asset index value, then you will need to supply the optional asset type argument (a constant), as assets of different types can have the same index, even though they cannot have the same name. The available asset types are listed in the table below:"," ","Asset Type Constant"," ","Constant"," ","Description"," ","asset_object"," ","The given name refers to an ","object","."," ","asset_sprite"," ","The given name refers to a ","sprite","."," ","asset_sound"," ","The given name refers to a ","sound","."," ","asset_room"," ","The given name refers to a ","room","."," ","asset_tiles"," ","The given name refers to a ","tile set","."," ","asset_path"," ","The given name refers to a ","path","."," ","asset_script"," ","The given name refers to a ","script","."," ","asset_font"," ","The given name refers to a ","font","."," ","asset_timeline"," ","The given name refers to a ","time line","."," ","asset_shader"," ","The given name refers to a ","shader","."," ","asset_animationcurve"," ","The given name refers to an ","Animation Curve","."," ","asset_sequence"," ","The given name refers to a ","Sequence","."," ","asset_particlesystem"," ","The given name refers to a ","Particle System","."," ","asset_unknown"," ","The given name refers to an asset that either does not exist, or is not one of the above listed."," ","If the function succeeds in adding the tag(s) it will return ","true"," otherwise it will return ","false","."],[" ","asset_add_tags","(name_or_index, tags, [asset_type]);"," ","Argument"," ","Type"," ","Description"," ","name_or_index"," ","String"," or ","Asset"," ","The name of the asset (a string) or its index value (an integer)."," ","tags"," ","String"," or ","Array"," of Strings"," ","A single asset tag string or an array with various asset tags."," ","[asset_type]"," ","Asset Type Constant"," ","OPTIONAL"," The type of asset to set the tags on, only used when supplying an index for the first argument."],[" ","Boolean"],[" ","var _a = array_create(3);","\n    _a[0] = \"enemy\";","\n    _a[1] = \"all_levels\";","\n    _a[2] = \"boss\";"," ","asset_add_tags","(obj_Enemy_Boss_Parent, _a, asset_object);\n  "," ","The above code will create an array of tags and then add them to the given object."," ","Back: ","Assets And Tags"," ","Next: ","asset_remove_tags"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"2357"})