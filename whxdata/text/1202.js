rh._.exports({"0":[["ds_grid_get_disk_mean"]],"1":[["ds_grid_get_disk_mean"]],"2":[["ds_grid_get_disk_mean"]],"3":[["\n  ","\n  "],["\n  ","This function can be used to find the mean value for all the cells found within the defined disk area of a grid (all cell values are added together and then divided by the total number of cells that make up the disk), as shown in the image below:","\n  ","\n  "," ","\n  "],["\n  ","ds_grid_get_disk_mean(index, xm, ym, r);","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","index","DS Grid ID","\n        ","The index of the grid.","\n     ","\n      ","\n        ","xm","Real","\n        ","The x position of the disk on the grid.","\n     ","\n      ","\n        ","ym","Real","\n        ","The y position of the disk on the grid.","\n     ","\n      ","\n        ","r","Real","\n        ","The radius of the disk on the grid.","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Real"," or ","String","\n  "," ","\n  "],["\n  ","val = ds_grid_get_disk_mean(grid, 5, 5, 2)","\n  ","The above code will set the variable \"val\" to the mean value contained within the given disk of the DS grid indexed in the variable \"grid\".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","DS Grids","\n        ","Next: ","ds_grid_get_disk_min","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["ds_grid_get_disk_mean"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1202"})