rh._.exports({"0":[["draw_triangle_colour"]],"1":[["draw_triangle_colour,draw_triangle_color"]],"2":[["draw_triangle_colour,draw_triangle_color"]],"3":[["\n  ","\n  "],["\n  ","With this function you can draw either an outline of a triangle or a filled triangle. If it is filled you can define the individual colours for each corner point and if these colours are not the same, you will get a gradient effect from one to the other (the colour settings will over-ride the base colour set with the function ","draw_set_colour()",").","\n  ","NOTE",": If you are wanting to draw a shape using a shader, you should be aware that most shaders expect the following inputs: vertex, texture, Colour. However, when using this function, only vertex and colour data are being passed in, and so the shader may not draw anything (or draw something but not correctly). If you need to draw shapes in this way then the shader should be customised with this in mind.","\n  "," ","\n  "],["\n  ","draw_triangle_colour(x1, y1, x2, y2, x3, y3, col1, col2, col3, outline);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","x1","\n        ","Real","\n        ","The x coordinate of the triangle's first corner.","\n      ","\n      ","\n        ","y1","\n        ","Real","\n        ","The y coordinate of the triangle's first corner.","\n      ","\n      ","\n        ","x2","\n        ","Real","\n        ","The x coordinate of the triangle's second corner.","\n      ","\n      ","\n        ","y2","\n        ","Real","\n        ","The y coordinate of the triangle's second corner.","\n      ","\n      ","\n        ","x3","\n        ","Real","\n        ","The x coordinate of the triangle's third corner.","\n      ","\n      ","\n        ","y3","\n        ","Real","\n        ","The y coordinate of the triangle's third corner.","\n      ","\n      ","\n        ","col1","\n        ","Colour","\n        ","The colour of the first corner.","\n      ","\n      ","\n        ","col2","\n        ","Colour","\n        ","The colour of the second corner.","\n      ","\n      ","\n        ","col3","\n        ","Colour","\n        ","The colour of the third corner.","\n      ","\n      ","\n        ","outline","\n        ","Boolean","\n        ","Whether the triangle is an outline (true) or filled in (false).","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","draw_triangle_colour(200, 200, 300, 200, 200, 300, c_red, c_blue, c_blue, false);","\n  ","This would draw a filled isosceles right-angled triangle with red at the right angle, blue on the other two corners.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Basic Forms","\n        ","Next: ","draw_set_circle_precision","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["draw_triangle_colour"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2126"})