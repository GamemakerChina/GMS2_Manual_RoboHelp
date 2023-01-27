rh._.exports({"0":[[" ","object_get_persistent"]],"1":[["object_get_persistent"]],"2":[["object_get_persistent"]],"3":[[" ","object_get_persistent"]],"4":[[" ","This function will tell you whether the object you are checking has been flagged as \"persistent\" or not. A persistent object is one that will cause any instances of it to be carried through from room to room unless they are explicitly destroyed. Please note that this is not an instance function! So, you can have a persistent object and a non-persistent instance of the same object and vice-versa. You can set an individual instances persistent flag using the ","persistent"," instance variable."],[" ","object_get_persistent(obj);"," ","Argument","Type"," ","Description"," ","obj","Object Asset"," ","The index of the object to check."],[" ","Boolean"],[" ","if (!persistent) && (object_get_persistent(object_index))","\n    {","\n        persistent = true;","\n    }"," ","The above code will check the instance running it to see if it is persistent or not as well as check the object index of the instance to see if it is flagged as persistent or not. If the instance is ","not"," persistent yet the object index is flagged as persistent, it will set \"persistent\" to true for that instance."," ","Back: ","Objects"," ","Next: ","object_get_solid"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1081"})