rh._.exports({"0":[[" ","gpu_get_fog"]],"1":[["gpu_get_fog"]],"2":[["gpu_get_fog"]],"3":[[" ","gpu_get_fog"]],"4":[[" ","This function can be used to retrieve the fog settings. The function returns a 4 element 1D array with the following information:"," ","[0] = enabled toggle (a ","Boolean",", either ","true"," or ","false","), default ","false"," ","[1] = ","Colour",", default ","c_black"," ","[2] = start distance (","Real","), default 0"," ","[3] = end distance (","Real","), default 1"," ","Note that you can change these values and pass the full array to the ","gpu_set_fog()"," function as a single argument."],[" ","gpu_get_fog();"],[" ","Array"," (4 elements only; see above for details)"],[" ","var fog_a = gpu_get_fog();","\n    fog_a[1] = c_red;","\n    gpu_set_fog(fog_a);"," ","The above code gets the current fog settings and then sets the colour element of the array to ","c_red"," before setting the fog again using the changed array."," ","Back: ","GPU Control"," ","Next: ","gpu_get_cullmode"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"715"})