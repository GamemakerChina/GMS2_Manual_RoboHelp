rh._.exports({"0":[[" ","draw_primitive_begin"]],"1":[["draw_primitive_begin,pr_pointlist,pr_linelist,pr_linestrip,pr_trianglelist,pr_trianglefan,pr_trianglestrip"]],"2":[["draw_primitive_begin,pr_pointlist,pr_linelist,pr_linestrip,pr_trianglelist,pr_trianglestrip,pr_trianglefan"]],"3":[[" ","draw_primitive_begin"]],"4":[[" ","This function must be called before you can define any primitives. There are 6 types of primitives you can define as the following constants:"," ","Primitive Type Constant"," ","Constant"," ","Description"," ","pr_pointlist"," ","A point list"," ","pr_linelist"," ","A line list"," ","pr_linestrip"," ","A line strip"," ","pr_trianglelist"," ","A triangle list"," ","pr_trianglestrip"," ","A triangle strip"," ","pr_trianglefan"," ","A triangle fan"," ","The following image illustrates basically how these should look and also the order in which you should define the vertexes:"," ","Please note that on some platforms (Windows, Xbox) the ","pr_trianglefan"," type is not natively supported and so ","GameMaker"," does a conversion when the game is compiled to make them work. This means that on those platforms the ","pr_trianglefan"," type will be much slower to use than the others. This Also note that to use this function on HTML5, you ","must"," enable WebGL in the Game Options."],[" ","draw_primitive_begin(kind)"," ","Argument"," ","Type"," ","Description"," ","kind"," ","Primitive Type Constant"," ","The kind of primitive you are going to draw."],[" ","N/A"],[" ","var _steps = 20;","\n    var _xx = 50;","\n    var _yy = 50;","\n    var _radius = 30;","\n    draw_primitive_begin(pr_trianglefan);","\n    draw_vertex(_xx, _yy);","\n    for(var i = 0; i <= _steps; ++i;)","\n    {","\n        draw_vertex(_xx + lengthdir_x(_radius, 270 * i / _steps), _yy + lengthdir_y(_radius, 270 * i / _steps));","\n    }","\n    draw_primitive_end();"," ","The above code will draw three quarters of a circle made from primitives."," ","Back: ","Primitives And Vertex Formats"," ","Next: ","draw_primitive_begin_texture"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2283"})