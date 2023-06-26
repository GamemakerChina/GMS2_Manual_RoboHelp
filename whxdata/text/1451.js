rh._.exports({"0":[[" ","gamepad_button_check"]],"1":[["gamepad_button_check"]],"2":[[" ","gamepad_button_check"]],"3":[[" ","This function will return ","true"," or ","false"," depending on whether the given gamepad button is detected as being held down or not. If you are checking an analogue button, then the check will take into consideration the ","threshold setting"," and only return ","true"," while the raw input value is over the given threshold (you can get this raw value using the function ","gamepad_button_value()",")."],[" ","gamepad_button_check(device, button);"," ","Argument"," ","Type"," ","Description"," ","device"," ","Real"," ","Which gamepad device \"slot\" to check."," ","button"," ","Gamepad Button Constant"," ","Which gamepad button ","constant"," to check for."],[" ","Boolean"],[" ","if gamepad_button_check(0, gp_face1)","\n    {","\n        if canshoot = true","\n        {","\n            audio_play_sound(snd_Shoot, 0, false);","\n            instance_create_layer(x, y, \"Bullets\", obj_Bullet)","\n            canshoot = false;","\n            alarm[0] = room_speed / 2;","\n        }","\n    }"," ","The above code will detect whether the bottom button of the top face (the \"X\" on a ps3 controller) is being held down and if so, it will shoot a \"bullet\" instance and set an alarm."," ","Back: ","Gamepad Input"," ","Next: "," gamepad_button_check_pressed "]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["gamepad_button_check"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1451"})