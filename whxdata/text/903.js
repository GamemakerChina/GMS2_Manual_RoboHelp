rh._.exports({"0":[[" ","path_get_point_x"]],"1":[["path_get_point_x"]],"2":[["path_get_point_x"]],"3":[[" ","path_get_point_x"]],"4":[[" ","This function will return the x position (in room coordinates) of the point that you input for the path that you index. If the point is outside of the range of the path (ie: a path has 8 points and you ask for the x position of point 10) then a value of 0 will be returned."],[" ","path_get_point_x(index, n);"," ","Argument"," ","Type"," ","Description"," ","index"," ","Path Asset"," ","The index of the path to check."," ","n"," ","Real"," ","The point number to check."],[" ","Real"],[" ","if (path_position == 1)","\n    {","\n        var _num = path_get_number(pth_Patrol);","\n        var _pos = floor(random(_num));","\n        x = path_get_point_x(pth_Patrol, _pos);","\n        y = path_get_point_y(pth_Patrol, _pos);","\n        path_position = (1 / _num) * _pos;","\n    }"," ","The above code will check to see if an instance is at the end of a path. If it is it will then choose a random point on the path and move the instance to that point."," ","Back: ","Paths"," ","Next: ","path_get_point_y"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"903"})