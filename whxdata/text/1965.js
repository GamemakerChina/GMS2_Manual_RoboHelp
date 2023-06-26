rh._.exports({"0":[[" ","Create Stack"]],"1":[["Create Stack"]],"2":[[" "," Create Stack"]],"3":[[" ","This action will create a new ","stack"," data-structure and return the index value so you can later access the stack through the other Data Structure actions. The stack index will be returned to the Target Variable that you supply, which can have\n    been created earlier using either ","Assign Variable"," or ","Declare Temp",", or you can flag the \"Temp\" checkbox to name and create a temporary local\n    variable to store the value until the end of the script or event. A newly created stack data structure is considered \"empty\", ie: it contains no entries. Note that you can create additional DS stacks by clicking the plus icon "," ","beside\n    the action, and selecting another variable to hold the stack ID."," ","IMPORTANT!"," Creating any data structure uses up memory on the target platform, and as such all data structures should be free when no longer needed using the action ","Free Data Structure"," otherwise you get a\n    memory leak which can impair your games performance or even cause it to crash. This is particularly relevant when using temporary local variables to store data structure indices, as these variables are removed at the end of the code or event, but\n    that does not mean the data structure is removed too! The data structure will still exist, only you will have no way to reference it, so either use an instance variable and free the structure at a later time, or free the structure before the end of\n    the event or function if its index is stored in a temporary variable."],[" ","Argument"," ","Description"," ","Target"," ","The target variable to store the stack index in"],[" ","The above action block code creates an instance variable and a new stack data structure.\n    The index of the stack is stored in the new variable, and then a loop is performed which creates 10 instances and pushes their unique ID values onto the stack."," ","Back: ","Data Structure Actions"," ","Next: ","Clear Data Structure"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["GML Visual Action - Create Stack"]],"6":[[" ","Action Syntax:"," ","Arguments:"],[" ","Example:"]],"id":"1965"})