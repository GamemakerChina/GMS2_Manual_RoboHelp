rh._.exports({"0":[[" ","Matrix Functions"]],"2":[["Matrix Functions,matrix,matrices"]],"3":[[" ","Matrix Functions"]],"4":[[" ","A matrix is a collection of numbers arranged into a fixed number of rows and columns. Usually the numbers are real numbers, but that doesn't always have to be the case. The following image shows in general how a matrix is constructed with four rows and four columns:"," ","The top row is row 1, the leftmost column is column 1, and this matrix is a 4x4 matrix because it has four rows and four columns (other sized matrices can be constructed). In describing matrices, the format is always rows / columns, and each number that makes up a matrix is called an ","element"," of the matrix. The elements in a matrix have specific locations, described by their row and column position where the upper left corner of the matrix is row 1 column 1. In the above matrix example, the element at row 1 col 1 is the value \"1\". The element at row 2 column 3 is the value \"4.8\"."," ","Matrices are very important for many things but are used most in dealing with 3D space, for example they can be used for setting the camera view or for translating or transforming a model. The following functions exist for dealing with matrices in ","GameMaker",":"," ","matrix_get"," ","matrix_set"," ","matrix_build"," ","matrix_multiply"," ","matrix_build_identity"," ","matrix_build_lookat"," ","matrix_build_projection_ortho"," ","matrix_build_projection_perspective"," ","matrix_build_projection_perspective_fov"," ","matrix_transform_vertex"," ","is_matrix"," ","The following functions are for using a matrix ","stack",", which is similar to a ","DS stack",", but designed for use only with matrices. This is a handy way to apply multiple matrix operations (like transforms) one after another when creating a 3D scene."," ","matrix_stack_is_empty"," ","matrix_stack_clear"," ","matrix_stack_set"," ","matrix_stack_push"," ","matrix_stack_pop"," ","matrix_stack_top"," ","Back: ","Maths And Numbers"," ","Next: ","Date And TIme"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2092"})