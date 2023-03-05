rh._.exports({"0":[[" ","draw_clear_alpha"]],"1":[["draw_clear_alpha"]],"2":[["draw_clear_alpha"]],"3":[[" ","draw_clear_alpha"]],"4":[[" ","This function can be used to clear the entire screen with a given colour and the alpha component of the destination is set to the value you have set - this function does ","not"," do any blending as it works but any subsequent blend operations can\n    be set up to use the destination alpha that you have set. This is only for use in the draw event of an instance (it will not show if used in any other event), and it can also be very useful for clearing ","surfaces","    when they are newly created."," ","It is worth noting that when using the HTML5 module, you can use this function to make the canvas background transparent, which will then permit any images being used in the host HTML to be seen with the game running over them. To achieve this effect\n    you must first go into the room editor and remove any ","Background Layers"," from the ","Room Editor",", then untick the option ","Clear View Background"," found on the ","View Properties",".\n    Finally, you will need to make a new object, place it in the first room of the game, and assign it a very high depth (for example, 10000). Then in the ","Pre Draw"," event use this function to set the canvas alpha to the colour and transparency that\n    you wish it to have."],[" ","draw_clear_alpha(col, alpha);"," ","Argument","Type"," ","Description"," ","col","Colour"," ","The colour with which the screen will be cleared"," ","alpha","Real"," ","The transparency of the colour with which the screen will be cleared"],[" ","N/A"],[" ","draw_clear_alpha(c_red, 0.5);"," ","This will clear the screen with 50% (0.5) transparency with the colour red."," ","Back: ","Colour And Alpha"," ","Next: ","draw_set_alpha"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1679"})