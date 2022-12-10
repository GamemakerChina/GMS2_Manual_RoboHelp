rh._.exports({"0":[["ds_grid_get_mean"]],"1":[["ds_grid_get_mean"]],"2":[["ds_grid_get_mean"]],"3":[["\n  ","\n  "],["\n  ","This function can be used to find the mean value for all the cells found within the defined region of a grid (all cell values are added together and then divided by the total number of cells that make the region), as shown in the image below:","\n  ","\n  "," ","\n  "],["\n  ","ds_grid_get_mean(index, x1, y1, x2, y2);","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","index","DS Grid ID","\n        ","The index of the grid.","\n     ","\n      ","\n        ","x1","Real","\n        ","The left cell column of the region.","\n     ","\n      ","\n        ","y1","Real","\n        ","The top cell row of the region.","\n     ","\n      ","\n        ","x2","Real","\n        ","The right cell column of the region.","\n     ","\n      ","\n        ","y2","Real","\n        ","The bottom cell row of the region.","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Real"," or ","String","\n  "," ","\n  "],["\n  ","val = ds_grid_get_mean(grid, 0, 0, 5, 5)","\n  ","The above code will set the variable \"val\" to the mean value contained within the given region of the DS grid indexed in the variable \"grid\".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","DS Grids","\n        ","Next: ","ds_grid_get_min","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["ds_grid_get_mean"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1296"})