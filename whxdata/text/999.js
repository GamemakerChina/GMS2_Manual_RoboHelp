rh._.exports({"0":[[" ","keyboard_lastkey"]],"1":[["keyboard_lastkey"]],"2":[["keyboard_lastkey"]],"3":[[" ","keyboard_lastkey"]],"4":[[" ","This variable refers to the value that ","keyboard_key"," was in the previous frame, returning the keycode of that key (all standard keycode constants are returned)."," ","This variable is ","not"," read only and you can change it, for example to set it to ","vk_nokey"," if you handled it already."],[" ","keyboard_lastkey"],[" ","Virtual Key Constant (vk_*)"],[" ","if (keyboard_lastkey != vk_nokey)","\n    {","\n        str += keyboard_lastchar;","\n        keyboard_lastkey = vk_nokey;","\n    }"," ","The above code checks to see if the ","keyboard_lastkey"," variable is not equal to ","vk_nokey",", and if it is it adds whatever the last key was as a string to the variable ","str",", then it resets the ","keyboard_lastkey"," variable to accept further input."," ","Back: ","Keyboard Input"," ","Next: ","keyboard_lastchar"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"999"})