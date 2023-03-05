rh._.exports({"0":[[" ","instance_count"]],"1":[["instance_count"]],"2":[["instance_count"]],"3":[[" ","instance_count"]],"4":[[" ","With this ","read only"," variable you can get a count of all active instances that are in the room. This will include the instance running the code, but does ","not"," include those instances that have been deactivated using the ","instance deactivate"," functions. Note that this variable will only give you the number of instances at the ","start"," of the step, so any changes to the instances in the room made after the step has started will not be taken into consideration."],[" ","instance_count;"],[" ","Real"],[" ","if (instance_count < 100)","\n    {","\n        var dif = 100 - instance_count;","\n        while (--dif > 0)","\n        {","\n            instance_create_layer(random(room_width), random(room_height), \"Effects\", obj_Star);","\n        }","\n    }"," ","The above code will create multiple instances of the object \"obj_Star\" until the total instance count reaches 100."," ","Back: ","Instances"," ","Next: ","alarm_get"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"434"})