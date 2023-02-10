rh._.exports({"0":[[" ","string_join_ext"]],"1":[["string_join_ext"]],"2":[["string_join_ext"]],"3":[[" ","string_join_ext"]],"4":[[" ","This function joins together the string representations of all values in the given array (or part of the array), inserting the given \"delimiter\" between each value. The function returns the joined string."," ","Values that are not strings will have the ","string()"," function run on them implicitly. See ","Conversion From Non-String Types"," for information on how those data types are converted."],[" ","string_join_ext","(delimiter, values_array, [offset], [length]);"," ","Argument"," ","Type"," ","Description"," ","delimiter"," ","String"," ","The string to insert between the values"," ","values_array"," ","Array"," ","The array containing the values to join together"," ","offset"," ","Real"," ","OPTIONAL"," The offset, or starting index, in the array to start joining elements. Setting a negative value will count from the end of the array. The starting index will then be ","array_length(array) + offset",". See: ","Offset And Length"," ","length"," ","Real"," ","OPTIONAL"," The number of array elements to concatenate, starting at the offset. A negative value will traverse the array backwards (i.e. in descending order of indices, e.g. 2, 1, 0 instead of 2, 3, 4). See: ","Offset And Length"],[" ","String"],[" ","var _words = ","string_join_ext","(\" \", [\"This\", \"example\", \"joins\", \"words\"]);"," ","The above code joins the words in the ","array"," into a single string using a space as the delimiter."],[" ","var _buffer = buffer_create(1, buffer_grow, 1);","\n    var _text_lines = [\"This\", \"file\", \"will\", \"have\", \"multiple\", \"lines\"];","\n    var _file_contents = string_join_ext(\"\\r\\n\", _text_lines);","\n    buffer_write(_buffer, buffer_text, _file_contents);","\n    buffer_save(_buffer, save_dir + \"/\" + \"text.txt\");","\n    buffer_delete(_buffer);"," ","The above code first creates a grow ","buffer"," and assigns it to a temporary variable ","_buffer",". It then creates an array with a number of elements and stores that in another variable ","_text_lines",". It then calls ","string_join_ext"," on the array with a separator ","\"\\r\\n\"",", which results in new lines between all the given strings."," ","It writes the resulting string to the buffer as a ","buffer_text"," value and then saves the contents of the buffer to a file named ","\"text.txt\""," in a directory ","save_dir",". Finally it deletes the buffer to prevent memory leaks."," ","Back: ","Strings"," ","Next: ","string_concat"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example 1:"],[" ","Example 2:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2400"})