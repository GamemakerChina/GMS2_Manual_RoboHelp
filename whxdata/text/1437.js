rh._.exports({"0":[[" ","ds_grid_value_exists"]],"1":[["ds_grid_value_exists"]],"2":[["ds_grid_value_exists"]],"3":[[" ","ds_grid_value_exists"]],"4":[[" ","With this function you can check to see if a specific value (real or string) is present within a rectangular area of a given DS grid. If it is present the function will return ","true"," otherwise it will return ","false","."],[" ","ds_grid_value_exists(index, x1, y1, x2, y2, val);"," ","Argument","Type"," ","Description"," ","index","DS Grid ID"," ","The index of the grid."," ","x1","Real"," ","The x position of the left of the region in the grid."," ","y1","Real"," ","The y position of the top of the region in the grid."," ","x2","Real"," ","The x position of the right of the region in the grid."," ","y2","Real"," ","The y position of the bottom of the region in the grid."," ","val","Any"," ","The value to find."],[" ","Boolean"],[" ","if ds_grid_value_exists(grid, 0, 1, 5, 6, val)","\n    {","\n        xpos = ds_grid_value_x(grid, 0, 1, 5, 6, val);","\n        ypos = ds_grid_value_y(grid, 0, 1, 5, 6, val);","\n    }"," ","The above code checks a DS grid for a specific value within a rectangular region. if it is found, it then stores the x and y position of the value in two variables for later use."," ","Back: ","DS Grids"," ","Next: ","ds_grid_value_disk_exists"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1437"})