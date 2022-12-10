rh._.exports({"0":[["Get Tile Data At Pixel"]],"1":[["GML Visual Action - Get Tile Data At Pixel"]],"2":[["Get Tile Data At Pixel"]],"3":[["\n  ","\n  "],["\n  ","With this action you can get the tile data for a tile cell on a tile-map layer from a position. The tile data is simply a value that reflects the index of the tile along with the flip, mirror, and rotate values, as well as any custom tile masks that\n    you have used. With this action you first supply the layer to target using the name of the layer (a string) as defined in the room editor, and then the x and y axis in the room to get the tile-data for. The tile data value returned will coincide with\n    whatever tile-map cell happens to be at that point. For example, if your tile-set tiles are 16x16, then the tile-map layer will hold tiles in cells of 16x16 pixels, so if you use this action to target the room position (8, 8), you will be getting\n    the tile-data for the cell (0, 0) of the tile-map.","\n  ","NOTE",": The layer selected ","must"," have been defined as a Tile Map Layer in the room editor, otherwise you may get errors.","\n  ","The returned value will then be stored in the target variable which can have been created previously or can be a new temporary one (if you check the \"Temp\" check-box). For more information on tile data, please see the GML section on ","Tile Map Functions",".","\n  "," ","\n  "],["\n  ","\n  "],["\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","Layer","\n        ","The layer with the tile-map to target","\n      ","\n      ","\n        ","X","\n        ","The position along the horizontal (X) axis to set the tile-data for","\n      ","\n      ","\n        ","Y","\n        ","The position along the vertical (Y) axis to set the tile-data","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","The above action block code tests for a mouse click and when one is received\n    it retrieves the tile-data for the cell that coincides with the mouse position. This data is then modified and returned to the tile-map layer, rotating the tile in that cell.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Tile Actions","\n        ","Next: ","Set Tile Data In Cell","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[[" Get Tile Data At Pixel"]],"5":[["Action Syntax:"],["Arguments:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1995"})