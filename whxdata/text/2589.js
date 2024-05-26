rh._.exports({"0":[[" ","exception_unhandled_handler"]],"1":[["exception_unhandled_handler"]],"2":[["exception_unhandled_handler"]],"3":[[" ","exception_unhandled_handler"]],"4":[[" ","This runtime function can be used to \"take over\" the default ","GameMaker"," error message when a runtime exception occurs. You supply a method or function which is called when the exception occurs, and its first argument will be a struct (known as the ","Exception Struct",") containing information about the exception. This struct has the following format:"," ","Exception Struct"," ","Variable"," ","Type"," ","Description"," ","message"," ","String"," ","A short message for the exception"," ","longMessage"," ","String"," ","A longer message for the exception"," ","script"," ","String"," ","A string that describes where the exception came from"," ","line"," ","Real"," ","The line number where the exception came from"," ","stacktrace"," ","Array"," of ","String","s"," ","An array of strings that is the ","callstack"," for the frame when the exception was generated"," ","You can also supply ","undefined"," as the argument, which will remove the custom exception handler (if set) and revert to ","GameMaker","'s default error message."," ","This function will return the previously set exception handler method, however if it was never changed or it was previously reset using ","undefined",", then it will simply return ","undefined","."," ","Passing a method to this function means that no error message will be shown to the user, and you will be allowed to handle the exception yourself. However you cannot use this to \"break out\" of the exception to continue your game, as the game will still close after the exception handler is called. You also cannot call functions that keep the game running for longer than the final frame (e.g. ","game_restart()",") as the game needs to close after the crash."," ","Note that the context for running the method is ","not"," in an event, so nothing can be rendered to the screen at this time. In general, the safest thing that could be done at this point is to save a file with the exception context information so it could be - for example - parsed and processed on the next run of the game and then dealt with."," ","Note that if you use the ","return"," statement in the supplied method, then the given value will be converted to an integer and used as the exit code from the runner."],[" ","exception_unhandled_handler(user_handler);"," ","Argument"," ","Type"," ","Description"," ","user_handler"," ","Method"," ","The method (user-defined function) to use as the exception handler, or ","undefined"," to reset it to default."],[" ","Method"," (or ","undefined",")"],[" ","exception_unhandled_handler(function(ex)","\n    {","\n        // Print some messages to the output log","\n        show_debug_message( \"--------------------------------------------------------------\");","\n        show_debug_message( \"Unhandled exception \" + string(ex) );","\n        show_debug_message( \"--------------------------------------------------------------\");"," ","\n        // Write the exception struct to a file","\n        if file_exists(\"crash.txt\") file_delete(\"crash.txt\");","\n        var _f = file_text_open_write(\"crash.txt\");","\n        file_text_write_string(_f, string(ex));","\n        file_text_close(_f);"," ","\n        // Show the error message (for debug purposes only)","\n        show_message(ex.longMessage);"," ","\n        return 0;","\n    });\n  "," ","The above code will create an exception handler method and use it to save a file with the exception data; it will also show the long error message in a new pop-up window for debug purposes."," ","Back: ","Debugging"," ","Next: ","get_integer"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"2589"})