rh._.exports({"0":[[" ","ds_grid_width"]],"1":[["ds_grid_width"]],"2":[["ds_grid_width"]],"3":[[" ","ds_grid_width"]],"4":[[" ","This function will return the width of the given grid. This value is the number of cells the grid has along the x-axis and is always an integer, as shown in the image below:"],[" ","ds_grid_width(index);"," ","Argument","Type"," ","Description"," ","index","DS Grid ID"," ","This index of the grid to find the width of."],[" ","Real"],[" ","for (var i = 0; i < ds_grid_width(grid); ++i)","\n    {","\n        for (var j = 0; j < ds_grid_height(grid); ++j)","\n        {","\n            if (ds_grid_get(grid, i, j) == 1)","\n            {","\n                instance_create_layer(i * 32, j * 32, \"Walls\", obj_Wall);","\n            }","\n        }","\n    }"," ","The above code will loop through the DS grid indexed in the variable \"grid\" and if the value found in any specific cell is equal to 1, it will then create an instance of \"obj_Wall\" at the appropriate position within the room."," ","Back: ","DS Grids"," ","Next: ","ds_grid_height"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"864"})