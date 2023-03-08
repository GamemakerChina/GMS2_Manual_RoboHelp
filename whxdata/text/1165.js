rh._.exports({"0":[[" ","room_goto"]],"1":[["room_goto"]],"2":[["room_goto"]],"3":[[" ","room_goto"]],"4":[[" ","This function permits you to go to any room in your game project, whether created using code or in the Asset Browser. You supply the room index (stored in the variable for the room name, or as a variable returned from the function ","room_add()","). Note that the room will not change until the end of the event where the function was called, so any code after this has been called will still run if in the same event. This function will also trigger the ","Room End"," event."," ","NOTE"," You will not be able to create new instances in the same event after this function has been called."," ","NOTE"," Room IDs are not based on their order in the Asset Browser or the Room Manager, and so you should avoid supplying a number value directly. Instead, use the room ","constant"," for the asset you want to reference (which is simply its name) or retrieve it through a function."],[" ","room_goto(index);"," ","Argument","Type"," ","Description"," ","index","Room Asset"," ","The index of the room to go to."],[" ","N/A"],[" ","switch (global.level)","\n    {","\n        case 0: room_goto(rm_level1); break;","\n        case 1: room_goto(rm_level2); break;","\n        case 2: room_goto(rm_level3); break;","\n    }"," ","The above code will check a global variable and change room based on the value that it holds."," ","Back: ","Rooms"," ","Next: ","room_goto_next"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1165"})