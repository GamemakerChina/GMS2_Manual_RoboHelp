rh._.exports({"0":[[" ","debug_get_callstack"]],"1":[["debug_get_callstack"]],"2":[[" ","debug_get_callstack"]],"3":[[" ","This function generates an array of strings as the \"callstack\" where the current script is listed first, and then all the other scripts that were run in order for the current script to be executed. The exact string format will vary depending on the target platform chosen, but it will mostly have the script/event name, then a colon : and the line number, similar to this:"," ","\"gml_Script_script2:1\"","\n      \"gml_Script_script1:32\"","\n      \"gml_Script_script0:64\"","\n      \"gml_Object_object0_Create_0:1\""," ","The function allows for an optional argument to be passed in, which is the maximum depth of the returned callstack. This value is the number of scripts that are included in the returned array starting from the current script. If this argument is not specified, then the full callstack will be returned."," ","Note that the returned array will always contain 0 in its last position, after listing the callstack scripts."],[" ","debug_get_callstack([maxdepth])"," ","Argument"," ","Type"," ","Description"," ","[maxdepth]"," ","Real"," ","OPTIONAL"," The maximum depth of the callstack that is returned"],[" ","Array"],[" ","if debug_mode","\n    {","\n        if keyboard_check(vk_escape)","\n        {","\n            var _a = debug_get_callstack(4);","\n            for (var i = 0; i < array_length_id(_a); ++i;)","\n            {","\n                show_debug_message(_a[i]);","\n            }","\n        }","\n    }"," ","The above code checks to see if debug mode is enabled and if it is, checks to see if a key is being held down. In that case, it outputs the current call stack to the console, with a maximum depth of 4."," ","Back: ","Debugging"," ","Next: ","exception_unhandled_handler"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["debug_get_callstack"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1683"})