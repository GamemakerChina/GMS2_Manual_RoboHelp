rh._.exports({"0":[[" ","Create Object Instance"]],"1":[["GML Visual Action - Create Object Instance"]],"2":[["Create Object Instance"]],"3":[[" "," Create Object Instance"]],"4":[[" ","With this action you can create an instance of any object from the Asset Browser. You give the name of the object and an x/y position within the room where it is to be created as well as the name of the layer to create the instance on (it must be an\n    ","Instance Layer","). You can tick the \"relative\" flags to position the instance relative to the instance running the action code blocks. Whenever you create an instance in the game, it is given a unique ID value with which you can then\n    identify the instance in further actions, therefore this action permits you to define a \"target\" variable to hold this ID value (as shown in the example below). Note that the target can be flagged as a temporary (local) variable, which will\n    be created for the action and can be used in all subsequent actions."],[" ","Argument"," ","Description"," ","Object"," ","The name of the object to create an instance of."," ","x"," ","The x position in the room to create the instance (can be relative to the calling instance)."," ","y"," ","The y position in the room to create the instance (can be relative to the calling instance)."," ","Layer"," ","The name (a string) of the instance layer to create the instance on."," ","Target"," ","The variable to target for the return value."],[" ","The above action block code creates a new instance and stores its unique ID value in a\n    temporary variable. This variable is then used in the ","Applies To..."," action to set some properties of the instance created."," ","Back: ","Instance Actions"," ","Next: ","Destroy Object Instance"]],"5":[[" ","Action Syntax:"," ","Arguments:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1850"})