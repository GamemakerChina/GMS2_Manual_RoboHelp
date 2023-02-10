rh._.exports({"0":[[" ","Fonts"]],"2":[["Fonts"]],"3":[[" ","Fonts"]],"4":[[" ","GameMaker"," has a number of functions to get information from font assets added using ","The Font Editor"," and functions that can be used to change, add or remove fonts from your game at ","Runtime","."," ","The function ","font_add"," can be used to add fonts at runtime, including non-standard fonts such as Asian glyph fonts, from a ","*.ttf"," or ","*.otf"," file."," ","NOTE"," The Unicode character 9647 (▯) is used to substitute any missing ","glyph","s that you may have in your designated font when rendering it in the draw event. So if your font doesn't have, for example, the ° symbol, then writing 90° will actually produce 90▯."],[" ","Text in ","GameMaker"," is drawn using the font set with ","draw_set_font",". Text drawn using a font will be drawn in a different way depending on whether SDF is enabled or not."],[" ","This is the normal way of drawing text in ","GameMaker",". The font's ","glyph","s for the chosen font size (","font_get_size",") are placed on a texture page (","font_get_texture",") and each character is rendered as it is from the texture page."," ","A disadvantage of this is that scaling up text using regular fonts makes them look pixelated. To fix this, GameMaker provides an SDF rendering option for fonts added at runtime."],[" ","This is ","disabled by default"," for newly added fonts and enabled ","per font"," by calling ","font_enable_sdf",":"," ","new_font = font_add(\"STENCIL.TTF\", 32, false, false, 32, 128);","\n    font_enable_sdf(new_font, true);"," ","IMPORTANT"," SDF rendering is currently only available for fonts added using ","font_add",". Support for font assets added through the IDE will be provided in a future version."," ","When SDF rendering is enabled, all characters in the given font's range are stored differently on the texture page. Instead of an actual render of the different characters at the font's set size, an SDF (","Signed Distance Field)"," is stored."," ","In this case, every texel stores the ","signed distance"," to the closest point on the character. All texels on this texture combined make up a ","field"," of signed distances."," ","NOTE"," SDF rendering currently doesn't work with custom shaders, as drawing text using an SDF enabled font with the default passthrough ","shader"," simply looks up the texels on the texture, which draws the distance field."," ","With this feature enabled for a font, text can be scaled up without the characters becoming pixelated."," ","NOTE"," SDF fonts are currently not supported on HTML5."],[" ","The following table shows a visual comparison between text drawn using a regular font, and drawn using a font that has SDF enabled: "," ","Scale"," ","Text Rendering (Regular)"," ","Text Rendering (SDF Enabled)"," ","1x"," ","4x"],[" ","font_exists"," ","font_get_name"," ","font_get_fontname"," ","font_get_first"," ","font_get_last"," ","font_get_italic"," ","font_get_bold"," ","font_get_size"," ","font_get_info"],[" ","font_get_texture"," ","font_get_uvs"," ","font_cache_glyph"],[" ","font_add"," ","font_add_sprite"," ","font_add_sprite_ext"," ","font_replace_sprite"," ","font_replace_sprite_ext"," ","font_delete"],[" ","font_texture_page_size"," ","font_set_cache_size"," ","font_add_enable_aa"," ","font_add_get_enable_aa"],[" ","font_enable_sdf"," ","font_get_sdf_enabled"],[" ","draw_set_font"," ","Back: ","Asset Management"," ","Next: ","Timelines"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"7":[[" ","Regular"],[" ","SDF Rendering"],[" ","Visual Comparison"],[" ","Asset Info"],[" ","Texture"],[" ","Adding/Removing Fonts"],[" ","Configuration"],[" ","SDF"],[" ","Drawing"]],"8":[[" ","Fonts and Text Rendering"],[" ","Function Reference"]],"id":"2518"})