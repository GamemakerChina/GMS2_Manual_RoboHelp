rh._.exports({"0":[[" ","virtual_key_show"]],"1":[["virtual_key_show"]],"2":[["virtual_key_show"]],"3":[[" ","virtual_key_show"]],"4":[[" ","Once you have created your virtual key for your devices, you may need to debug and test that it is correctly positioned and working properly. For that you would call this function, using the index of the virtual key that you want to see (previously created and stored using ","virtual_key_add()",") which will draw a coloured rectangle to represent the key on the screen. Once you are happy with things it is recommended that you create and place your own graphic in its area."," ","NOTE"," The rectangle being drawn will be affected by the blending, colour and alpha options set by the corresponding ","draw functions","."],[" ","virtual_key_show(index);"," ","Argument"," ","Type"," ","Description"," ","index"," ","Virtual Key ID"," ","The index of the virtual key to show."],[" ","N/A"],[" ","if global.Debug","\n    {","\n        virtual_key_show(global.Left);","\n    }","\n    else","\n    {","\n        virtual_key_hide(global.Left);","\n    }"," ","The above code checks the global variable \"global.Debug\" and if it tests true then the virtual key indexed in the variable \"global.Left\" will be drawn on the screen, and if it is false then the key will be hidden."," ","Back: ","Virtual Keys And Keyboards"," ","Next: ","virtual_key_hide"]],"5":[[" ","Syntax"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1301"})