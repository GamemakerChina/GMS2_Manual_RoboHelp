rh._.exports({"0":[["Text"]],"2":[["Text"]],"3":[["\n  ","\n  "],["\n  ","There are a number of functions available to you for drawing text in various forms. It should be noted that some of these functions change the text colours and sizes in a dynamic way when being drawn, but when working with HTML5 or devices, these functions can slow down your game or look poor and so it may be better to have various sized font resources rather than use scaled drawing, or have large font resources and then draw them scaled ","down"," rather than ","up",". Also, if you need to colour large blocks of text it is better to use the ","draw_set_colour()"," and ","draw_set_alpha()"," functions first along with the simple ","draw_text"," function, rather than those extended functions that have a colour component.","\n  ","The following functions are for setting the font to be used when drawing, as well as the positioning of the text when drawn:","\n  ","\n    ","draw_set_font","\n    ","draw_set_halign","\n    ","draw_set_valign","\n    ","draw_get_font","\n    ","draw_get_halign","\n    ","draw_get_valign","\n  ","\n  "," ","\n  ","These functions can be used to draw text to the screen, either simply or with transforms and colour:","\n  ","\n    ","draw_text","\n    ","draw_text_ext","\n    ","draw_text_colour","\n    ","draw_text_transformed","\n    ","draw_text_ext_colour","\n    ","draw_text_ext_transformed","\n    ","draw_text_transformed_colour","\n    ","draw_text_ext_transformed_colour","\n  ","\n  "," ","\n  ","The following function also exists that is specific to drawing highscores created using the built in highscore system:","\n  ","\n    ","draw_highscore","\n  ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Drawing","\n        ","Next: ","Primitives And Vertex Formats","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["Text"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1990"})