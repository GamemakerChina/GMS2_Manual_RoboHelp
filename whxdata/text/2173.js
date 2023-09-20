rh._.exports({"0":[[" ","Deactivating Instances"]],"1":[["Deactivating Instances"]],"2":[[" ","Deactivating Instances"]],"3":[[" ","GameMaker"," offers you the possibility to \"switch off\" instances so that they are no longer processed in any way. Technically they don't really exist anymore, except as a pointer within the deactivation process itself, which means that a deactivated instance cannot be manipulated or changed in any way at all until it is re-activated again. So, these functions should be used with great care as they can cause problems when not used properly, particularly with persistent objects, as a persistent object that has been deactivated will not be moved to the next room unless it is re-activated first (effectively deleting it from the game). Note too that ","activation and deactivation are not instantaneous",", and an instance that has had its state changed in this way will not be considered to be active/inactive until the ","end of the event in which the function was called","."," ","It is normally not necessary to deactivate instances every step of your game and this can actually cause your game to have performance issues. Instead it is recommended that you only run these functions every few steps in an alarm (for example), or if the camera view has changed position, and it is especially important that you do not use these functions in the draw event as this can lead to serious errors in your game."," ","A deactivated instance effectively ceases to exist in the game, but individual instances can still have their variables accessed. You cannot use ","with(object)"," or ","with(instance)"," however, but rather you must access the instance directly using it's unique ID in the following form:"," ","val = inst.variable;"," ","In the above example, \"inst\" would be a variable that holds the ID of the deactivated instance, and this is the only way that a deactivated instance can be referenced without it being activated previously."," ","NOTE"," If you deactivate an instance on room start (i.e. from the Room Creation Code, or from an instance ","Create event"," of an instance within the room) all instances that are placed within the room from ","The Room Editor"," ","will still run their Create event"," before being deactivated."," ","WARNING"," ","Deactivating instances that have physics enabled will ","NOT"," stop their fixtures from interacting within the physics simulation. For that you should set their ","phy_active"," variable to ","true"," or ","false"," as you activate/deactivate the instances."," ","The following functions exist for deactivating instances:"," ","instance_activate_all"," ","instance_activate_object"," ","instance_activate_region"," ","instance_activate_layer"," ","instance_deactivate_all"," ","instance_deactivate_object"," ","instance_deactivate_region"," ","instance_deactivate_layer"," ","Back: ","Instances"," ","Next: ","Instance Variables"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2173"})