rh._.exports({"0":[["tag_get_assets"]],"1":[["tag_get_assets"]],"2":[["tag_get_assets"]],"3":[["\n  ","\n  "],["\n  ","With this function you can retrieve the names of all assets that have been assigned the given tag or tags. You supply either a single tag string or an ","array",", where each item in the array is a tag string. The function will return an array where each entry is the name (as a string) of the asset with the given tag. If you need the unique index for the asset, then you can use the function ","asset_get_index()"," along with the returned name. If there are no assets with the given tag(s), or if there is an error (eg: the given tags do not exist), then an empty array will be returned.","\n  "," ","\n  "],["\n  ","tag_get_assets(tags);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","tags","\n        ","String"," or ","Array"," of Strings","\n        ","A single asset tag string or an array with various asset tags.","\n      ","\n    ","\n  ","\n  "," ","\n  "],["\n  ","Array","\n  "," ","\n  "],["\n  ","backgrounds = ds_list_create();","\n    var _assets = tag_get_assets(\"background\");","\n    for (var i = 0; i< array_length(_assets); ++i;)","\n    {","\n        if asset_get_type(_assets[i]) == asset_sprite","\n        {","\n            ds_list_add(backgrounds, asset_get_index(_assets[i]));","\n        }","\n    }","\n  ","The above code creates a list, then retrieves the names of all the assets with the tag \"background\". It loops through the array of names returned, checking to see if any of them are sprite assets, and if they are then the unique index value for the asset is added to the list for future use.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Assets And Tags","\n        ","Next: ","asset_get_tags","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["tag_get_assets"]],"5":[["Syntax:"],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1456"})