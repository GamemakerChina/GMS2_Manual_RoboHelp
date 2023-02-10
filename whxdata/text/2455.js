rh._.exports({"0":[[" ","If Object At Place"]],"1":[["GML Visual Action - If Object At Place"]],"2":[["If Object At Place"]],"3":[[" "," If Object At Place"]],"4":[[" ","This action is used to check and see if there is a collision with one or more instances of a given object with the current instance placed at a point in the room, based on the collision mask of the calling instance. The action will evaluate to ","true","    if a collision is detected, or ","false"," otherwise. You give the object to check for and the position to \"place\" the instance to perform the check - which can be an absolute position in the room or a position relative to the instance\n    - and you can also check the ","Not"," flag to check if there is ","not"," a collision at the given position, in which case the action will then only evaluate as ","true"," if ","no"," collisions are found, otherwise it will evaluate as ","false","."," ","After giving the object and position, you can check/uncheck the option to ","Return List",". Checking this means the action will create and populate a ","list"," ","data structure with\n    ","all"," instances in collision with the instance and set the ","Target"," variable to the DS list ID. When unchecked, it will only set the ","Target"," variable to a value less than 0 when no collision is detected, or the unique ID value of ","one","    of the instances in the collision (note that if multiple instances are in collision then you have no way of knowing which instance ID will be returned when not using a list)."," ","If you have selected to return a list - and the Target variable is ","not"," set to ","Temp"," - then you can also select the ","Free Target"," option. When set to ","true",", then the list contained in the target variable will be destroyed and\n    a new list created (and returned to the target variable) each time you call the action. In this way you can re-use the same variable without worrying about memory leaks, as, if you do ","not"," check ","Free Target"," option, you become responsible\n    for destroying the list before using the variable again in the action. Note that ","regardless"," of whether this option is checked or not, if you have set the action to ","Return List",", then the target variable will ","always contain a list ID",",\n    and as such, this will need to be freed when the instance is destroyed or the room ends (you can use the ","Clean Up"," event for this, for example, along with the ","Free Data Structure"," ","action).\n    It is worth noting that you can set the ","Free Target"," option to use a pre-defined variable or an expression and so control when the list data structure is freed by setting the variable elsewhere (or having different outcomes for the expression)\n    as long as it evaluates to ","true","/","false","."," ","Finally, you supply the ","Target"," variable that you want to hold the returned value or list ID. If you flag the Target variable to hold the returned value as being a ","Temp"," (local) variable, then the action will create this variable to hold\n    the return value ","only"," until the end of the event, in this case the Free Target option does nothing and you will be responsible for destroying the DS list if that option has been checked. If no target variable is supplied and the ","Return List","    option is checked, no list will be created."," ","IMPORTANT!"," Collisions will only register for those instances that have a valid collision mask, ie: they have a sprite assigned to the ","sprite_index",", or a sprite assigned to the ","mask_index",". If ","either"," of the instances in\n    the collision have no collision mask then the collision will not be detected, regardless of what the instance is drawing at the time."," ","Note that to add actions into an \"","if","\" block, they should be dropped to the ","side"," of the action, as shown in the image below:"],[" ","Argument"," ","Description"," ","Object"," ","The object to check for instances of"," ","x"," ","The x position to check"," ","y"," ","The y position to check"," ","Free Target"," ","Can be set to a variable or expression, or set to ","true","/","false"," to control freeing of the list memory when re-using a list variable"," ","Target"," ","The variable to target for the return value of the action"],[" ","The above action block code checks for a collision with any instances of the object \"\n    ","obj_Wall","\" to the left and to the right and if one is found it reverses the horizontal direction of the calling instance."," ","Back: ","Collision Actions"," ","Next: ","If Collision Shape"]],"5":[[" ","Action Syntax:"," ","Arguments:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2455"})