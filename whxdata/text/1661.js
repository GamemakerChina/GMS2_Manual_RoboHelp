rh._.exports({"0":[[" ","draw_ellipse"]],"1":[["draw_ellipse"]],"2":[["draw_ellipse"]],"3":[[" ","draw_ellipse"]],"4":[[" ","With this function you can draw either an outline of an ellipse or a filled ellipse by defining a rectangular area that will then have the ellipse created to fit. You can define how precise the drawing is with the function ","draw_set_circle_precision()","."," ","NOTE",": If you are wanting to draw a shape using a shader, you should be aware that most shaders expect the following inputs: vertex, texture, Colour. However, when using this function, only vertex and colour data are being passed in, and so the shader may not draw anything (or draw something but not correctly). If you need to draw shapes in this way then the shader should be customised with this in mind."],[" ","draw_ellipse(x1, y1, x2, y2, outline);"," ","Argument"," ","Type"," ","Description"," ","x1"," ","Real"," ","The x coordinate of the left of the ellipse."," ","y1"," ","Real"," ","The y coordinate of the top of the ellipse."," ","x2"," ","Real"," ","The x coordinate of the right of the ellipse."," ","y2"," ","Real"," ","The y coordinate of the bottom of the ellipse."," ","outline"," ","Boolean"," ","Whether the ellipse is drawn filled (false) or as a one pixel wide outline (true)."],[" ","N/A"],[" ","draw_set_colour(c_white);","\n    draw_ellipse(100, 100, 300, 200, false);"," ","This will draw a filled ellipse within the defined rectangular area."," ","Back: ","Basic Forms"," ","Next: ","draw_ellipse_colour"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1661"})