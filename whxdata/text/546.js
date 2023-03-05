rh._.exports({"0":[[" ","base64_decode"]],"1":[["base64_decode"]],"2":[["base64_decode"]],"3":[[" ","base64_decode"]],"4":[[" ","This function will convert a string encoded previously using base64 format, into standard text. Base64 is a commonly used encoding scheme that is often used for any media that needs to be stored or transferred over the internet as text, and renders\n    the output unreadable to the human eye."],[" ","base64_decode(string)"," ","Argument","Type"," ","Description"," ","string","String"," ","The string to decode."],[" ","String"],[" ","var str, file;"," str = base64_encode(game_data);"," file = file_text_open_read(\"save.txt\");"," str = file_text_read_string(file); level_data = base64_decode(str);"," file_text_close(file);\n  "," ","The above code will open a text file and read a string from it into the local variable \"str\". This string is then decoded and the result stored in the instance variable \"level_data\"."," ","Back: ","File Encoding"," ","Next: ","md5_string_utf8"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"546"})