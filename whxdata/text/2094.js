rh._.exports({"0":[[" ","show_debug_overlay"]],"1":[["show_debug_overlay"]],"2":[["show_debug_overlay"]],"3":[[" ","show_debug_overlay"]],"4":[[" ","This function can be used to switch on and off the standard debug overlay when testing your game and is disabled by default. The debug overlay shows a graphic CPU/GPU usage bar in the actual game window itself along with the current real fps value, number of texture swaps and the number of vertex batches (note that texture swaps and vertex batches will never be zero and will normally show values of 2 or 3, since even with an empty room an no objects ","GameMaker"," still has to draw and batch things)."," ","This bar is split into sections, with each section being 1/60th of a second. As you can see from the image above, the bar is made up of various colours:"," ","Green"," - Input / Output processing (ie: keyboard, mouse, gamepad, networking etc...)"," ","Red"," - The update speed of the step event"," ","Yellow"," - The time required for the draw event"," ","Orange"," -Debug update time, which is only normally visible when you use the debug module"," ","White"," - GPU left over time, which is the time spent waiting for the GPU to finish the rendering of the frame before the next one can start"," ","Cyan"," - The text rendering time"," ","Grey"," - The time required to clear screen each draw step"," ","Blue"," - The time required for the ","Garbage Collector"," to run"," ","Dark Red"," - The GPU flush, which is how long the GPU takes to clear images from memory"," ","Using this function you can add the overlay whether in debug mode or not, and in this way, you can see how efficiently your game runs and get a visual cue as to how it is using the available resources, without the over-head of having the debugger running alongside."," ","NOTE",": This function will not work on the HTML5 target due to the different way it works compared to all the other targets."],[" ","show_debug_overlay(enable);"," ","Argument","Type"," ","Description"," ","enable","Boolean"," ","switch on (","true",") or off (","false",") the debug overlay."],[" ","N/A"],[" ","if global.debug","\n    {","\n        show_debug_overlay(true);","\n    }","\n    else","\n    {","\n        show_debug_overlay(false);","\n    }"," ","The above code will toggle the debug on or off depending on the value of a global variable."," ","Back: ","Debugging"," ","Next: ","code_is_compiled"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2094"})