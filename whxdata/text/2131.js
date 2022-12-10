rh._.exports({"0":[["Create Grid"]],"1":[["GML Visual Action - Create Grid"]],"2":[["Create Grid"]],"3":[["\n  ","\n  "],["\n  ","This action will create a new ","grid"," data-structure and return the index value so you can later access the grid through the other Data Structure actions. The grid index will be returned to the Target Variable that you supply, which can have been\n    created earlier using either ","Assign Variable"," or ","Declare Temp",", or you can flag the \"Temp\" checkbox to name and create a temporary local variable\n    to store the value until the end of the script or event. Note that unlike other data structures, grids are ","not"," created \"empty\", and each cell of a newly created grid will have the value 0. It's up to you to change the cell data\n    or clear the grid yourself to another value using the action ","Clear Grid",". Note that you can create additional DS grids by clicking the plus icon"," ","\n    beside the action, and selecting another variable to hold the grid ID and and giving the width and height values again.","\n  ","IMPORTANT!"," Creating any data structure uses up memory on the target platform, and as such all data structures should be free when no longer needed using the action ","Free Data Structure"," otherwise you get a\n    memory leak which can impair your games performance or even cause it to crash. This is particularly relevant when using temporary local variables to store data structure indices, as these variables are removed at the end of the code or event, but\n    that does not mean the data structure is removed too! The data structure will still exist, only you will have no way to reference it, so either use an instance variable and free the structure at a later time, or free the structure before the end of\n    the event or function if its index is stored in a temporary variable.","\n  "," ","\n  "],["\n  ","\n  "],["\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","Target","\n        ","The target variable to store the grid index in","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","The above action block code creates two temporary variables to hold the number of 32px cells\n    along the width and height of the room, and then creates a new global scope variable to hold the index of a newly created grid data structure. The grid is then cleared using the keyword ","noone",".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Data Structure Actions","\n        ","Next: ","Create Stack","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[[" Create Grid"]],"5":[["Action Syntax:"],["Arguments:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2131"})