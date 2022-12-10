rh._.exports({"0":[["array_map"]],"1":[["array_map"]],"2":[["array_map"]],"3":[["\n  "],["\n  ","This function returns a ","new"," array with a modified version of the elements in the array or a range of it.","\n  ","The new value to be used for every index is given by the predicate function.","\n  "," ","\n  ","\n  ","\n  "],["\n  ","array_map","(array, function, [offset], [length]);","\n  ","\n    ","\n      ","\n      ","\n      ","\n    ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","array","\n        ","Array","\n        ","The array to use","\n      ","\n      ","\n        ","function","\n        ","Function","\n        ","The function to use for each element","\n      ","\n      ","\n        ","offset","\n        ","Real","\n        ","OPTIONAL"," The offset, or the starting index, in the array. Setting a negative value will count from the end of the array. The starting index will then be ","array_length(array) + offset",".","\n      ","\n      ","\n        ","length","\n        ","Real","\n        ","OPTIONAL"," The number of elements to traverse. A negative value will traverse the array backwards (i.e. in descending order of indices, e.g. 2 > 1 > 0 instead of 0 > 1 > 2).","\n      ","\n    ","\n  ","\n  "],["\n  ","function(element, index);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Type","\n        ","Description","\n      ","\n      ","\n        ","element","\n        ","Any","\n        ","The current array element","\n      ","\n      ","\n        ","index","\n        ","Real","\n        ","The current array index","\n      ","\n    ","\n  ","\n\n","\n  "],["\n  ","Any","\n\n","\n  "," ","\n  "],["\n  ","Array","\n  "," ","\n  "],["\n  ","function vowel_or_consonant(element, index)","\n    {","\n        static vowels = [\"a\", \"e\", \"i\", \"o\", \"u\"];","\n        var is_a_vowel = array_any(vowels, method({\"letter\": element}, function(element, index) {return (letter == element);}));","\n        return is_a_vowel ? \"vowel\" : \"consonant\";","\n    }","\n    letters = [\"a\", \"b\", \"c\", \"d\", \"e\", \"f\", \"g\", \"h\", \"i\"];","\n    letter_type = array_map(letters, vowel_or_consonant);","\n  ","The above code first creates a function ","vowel_or_consonant"," that checks if the given element (which must be a valid letter) is a vowel. It does that by using ","array_any",". If the letter is found, the function returns the string \"vowel\", if it is not it returns the string \"consonant\". It then creates an array ","letters"," with the first letters of the alphabet. Finally it calls ","array_map"," on the ","letters"," array with the ","vowel_or_consonant"," function and assigns the result to ","letter_type",". This array will contain the text \"vowel\" or \"consonant\", depending on whether the element in the original array was a vowel or a consonant.","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Array Functions","\n        ","Next: ","array_unique","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["array_map"]],"5":[["Syntax:"],["Function Syntax:"],["Function Returns: "],["Returns:"],["Example:"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"1772"})