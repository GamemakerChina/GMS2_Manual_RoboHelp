rh._.exports({"0":[["directory_create"]],"1":[["directory_create"]],"2":[["directory_create"]],"3":[["\n  ","\n  "],["\n  ","This function will creates a directory with the given name in the save area.","\n  ","NOTE",": This function will not work on HTML5 as you cannot create or remove directories in the browser local storage.","\n  ","WARNING!"," This function may not work as you expect due to ","GameMaker"," being sandboxed! Please see the section on the ","File System"," for more information.","\n  "," ","\n  "],["\n  ","directory_create(dname)","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","dname","String","\n        ","The name of the directory to create.","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","N/A","\n  "," ","\n  "],["\n  ","if !directory_exists(\"Games\")","\n    {","\n        directory_create(\"Games\");","\n    }","\n  ","This will check to see if the specified directory exists in the local data folder and, if it does not, it creates it for you.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","File Directories","\n        ","Next: ","directory_destroy","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["directory_create"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"624"})