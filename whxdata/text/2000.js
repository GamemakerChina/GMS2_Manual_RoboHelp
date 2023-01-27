rh._.exports({"0":[[" ","skeleton_skin_set"]],"1":[["skeleton_skin_set"]],"2":[["skeleton_skin_set"]],"3":[[" ","skeleton_skin_set"]],"4":[[" ","This function sets the skin used to draw a skeletal animation sprite."," ","A skeletal animation sprite can be drawn with a variety of textures (called \"skins\"), permitting you to use one single animation for multiple different purposes. For example, you may have a generic walk animation and this can be used by your NPC characters, enemies, etc... in a game simply by changing the skin it is drawn with."," ","These skins need to have been previously created and named in your animation program, and this name is passed into the function (as a string) to set the sprite to use that skin when being drawn."," ","You can also add skins through code using ","skeleton_skin_create","."," ","IMPORTANT"," For skins added using ","skeleton_skin_create"," you must pass the struct returned by the function instead of the name."],[" ","skeleton_skin_set","(skin);"," ","Argument"," ","Type"," ","Description"," ","skin"," ","String"," or ","Skeleton Skin Struct"," ","The name of the skin to use as a string (for skins defined in the animation program) or a struct (for skins added using ","skeleton_skin_create",")"],[" ","N/A"],[" ","if skeleton_skin_get() == \"skin_Enemy1\"","\n    {"," ","skeleton_skin_set","(choose(\"skin_Enemy1\", \"skin_Enemy2\", \"skin_Enemy3\");","\n    }"," ","The above code would check the currently assigned skin for the animation and if it is \"skin_Enemy1\", it chooses and sets a new skin from one of three options."," ","Back: ","Skins"," ","Next: ","skeleton_skin_list"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2000"})