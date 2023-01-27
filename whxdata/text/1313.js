rh._.exports({"0":[[" ","delete"]],"1":[["delete"]],"2":[["delete"]],"3":[[" ","delete"]],"4":[[" ","The ","delete"," operator is used to ","de-reference"," a ","struct",", and has the following syntax:"," ","delete <variable>;"," ","What this means is that you call the delete operator along with the variable that holds a struct and it will remove the specific ","reference ","to the struct stored in the given variable (a reference is simply a value that points to the memory area\n    that is storing the struct and its contents). If this reference was the last reference to the struct in your game, then the ","garbage collector"," will remove the struct from memory in\n    a following ","iteration",", typically at the very start of the next step."," ","NOTE",": ","delete"," can only be used along with variables, and ","not"," expressions"," ","By default, structs with no further references in code will be garbage collected automatically in the steps following their use, but it is good practice to use this operator to flag them explicitly for the garbage collector to remove from memory at\n    the very start of the following step, freeing the memory quickly and more efficiently."," ","The following example shows a struct being created - for example in the Create Event of an instance:"," ","mystruct ="," {\n    ","     a : 0,","     b : 100,","     c : \"Hello World\""," }\n  "," ","This struct will then be used in the instance events as usual, before finally being flagged for garbage collection in the ","Clean Up"," event, like this:"," ","delete mystruct;"," ","Back: ","Language Features"," ","Next: ","if / else And Conditional Operators"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1313"})