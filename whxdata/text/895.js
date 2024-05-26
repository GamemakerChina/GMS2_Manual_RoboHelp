rh._.exports({"0":[[" ","keyboard_key_press"]],"1":[["keyboard_key_press"]],"2":[["keyboard_key_press"]],"3":[[" ","keyboard_key_press"]],"4":[[" ","With this function you can simulate the press of any key on the keyboard. When used, the key will be flagged as being pressed until the corresponding release function is called (see ","keyboard_key_release()",").\n    The function will take a keycode value as returned by the function ","ord()"," (only ","capital"," letters from A-Z or numbers from 0-9), or any of the ","vk_*"," constants listed on the main ","Keyboard Input","    page."," ","Note that after calling this function, if the key is ","physically"," pressed on the keyboard, this press event will ","not"," be registered again until the key has been physically released (triggering the release event and stopping this function),\n    or the corresponding release key function has been called, and the key pressed again."],[" ","keyboard_key_press(key);"," ","Argument","Type"," ","Description"," ","key","Virtual Key Constant (vk_*)"," ","The key to simulate a press of."],[" ","N/A"],[" ","keyboard_key_press(vk_space);"," ","This will simulate a spacebar press."," ","Back: ","Keyboard Input"," ","Next: ","keyboard_key_release"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"895"})