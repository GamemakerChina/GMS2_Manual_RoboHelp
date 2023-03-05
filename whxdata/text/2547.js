rh._.exports({"0":[[" ","gml_pragma"]],"1":[["gml_pragma"]],"2":[["gml_pragma"]],"3":[[" ","gml_pragma"]],"4":[[" ","The ","gml_pragma"," function affects how the given target compiles your code and should be called with the different commands to further optimise the final compilation of your project. These commands are effectively ","pre-processed"," before the game is compiled and so the function can be placed anywhere in your project and it will still be processed before the game is fully compiled. The available commands are as follows:"," ","\"","forceinline","\" - When the function is called with the \"forceinline\" pragma in a ","script function",", the YYC will compile the project with the function inline, rather than referenced. This will give a further processing boost, but care must be taken when using it as it will also inflate the final executable file size, especially if the in-lined code is large and/or used in multiple different places, as well as greatly increase the compile time. Note that this pragma is ","only valid when building using the YYC","."," ","\"","global","\", \"","[gml code]","\" - The \"global\" pragma permits you to call some GML code formatted as a string, at a ","global"," scope, at compile time, before the first room of the game executes. For example:\n      ","gml_pragma(\"global\", \"Init()\");","\n      This will call the script function \"Init\" before the first room of the game is run. Note that the GML supplied as the second argument ","must be a compile time constant",", and also note that you cannot use this pragma to create instances or perform any operations that require a room (or anything in a room) to function.\n    "," ","\"","PNGCrush","\" - The \"PNGCrush\" pragma will use the ","PNGCrush"," program on each texture created. Note that this can add significantly to the time that it takes to compile the game, so you don't want it on all the time, although it can make significant savings on final file size. This option only applies to Texture Groups that use the PNG format (see ","Group Settings",")."," ","\"","Texgroup.Scale","\", \"","[TextureGroupName]","\", \"","[Scale Divisor]","\" - The \"Texgroup.Scale\" will scale the given texture group on compile. You need to give an additional two arguments here: the \"[TexGroupName]\", which is the name (a string) of the texture group to scale, and the \"[Scale Divisor]\" (also a string), which is the divisor you wish to use for the scaling, i.e:\n      ","gml_pragma(\"Texgroup.Scale\", \"level1\", \"2\");","\n      This will half all the textures in the \"level1\" texture group.\n    "," ","\"","UnityBuild","\", \"","[enable/disable]","\" - If you call the function with this pragma and set the enable/disable argument to ","true"," then on compile it will collapse all the .cpp files in the project into a single file which it then uses to build everything, for example:\n      ","gml_pragma(\"UnityBuild\", \"true\");","\n      The benefit of doing a unity build is that builds are faster but the down side is that it does a ","full"," build each time so even if you change a single part of the code it will build everything again without using any cached files. This has been added specifically for the Xbox One export using the YYC although it can be called for other builds (","YYC only","). For more information on unity builds, please see ","here",".\n    "," ","NOTE",": The first argument to the ","gml_pragma"," function ","must be a compile time string constant"," and not a variable."],[" ","gml_pragma(command, [optional...]);"," ","Argument"," ","Type"," ","Description"," ","command"," ","String"," ","A string with one of the commands listed above."," ","[optional]"," ","String"," ","Some of the available commands require an optional argument or arguments. These are explained above for each command."],[" ","N/A"],[" ","gml_pragma(\"forceinline\");"," ","The above example code will force the script function where it is used to be in-lined on compile."," ","Back: ","OS And Compiler"," ","Next: ","parameter_count"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2547"})