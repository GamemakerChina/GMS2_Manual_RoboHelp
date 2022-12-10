rh._.exports({"0":[["draw_roundrect_colour_ext"]],"1":[["draw_roundrect_colour_ext"]],"2":[["draw_roundrect_colour_ext,draw_roundrect_color_ext"]],"3":[["\n  ","\n  "],["\n  ","With this function you can draw either an outline of a rounded rectangle or a filled rounded rectangle where the (x1,y1) position is the top left corner and the (x2,y2) position is the bottom right corner. If the rectangle is filled, then the colour arguments will be used to generate a colour gradient from the centre to the edges, where colour 1 is the centre colour and colour 2 the edge colour. You must also supply radius values for the x and y axis (in pixels) and the corners will be rounded by these amounts. You can define how precise the drawing of the corners is with the function ","draw_set_circle_precision()",". Please note that the rectangle being drawn may need different values (+/-1 on the x, y, or width or height) to be drawn with the desired dimensions due to differences across the various supported platforms.","\n  ","NOTE",": If you are wanting to draw a shape using a shader, you should be aware that most shaders expect the following inputs: vertex, texture, Colour. However, when using this function, only vertex and colour data are being passed in, and so the shader may not draw anything (or draw something but not correctly). If you need to draw shapes in this way then the shader should be customised with this in mind.","\n  "," ","\n  "],["\n  ","draw_roundrect_colour_ext(x1, y1, x2, y2, xrad, yrad, col1, col2, outline);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","x1","\n        ","Real","\n        ","The x coordinate of the left of the rounded rectangle.","\n      ","\n      ","\n        ","y1","\n        ","Real","\n        ","The y coordinate of the top of the rounded rectangle.","\n      ","\n      ","\n        ","x2","\n        ","Real","\n        ","The x coordinate of the right of the rounded rectangle.","\n      ","\n      ","\n        ","y2","\n        ","Real","\n        ","The y coordinate of the bottom of the rounded rectangle.","\n      ","\n      ","\n        ","xrad","\n        ","Real","\n        ","The radius of the curve along the x axis from the rectangle corners.","\n      ","\n      ","\n        ","yrad","\n        ","Real","\n        ","The radius of the curve along the y axis from the rectangle corners.","\n      ","\n      ","\n        ","col1","\n        ","Colour","\n        ","The center colour.","\n      ","\n      ","\n        ","col2","\n        ","Colour","\n        ","The outside edge colour.","\n      ","\n      ","\n        ","outline","\n        ","Boolean","\n        ","Whether the rectangle is an outline (true) or filled in (false).","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","var dist = point_distance(x, y, mouse_x, mouse_y) / 10;","\n    var col = make_colour_hsv(clamp(dist, 0, 255), 255, 255);","\n    draw_roundrect_colour_ext(x - 50, y - 50, x + 50, y + 50, dist, dist, col, c_white, 0);","\n  ","This would draw a filled-in square with rounded corners, the radius of which is defined by the distance from the instance doing the drawing to the mouse. This value is also used to calculate the centre blend colour.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Basic Forms","\n        ","Next: ","draw_triangle","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["draw_roundrect_colour_ext"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2256"})