rh._.exports({"0":[["continue"]],"1":[["continue"]],"2":[["continue"]],"3":[["\n  ","\n  "],["\n  ","The ","continue"," statement has the following basic syntax:","\n  ","continue;","\n  ","If used inside of a statement that forms a loop (","for",", ","repeat",", ","while"," or ","do / until","), it will immediately end the current ","iteration"," and jump back to the beginning of the loop starting a new iteration and omitting any code that comes after the ","continue"," within the loop. It can also be used within the ","with"," statement, where it will cause the code to skip to the next instance and run again. Note that if ","continue"," is used outside of any of these contexts it will give an error.","\n  ","Below is an example of use in a ","for"," loop:","\n  ","var _val = 0;","\n    ","\n    for (var i = 0; i < 10; i += 1)","\n    {","\n        if (val_array[i] <= 0)","\n        {","\n            continue;","\n        }","\n        _val += val_array[i];","\n    }","\n    ","\n    draw_text(32, 32, \"Positive Values Total = \" + string(_val));\n  ","\n  ","Below is an example of use in a ","while"," loop:","\n  ","var file = file_text_open_read(\"Game_Data.txt\");","\n    var _num = 0;","\n    ","\n    while (!file_text_eof(file))","\n    {","\n        var _s = file_text_readln(file);","\n        if (_s == \"\")","\n        {","\n            continue;","\n        }","\n        str[num++] = _s;","\n    }","\n    ","\n    file_text_close(file);\n  ","\n  ","Below is an example of use in a ","do / until"," loop:","\n  ","do","\n    {","\n        var _x = random(room_width);","\n        var _y = random(room_height);","\n    ","\n        if (instance_position(_x, y, obj_Enemy)","\n        {","\n            continue;","\n        }","\n    ","\n        instance_create_layer(_x, _y, \"Instances\", obj_Enemy);","\n    }","\n    until (instance_count(obj_Enemy) >= 10);\n  ","\n  ","Below you can find an example of use in a ","repeat"," loop:","\n  ","repeat(10)","\n    {   ","\n        var _x = random(room_width);","\n        var _y = random(room_height);","\n    ","\n        if (instance_position(_x, y, obj_Enemy)","\n        {","\n            continue;","\n        }","\n    ","\n        instance_create_layer(_x, _y, \"Instances\", obj_Enemy);","\n    }\n  ","\n  ","Finally, an example of use in a ","with"," statement:","\n  ","with (obj_Enemy_Parent)","\n    {","\n        if (object_index == obj_Enemy_InDestructible)","\n        {","\n            continue;","\n        }","\n    ","\n        hp -= 100;","\n    ","\n        if (hp <= 0)","\n        {","\n            instance_destroy();","\n        }","\n    }\n  ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Language Features","\n        ","Next: ","exit","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["continue"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2114"})