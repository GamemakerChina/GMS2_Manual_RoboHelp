rh._.exports({"0":[[" ","matrix_stack_push"]],"1":[["matrix_stack_push"]],"2":[["matrix_stack_push"]],"3":[[" ","matrix_stack_push"]],"4":[[" ","This function is used to push a new matrix to the top of the current matrix stack. It will first multiply the given matrix with the matrix currently at the top of the stack, and then push the resulting matrix to the stack."," ","This function is useful for applying multiple matrix transformations to your visuals without having to manually multiply various matrices together."," ","For example, you can have a base matrix pushed onto the stack that draws graphics into a certain rectangular area (say, a window). After drawing some graphics using that matrix, you can push another matrix onto the stack for drawing graphics inside a sub-area (like a button in the window). After drawing something in that sub-area, you can call ","matrix_stack_pop()"," to remove its matrix from the stack and continue drawing visuals into the main window area."],[" ","matrix_stack_push(matrix);"," ","Argument","Type"," ","Description"," ","matrix","Matrix Array"," ","The matrix to push to the stack"],[" ","N/A"],[" ","var m1 = matrix_build(66, 145, 0, 0, 0, 0, 1, 1, 1);","\n    var m2 = matrix_build(0, 0, 0, 0, 0, image_angle * 6, 1, 1, 1) ;","\n    matrix_stack_push(m1);","\n    matrix_stack_push(m2);","\n    matrix_set(matrix_world, matrix_stack_top());","\n    draw_sprite(spr_tyre, 0, 0, 0);","\n    matrix_stack_pop();","\n    matrix_stack_pop();"," ","The above code will build two new matrices and then push them onto the matrix stack. The world matrix is then set to the top of the stack, a sprite is drawn and the transforms are then popped from the stack."," ","Back: ","Matrix Functions"," ","Next: ","matrix_stack_pop"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1444"})