rh._.exports({"0":[[" ","virtual_key_hide"]],"1":[["virtual_key_hide"]],"2":[[" ","virtual_key_hide"]],"3":[[" ","Once you have created your virtual key for your devices, you may need to debug and test that it is correctly positioned and working properly and for that you would call the function ","virtual_key_show()",". However, you may need to toggle this view on and off, so you can also hide the virtual key with this function, using the index of the virtual key that you want to hide (previously created and stored using ","virtual_key_add()","). Once you are happy with things it is recommended that you create and place your own graphic in its area."],[" ","virtual_key_hide(index);"," ","Argument"," ","Type"," ","Description"," ","index"," ","Virtual Key ID"," ","The index of the virtual key to hide."],[" ","N/A"],[" ","if global.Debug","\n    {","\n        virtual_key_show(global.Left);","\n    }","\n    else","\n    {","\n        virtual_key_hide(global.Left);","\n    }"," ","The above code checks the global variable \"global.Debug\" and if it tests true then the virtual key indexed in the variable \"global.Left\" will be drawn on the screen, and if it is false then the key will be hidden."," ","Back: ","Virtual Keys And Keyboards"," ","Next: ","virtual_key_delete"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["virtual_key_hide"]],"6":[[" ","Syntax"],[" ","Returns:"],[" ","Example:"]],"id":"1098"})