rh._.exports({"0":[["draw_set_circle_precision"]],"1":[["draw_set_circle_precision"]],"2":[["draw_set_circle_precision"]],"3":[["\n  ","\n  "],["\n  ","To optimise performance when drawing circles, ","GameMaker"," basically draws a polygon shape with enough sides to make it ","appear"," circular. However, depending on how big or small you need your circles to be, you may find that changing\n    this value can help increase the performance of your game, or make the circles look better. The precision value that you can input into this function is the number of sides the circle polygon has, and this number can be anything between 4 and 64,\n    ","but must be a number divisible by 4",", with a default value of 24.","\n  ","\n  ","NOTE",": If you are wanting to draw a shape using a shader, you should be aware that most shaders expect the following inputs: vertex, texture, Colour. However, when using this function, only vertex and colour data are being passed in, and so the\n    shader may not draw anything (or draw something but not correctly). If you need to draw shapes in this way then the shader should be customised with this in mind.","\n  "," ","\n  "],["\n  ","draw_set_circle_precision(precision);","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","precision","Real","\n        ","The precision of all circles drawn after this function is called.","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","draw_set_circle_precision(12);","\n  ","The above code will draw all circles using a 12 sided polygon.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Basic Forms","\n        ","Next: ","draw_button","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["draw_set_circle_precision"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1374"})