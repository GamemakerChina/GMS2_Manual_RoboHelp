rh._.exports({"0":[[" ","draw_circle"]],"1":[["draw_circle"]],"2":[[" ","draw_circle"]],"3":[[" ","With this function you can draw either an outline of a circle or a filled circle. You can define how precise the drawing is with the function ","draw_set_circle_precision()","."," ","NOTE"," If you want to draw a shape using a shader, you should be aware that most shaders expect the following inputs: vertex, texture, colour. However, when using this function, only vertex and colour data are being passed in, and so the shader may not draw anything (or draw something but not correctly). If you need to draw shapes in this way then the shader should be customised with this in mind."],[" ","draw_circle(x, y, r, outline);"," ","Argument"," ","Type"," ","Description"," ","x"," ","Real"," ","The x coordinate of the center of the circle."," ","y"," ","Real"," ","The y coordinate of the center of the circle."," ","r"," ","Real"," ","The circle's radius (length from its center to its edge)"," ","outline"," ","Boolean"," ","Whether the circle is drawn filled (","false",") or as a one pixel wide outline (","true",")."],[" ","N/A"],[" ","draw_set_colour(c_white);","\n    draw_circle(100, 100, 50, true);"," ","This will draw a one pixel wide white circle outline with a radius of 50 pixels."," ","Back: ","Basic Forms"," ","Next: ","draw_circle_colour"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["draw_circle"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1366"})