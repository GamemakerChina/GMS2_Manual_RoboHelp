rh._.exports({"0":[[" ","mouse_check_button_pressed"]],"1":[["mouse_check_button_pressed"]],"2":[["mouse_check_button_pressed"]],"3":[[" ","mouse_check_button_pressed"]],"4":[[" ","This function will return ","true"," if the mouse button being checked has been pressed or ","false"," if it has not. This function will only be triggered ","once"," for any mouse button when it is first pressed and to trigger it again the button will need to have been released and pressed again. Note that it will be considered triggered for the duration of the step, and for all instances that have any mouse events or that use this same function."," ","You supply the mouse button to check from one of the following constants:"," ","Mouse Button Constant"," ","Constant"," ","Description"," ","mb_left"," ","The left mouse button"," ","mb_middle"," ","The middle mouse button (this may not be valid for all target platforms)"," ","mb_right"," ","The right mouse button"," ","mb_side1","*"," ","Mouse side button 1"," ","mb_side2","*"," ","Mouse side button 2"," ","mb_any"," ","Any of the mouse buttons"," ","mb_none"," ","No mouse button"," ","* ","NOTE"," The ","mb_side1"," and ","mb_side2 ","buttons are only for use on Windows, macOS, Ubuntu and HTML5."],[" ","mouse_check_button_pressed(numb);"," ","Argument"," ","Type"," ","Description"," ","numb"," ","Mouse Button Constant"," ","Which mouse button constant to check for."],[" ","Boolean"],[" ","if mouse_check_button_pressed(mb_left)","\n    {","\n        score += 50;","\n    }"," ","The above code will check to see if the left mouse button has been pressed and if it has it will add 50 to the score."," ","Back: ","Mouse Input"," ","Next: ","mouse_check_button_released"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"999"})