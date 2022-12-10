rh._.exports({"0":[["cloud_file_save"]],"1":[["cloud_file_save"]],"2":[["cloud_file_save"]],"3":[["\n  ","\n  "],["\n  ","This function will commit a file to the chosen cloud service for storage. The function will return a unique ","id"," value that should then be used in the appropriate asynchronous event to identify the DS map that is returned as a \"call back\" from the cloud service. The file should contain ","all"," the information that you need to save for your game as you can only store one single \"data blob\" to the cloud, and running this function again will overwrite any previously stored values (as will using the ","cloud_string_save()"," function). The description should be a short string of information that describes the save, eg: \"Level2, Stage2\".","\n  ","For further information on the returned asynchronous data, please see the function ","cloud_synchronise()",".","\n  "," ","\n  "],["\n  ","cloud_file_save(file, description);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","string","\n        ","String","\n        ","The file to be uploaded (as a string).","\n      ","\n      ","\n        ","description","\n        ","String","\n        ","A brief description of the data being stored.","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Async Request ID","\n  "," ","\n  "],["\n  ","var t_str = \"\";","\n    for (var i = 0; i < 10; i++;)","\n    {","\n        t_str += string(global.Highscore[i]) + \"|\"","\n    }","\n    var file = file_text_open_write(\"Highscores.txt\");","\n    file_text_write_string(file, t_str);","\n    file_text_close(file);","\n    save_check = cloud_file_save(\"Highscores.txt\", \"Current Highscores\");","\n  ","The above code creates a string from the values stored in the global array \"Highscores\" and then writes this string to a file for local storage. The file is then sent to the cloud service for storage.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Cloud Saving","\n        ","Next: ","cloud_synchronise","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["cloud_file_save ","OBSOLETE"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1915"})