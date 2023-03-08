rh._.exports({"0":[[" ","draw_set_halign"]],"1":[["draw_set_halign,fa_left,fa_center,fa_right"]],"2":[["draw_set_halign,fa_left,fa_center,fa_right"]],"3":[[" ","draw_set_halign"]],"4":[[" ","This function is used to align text along the horizontal axis and changing the horizontal alignment will change the position and direction in which all further text is drawn with the default value being ","fa_left",". The following constants are accepted:"," ","Constant"," ","Alignment"," ","fa_left"," ","fa_center"," ","fa_right"],[" ","draw_set_halign(halign);"," ","Argument"," ","Type"," ","Description"," ","halign"," ","Horizontal Alignment Constant"," ","Horizontal alignment constant (from the table above)."],[" ","N/A"],[" ","draw_set_halign(fa_left);","\n    draw_text(100, 32, \"Score: \" + string(score));","\n    draw_set_halign(fa_right);","\n    draw_text(room_width - 100, 32, \"Health: \" + string(health));"," ","The above code will draw two strings on the same line, with the score being left-hand aligned and the health being right-hand aligned."," ","Back: ","Text"," ","Next: ","draw_set_valign"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1581"})