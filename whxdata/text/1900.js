rh._.exports({"0":[[" ","draw_line_width_colour"]],"1":[["draw_line_width_colour,draw_line_width_color"]],"2":[["draw_line_width_colour,draw_line_width_color"]],"3":[[" ","draw_line_width_colour"]],"4":[[" ","With this function you can draw a line of a specific width with the colour blended between colour 1 at the first point and colour 2 at the second point. The colour settings will over-ride the base colour set with the function ","draw_set_colour()",".\n    Please note that the line being drawn may need different values (+/-1 on the x, y) to be drawn with the desired dimensions due to differences across the various supported platforms."," ","NOTE",": If you are wanting to draw a shape using a shader, you should be aware that most shaders expect the following inputs: vertex, texture, Colour. However, when using this function, only vertex and colour data are being passed in, and so the\n    shader may not draw anything (or draw something but not correctly). If you need to draw shapes in this way then the shader should be customised with this in mind."],[" ","draw_line_width_colour(x1, y1, x2, y2, w, col1, col2);"," ","Argument","Type"," ","Description"," ","x1","Real"," ","The x coordinate of the start of the line."," ","y1","Real"," ","The y coordinate of the start of the line."," ","x2","Real"," ","The x coordinate of the end of the line."," ","y2","Real"," ","The y coordinate of the end of the line."," ","w","Real"," ","The width in pixels of the line."," ","col1","Colour"," ","The colour of the start of the line."," ","col2","Colour"," ","The colour of the end of the line."],[" ","N/A"],[" ","draw_line_width_colour(50, 50, 300, 50, 4, c_red, c_blue);"," ","This would draw a horizontal line from (50,50) to (300,50), four pixels wide, with a smooth red to blue gradient."," ","Back: ","Basic Forms"," ","Next: ","draw_point"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1900"})