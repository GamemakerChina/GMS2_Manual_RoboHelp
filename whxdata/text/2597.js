rh._.exports({"0":[["Keyboard Input"]],"1":[["vk_nokey,vk_anykey,vk_left,vk_right,vk_up,vk_down,vk_enter,vk_escape,vk_space,vk_shift,vk_control,vk_alt,vk_backspace,vk_tab,vk_home,vk_end,vk_delete,vk_insert,vk_pageup,vk_pagedown,vk_pause,vk_printscreen,vk_f1,vk_f2,vk_f3,vk_f4,vk_f5,vk_f6,vk_f7,vk_f8,vk_f9,vk_f10,vk_f11,vk_f12,vk_numpad0,vk_numpad1,vk_numpad2,vk_numpad3,vk_numpad4,vk_numpad5,vk_numpad6,vk_numpad7,vk_numpad8,vk_numpad9,vk_multiply,vk_divide,vk_add,vk_subtract,vk_decimal,vk_lshift,vk_lcontrol,vk_lalt,vk_rshift,vk_rcontrol,vk_ralt"]],"2":[["Keyboard Input,vk_nokey,vk_anykey,vk_left,vk_right,vk_up,vk_down,vk_enter,vk_escape,vk_space,vk_shift,vk_control,vk_alt,vk_backspace,vk_tab,vk_home,vk_end,vk_delete,vk_insert,vk_pageup,vk_pagedown,vk_pause,vk_printscreen,vk_f1,vk_f2,vk_f3,vk_f4,vk_f5,vk_f6,vk_f7,vk_f8,vk_f9,vk_f10,vk_f11,vk_f12,vk_numpad0,vk_numpad1,vk_numpad2,vk_numpad3,vk_numpad4,vk_numpad5,vk_numpad6,vk_numpad7,vk_numpad8,vk_numpad9,vk_multiply,vk_divide,vk_add,vk_subtract,vk_decimal,vk_lshift,vk_lcontrol,vk_lalt,vk_rshift,vk_rcontrol,vk_ralt"]],"3":[["\n  ","\n  "],["\n  ","When dealing with the keyboard in ","GameMaker"," you have a variety of functions that can be used to recognise different keyboard states like pressed or released. There are also some that store all the key-presses as a string or that can tell you what the last key pressed was, as well as others that allow you to clear the keyboard state completely.","\n  ","NOTE"," These functions are designed for Windows/Mac/Ubuntu desktop platforms only. You may find some of the built-in variables and constants aren't valid on other platforms and many of the functions won't work on mobiles.","\n  ","Each input character from a key (or multiple keys) is defined by its ","UTF8"," code, which is a numerical value. This value can be retrieved for any character using the ","ord()"," function but, ","GameMaker"," also has a series of ","constants"," for the most used keyboard special keys and a special functions. Typically you'd use a combination of ","ord()"," with the ","keyboard_check*()"," functions, something like this:","\n  ","if keyboard_check(ord(\"A\"))","\n    {","\n        hspeed = -5;","\n    }","\n  ","So, the above will check the \"A\" key and if it's being pressed then it'll set the horizontal speed of the object to -5. Note, that using ","ord()"," in this way will only function correctly if the input string is only one character in length and is a number from 0 to 9 or a ","capitalised"," Roman character from A to Z. The function ","ord()"," will return a full UTF8 value, but the ","keyboard_check*()"," functions will ","only detect A - Z and 0 - 9",". But what if you want to use the arrow keys? Or if you want to modify an action using the \"shift\" key? Well, for that ","GameMaker"," has a series of ","vk_"," constants (","vk_"," stands for ","virtual key",") that you can use in place of ","ord()",":","\n  ","\n    ","\n      ","\n      ","\n    ","\n    ","\n      ","\n        ","Virtual Key Constant (vk_*)","\n      ","\n      ","\n        ","Constant","\n        ","Description","\n      ","\n      ","\n        ","vk_nokey","\n        ","keycode representing that no key is pressed","\n      ","\n      ","\n        ","vk_anykey","\n        ","keycode representing that any key is pressed","\n      ","\n      ","\n        ","vk_left","\n        ","keycode for the left arrow key","\n      ","\n      ","\n        ","vk_right","\n        ","keycode for the right arrow key","\n      ","\n      ","\n        ","vk_up","\n        ","keycode for the up arrow key","\n      ","\n      ","\n        ","vk_down","\n        ","keycode for the down arrow key","\n      ","\n      ","\n        ","vk_enter","\n        ","enter key","\n      ","\n      ","\n        ","vk_escape","\n        ","escape key","\n      ","\n      ","\n        ","vk_space","\n        ","space key","\n      ","\n      ","\n        ","vk_shift","\n        ","either of the shift keys","\n      ","\n      ","\n        ","vk_control","\n        ","either of the control keys","\n      ","\n      ","\n        ","vk_alt","\n        ","alt key","\n      ","\n      ","\n        ","vk_backspace","\n        ","backspace key","\n      ","\n      ","\n        ","vk_tab","\n        ","tab key","\n      ","\n      ","\n        ","vk_home","\n        ","home key","\n      ","\n      ","\n        ","vk_end","\n        ","end key","\n      ","\n      ","\n        ","vk_delete","\n        ","delete key","\n      ","\n      ","\n        ","vk_insert","\n        ","insert key","\n      ","\n      ","\n        ","vk_pageup","\n        ","pageup key","\n      ","\n      ","\n        ","vk_pagedown","\n        ","pagedown key","\n      ","\n      ","\n        ","vk_pause","\n        ","pause/break key","\n      ","\n      ","\n        ","vk_printscreen","\n        ","printscreen/sysrq key","\n      ","\n      ","\n        ","vk_f1 ... vk_f12","\n        ","keycode for the function keys F1 to F12","\n      ","\n      ","\n        ","vk_numpad0 ... vk_numpad9","\n        ","number keys on the numeric keypad","\n      ","\n      ","\n        ","vk_multiply","\n        ","multiply key on the numeric keypad","\n      ","\n      ","\n        ","vk_divide","\n        ","divide key on the numeric keypad","\n      ","\n      ","\n        ","vk_add","\n        ","add key on the numeric keypad","\n      ","\n      ","\n        ","vk_subtract","\n        ","subtract key on the numeric keypad","\n      ","\n      ","\n        ","vk_decimal","\n        ","decimal dot keys on the numeric keypad","\n      ","\n    ","\n  ","\n  "," ","\n  ","The following constants can only be used with ","keyboard_check_direct()",":","\n  ","\n    ","\n      ","\n      ","\n    ","\n    ","\n      ","\n        ","Virtual Key Constant (vk_*)","\n      ","\n      ","\n        ","Constant","\n        ","Description","\n      ","\n      ","\n        ","vk_lshift","\n        ","left shift key","\n      ","\n      ","\n        ","vk_lcontrol","\n        ","left control key","\n      ","\n      ","\n        ","vk_lalt","\n        ","left alt key","\n      ","\n      ","\n        ","vk_rshift","\n        ","right shift key","\n      ","\n      ","\n        ","vk_rcontrol","\n        ","right control key","\n      ","\n      ","\n        ","vk_ralt","\n        ","right alt key","\n      ","\n    ","\n  ","\n  ","The following is a small example of how to use the"," ","vk_"," ","constants:","\n  ","if keyboard_check_pressed(vk_tab)","\n    {","\n        instance_create_layer(x, y, \"Controllers\", obj_Menu);","\n    }","\n  ","The above code will detect if the \"Tab\" key is ","pressed"," and create an instance of object \"obj_Menu\" if it is.","\n  ","If you need to check for a key character that is not 0 - 9, A - Z or one of the VK constants, then you should be checking one of the ","keyboard_*"," variables, like ","keyboard_lastchar"," for example:","\n  ","var _key = keyboard_lastchar;","\n    if ord(_key) == ord(\"ç\")","\n    {","\n        show_debug_message(\"ç key pressed\");","\n    }","\n  ","The following functions are available for use when working with a keyboard:","\n  ","NOTE",": These functions will ","not"," work when using an on-screen ","Virtual Keyboard",".","\n  ","\n    ","io_clear","\n    ","keyboard_check","\n    ","keyboard_check_pressed","\n    ","keyboard_check_released","\n    ","keyboard_check_direct","\n    ","keyboard_clear","\n    ","keyboard_set_map","\n    ","keyboard_get_map","\n    ","keyboard_unset_map","\n    ","keyboard_set_numlock","\n    ","keyboard_get_numlock","\n  ","\n  "," ","\n  ","There are also some functions that can be used to simulate keypresses:","\n  ","\n    ","keyboard_key_press","\n    ","keyboard_key_release","\n  ","\n  "," ","\n  ","Finally, the following variables are built-in to ","GameMaker"," and can be accessed to get information about the keyboard state and input:","\n  ","NOTE",": When using the ","Virtual Keyboard",", ","only"," the ","keyboard_string"," variable will be updated with the keyboard input.","\n  ","\n    ","keyboard_key","\n    ","keyboard_lastkey","\n    ","keyboard_lastchar","\n    ","keyboard_string","\n  ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Game Input","\n        ","Next: ","Mouse Input","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["Keyboard Input"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2597"})