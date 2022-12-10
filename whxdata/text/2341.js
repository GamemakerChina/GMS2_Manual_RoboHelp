rh._.exports({"0":[["draw_healthbar"]],"1":[["draw_healthbar"]],"2":[["draw_healthbar"]],"3":[["\n  ","\n  "],["\n  ","With this function you can draw a coloured bar to show a constant value. Although the function uses the word \"healthbar\" you can use this to display anything you wish as long as the amount to be displayed is a percentage value between 0 and 100 (a percentage of any value can be calculated with the formula ","(CURRENT_Value / MAXIMUM_value) * 100","), so, for example, you can use this to display power, health, mana, time or anything else that would benefit from a bar display.","\n  ","You can set various different things that change the visual aspect of the bar and these are illustrated in the image below (note that the colours used here are ","c_green"," for the maximum value and ","c_red"," for the minimum value, but you can use the colours that you wish):","\n  ","\n  ","NOTE",": If you are wanting to draw a shape using a shader, you should be aware that most shaders expect the following inputs: vertex, texture, Colour. However, when using this function, only vertex and colour data are being passed in, and so the shader may not draw anything (or draw something but not correctly). If you need to draw shapes in this way then the shader should be customised with this in mind.","\n  "," ","\n  "],["\n  ","draw_healthbar(x1, y1, x2, y2, amount, backcol, mincol, maxcol, direction, showback, showborder);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","x1","\n        ","Real","\n        ","The x coordinate of the left of the healthbar","\n      ","\n      ","\n        ","y1","\n        ","Real","\n        ","The y coordinate of the top of the healthbar","\n      ","\n      ","\n        ","x2","\n        ","Real","\n        ","The x coordinate of the right of the healthbar","\n      ","\n      ","\n        ","y2","\n        ","Real","\n        ","The y coordinate of the bottom of the healthbar","\n      ","\n      ","\n        ","amount","\n        ","Real","\n        ","The variable which defines total health (between 0 and 100)","\n      ","\n      ","\n        ","backcol","\n        ","Colour","\n        ","The colour of the background for the bar","\n      ","\n      ","\n        ","mincol","\n        ","Colour","\n        ","The colour of the bar when at no health (0)","\n      ","\n      ","\n        ","maxcol","\n        ","Colour","\n        ","The colour of the bar when at full health (100)","\n      ","\n      ","\n        ","direction","\n        ","Real","\n        ","Where the bar is \"anchored\" (0 = left, 1 = right, 2 = top, 3 = bottom)","\n      ","\n      ","\n        ","showback","\n        ","Boolean","\n        ","Whether the bar's background is drawn (","true",") or not (","false","). If false, the backcol argument is disregarded.","\n      ","\n      ","\n        ","showborder","\n        ","Boolean","\n        ","Whether the bar's elements have a 1px wide black border (","true",") or not (","false",").","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","var pc;","\n    pc = (hp / max_hp) * 100;","\n    draw_healthbar(100, 100, 500, 200, pc, c_black, c_red, c_lime, 0, true, true)","\n  ","The above code uses the percentage value that you get from the variables \"hp\" and \"hp_max\" to draw a standard red/green healthbar.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Basic Forms","\n        ","Next: ","draw_path","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["draw_healthbar"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2341"})