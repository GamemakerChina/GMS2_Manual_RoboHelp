rh._.exports({"0":[["clickable_set_style"]],"1":[["clickable_set_style"]],"2":[["clickable_set_style"]],"3":[["\n  ","\n  "],["\n  ","This function lets you set the CSS style properties for the given button via the key/value pairs in the provided ","DS Map",". You need to have previously created the both the button element (using ","clickable_add()",") and the ","DS Map"," and supply the stored indices to each as arguments.","\n  "," ","\n  "],["\n  ","clickable_set_style(index, map)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","index","\n        ","Clickable ID","\n        ","The index of the clickable icon to style.","\n      ","\n      ","\n        ","map","\n        ","DS Map ID","\n        ","The index of the ","DS Map"," to set the style from.","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","var map = ds_map_create();","\n    ds_map_add(map, \"opacity\", \"0.5\");","\n    clickable_set_style(button, map);","\n    ds_map_destroy();","\n  ","The above code will change the style of the clickable button with the index stored in the variable \"button\".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Web And HTML5","\n        ","Next: ","clickable_delete","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["clickable_set_style"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"942"})