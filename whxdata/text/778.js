rh._.exports({"0":[["mp_grid_destroy"]],"1":[["mp_grid_destroy"]],"2":[["mp_grid_destroy"]],"3":[["\n  ","\n  "],["\n  ","You can use this function to destroy the indicated mp_grid (as defined by the function ","mp_grid_create()",") and free up the memory allocated it. It is ","essential"," that you call this whenever the MP grid is finished with or you could potentially get a memory leak, meaning that your game will slow down over time and eventually crash.","\n  ","NOTE",": Using ","mp_grid_*"," functions on a grid after it has been destroyed will result in an error.","\n  "," ","\n  "],["\n  ","mp_grid_destroy(id);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","id","\n        ","MP Grid ID","\n        ","Index of the mp_grid that is to be destroyed","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","if timer = 0","\n    {","\n        mp_grid_destroy(grid);","\n        room_goto(rm_Menu);","\n    }","\n  ","The above code will destroy the mp_grid indexed in the variable \"grid\" if the variable \"timer\" is equal to 0, and then goto another room.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Motion Planning","\n        ","Next: ","mp_grid_path","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["mp_grid_destroy"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"778"})