rh._.exports({"0":[[" ","string"]],"1":[["string"]],"2":[["string"]],"3":[[" ","string"]],"4":[[" ","This function creates a new string from a variety of data types."," ","When only one argument is provided to the function, this argument is considered to be a value, which will be converted to a string from its original ","data type",". When more than one argument is given, the first argument is considered a ","Format String"," and the arguments that follow it are considered the values to insert into the format string."],[" ","Values of type ","Real"," that are an integer will have no decimal places in the string. Values of type ","Real"," that have a fractional part will have two decimal places in the string. If you need more decimal places in the output string you can use the function ","string_format","."," ","Values of type ","Struct"," or ","Instance"," will be converted to a string using that struct's or instance's ","toString() Method"," if one exists, or converted to a string implicitly."," ","Values of type ","Array"," will be converted to a string of the format ","[element1, element2, element3, element4, element5]",", i.e. the concatenation of all elements in the array. If any of the elements in the array is a struct or an instance then its ","toString() Method"," will be called to convert it to a string."],[" ","When you pass more than one argument to the ","string"," function, the first argument will be treated as a ","format string",". In a format string you can use ","placeholders"," of the form \"{0}\", \"{1}\", \"{2}\", etc."," ","These placeholders will be replaced with the arguments at the positions they refer to, i.e. \"{0}\" will be replaced with the second argument, \"{1}\" will be replaced with the third argument, \"{2}\" will be replaced with the fourth argument, and so on."," ","string_variable = string(\"This is a string with two placeholders that will be replaced. They are {0} and {1}.\", \"this\", \"that\");"," ","\n    // Results in:","\n    // \"This is a string with two placeholders that will be replaced. They are this and that.\"\n  "," ","If you only pass a single argument to the function, then this argument will not be considered a format string. If you add placeholders of the kind \"{0}\" in this case, then they will be output as normal text as there are no values to replace them with: "," ","string_variable = string(\"This is a string with two placeholders that won't be replaced. They are {0} and {1}.\");"," ","\n    // Results in:","\n    // \"This is a string with two placeholders that won't be replaced. They are {0} and {1}.\"\n  "],[" ","string","(value_or_format [, value1, value2, ...]);"," ","Argument"," ","Type"," ","Description"," ","value_or_format"," ","Any"," (if value) or ","String"," (if format)"," ","The value to be turned into a string."," ","[, value1, value2, ...]"," ","Any"," ","OPTIONAL"," The values to be inserted at the placeholder positions."],[" ","String"],[" ","draw_text(100, 100, \"Score: \" + string(score) + \" / Health: \" + ","string","(health));"," ","The above code uses the ","string"," function to draw both real numbers and strings together, as ","draw_text()"," will only accept ","either"," a string ","or"," a real, but not both, so we convert the non-strings into strings."],[" ","draw_text(100, 100, ","string","(\"Score: {0} / Health: {1}\", score, health));"," ","In this code the ","string"," function is used in a slightly different way to achieve the same result as in Example 1. Here the function is called with a format string as the first argument, in which \"{0}\" is replaced with the value of ","score"," and \"{1}\" is replaced with the value of ","health","."," ","Back: ","Strings"," ","Next: ","string_ext"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example 1:"],[" ","Example 2:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"11":[[" ","Conversion From Non-String Types"],[" ","Format String"]],"id":"2546"})