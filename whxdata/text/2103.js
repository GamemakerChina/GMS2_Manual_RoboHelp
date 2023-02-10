rh._.exports({"0":[[" ","audio_listener_get_data"]],"1":[["audio_listener_get_data"]],"2":[["audio_listener_get_data"]],"3":[[" ","audio_listener_get_data"]],"4":[[" ","This function will create a ","DS map"," and populate it with the position, velocity and orientation values for the given listener. The default listener index is 0, but you can use the function ","audio_get_listener_info()"," to get the different indices available for the target platform. If you provide an incorrect listener index then the function will return -1."," ","NOTE"," ","You are responsible for the destruction of the returned"," DS map ","using the appropriate function."," ","The DS map will contain the following keys:"," ","\"","x","\" - The x position of the listener"," ","\"","y","\" - The y position of the listener"," ","\"","z","\" - The z position of the listener"," ","\"","vx","\" - The x axis velocity of the listener"," ","\"","vy","\" - The y axis velocity of the listener"," ","\"","vz","\" - The z axis velocity of the listener"," ","\"","lookat_x","\" - The x component of the look at vector of the listener"," ","\"","lookat_y","\" - The y component of the look at vector of the listener"," ","\"","lookat_z","\" - The z component of the look at vector of the listener"," ","\"","up_x","\" - The x component of the up vector of the listener"," ","\"","up_y","\" - The y component of the up vector of the listener"," ","\"","up_z","\" - The z component of the up vector of the listener"],[" ","audio_listener_get_data(index);"," ","Argument"," ","Type"," ","Description"," ","index"," ","Real"," or ","Audio Listener ID"," ","The listener to get the data for (default is 0)."],[" ","DS Map ID"],[" ","var num = audio_get_listener_count();","\n    for(var i = 0; i < num; ++i;)","\n    {","\n        var info = audio_get_listener_info(i);","\n        var data = audio_listener_get_data(info[? \"index\"]);","\n        if data[? \"x\"] != 0","\n        {","\n            audio_listener_set_position(info[? \"index\"], 0, 0, 0);","\n        }","\n        ds_map_destroy(info);","\n        ds_map_destroy(data);","\n    }"," ","The above code checks the number of listeners available then loops through them and if their x position is not 0, it sets their position to 0, 0, 0."," ","Back: ","Audio Listeners"," ","Next: ","audio_listener_set_position"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2103"})