rh._.exports({"0":[["Delete File"]],"1":[["GML Visual Action - Delete File"]],"2":[["Delete File"]],"3":[["\n  ","\n  "],["\n  ","With this action you can delete a file that has been created previously. You supply the file name (as a string) of the file to be deleted. Note that you ","cannot"," delete any files that are included in the game bundle, only those that have been created\n    using the ","Close Ini"," or ","Save Buffer"," actions (see the section on ","The File System"," for more information).","\n  "," ","\n  "],["\n  ","\n  "],["\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","Filename","\n        ","The name (as a string) of the file to delete","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","The above action block code will check to see if the file \"checkpoint.sav\" exists, and if\n    it does it then checks to see if the file \"checkpoint_OLD.sav\" exists. If that file exists as well, then it is deleted, and then the original \"checkpoint.sav\" file is renamed to \"checkpoint_OLD.sav\". Finally a buffer\n    is saved as \"checkpoint.sav\" (essentially we are backing up a saved buffer file each time we save it, so that there is always a \"current\" save and an \"old\" save file).","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","File Actions","\n        ","Next: ","Open Ini File","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[[" Delete File"]],"5":[["Action Syntax:"],["Arguments:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1293"})