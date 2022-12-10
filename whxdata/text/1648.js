rh._.exports({"0":[["Get Tile Index In Cell"]],"1":[["GML Visual Action - Get Tile Index In Cell"]],"2":[["Get Tile Index In Cell"]],"3":[["\n  ","\n  "],["\n  ","With this action you can get a tile index on a given layer. The layer is specified from the layer name given (a string, as used to name the layer in the Room Editor), and then you give the row and column of the cell within the layer to get the tile\n    index from. Finally you supply the target variable to store the returned tile index in, where 0 is no tile, and a positive integer is the index of the tile. Note that the target variable can be flagged as a temporary (local) variable that can be used\n    until the end of the event.","\n  "," ","\n  "],["\n  ","\n  "],["\n  \n    ","\n      ","\n        ","\n          ","Argument","\n          ","Description","\n        ","\n        ","\n          ","Layer","\n          ","The layer to get the tile from","\n        ","\n        ","\n          ","Column","\n          ","The column (from left to right) of the cell","\n        ","\n        ","\n          ","Row","\n          ","The row (from top to bottom) of the cell","\n        ","\n        ","\n          ","Target","\n          ","The target variable for the return value","\n        ","\n      ","\n    ","\n  \n  "," ","\n  "],["\n  ","The above action block code creates a loop to go through\n    the top row of the given room layer, and as it does it checks to see if the tile indexed at the cell for the column is set to 0. If it is not the tile index for that cell is set to 0 and the temporary (local) variable is incremented before the loop\n    does another set of checks.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Tile Actions","\n        ","Next: ","Set Tile Set","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[[" Get Tile Index In Cell"]],"5":[["Action Syntax:"],["Arguments:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1648"})