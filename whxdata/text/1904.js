rh._.exports({"0":[[" ","skeleton_slot_data"]],"1":[["skeleton_slot_data"]],"2":[["skeleton_slot_data"]],"3":[[" ","skeleton_slot_data"]],"4":[[" ","With this function you can populate a (pre-created) ","DS list"," with data for each of the available attachment slots that an animation contains. This data is returned in the forum of a ","DS map"," which contains the following key/value pairs:"," ","\"name\":"," The name of the slot."," ","\"bone\":"," The name of the bone."," ","\"attachment\":"," The name of the attachment if one is used or \"(none)\" if there isn't one assigned."," ","The values for each key will be strings and can then be used in the other skeleton attachment functions for these types of sprite. Note that the DS map created are ","not"," destroyed so you will need to loop through the DS list and destroy each of the created maps yourself."],[" ","skeleton_slot_data(sprite, list);"," ","Argument"," ","Type"," ","Description"," ","sprite"," ","Sprite Asset"," ","The sprite index of the Spine skeletal animation to get the data from."," ","list"," ","DS List"," ","The ID of the DS list to populate with the DS maps."],[" ","N/A"],[" ","var list = ds_list_create();","\n    var open = true;","\n    slot_name = \"\";","\n    skeleton_slot_data(sprite_index, list);"," ","\n    for (var i = 0; i < ds_list_size(list); i++)","\n    {","\n        var map = list[| i];","\n        if open","\n        {","\n            if map[? \"attachment\"] == \"(none)\"","\n            {","\n                open = false;","\n                slot_name = map[? \"name\"];","\n            }","\n        }"," ","\n        ds_map_destroy(map);","\n    }"," ","\n    ds_list_destroy(list);\n  "," ","The above code creates a DS list and then populates it with the slot data for the instance sprite. This data is then parsed to extract the individual DS maps with the slot data. This is then checked to see if there is an empty slot, and if so the variable \"slot_name\" is assigned the empty slot name before the DS map is destroyed. Finally we destroy the DS list as it is no longer required."," ","Back: ","Slots"," ","Next: ","skeleton_slot_data_instance"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"1904"})