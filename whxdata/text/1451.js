rh._.exports({"0":[[" ","ds_grid_value_disk_x"]],"1":[["ds_grid_value_disk_x"]],"2":[["ds_grid_value_disk_x"]],"3":[[" ","ds_grid_value_disk_x"]],"4":[[" ","With this function you can get the x coordinate (within the given grid disc-shaped region) of the value being searched for. You give the DS grid index (as returned by ","ds_grid_create()",") along with the x/y positions for the center cell of the disk. Then you give the radius (as an integer value) around the center cell to search, before supplying the value to search for. If the value being searched for does not exist, then the function will return -1."],[" ","ds_grid_value_disk_x(index, xm, ym, r, val);"," ","Argument","Type"," ","Description"," ","index","DS Grid ID"," ","The index of the grid."," ","xm","Real"," ","The x position of the disk on the grid."," ","ym","Real"," ","The y position of the disk on the grid."," ","r","Real"," ","The radius of the disk on the grid."," ","val","Any"," ","The value to find."],[" ","Real"],[" ","if ds_grid_value_disk_exists(grid, 5, 5, 5, val)","\n    {","\n        xpos = ds_grid_value_disk_x(grid, 5, 5, 5, val);","\n        ypos = ds_grid_value_disk_y(grid, 5, 5, 5, val);","\n    }"," ","The above code checks a ds_grid for a specific value within a disk region. if it is found, it then stores the x and y position of the value in two variables for later use."," ","Back: ","DS Grids"," ","Next: ","ds_grid_value_disk_y"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1451"})