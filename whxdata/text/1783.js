rh._.exports({"0":[[" ","instance_deactivate_object"]],"1":[["instance_deactivate_object"]],"2":[[" ","instance_deactivate_object"]],"3":[[" ","With this function you can deactivate a single instance or all instances of a specific object from all those that have been activated previously. Note that if you have deactivated an instance or object that has been flagged as ","Persistent",", then you will need to reactivate it again with the function ","instance_activate_object"," before changing room, otherwise it will ","not"," be carried over and will be discarded instead. Note too that deactivation is not instantaneous, and an instance that has been deactivated in this way will not be considered to be inactive until the end of the event in which the function was called."," ","NOTE"," If you deactivate an instance on room start (i.e. from the Room Creation Code, or from an instance ","Create event"," of an instance within the room) all instances that are placed within the room from ","The Room Editor"," ","will still run their Create event"," before being deactivated."," ","WARNING"," ","Deactivating instances that have physics enabled will ","NOT"," stop their fixtures from interacting within the physics simulation. For that you should set their ","phy_active"," variable to ","true"," or ","false"," as you activate/deactivate the instances."],[" ","instance_deactivate_object","(obj);"," ","Argument"," ","Type"," ","Description"," ","obj"," ","Object Asset"," ","The object or instance to deactivate (the keyword ","all"," can also be used)."],[" ","N/A"],[" ","instance_deactivate_object","(obj_Enemy);","\n    var _vx = camera_get_view_x(view_camera[0]);","\n    var _vy = camera_get_view_y(view_camera[0]);","\n    var _vw = camera_get_view_width(view_camera[0]);","\n    var _vh = camera_get_view_height(view_camera[0]);","\n    instance_activate_region(_vx - 64, _vy - 64, _vw + 128, _vh + 128, false);"," ","The above code deactivates all instances of the object \"obj_Enemy\" and then activates a region within the room."," ","Back: ","Deactivating Instances"," ","Next: ","instance_deactivate_region"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["instance_deactivate_object"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1783"})