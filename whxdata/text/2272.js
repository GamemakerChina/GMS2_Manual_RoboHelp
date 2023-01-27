rh._.exports({"0":[[" ","rectangle_in_triangle"]],"1":[["rectangle_in_triangle"]],"2":[["rectangle_in_triangle"]],"3":[[" ","rectangle_in_triangle"]],"4":[[" ","This function will check a rectangular area that you define to see if it is either not in collision, completely within the destination bounds, or if it is simply touching, a defined triangular area. If they are not touching at all the function will return 0, if the source is completely within the destination it will return 1, and if they are simply overlapping then it will return 2. The image below illustrates this:"],[" ","rectangle_in_triangle(sx1, sy1, sx2, sy2, dx1, dy1, dx2, dy2, dx3, dy3);"," ","Argument","Type"," ","Description"," ","sx1","Real"," ","The x coordinate of the left side of the source rectangle."," ","sy1","Real"," ","The y coordinate of the top side of the source rectangle."," ","sx2","Real"," ","The x coordinate of the right side of the source rectangle."," ","sy2","Real"," ","The y coordinate of the bottom side of the source rectangle."," ","x1","Real"," ","The x coordinate of the first side of the triangle to check."," ","y1","Real"," ","The y coordinate of the first side of the triangle to check."," ","x2","Real"," ","The x coordinate of the second side of the triangle to check."," ","y2","Real"," ","The y coordinate of the second side of the triangle to check."," ","x3","Real"," ","The x coordinate of the third side of the triangle to check."," ","y3","Real"," ","The y coordinate of the third side of the triangle to check."],[" ","Real"],[" ","var inst = instance_nearest(x, y, obj_Player);","\n    if instance_exists(inst)","\n    {","\n        var x1 = x + lengthdir_x(100, image_angle - 45);","\n        var y1 = y + lengthdir_y(100, image_angle - 45);","\n        var x2 = x + lengthdir_x(100, image_angle + 45);","\n        var y2 = y + lengthdir_y(100, image_angle + 45);","\n        if rectangle_in_triangle(inst.bbox_left, inst.bbox_top, inst.bbox_right, inst.bbox_bottom, x, y, x1, y1, x2, y2) == 1","\n        {","\n            can_see = true;","\n        }","\n    }"," ","The above code uses the ","rectangle_in_triangle"," function as a \"cone of vision\" to check for an instance of \"obj_player\". If the full bounding box is within the given triangular area, it will set a variable to ","true","."," ","Back: ","Collisions"," ","Next: ","rectangle_in_circle"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2272"})