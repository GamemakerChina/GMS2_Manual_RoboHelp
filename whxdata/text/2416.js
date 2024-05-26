rh._.exports({"0":[[" ","string_trim"]],"1":[["string_trim"]],"2":[["string_trim"]],"3":[[" ","string_trim"]],"4":[[" ","This function returns a new string with all leading and trailing white-space characters removed."," ","Passing an array of strings as the second argument (","substr",") will make the function remove any of those substrings at the start and end of the string, instead of white-space. These substrings may be repeated at either ends of the string, in which case all continuous occurrences will be removed. See ","Example 3"," below."," ","NOTE"," The following characters are white-space characters: space (\" \"), tab (\"\\t\"), carriage return (\"\\r\"), newline (\"\\n\"), form feed (\"\\f\") and vertical tab (\"\\v\"). See ","White-space Characters"," for the full list, including Unicode characters."],[" ","string_trim","(str, [substr]);"," ","Argument"," ","Type"," ","Description"," ","str"," ","String"," ","The string to trim"," ","substr"," ","Array"," of ","String","s"," ","OPTIONAL"," An array containing strings to trim from the string"],[" ","String"],[" ","clean_string = ","string_trim","(\"     Text somewhere in the middle.    \");"," ","The above code calls the function ","string_trim"," on a string that contains both leading and trailing spaces. The result is assigned to a local variable named ","clean_string","."],[" ","var _string_from_literal = @\"","\n    The first line ","\n    is followed by the second line","\n    \";","\n    clean_string = ","string_trim","(_string_literal);"," ","The above code first defines a string literal that contains newlines by prefixing it with the ","@"," character. It assigns the new string to the temporary variable ","_string_from_literal",". This string is then trimmed using ","string_trim"," and the result is stored in a new variable ","clean_string","."],[" ","var _string = \"ThisThis is an object I love\"","\n    var _remove = [\"This\", \"is\", \"love\"]","\n    var _trimmed = ","string_trim","(_string, _remove);"," ","\n    show_debug_message(_trimmed) // Prints \" is an object I \"\n  "," ","This removes the words ","\"This\""," and ","\"love\""," from both ends of the string. ","\"This\""," appears twice at the start and is removed both times. The word ","\"is\""," is not removed, because it's not at either end of the string."," ","Back: ","Strings"," ","Next: ","string_trim_start"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example 1 (Trimming Spaces):"],[" ","Example 2 (Trimming Newlines):"],[" ","Example 3 (Using An Array):"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"2416"})