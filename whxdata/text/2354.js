rh._.exports({"0":[[" ","Create Particle System"]],"1":[["GML Visual Action - Create Particle System"]],"2":[["Create Particle System"]],"3":[[" "," Create Particle System"]],"4":[[" ","This action will initialise the particle system ready for you to create and use particle types and emitters with it. You give the layer name as a string - for example \"Particle Layer\" (which must exist in the room editor) - and then flag the system as being ","Persistent"," or not. If the system is flagged as Persistent then it will stay active across all rooms after it has been created, and it will be assigned a managed layer if the initial layer does not exist in subsequent rooms. If persistence is ","not"," flagged, then the system will be automatically destroyed at the end of the room it was created in as will any emitters associated with the system. If you wish to manually remove the system from memory, you need to use the action ","Destroy Particle System","."," ","You also need to supply a target variable that will hold the unique particle system ID value. This ID value is what will be used in other functions to set properties of the system or to tell ","GameMaker"," what system to use when creating particles. You can choose to flag this variable as being a temporary local variable, but that will mean that it is discarded at the end of the action script or event, meaning that the system will still exist but leave you without any means to access it, so care must be taken when using this (in general systems will never need to be stored in a temporary local variable, but for certain things, like drawing particles to a surface, it may be required)."," ","NOTE",": A persistent particle system, once created, remains resident in the system memory for the duration of the game, and so if you need to recreate it at any point (for example, if you call the ","Restart Game"," action), then you ","must destroy the current system first"," otherwise you get a memory leak. A memory leak happens when a resource is added to memory and then \"de-referenced\", meaning that ","GameMaker"," has no way to interact with that resource any more. This leads to the memory being clogged by inaccessible resources which in turn can cause issues with your game. To destroy a persistent particle system when no longer required use the action ","Destroy Particle System","."],[" ","Argument"," ","Description"," ","Layer"," ","The layer where the particles in this system will be drawn"," ","Persistent"," ","Whether the particle system should stay active after the current room has ended"," ","Target"," ","The target variable to hold the unique ID value of the created system"," ","System"," ","OPTIONAL"," The ","Particle System Asset"," to create"],[" ","The above action block creates a global variable, then creates a new particle system and assigns its unique ID value to the global variable. The created particle system is marked as persistent, so it will stay active even after the current room has ended."," ","Back: ","Particle Actions"," ","Next: ","Destroy Particle System"]],"5":[[" ","Action Syntax:"," ","Arguments:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2354"})