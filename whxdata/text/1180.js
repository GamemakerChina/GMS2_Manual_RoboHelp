rh._.exports({"0":[[" ","ds_grid_set"]],"1":[["ds_grid_set"]],"2":[["ds_grid_set"]],"3":[[" ","ds_grid_set"]],"4":[[" ","This function can be used to set a given cell within the given DS grid to any value, which can be a real number or a string. The image below illustrates this:"],[" ","ds_grid_set(index, x, y, value);"," ","Argument","Type"," ","Description"," ","index","DS Grid ID"," ","This index of the grid."," ","x","Real"," ","The x position of the cell to set."," ","y","Real"," ","The y position of the cell to set."," ","value","Any"," ","The value with which to set the cell."],[" ","N/A"],[" ","grid = ds_grid_create(5, 5);","\n    var i = 0;","\n    var j = 0;"," ","\n    repeat (ds_grid_width(grid))","\n    {","\n        repeat (ds_grid_height(grid))","\n        {","\n            ds_grid_set(grid, i, j, irandom(9));","\n            j += 1;","\n        }"," ","\n        j = 0;","\n        i += 1;","\n    }\n  "," ","The above code creates a grid and stores its index in the variable \"grid\". It then populates this grid with random integers from 0 to 9."," ","Back: ","DS Grids"," ","Next: ","ds_grid_set_disk"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1180"})