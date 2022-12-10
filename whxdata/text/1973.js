rh._.exports({"0":[["os_get_language"]],"1":[["os_get_language"]],"2":[["os_get_language"]],"3":[["\n  ","\n  "],["\n  ","This function returns a string with the two letter Language Code for the OS that is running the game, as set by the ","ISO639"," standard. If the information is not available, it will hold simply an empty string \"\", or \"en\" for \"English\" language. Note that some languages also have a relevant Regional Code too, so to distinguish between different regions of the same country use the function ","os_get_region()",".","\n  ","The following table shows example of some of the main two letter language codes as defined by ISO 639:","\n  ","\n    ","\n      ","\n        ","Language","\n        ","Code","\n      ","\n      ","\n        ","Arabic","\n        ","ar","\n      ","\n      ","\n        ","Chinese","\n        ","zh","\n      ","\n      ","\n        ","Danish","\n        ","da","\n      ","\n      ","\n        ","English","\n        ","en","\n      ","\n      ","\n        ","French","\n        ","fr","\n      ","\n      ","\n        ","German","\n        ","de","\n      ","\n      ","\n        ","Greek","\n        ","el","\n      ","\n      ","\n        ","Italian","\n        ","it","\n      ","\n      ","\n        ","Japanese","\n        ","ja","\n      ","\n      ","\n        ","Norwegian","\n        ","no","\n      ","\n      ","\n        ","Polish","\n        ","pl","\n      ","\n      ","\n        ","Portuguese","\n        ","pt","\n      ","\n      ","\n        ","Russian","\n        ","ru","\n      ","\n      ","\n        ","Spanish","\n        ","es","\n      ","\n      ","\n        ","Swedish","\n        ","sv","\n      ","\n    ","\n  ","\n  "," ","\n  ","NOTE",": This is not the location country code that is returned, but the language code of the OS.","\n  "," ","\n  "],["\n  ","os_get_language()","\n  "," ","\n  "],["\n  ","String","\n  "," ","\n  "],["\n  ","switch (os_get_language())","\n    {","\n        case \"es\": ini_open(\"spanish.ini\"); break;","\n        case \"fr\": ini_open(\"french.ini\"); break;","\n        case \"it\": ini_open(\"italian.ini\"); break;","\n        default: ini_open(\"english.ini\"); break;","\n    }","\n  ","The above code checks the OS language and opens a different ","*.ini"," file depending on the returned value.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","OS And Compiler","\n        ","Next: ","os_get_region","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["os_get_language"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1973"})