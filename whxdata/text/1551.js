rh._.exports({"0":[["ds_grid_value_exists"]],"1":[["ds_grid_value_exists"]],"2":[["ds_grid_value_exists"]],"3":[["\n  ","\n  "],["\n  ","With this function you can check to see if a specific value (real or string) is present within a rectangular area of a given DS grid. If it is present the function will return ","true"," otherwise it will return ","false",".","\n  "," ","\n  "],["\n  ","ds_grid_value_exists(index, x1, y1, x2, y2, val);","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","index","DS Grid ID","\n        ","The index of the grid.","\n     ","\n      ","\n        ","x1","Real","\n        ","The x position of the left of the region in the grid.","\n     ","\n      ","\n        ","y1","Real","\n        ","The y position of the top of the region in the grid.","\n     ","\n      ","\n        ","x2","Real","\n        ","The x position of the right of the region in the grid.","\n     ","\n      ","\n        ","y2","Real","\n        ","The y position of the bottom of the region in the grid.","\n     ","\n      ","\n        ","val","Any","\n        ","The value to find.","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Boolean","\n  "," ","\n  "],["\n  ","if ds_grid_value_exists(grid, 0, 1, 5, 6, val)","\n    {","\n        xpos = ds_grid_value_x(grid, 0, 1, 5, 6, val);","\n        ypos = ds_grid_value_y(grid, 0, 1, 5, 6, val);","\n    }","\n  ","The above code checks a DS grid for a specific value within a rectangular region. if it is found, it then stores the x and y position of the value in two variables for later use.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","DS Grids","\n        ","Next: ","ds_grid_value_disk_exists","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["ds_grid_value_exists"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1551"})