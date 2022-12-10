rh._.exports({"0":[["Data Structure Actions"]],"1":[["GML Visual Overview - Data Structure Actions Library"]],"2":[["Data Structure Actions"]],"3":[["\n  ","\n  "],["\n  ","\n  ","In games you often need to store information in a precise and ordered way. For example, you may need to store lists of items that a person carries or you may want to store a grid of places that still need to be visited. Now, you can use multiple variables\n    for this, but if you want to do more complicated operations, like sorting the data or searching for a particular item, you need to write large chunks of action block code which can be slow to execute, difficult to debug and a real pain to write!","\n  ","To remedy this, ","GameMaker"," has a number of built-in data structures that can be accessed through specialist functions. There are four different types of data structure available through GML Visual (there are six if you use ","GML","),\n    each one having its own pros and cons depending on the type of information that you are looking to store and how you wish to manipulate it later - the four types are:","\n  ","\n    ","\n      ","\n        ","\n        ","Lists","\n        ","A list is a data-structure that stores information sequentially as it is added. List indexes start at 0 and will go up for each item that is added onto the end of the list, although you can also insert data into a position other than the last one. Unlike the Stack data structure (explained below) you can access the data from any index of the list at any time.","\n      ","\n      ","\n        ","\n        ","Maps","\n        ","The map data structure is an exceptionally useful one as it lets you store ","key"," and ","value"," pairs. For example, a character in your game can have a quantity of different items (keys) and for each individual item he can have a number of them (values), like in an RPG where you can have 10 health potions, 5 mana potions and 100 gold. Maps maintain such pairs all together in the one place and you can add pairs to the map and search for the value corresponding to certain keys as well using some simple functions. Maps are not sorted in any (recognisable) way, meaning that to find a certain key you may have to iterate through the whole thing (which is very slow), and there is also no way to hold two keys that are the same, nor can you assign one key two values.","\n      ","\n      ","\n        ","\n        ","Grids","\n        ","A grid is two-dimensional array of values where you define its width and height. This sets the total number of grid \"cells\" within the grid (the width and height multiplied) and these cells are then used to hold different data values, which can be any of the permitted data types. This type of structure allows you to set and retrieve the value of cells in the grid by giving the x (column) and y (row) position of it (both rows and columns start at 0 and go up to the grid width - 1 and the grid height -1). When accessing grid data structures, you should always try to use integer values for the cell position, and all non-integer indices will be floored by ","GameMaker\n          Studio 2"," if you do not. If that is not what you require, then you will need to do the rounding yourself previously before passing the index that you wish to check.","\n      ","\n      ","\n        ","\n        ","Stacks","\n        ","A stack data structure is a so called last-in-first-out (LIFO) structure. You can push values onto a stack and the remove them again by popping them from the stack, and the value that was pushed on the stack most recently is the first to be popped from it again (just think of a stack of coins, where each coin that you add has to be removed again first before you can get to the rest of the coins beneath). Stacks are often used when there are interrupts to handle, or when having recursive functions, or even when constructing a rudimentary AI for your games.","\n      ","\n    ","\n  ","\n  "," ","\n  ","Essentially, all data structures work in the same way - You create a data structure and store its index value in a variable. You then use this index to reference the data structure in all further function calls that can perform operations on it. Finally,\n    once you are done you destroy the data structure again to remove it from memory. You can use as many of the structures at the same time as you need, and all structures can store both strings and real values.","\n  ","NOTE",": As with all dynamic resources, data structures take up memory and so should ","always be destroyed when no longer needed"," to prevent memory leaks which will slow down and eventually crash your game.","\n  ","The ","Data Structure"," library has the following actions:","\n  "," ","\n  ","\n    ","\n      ","\n        ","\n        ","Create List","\n      ","\n      ","\n        ","\n        ","Create Map","\n      ","\n      ","\n        ","\n        ","Create Grid","\n      ","\n      ","\n        ","\n        ","Create Stack","\n      ","\n      ","\n        ","\n        ","Clear Data Structure","\n      ","\n      ","\n        ","\n        ","Free Data Structure","\n      ","\n      ","\n        ","\n        ","Add To List","\n      ","\n      ","\n        ","\n        ","Remove From List","\n      ","\n      ","\n        ","\n        ","Get List Item At","\n      ","\n      ","\n        ","\n        ","Get Index Of List Item","\n      ","\n      ","\n        ","\n        ","Insert Into List","\n      ","\n      ","\n        ","\n        ","Get List Item Count","\n      ","\n      ","\n        ","\n        ","Set Map Value","\n      ","\n      ","\n        ","\n        ","Get Map Value","\n      ","\n      ","\n        ","\n        ","Remove Map Entry","\n      ","\n      ","\n        ","\n        ","Set Grid Value","\n      ","\n      ","\n        ","\n        ","Get Grid Value","\n      ","\n      ","\n        ","\n        ","Clear Grid","\n      ","\n      ","\n        ","\n        ","Push Onto Stack","\n      ","\n      ","\n        ","\n        ","Pop Stack","\n      ","\n      ","\n        ","\n        ","If Data Structure Exists","\n      ","\n      ","\n        ","\n        ","If Data Structure Empty","\n      ","\n    ","\n  ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Index","\n        ","Next: ","Buffer Actions","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n"]],"4":[["Data Structure Action Library"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2673"})