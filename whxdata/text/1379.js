rh._.exports({"0":[[" ","If End Of Buffer"]],"1":[["GML Visual Action - If End Of Buffer"]],"2":[["If End Of Buffer"]],"3":[[" "," If End Of Buffer"]],"4":[[" ","This action can be used to check if the read/write position has reached the end of the buffer. You supply the unique buffer ID value as returned by the action ","Create Buffer"," and then the action will return ","true","    if the read/write position has reached the end of all the available data in the buffer, or ","false"," if it has not. You can flag \"not\" to make the action check if the read/write position is ","not"," at the end of the buffer."," ","Note that to add actions into the \"if\" block, they should be dropped to the side of the action, as shown in the image below:"],[" ","Argument"," ","Description"," ","Buffer"," ","The buffer index (stored in a variable)"],[" ","The above action block code creates a DS list in the instance and then loops through the\n    data within the given buffer reading out the data and adding it to the list. This continues until the end of the buffer is reached at which time the loop is broken."," ","Back: ","Buffer Actions"," ","Next: ","Create Buffer"]],"5":[[" ","Action Syntax:"," ","Arguments:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1379"})