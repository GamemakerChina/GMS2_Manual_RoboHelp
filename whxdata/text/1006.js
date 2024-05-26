rh._.exports({"0":[[" ","display_get_gui_height"]],"1":[["display_get_gui_height"]],"2":[["display_get_gui_height"]],"3":[[" ","display_get_gui_height"]],"4":[[" ","This function gets the height (in pixels) of the GUI as used in the ","Draw GUI Event","."," ","NOTE"," When your ","application_surface"," is larger than the display's size (roughly), and you call this function before the current room's initialisation has finished, e.g. in a global script, a room's Creation Code or an instance's Create event, the value returned may not be accurate. For accurate results in such cases, call this in a Draw event."],[" ","display_get_gui_height","();"],[" ","Real"],[" ","Draw GUI Event"," ","var _height = ","display_get_gui_height","();","\n    var _valign = draw_get_valign();","\n    draw_set_valign(fa_bottom);","\n    draw_text(5, _height - 5, \"I am drawn in the bottom-left corner of the GUI\");","\n    draw_set_valign(_valign);"," ","The above code draws a text in the GUI: it first gets the GUI height using ","display_get_gui_height"," and then sets the vertical text alignment to ","fa_bottom",", then draws a line of text using ","draw_text"," and finally resets the vertical text alignment to its previous value."," ","Back: ","Cameras And Display"," ","Next: ","display_get_timing_method"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"1006"})