rh._.exports({"0":[["ds_grid_multiply_grid_region"]],"1":[["ds_grid_multiply_grid_region"]],"2":[["ds_grid_multiply_grid_region"]],"3":[["\n  ","\n  "],["\n  ","With this function you can define an area within a given DS grid, then take those values and multiply them with those found in a separate region of either the same DS grid, or another one (which has been previously created). The original region will\n    remain unchanged, while the region that they have been multiplied with will now store the new values for each cell.","\n  "," ","\n  "],["\n  ","ds_grid_multiply_grid_region(index, source, x1, y1, x2, y2, xpos, ypos);","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","index","DS Grid ID","\n        ","The index of the destination grid.","\n     ","\n      ","\n        ","source","DS Grid ID","\n        ","The index of the source grid.","\n     ","\n      ","\n        ","x1","Real","\n        ","The left position of the region of cells to copy from the source grid.","\n     ","\n      ","\n        ","y1","Real","\n        ","The top position of the region of cells to copy from the source grid.","\n     ","\n      ","\n        ","x2","Real","\n        ","The right position of the region of cells to copy from the source grid.","\n     ","\n      ","\n        ","y2","Real","\n        ","The bottom position of the region of cells to copy from the source grid.","\n     ","\n      ","\n        ","xpos","Real","\n        ","The x position on the destination grid to multiply the source region with.","\n     ","\n      ","\n        ","ypos","Real","\n        ","The y position on the destination grid to multiply the source region with.","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","ds_grid_multiply_grid_region(mygrid, mygrid, 0, 0, 5, 5, 0, 0)","\n  ","This would take the region of cells from (0,0) to (5,5) of the DS grid \"mygrid\" and multiply them with the cells from position (0,0) of the same DS grid.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","DS Grids","\n        ","Next: ","ds_grid_value_exists","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["ds_grid_multiply_grid_region"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1867"})