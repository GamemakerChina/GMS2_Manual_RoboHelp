rh._.exports({"0":[["The_Game_Window"]],"2":[["The Game Window,Window"]],"3":[["\n  ","\n  "],["\n  ","The game you create happens in a window (even when fullscreen), and this window has a number of properties, like position, size, whether it is fullscreen, etc... These details are normally set automatically for you based on the room size and view ports enabled in combination with the settings from ","Game Options"," for the target platform, ","but you can change them during the game using the functions listed on this page.","\n  ","NOTE"," These functions are for ","Windows",", ","Ubuntu",", ","macOS",","," GX.games ","and ","HTML5"," targets only and may not work on any other device.","\n  ","The following image illustrates how some general window functions relate and interact with each other:","\n  ","\n  ","IMPORTANT"," The above diagram shows the HTML5 runner. Even tough the GX.games target runs in a browser, the ","window_get_width()"," and ","window_get_height()"," values returned on that target will be the same as ","browser_width"," and ","browser_height"," respectively.","\n  ","The image above shows the game window drawn in a browser, but the for the other targets, you can replace the browser with the display, so a function like ","window_get_y()"," will return the position of the top of the game window relative to the display.","\n  ","The following functions exist to change and get game window properties:","\n  ","\n    ","window_center","\n    ","window_handle","\n    ","window_get_caption","\n    ","window_get_colour","\n    ","window_get_fullscreen","\n    ","window_get_width","\n    ","window_get_height","\n    ","window_get_x","\n    ","window_get_y","\n    ","window_get_cursor","\n    ","window_get_visible_rects","\n    ","window_mouse_get_x","\n    ","window_mouse_get_y","\n    ","window_mouse_set","\n    ","window_set_caption","\n    ","window_set_colour","\n    ","window_set_fullscreen","\n    ","window_set_position","\n    ","window_set_size","\n    ","window_set_rectangle","\n    ","window_set_cursor","\n    ","window_set_min_width","\n    ","window_set_max_width","\n    ","window_set_min_height","\n    ","window_set_max_height","\n    ","window_has_focus","\n    ","window_device","\n    ","window_view_mouse_get_x","\n    ","window_view_mouse_get_y","\n    ","window_views_mouse_get_x","\n    ","window_views_mouse_get_y","\n  ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Cameras And Display","\n        ","Next: ","Cameras And View Ports","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["The Game Window"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2571"})