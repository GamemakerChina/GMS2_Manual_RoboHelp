rh._.exports({"0":[[" ","mp_grid_get_cell"]],"1":[["mp_grid_get_cell"]],"2":[["mp_grid_get_cell"]],"3":[[" ","mp_grid_get_cell"]],"4":[[" ","With this function you can check any given cell of the mp_grid to see if it has been flagged as occupied or not, giving the index of the (previously created) mp_grid and the x and y coordinates of the cell to check."," ","If it has been occupied or the position being checked is out of the grid's bounds, the function will return -1, otherwise it will return 0."],[" ","mp_grid_get_cell(id, x , y);"," ","Argument"," ","Type"," ","Description"," ","id"," ","MP Grid ID"," ","Index of the mp_grid that is to be used"," ","x1"," ","Real"," ","The x coordinate of the grid to check."," ","y1"," ","Real"," ","The y coordinate of the grid to check."],[" ","Real"],[" ","if mp_grid_get_cell(grid, mouse_x div 16, mouse_y div 16) == -1","\n    {","\n        image_blend = c_red;","\n    }","\n    else","\n    {","\n        image_blend = c_lime;","\n    }"," ","The above code will check the mp_grid cell that corresponds to the mouse position and if it is occupied it sets the ","image_blend"," variable to red, and if it is not occupied it sets it to green."," ","Back: ","Motion Planning"," ","Next: ","mp_grid_clear_all"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1627"})