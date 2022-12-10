rh._.exports({"0":[["gpu_push_state"]],"1":[["gpu_push_state"]],"2":[["gpu_push_state"]],"3":[["\n  ","\n  "],["\n  ","With this function you can push the current GPU state onto a stack to be used later. You would generally use this if you want to \"save\" the current GPU state (things like blend mode, alpha writing, culling, etc... will all be pushed to the stack), then draw something with different settings, and then reset the GPU stack to what it was before (by calling ","gpu_pop_state()",").","\n  "," ","\n  "],["\n  ","gpu_push_state();","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","gpu_push_state();","\n    gpu_set_blendmode(bm_add);","\n    gpu_set_blendenable(false);","\n    gpu_set_cullmode(true);","\n    with (obj_Effect_Parent)","\n    {","\n        draw_self();","\n    }","\n    gpu_pop_state();","\n  ","The above code will \"save\" the current GPU state on the stack, then change certain GPU settings and draw a group of instances before resetting the GPU state to what it was previously.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","GPU Control","\n        ","Next: ","gpu_pop_state","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["gpu_push_state"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"402"})