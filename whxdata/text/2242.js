rh._.exports({"0":[[" ","array_reverse_ext"]],"1":[["array_reverse_ext"]],"2":[["array_reverse_ext"]],"3":[[" ","array_reverse_ext"]],"4":[[" ","This function is similar to ","array_reverse",", but instead of returning a modified array, it modifies the original array that you passed into the function."," ","By default, it reverse the whole array. You can reverse only a part of the array by supplying ","Offset And Length"," values."," ","The function returns the number of elements that were modified in the array."," ","IMPORTANT"," This function ","mutates"," the input array, i.e. changes it directly. Existing array elements in the range given by the offset and length parameter might be overwritten. For performance reasons the array is ","not"," resized and the new number of ","valid"," elements is returned instead."],[" ","array_reverse_ext","(array, [offset], [length]);"," ","Argument"," ","Type"," ","Description"," ","array"," ","Array"," ","The array to use"," ","offset"," ","Real"," ","OPTIONAL"," The offset, or the starting index, in the array. Setting a negative value will count from the end of the array. The starting index will then be ","array_length(array) + offset",". See: ","Offset And Length"," ","length"," ","Real"," ","OPTIONAL"," The number of elements to traverse. A negative value will traverse the array backwards (i.e. in descending order of indices, e.g. 2 > 1 > 0 instead of 0 > 1 > 2). See: ","Offset And Length"],[" ","Real"," (the number of valid elements in the array)"],[" ","values = [1, 2, 3, 4, 8, 7, 6, 5];"," ","array_reverse_ext","(values, -4, 4);\n  "," ","The above code first creates an array ","values",". It then reverses the order of the last four elements using ","array_reverse_ext","."," ","Back: ","Array Functions"," ","Next: ","array_create"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2242"})