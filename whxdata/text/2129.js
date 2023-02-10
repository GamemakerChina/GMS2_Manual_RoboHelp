rh._.exports({"0":[[" ","draw_triangle_colour"]],"1":[["draw_triangle_colour,draw_triangle_color"]],"2":[["draw_triangle_colour,draw_triangle_color"]],"3":[[" ","draw_triangle_colour"]],"4":[[" ","With this function you can draw either an outline of a triangle or a filled triangle. If it is filled you can define the individual colours for each corner point and if these colours are not the same, you will get a gradient effect from one to the other (the colour settings will over-ride the base colour set with the function ","draw_set_colour()",")."," ","NOTE",": If you are wanting to draw a shape using a shader, you should be aware that most shaders expect the following inputs: vertex, texture, Colour. However, when using this function, only vertex and colour data are being passed in, and so the shader may not draw anything (or draw something but not correctly). If you need to draw shapes in this way then the shader should be customised with this in mind."],[" ","draw_triangle_colour(x1, y1, x2, y2, x3, y3, col1, col2, col3, outline);"," ","Argument"," ","Type"," ","Description"," ","x1"," ","Real"," ","The x coordinate of the triangle's first corner."," ","y1"," ","Real"," ","The y coordinate of the triangle's first corner."," ","x2"," ","Real"," ","The x coordinate of the triangle's second corner."," ","y2"," ","Real"," ","The y coordinate of the triangle's second corner."," ","x3"," ","Real"," ","The x coordinate of the triangle's third corner."," ","y3"," ","Real"," ","The y coordinate of the triangle's third corner."," ","col1"," ","Colour"," ","The colour of the first corner."," ","col2"," ","Colour"," ","The colour of the second corner."," ","col3"," ","Colour"," ","The colour of the third corner."," ","outline"," ","Boolean"," ","Whether the triangle is an outline (true) or filled in (false)."],[" ","N/A"],[" ","draw_triangle_colour(200, 200, 300, 200, 200, 300, c_red, c_blue, c_blue, false);"," ","This would draw a filled isosceles right-angled triangle with red at the right angle, blue on the other two corners."," ","Back: ","Basic Forms"," ","Next: ","draw_set_circle_precision"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2129"})