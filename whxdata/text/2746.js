rh._.exports({"0":[[" ","Strings"]],"1":[["\\r,\\b,\\f,\\t,\\v,\\\\,\\a,\\u,\\x,\\,\\r,\\b,\\f,\\t,\\v,\\\\,\\a,\\u,\\x,\\"]],"2":[["Strings,\\n,\\r,\\b,\\f,\\t,\\v,\\\\,\\a,\\u,\\x,\\,string literal,@"]],"3":[[" ","Strings"]],"4":[[" ","When you want to use text in your game, whether it's for dialogue, menus, or just debugging, use ","strings","."," ","In GML, text is created as a ","string",", which can be stored in a variable. \"String\" refers to a \"","string"," of characters\" which makes up your text."," ","GameMaker"," has a complete set of functions that permit you to manipulate ","strings"," in many ways, including the insertion of one string in another, the copying of strings and the ability to parse ","strings"," for the digits or the letters that they contain."," ","It also has more advanced functions to deal with strings, including trimming, splitting into an array, concatenating from an array and iterating over characters."," ","Lastly, ","GameMaker"," also provides a convenient way to convert ","structs"," and ","instances"," to a string representation by assigning them a ","toString() Method","."],[" ","A string is a type of ","variable",". The simplest way to create one is by adding text within double quotes ","\" \"",":"," ","my_first_string = \"Hello World!\";"," ","The above line of code creates a string that reads \"Hello World!\" and assigns it to a variable called ","my_first_string","."," ","NOTE"," Single quote strings ","' '"," are not accepted."," ","NOTE"," You cannot split a string over multiple lines in your code and expect ","GameMaker"," to render it as if the line breaks were newlines, however, you can do that by using a string literal identifier ","@"," before your string's starting quotation mark, as ","explained below","."],[" ","Sometimes you will need to add special characters inside a string, such as double quotes ","\"",", newline characters or characters with a specific character code."," ","This can be done by using ","escape characters",". These are characters that are preceded by a backslash ","\\"," symbol. For example, if you wanted to put quotation marks within a string you would have something like this:"," ","str = \"Hello\\\"World\\\"!\";"," ","GameMaker"," also has full four byte wide Unicode character support, allowing you to decode and encode Unicode characters in the upper bounds of the standard (including - but not limited to - emoji)."," ","To deal with Unicode characters, you can use a backslash ","\\"," to precede any Unicode literal - digits of hex preceded by a \"","u","\", for example \"","\\u00e2","\" for \"á\"- where the digits are the number of the Unicode character. When working with Unicode in this way, you need to be aware of the fact that ","GameMaker"," will interpret ","all"," digits following the \"","u","\", so if you wanted to write \"áa\" for example, you should use:"," ","\"\\u00e2\\a\""," ","or"," ","\"\\u00e2\\u61\""," ","or"," ","\"\\u00e2\" + \"a\""," ","Just using \"","\\u00e2a","\" would actually result in the Unicode character \"","ส","\" (essentially becoming \"","\\ue2a","\")."," ","GameMaker"," can also handle any hexadecimal literal - normally written as digits of hex following \"","0x","\", for example \"","0xff","\", where the digits form the character code of the character to use. In ","GameMaker"," strings, these are written using \"","\\x","\" and then the hex value. These and other predefined escape characters are listed in the table below:"," ","String Escape Characters"," ","Constant"," ","Description"," ","\\n"," ","Newline"," ","\\r"," ","Carriage return (0x0d)"," ","\\b"," ","Backspace (0x08)"," ","\\f"," ","Form Feed (0x0c)"," ","\\t"," ","Horizontal Tab (0x09)"," ","\\v"," ","Vertical Tab (0x0b)"," ","\\\\"," ","Backslash itself (0x5c)"," ","\\a"," ","Alert (0x07)"," ","\\u[Hex Digits]"," ","Insert Unicode character"," ","\\x[Hex Digits]"," ","Insert hex literal character"," ","\\[Octal Digits]"," ","Insert octal Unicode character"," ","NOTE"," Strings support form feed, vertical tab etc... but this does not mean to say that ","rendering"," does, and when drawing strings these characters may be ignored."],[" ","You can create multi-line string literals by preceding the whole string with the ","@"," character:"," ","var test = @\"This string has","\n    line breaks","\n    over multiple","\n    lines","\n    \";"," ","The above code will create a string that is rendered over multiple lines as if there was a line break escape character included. A string literal can also be defined using single quotes ","' '"," when prefixed by an ","@"," symbol."," ","Multi-line string literals do not support escaped characters, e.g. ","@\"Hello\\World\""," will ","not"," try to escape the W on World and will be stored verbatim. Note though that when using string literals like this, you will need to break the string if you wish to include quotation marks as part of the string, e.g.:"," ","var test = @\"Hello \" + \"\\\"\" + @\"World\" + \"\\\"\";"," ","NOTE"," The Unicode character 9647 (▯) is used to substitute any missing ","glyph","s that you may have in your designated font when rendering it in the draw event. So if your font doesn't have, for example, the ° symbol, then writing 90° will actually produce 90▯."],[" ","When a reference to a struct or an instance of an object is passed as an argument to any of ","string"," / ","string_ext"," / ","show_debug_message"," / ","show_debug_message_ext",", it will have its ","toString"," method called, if it has one set."," ","toString = function()","\n    {","\n        return string(\"I am the instance with ID {0}\", id);","\n    }"," ","You can pass a struct reference to one of the above functions for its ","toString()"," method to be used, however for instances you must use ","self"," within its scope, as passing an instance ID will not call its ","toString()"," method."," ","// In an instance","\n    string(self); // Calls its toString() method, if it exists","\n    string(id); // Prints \"ref <id>\", same goes for IDs returned from instance_create_*()"," ","TIP"," Arrays are automatically converted to a string representation when they are passed to one of the above functions, without needing to assign a custom function to the array."," ","You're not required to convert a struct or instance to a string with ","string()"," if you want to draw it. Simply passing a valid reference to ","draw_text"," or ","any of the related ","draw_text_"," functions"," will automatically convert it to a string: "," ","draw_text(0, 0, self);"],[" ","Below is the list of functions for dealing with strings."," ","IMPORTANT"," In ","GameMaker",", string positions start at 1 (meaning they are ","one-based","), compared to other data types in ","GameMaker",", which are all ","zero-based"," (starting at 0). So the first character in a string has a position of 1, the second character a position of 2, and so on. The last character is ","string_length","(string)","."],[" ","string"," ","string_ext"],[" ","ansi_char"," ","chr"," ","ord"," ","real"," ","string_byte_at"," ","string_byte_length"," ","string_set_byte_at"," ","string_char_at"," ","string_ord_at"],[" ","string_length"," ","string_pos"," ","string_pos_ext"," ","string_last_pos"," ","string_last_pos_ext"," ","string_starts_with"," ","string_ends_with"," ","string_count"],[" ","string_copy"," ","string_delete"," ","string_digits"," ","string_format"," ","string_insert"," ","string_letters"," ","string_lettersdigits"," ","string_lower"," ","string_repeat"," ","string_replace"," ","string_replace_all"," ","string_upper"," ","string_hash_to_newline"," ","string_trim"," ","string_trim_start"," ","string_trim_end"," ","string_split"," ","string_split_ext"," ","string_join"," ","string_join_ext"," ","string_concat"," ","string_concat_ext"],[" ","string_width"," ","string_width_ext"," ","string_height"," ","string_height_ext"],[" ","string_foreach"],[" ","is_string"],[" ","toString() Method"],[" ","Text"," ","Debugging: ","show_debug_message"," and ","show_debug_message_ext"," ","Clipboard"," ","Back: ","GML Code Reference"," ","Next: ","Maths And Numbers"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"10":[[" ","Escape Characters"],[" ","Multi-Line String Literal"],[" ","Creating Strings"],[" ","Character Code"],[" ","Searching and Information"],[" ","Manipulating Strings"],[" ","Drawing-Related"],[" ","Iteration"],[" ","Data Type"],[" ","Methods"],[" ","Related functions"]],"11":[[" ","String Basics"],[" ","toString() Method"],[" ","Function Reference"]],"id":"2746"})