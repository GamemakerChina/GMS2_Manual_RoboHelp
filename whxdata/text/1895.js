rh._.exports({"0":[[" ","If Instance Exists"]],"1":[["If Instance Exists"]],"2":[[" "," If Instance Exists"]],"3":[[" ","This action can be used to check if an instance of a specific object exists in the game room, or if a specific instance itself exists. You give the object from the asset explorer, and if any instance exists in the room then the action will return ","true","    otherwise it will return ","false",". Note that you can use a variable here with the unique ID for specific instance (for example as returned by the action ","Create Object Instance",") or even the instance ID\n    value as returned by the room editor when you added the instance."," ","If you flag the \"Not\" argument, then the action will check to see if ","no"," instance exists and if none are found it will return ","true"," and if even one exists it will return ","false","."," ","Note that to add actions into the \"if\" block, they should be dropped to the side of the action, as shown in the image below:"," ","These actions will now be run if the \"if\" evaluates to ","true",", while any actions dropped elsewhere will be performed after the \"if\" block."],[" ","Argument"," ","Description"," ","Object"," ","The name of the object to check for an instance of (or an instance ID)."],[" ","The above action block code checks for a collision and returns the unique ID value of the instance\n    that is being collided with. This value is stored in a temporary variable and then checked to see if the value corresponds to an instance that is currently within the room (if no collision is found then the variable will hold the keyword \"","noone","\"),\n    and if it does, then a variable is set in the instance being collided with."," ","Back: ","Instance Actions"," ","Next: ","Call Parent Event"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["GML Visual Action - If Instance Exists"]],"6":[[" ","Action Syntax:"," ","Arguments:"],[" ","Example:"]],"id":"1895"})