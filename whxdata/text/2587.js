rh._.exports({"0":[["font_get_info"]],"1":[["font_get_info"]],"2":[["font_get_info"]],"3":[["\n  ","\n  "],["\n  ","This function is used to retrieve information for the given font. You supply a font index (which can be an asset added through the ","Asset Browser"," or a font ","added"," at runtime) and the function returns a ","struct"," with the following variables:","\n  ","\n    ","\n      ","\n      ","\n      ","\n    ","\n    ","\n      ","\n        ","Font Info Struct","\n      ","\n      ","\n        ","Variable Name","\n        ","Data Type","\n        ","Description","\n      ","\n      ","\n        ","ascenderOffset","\n        ","Real","\n        ","The maximum offset from the baseline to the top of the font (in pixels)","\n      ","\n      ","\n        ","size","\n        ","Real","\n        ","The approximate size of the font (in pixels)","\n      ","\n      ","\n        ","spriteIndex","\n        ","Sprite Asset","\n        ","The sprite index for the font if it was ","created from a sprite",", otherwise -1","\n      ","\n      ","\n        ","texture","\n        ","Pointer","\n        ","-1 if the font was created from a sprite, otherwise the texture ID of the font","\n      ","\n      ","\n        ","name","\n        ","String","\n        ","The name of the font","\n      ","\n      ","\n        ","bold","\n        ","Boolean","\n        ","true"," if the font is bold, otherwise ","false"," ","(see ","NOTE ","below)","\n      ","\n      ","\n        ","italic","\n        ","Boolean","\n        ","true"," if the font is italic, otherwise ","false"," (see ","NOTE ","below)","\n      ","\n      ","\n        ","glyphs","\n        ","Font Glyph Struct","\n        ","A struct containing information for each glyph in the font (more information is given ","below",")","\n      ","\n    ","\n  ","\n  ","NOTE"," The ","bold"," and ","i","talic"," variables only reflect the user's settings for the font, so they may not be accurate for fonts that appear bold or italic by default.","\n  ","If the supplied font doesn't exist, the function will return ","undefined",".","\n  ","Also note that changing the values of any of these variables, or any variables contained within the ","glyphs"," struct, will not change how the font is rendered, so this information should be considered ","read-only",".","\n  "],["\n  ","The ","glyphs"," variable in the returned struct will be a struct on its own, containing information for each glyph included in the font. Each variable in this struct will be a glyph's character name, which will hold a struct containing information for that glyph. You can imagine these nested structs in the following format (starting from the main struct):","\n  ","{","\n        glyphs:","\n        {","\n            A: {},","\n            B: {},","\n            C: {},","\n            // ...other glyphs","\n        },","\n        // ...other font info","\n    }","\n  ","You can use a glyph's character name to retrieve its information from the struct, such as in the following code:","\n  ","var _font_info = font_get_info(Font1);","\n    ","\n    var _info_A = _font_info.glyphs[$ \"A\"]; // $ is a struct accessor","\n    ","\n    show_debug_message(_info_A);\n  ","\n  ","The code above gets the glyph struct for the \"A\" character and prints it to the output log. You can also replace the string (","\"A\"",") with a variable that holds a string, which will allow you to get information for any glyph through that variable at runtime.","\n  ","The struct returned for a glyph will contain the following variables:","\n  ","NOTE"," On HTML5, the glyphs struct will be empty for any loaded file fonts (such as ","*.ttf"," or ","*.otf",") as the runtime will not have information on those glyphs.","\n  ","\n    ","\n      ","\n      ","\n      ","\n    ","\n    ","\n      ","\n        ","Font Glyph Struct","\n      ","\n      ","\n        ","Variable Name","\n        ","Data Type","\n        ","Description","\n      ","\n      ","\n        ","char","\n        ","real","\n        ","If the font was created from a sprite, this will be the image index of the glyph from that sprite, otherwise it will be its Unicode character number","\n          ","\n          ","Note",": All variables below this will not be present in the struct if the font was created from a sprite","\n        ","\n      ","\n      ","\n        ","x","\n        ","real","\n        ","The X position of the glyph on the texture page (in texels)","\n      ","\n      ","\n        ","y","\n        ","real","\n        ","The Y position of the glyph on the texture page (in texels)","\n      ","\n      ","\n        ","w","\n        ","real","\n        ","The width of the glyph on the texture page (in texels)","\n      ","\n      ","\n        ","h","\n        ","real","\n        ","The height of the glyph on the texture page (in texels)","\n      ","\n      ","\n        ","shift","\n        ","real","\n        ","The number of pixels to shift right when advancing to the next character (can be negative for shifting left)","\n      ","\n      ","\n        ","offset","\n        ","real","\n        ","The number of pixels to horizontally offset the rendering of this glyph (can be positive or negative)","\n      ","\n      ","\n        ","kerning","\n        ","array","\n        ","An array of integers containing kerning information in pairs (or groups of 2). The first integer in a pair is the Unicode value for a character, and the second integer is the amount to add to that character's shift value (can be positive or negative) if it is preceeded by this glyph's character.","\n      ","\n    ","\n  ","\n  ","NOTE"," For file fonts loaded at runtime, the ","x"," and ","y"," values for a glyph may be -1 if it hasn't been rendered yet, as it will have no position on the texture page used for caching.","\n  "," ","\n  "],["\n  ","font_get_info(font);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","font","\n        ","Font Asset","\n        ","The font for which information should be retrieved.","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Font Info Struct"," (or undefined)","\n  "," ","\n  "],["\n  ","var _info = font_get_info(my_font);","\n    ","\n    if (_info != undefined && _info.bold)","\n    {","\n        image_xscale *= 2;","\n        image_yscale *= 2;","\n    }\n  ","\n  ","This code retrieves information for the font stored in the ","my_font"," variable. If the returned value is ","not ","undefined"," and the given font is bold, the instance's scale is doubled.","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Fonts","\n        ","Next: ","font_exists","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["font_get_info"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"7":[["Glyphs Struct"]],"id":"2587"})