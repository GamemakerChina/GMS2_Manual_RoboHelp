rh._.exports({"0":[["mp_grid_add_cell"]],"1":[["mp_grid_add_cell"]],"2":[["mp_grid_add_cell"]],"3":[["\n  ","\n  "],["\n  ","With this function we can mark individual cells within the given MP grid as being \"forbidden\" meaning that the path finding functions will not ever cross them. Now, normally you work in x/y ","room"," coordinates, and not in MP grid ","cell"," coordinates. So let's consider the following image which shows how the two can correlate:","\n  ","As you can see the mp_grid is numbered as a series of cells (starting at 0,0 in the upper left corner), and when you place this grid over the room there is a direct correlation between the room coordinates (which also start at 0,0 in the top left) and the cells within the grid. In the image you can see that an instance at the position 260,130 falls on the grid cell 8,4. You can calculate mathematically the exact cell that a position lands on easily by either dividing the number by the grid resolution and then rounding down ","or",", if you are using power of 2 grid resolutions (like 8, 16, 32 etc...) you can use the ","bitwise operators",". It should be noted that the bitwise operation is faster and the example below shows both methods.","\n  "," ","\n  "],["\n  ","mp_grid_add_cell(id, h, v);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","id","\n        ","MP Grid ID","\n        ","Index of the mp_grid that is to be used","\n      ","\n      ","\n        ","h","\n        ","Real","\n        ","Horizontal position of the cell in the grid","\n      ","\n      ","\n        ","v","\n        ","Real","\n        ","Vertical position of the cell in the grid","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","with (obj_Wall)","\n    {","\n        mp_grid_add_cell(grid, floor(x / 32), floor(y / 32));","\n    }","\n    with (obj_Door)","\n    {","\n        mp_grid_add_cell(grid, x>>5, y>>5);","\n    }","\n  ","The above code will make all \"obj_Wall\" and all obj_Door add their equivalent cell positions into the mp_grid indexed in the variable \"grid\". In the first part of the example, this is done by taking the x/y coordinates of the object and dividing them by the resolution of the grid (using ","floor"," to keep the values as integers), and in the second part (since the grid resolution is a power of 2) it is done by bit-shifting the x,y coordinates 5 places to the right.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Motion Planning","\n        ","Next: ","mp_grid_add_instances","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["mp_grid_add_cell"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2035"})