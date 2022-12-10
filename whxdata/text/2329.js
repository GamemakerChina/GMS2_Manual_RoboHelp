rh._.exports({"0":[["json_decode"]],"1":[["json_decode"]],"2":[["json_decode"]],"3":[["\n  ","\n  "],["\n  "],["\n  ","JSON (JavaScript Object Notation) is a lightweight data-interchange format which is easy for to read and write, for both people and machines. It is built on two basic structures:","\n  ","\n    ","A collection of name/value pairs, called a ","DS Map"," in ","GameMaker"," but also known as a \"dictionary\" or \"object\".","\n    ","An ordered list of values, called a ","DS List"," in ","GameMaker"," but this can also be called an \"array\" or \"sequence\".","\n  ","\n  ","With this function, you can decode a piece of JSON and convert it into a ","DS Map",", ready for use in ","GameMaker",". If the JSON to be decoded requires a hierarchy of lists and maps within the central DS map, these are decoded too and also created for you, using the following rules (note that these rules apply to the top-level structure only):","\n  ","\n    ","JSON is a single value"," - returns a DS map with a single entry \"default\" that is the value","\n    ","JSON is an array of objects or values"," - returns a DS map with a single entry \"default\" that is a DS list of the objects or values","\n    ","JSON is an object"," - returns a DS map that has the object entries in it","\n  ","\n  ","NOTE",": When decoding JSON arrays, there is a map with the key \"default\" ONLY when an array is the top level structure, and ONLY for that top-level array. Internal lists decode directly to DS map without being enclosed in a DS map.","\n  ","NOTE",": If you wrote GameMaker arrays into the top level, or as the contents of a DS map or DS list, these will be decoded as DS lists, ","not"," arrays.","\n  ","Normally you would know what keys the JSON decodes to, but if not then you can use the ","ds_map_size()",", ","ds_map_find_first()"," and ","ds_map_find_next()"," functions to parse the map and get the necessary information.","\n  ","NOTE",": ","GameMaker"," creates the necessary DS maps and lists from the JSON, and for cleaning up you only need to delete the ","top level"," map or list and ","GameMaker"," will automatically delete from memory all the maps and lists underneath.","\n  ","NOTE",": This function allows you to load JSON files with a maximum nesting limit of 128.","\n  ","IMPORTANT",": You cannot have 64bit numbers in your JSON, as they will not work correctly due them not being handled by the JSON format.","\n  "," ","\n  "],["\n  ","json_decode(string)","\n  ","\n    ","\n      ","\n        ","Argument","Type","\n        ","Description","\n     ","\n      ","\n        ","string","String","\n        ","The JSON format string that you are passing to the function for decoding","\n     ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","DS Map ID"," or -1 (if it fails)","\n  "," ","\n  "],["\n  ","var resultMap = json_decode(requestResult);","\n    var list = ds_map_find_value(resultMap, \"default\");","\n    var size = ds_list_size(list);","\n    for (var n = 0; n < ds_list_size(list); n++;)","\n    {","\n        var map = ds_list_find_value(list, n);","\n        var curr = ds_map_find_first(map);","\n        while (is_string(curr))","\n        {","\n            global.Name[n] = ds_map_find_value(map, \"name\");","\n            curr = ds_map_find_next(map, curr);","\n        }","\n    }","\n    ds_map_destroy(resultMap);","\n  ","The above code will decode a JSON string and parse it to generate a global array.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","File Encoding","\n        ","Next: ","json_stringify","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["json_decode"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"8":[["IMPORTANT!"," This function - while still valid - has been superseded by the function ","json_parse()",", and we recommend that you only use this function for legacy support."]],"id":"2329"})