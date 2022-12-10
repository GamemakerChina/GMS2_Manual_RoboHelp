rh._.exports({"0":[["Free Data Structure"]],"1":[["GML Visual Action - Free Data Structure"]],"2":[["Free Data Structure"]],"3":[["\n  ","\n  "],["\n  ","This action will free the data structure from memory and should be called whenever a data structure is no longer required, for example in the Destroy even of an instance or the Room End event, etc... Freeing a data structure means that no further actions\n    can be used to reference it as it will no longer exist, although you can also check for this using the action ","If Data Structure Exists",".","\n  ","Note that unless the data structure has an index assigned to a global scope variable, it will not be carried across from one room to another. For example, if you create a player instance and a list data structure is assigned to a variable in that instance,\n    the list will need to be freed if the player is destroyed ","or"," if the room changes with the player instance in it (unless the player instance is flagged as persistent), so the player instance would have two Free Data Structure actions in it for\n    both those events. It is important that all created data structures are destroyed in this way when no longer required to prevent memory leaks which can cause performance issues or even crash your game.","\n  "," ","\n  "],["\n  ","\n  "],["\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","Type","\n        ","The type of data structure you are freeing (List, Map, Grid or Stack)","\n      ","\n      ","\n        ","Variable","\n        ","The variable holding the index of the data structure to free","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","The above action block code gets the size of the list referenced in the global\n    variable and then uses a for loop to loop through it and destroy the instances with the IDs stored in the list. After the loop is finished, the list is freed from memory.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Data Structure Actions","\n        ","Next: ","Add To List","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[[" Free Data Structure"]],"5":[["Action Syntax:"],["Arguments:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1875"})