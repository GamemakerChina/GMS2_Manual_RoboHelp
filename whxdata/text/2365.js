rh._.exports({"0":[["Get Tilemap Variable"]],"1":[["GML Visual Action - Get Tilemap Variable"]],"2":[["Get Tilemap Variable"]],"3":[["\n  ","\n  "],["\n  ","With this action you can retrieve any one of a given number of variables for the ","tile map"," element on a layer. When you create a tile layer in the room editor, this layer holds a ","tile map element","    which is then populated with tiles from a tile-set. This tile map element has certain values associated with it, like an offset position, the tile-set being used, the width, height, etc... The complete list of values that you can get is:","\n  ","\n    ","X Coordinate",":"," The position along the x axis on the layer where the tile map element has been placed.","\n    ","Y Coordinate",":"," The position along the y axis on the layer where the tile map element has been placed.","\n    ","Columns",":"," The width (defined as the number of columns of tile cells) of the tile map element.","\n    ","Rows",":"," The height (defined as the number of rows of tile cells) of the tile map element.","\n    ","Tile Width",":"," The width of a single tile cell.","\n    ","Tile Height",":"," The height of a single tile cell.","\n    ","Tile Set Resource",":"," The tile-set resource that has been assigned to the tile map element for drawing.","\n    ","Current Frame",":"," The current frame being drawn for animated tiles.","\n    ","Mask",":"," The mask data for the tile map element.","\n    ","Global Mask",":"," The global mask data for all tile map elements.","\n  ","\n  ","When using this action you supply the layer name (a string, as defined in the Room Editor) to get the tile map element data from, then the type of data that you want to retrieve (as shown in the list above). The returned value will then be stored in\n    the target variable which can have been created previously or can be a new temporary one (if you check the \"Temp\" check-box). Note that you can retrieve additional values by clicking the plus icon "," ","beside\n    the action, and selecting another variable and giving another variable to store the returned value.","\n  "," ","\n  "],["\n  ","\n  "],["\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","Layer","\n        ","The layer to get data from","\n      ","\n      ","\n        ","Variable","\n        ","The variable to retrieve the value of (as listed above)","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","The above action block code checks to see if the tiles on the layer \"Floor_Tiles\"\n    is using the tile-set \"tl_PalaceRuins\", and if they not, then they are set to use it.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Tile Actions","\n        ","Next: ","Set Tile Data At Pixel","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[[" Get Tilemap Variable"]],"5":[["Action Syntax:"],["Arguments:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2365"})