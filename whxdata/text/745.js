rh._.exports({"0":[[" ","clipboard_set_text"]],"1":[["clipboard_set_text"]],"2":[["clipboard_set_text"]],"3":[[" ","clipboard_set_text"]],"4":[[" ","This function will set the clipboard to hold the defined string. You can set it to an empty string ","\"\""," to effectively clear the clipboard of text."," ","NOTE"," This function is only valid on the Windows, Android, MacOS, iOS, HTML5 and Opera GX targets. On HTML5, clipboards are ","not supported on Firefox"," without the use of an extension, and are not supported on Internet Explorer at all."],[" ","clipboard_set_text(string);"," ","Argument"," ","Type"," ","Description"," ","string"," ","String"," ","The text (as a string) to set the clipboard to hold."],[" ","N/A"],[" ","if clipboard_has_text()","\n    {","\n        str = clipboard_get_text();","\n        clipboard_set_text(\"\");","\n    }"," ","The above code checks the clipboard for text and if it contains any, it is read as a string into the variable \"str\". Finally the clipboard is cleared by setting it to an empty string."," ","Back: ","OS And Compiler"," ","Next: ","external_define"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"745"})