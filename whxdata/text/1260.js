rh._.exports({"0":[[" ","zip_create"]],"1":[["zip_create"]],"2":[["zip_create"]],"3":[[" ","zip_create"]],"4":[[" ","This function creates a new ZIP file and returns its reference. This ZIP file is stored in memory, where you can add files to it using ","zip_add_file",", and save it to disk using ","zip_save","."," ","Files added to a ZIP file are always compressed at the maximum compression level."," ","The ZIP file is automatically garbage-collected when it's no longer referenced. As long as it is referenced, it will continue to exist in memory and files can be added to it at any time, even after ","zip_save"," is called on it. However you can't add files into the ZIP while it's in the middle of being saved to disk."," ","NOTE"," This functionality is not available for the HTML5 target platform."],[" ","zip_create();"],[" ","ZIP File"],[" ","var _zip = zip_create();"," ","\n    zip_add_file(_zip, \"new.txt\", \"new.txt\");","\n    zip_add_file(_zip, \"sounds/snd_attack_arc_01.wav\", \"snd_attack_arc_01.wav\");"," ","\n    zip_save(_zip, \"upload.zip\");\n  "," ","This creates a new ZIP file, adds two files to it (with the second file in a subdirectory called ","sounds/",") and then saves the ZIP to disk as ","upload.zip","."," ","Back: ","Encoding And Hashing"," ","Next: ","zip_add_file"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"1260"})