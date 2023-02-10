rh._.exports({"0":[[" ","game_project_name"]],"1":[["game_project_name"]],"2":[["game_project_name"]],"3":[[" ","game_project_name"]],"4":[[" ","This ","read only"," variable returns the display name of your game for the target platform in a \"save-friendly\" format for the target platform. If the display name contains any characters that are not permitted for a file name, they will\n    be replaced automatically with \"_\". The display name can be set in the ","Game Options",". Note that since there are no restrictions on file names for HTML5, this string will probably be the same\n    as that returned by ","game_display_name","."],[" ","game_project_name"],[" ","String"],[" ","var file = game_project_name + \".ini\";"," ini_open(file);\n    "," ini_write_real(\"Scores\", \"Highscore\", score);"," ini_close();\n  "," ","The above code gets the project name and uses this to open (or create) an ini file which is then written to."," ","Back: ","General Game Control"," ","Next: ","game_end"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"406"})