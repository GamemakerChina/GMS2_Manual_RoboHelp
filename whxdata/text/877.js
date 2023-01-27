rh._.exports({"0":[[" ","draw_light_enable"]],"1":[["draw_light_enable"]],"2":[["draw_light_enable"]],"3":[[" ","draw_light_enable"]],"4":[[" ","This function is used to enable a defined light. When you define a positional or a directional light you must assign it an index number which is then used by this function to switch the light on or off. Default is disabled (","false",")."," ","NOTE",": There are only 8 hardware lights available, so only 8 defined lights can be enabled at any one time (although more can be defined)."],[" ","draw_light_enable(ind, enable);"," ","Argument"," ","Type"," ","Description"," ","ind"," ","Real"," ","The index number of the light (from 0 to 7)"," ","enable"," ","Boolean"," ","Enable or disable all lighting (","true"," or ","false",")"],[" ","N/A"],[" ","draw_set_lighting(true);","\n    draw_light_define_direction(1, 0, 1, 0, c_white);","\n    draw_light_enable(1, true);"," ","The above code will enable lighting for the whole scene, then define a white directional light in the room space, and then finally turn that light on."," ","Back: ","Lighting"," ","Next: ","draw_set_lighting"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"877"})