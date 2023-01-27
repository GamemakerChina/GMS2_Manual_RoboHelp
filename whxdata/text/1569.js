rh._.exports({"0":[[" ","object_set_visible"]],"1":[["object_set_visible"]],"2":[["object_set_visible"]],"3":[[" ","object_set_visible"]],"4":[[" ","With this function you can flag a specific object as being visible or not (for more information on the \"visible\" flag see the section on the ","Object Editor","). This means that all instances of this object that are created ","after visible has been changed"," will be created with this new state, while instances that are already in the room may not be affected."," ","Please note that this is not an instance function! You can set the visible flag of individual instances using the ","visible"," variable and so have ten instances all flagged as visible even though the object in question has the flag set to false in the IDE, and even if you change the visible flag of the object to true using this function, all instances that currently in the room will remain as they were, and only instances created after calling the function will start with visible flagged as true."],[" ","object_set_visible( index, vis );"," ","Argument"," ","Type"," ","Description"," ","index"," ","Object Asset"," ","The index of the object to change."," ","vis"," ","Boolean"," ","The new visibility of the object (","true","=visible, ","false","=invisible)."],[" ","N/A"],[" ","if !object_get_visible(obj_Block)","\n    {","\n        object_set_visible(obj_Block, true);","\n    }"," ","The above code checks the visible flag of the object \"obj_Block\" and if it is false then it is changed to be flagged as true."," ","Back: ","Objects"," ","Next: ","object_index"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1569"})