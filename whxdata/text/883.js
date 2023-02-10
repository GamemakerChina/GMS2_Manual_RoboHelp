rh._.exports({"0":[[" ","clickable_set_style"]],"1":[["clickable_set_style"]],"2":[["clickable_set_style"]],"3":[[" ","clickable_set_style"]],"4":[[" ","This function lets you set the CSS style properties for the given button via the key/value pairs in the provided ","DS Map",". You need to have previously created the both the button element (using ","clickable_add()",") and the ","DS Map"," and supply the stored indices to each as arguments."],[" ","clickable_set_style(index, map)"," ","Argument"," ","Type"," ","Description"," ","index"," ","Clickable ID"," ","The index of the clickable icon to style."," ","map"," ","DS Map ID"," ","The index of the ","DS Map"," to set the style from."],[" ","N/A"],[" ","var map = ds_map_create();","\n    ds_map_add(map, \"opacity\", \"0.5\");","\n    clickable_set_style(button, map);","\n    ds_map_destroy();"," ","The above code will change the style of the clickable button with the index stored in the variable \"button\"."," ","Back: ","Web And HTML5"," ","Next: ","clickable_delete"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"883"})