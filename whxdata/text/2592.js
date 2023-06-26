rh._.exports({"0":[[" ","window_set_size"]],"1":[["window_set_size"]],"2":[[" ","window_set_size"]],"3":[[" ","With this function you can change the size of the game window. On desktop platforms this usually refers to the client area of the window, excluding the title bar and borders:"," ","If you use this function to change the size of the game window, the contents of the window will be scaled to fit with a 1:1 ratio to the background canvas which will keep the image crisp and clear (although scaled, if the window is different from the room or view size). For example, if you have a 200 x 150 pixel window, and the player stretches the window by dragging the borders, the final window size may be 400 x 300 pixels, but the drawing canvas is STILL 200 x 150, which gives a blurred image as the pixel ratio is now 1:2. However, if you use this function to change the window size, the 1:1 ratio is maintained, even though the image is scaled to fit the new window size."],[" ","window_set_size( w, h );"," ","Argument","Type"," ","Description"," ","w","Real"," ","The new width of the window."," ","h","Real"," ","The new height of the window."],[" ","N/A"],[" ","if mouse_check_button_pressed(mb_left)","\n    {","\n        global.scale += 1;","\n        window_set_size(200 * global.scale, 150 * global.scale);","\n    }"," ","The above code will change the size of the window based on the value of the variable \"global.scale\" when the mouse button is pressed."," ","Back: ","The Game Window"," ","Next: ","window_set_rectangle"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["window_set_size"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"2592"})