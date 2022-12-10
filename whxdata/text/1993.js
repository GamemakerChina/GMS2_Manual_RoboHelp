rh._.exports({"0":[["layer_enable_fx"]],"1":[["layer_enable_fx"]],"2":[["layer_enable_fx"]],"3":[["\n  ","\n  "],["\n  ","This function enables/disables the filter/effect assigned to a Room Layer. You specify either the ID or the name of the layer you want to modify, and then a boolean value telling whether the FX should be enabled (","true",") or disabled (","false",").","\n  ","Passing in ","false"," will not remove the FX from the layer, but simply make it invisible. Use ","layer_clear_fx()"," to remove an FX from a layer.","\n  ","Similarly, passing in ","true"," will not do anything if there is no FX applied to the layer. Use ","layer_set_fx()"," to apply an FX to a layer.","\n  "," ","\n  "],["\n  ","layer_enable_fx(layer_name_or_id, enable);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","layer_name_or_id","\n        ","String"," or ","Layer ID","\n        ","The name or ID of the layer to modify","\n      ","\n      ","\n        ","enable","\n        ","Boolean","\n        ","Whether to enable or disable the FX","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","if (hp <= 3)","\n    {","\n        layer_enable_fx(\"DesaturateLayer\", true);","\n    }","\n    else","\n    {","\n        layer_enable_fx(\"DesaturateLayer\", false);","\n    }","\n  ","The above code enables a Desaturate FX layer if the instance's HP value is less than or equal to 3, otherwise it disables it. This indicates to the player that their HP is low, by desaturating the screen.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Filter and Effect Functions","\n        ","Next: ","layer_fx_is_enabled","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["layer_enable_fx"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1993"})