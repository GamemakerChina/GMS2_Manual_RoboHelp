rh._.exports({"0":[[" ","ds_stack_copy"]],"1":[["ds_stack_copy"]],"2":[["ds_stack_copy"]],"3":[[" ","ds_stack_copy"]],"4":[[" ","This function can be used to copy the contents of one stack into another. Note that this does ","NOT"," remove the contents from the original stack, nor does it destroy the original stack. When using this function the stack being copied to must have been previously created and if it contained any items before the copy, then these will be cleared first (meaning this information will be lost)."],[" ","ds_stack_copy(id, source);"," ","Argument"," ","Type"," ","Description"," ","id"," ","DS Stack ID"," ","The id of the new stack."," ","source"," ","DS Stack ID"," ","The original stack to copy from."],[" ","N/A"],[" ","with (instance_create_layer(x, y, \"Enemies\", obj_Enemy))","\n    {","\n        stack = ds_stack_create();","\n        ds_stack_copy(stack, other.stack);","\n    }"," ","The above function creates a new instance and then in that instance it creates a new DS stack and copies the contents of the stack in the instance running the code block, into the newly created instance stack."," ","Back: ","ds_stack_create"," ","Next: ","ds_stack_top"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"859"})