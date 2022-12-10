rh._.exports({"0":[["draw_get_swf_aa_level"]],"1":[["draw_get_swf_aa_level"]],"2":[["draw_get_swf_aa_level"]],"3":[["\n  ","\n  "],["\n  ","This function can be used to get the anti-aliasing (AA) level for SWF format vector sprites. The return value will between 0 and 1 and shows how \"smooth\" the edges of these sprites will be drawn. You can set the AA level using the function ","draw_set_swf_aa_level()",".","\n  "," ","\n  "],["\n  ","draw_get_swf_aa_level();","\n  "," ","\n  "],["\n  ","Real","\n  "," ","\n  "],["\n  ","if draw_get_swf_aa_level() == 0","\n    {","\n        draw_enable_swf_aa(true);","\n        draw_set_swf_aa_level(0.5);","\n    }","\n  ","The above code will check the AA value for SWF format sprites, and if it is 0 it enables AA and sets the value to 0.5.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sprites And Tiles","\n        ","Next: ","draw_tile","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["draw_get_swf_aa_level"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"172"})