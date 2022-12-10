rh._.exports({"0":[["draw_arrow"]],"1":[["draw_arrow"]],"2":[["draw_arrow"]],"3":[["\n  ","\n  "],["\n  ","This function will draw an arrow from point (x1,y1) to point (x2,y2). The stem of the arrow is drawn along these points with the actual arrow head being drawn at the end, where the size of the arrowhead is defined by the argument \"size\" and\n    is calculated as being part of the stem so that the end point is always aligned with the position defined by x2,y2. The width of the arrow head is calculated automatically in proportion to the length.","\n  ","NOTE",": If you are wanting to draw a shape using a shader, you should be aware that most shaders expect the following inputs: vertex, texture, Colour. However, when using this function, only vertex and colour data are being passed in, and so the\n    shader may not draw anything (or draw something but not correctly). If you need to draw shapes in this way then the shader should be customised with this in mind.","\n  "," ","\n  "],["\n  ","draw_arrow(x1, y1, x2, y2, size);","\n  "," ","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","x1","Real","\n        ","The x coordinate of the start of the line.","\n     ","\n      ","\n        ","y1","Real","\n        ","The y coordinate of the start of the line.","\n     ","\n      ","\n        ","x2","Real","\n        ","The x coordinate of the end of the line (where the arrowhead ends).","\n     ","\n      ","\n        ","y2","Real","\n        ","The y coordinate of the end of the line (where the arrowhead ends).","\n     ","\n      ","\n        ","size","Real","\n        ","The length of the arrow in pixels.","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","draw_arrow(x, y, mouse_x, mouse_y, 10);","\n  ","The above code will draw an arrow from the position of the instance to the position of the mouse, with the arrow head being 10 pixels long.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Basic Forms","\n        ","Next: ","draw_circle","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["draw_arrow"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1677"})