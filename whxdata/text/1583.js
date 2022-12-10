rh._.exports({"0":[["Get List Item At"]],"1":[["GML Visual Action - Get List Item At"]],"2":[["Get List Item At"]],"3":[["\n  ","\n  "],["\n  ","With this action you can recover the index position of an item within the given list. You supply the variable that stores the list index (as returned by the action ","Create List",") and the index position within the list to\n    get the item value from, as well as a target variable to store the returned item value (which can be flagged as a temporary local variable to be used until the end of the script or event).","\n  ","NOTE",": If you give a position that is outside of the given list size (ie: position 11 in a 10 value list) then the action will return ","undefined",". You can check for this using the ","If Undefined"," action.","\n  "," ","\n  "],["\n  ","\n  "],["\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","List","\n        ","The index (stored in a variable) of the list to remove from","\n      ","\n      ","\n        ","Index","\n        ","The index position within the list to get the item from","\n      ","\n      ","\n        ","Target","\n        ","The target variable to store the returned value","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","The above action block code gets the size of the list referenced in the global variable and then uses a for loop\n    to loop through it and destroy the instances with the IDs stored in the list. After the loop is finished, the list is freed from memory.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Data Structure Actions","\n        ","Next: ","Get Index Of List Item","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[[" Get List Item At"]],"5":[["Action Syntax:"],["Arguments:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1583"})