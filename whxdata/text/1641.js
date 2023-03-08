rh._.exports({"0":[[" ","matrix_set"]],"1":[["matrix_set,matrix_view,matrix_projection,matrix_world"]],"2":[["matrix_set,matrix_view,matrix_projection,matrix_world"]],"3":[[" ","matrix_set"]],"4":[[" ","This function takes an ","array"," of 16 values, corresponding to a given 4x4 matrix type, where elements [0 - 3] would be row 1, elements [4 -7] would be row 2, etc... (see the image on the ","main page","). You can create such a matrix using the ","matrix_build()"," or ","matrix_get()"," functions or simply building the array yourself and passing that into the function. The available matrix types are ","view",", ","projection"," and ","world",", for which you would use one of the following constants:"," ","Constant"," ","Description"," ","matrix_view"," ","The current view matrix"," ","matrix_projection"," ","The current projection matrix"," ","matrix_world"," ","The current world matrix"],[" ","matrix_set(type, matrix);"," ","Argument"," ","Type"," ","Description"," ","type"," ","Matrix Type Constant"," ","The type of matrix to get the values of (see the ","constants"," listed above)"," ","matrix"," ","Matrix Array"," ","The matrix data as an array"],[" ","N/A"],[" ","matrix_set(matrix_world, m_array);"," ","The above code will set the values of the current world matrix to those stored in the array matrix \"m_array\"."," ","Back: ","Matrix Functions"," ","Next: ","matrix_build"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1641"})