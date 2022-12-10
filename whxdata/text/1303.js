rh._.exports({"0":[["ds_grid_value_disk_exists"]],"1":[["ds_grid_value_disk_exists"]],"2":[["ds_grid_value_disk_exists"]],"3":[["\n  ","\n  "],["\n  ","With this function you can check to see if a specific value (real or string) is present within a circular area of a given DS grid. If it is present the function will return ","true"," otherwise it will return ","false",".","\n  "," ","\n  "],["\n  ","ds_grid_value_disk_exists(index, xm, ym, r, val);","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","index","DS Grid ID","\n        ","The index of the grid.","\n     ","\n      ","\n        ","xm","Real","\n        ","The x position of the disk on the grid.","\n     ","\n      ","\n        ","ym","Real","\n        ","The y position of the disk on the grid.","\n     ","\n      ","\n        ","r","Real","\n        ","The radius of the disk on the grid.","\n     ","\n      ","\n        ","val","Any","\n        ","The value to find.","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Boolean","\n  "," ","\n  "],["\n  ","if ds_grid_value_disk_exists(grid, 5, 5, 5, val)","\n    {","\n        xpos = ds_grid_value_disk_x(grid, 5, 5, 5, val);","\n        ypos = ds_grid_value_disk_y(grid, 5, 5, 5, val);","\n    }","\n  ","The above code checks a DS grid for a specific value within a disk region. if it is found, it then stores the x and y position of the value in two variables for later use.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","DS Grids","\n        ","Next: ","ds_grid_value_x","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["ds_grid_value_disk_exists"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1303"})