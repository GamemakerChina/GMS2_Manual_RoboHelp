rh._.exports({"0":[[" ","The Object Editor"]],"1":[["Object Editor"]],"2":[["objects,object editor"]],"3":[[" ","The Object Editor"]],"4":[[" ","Objects are the resource that we use to control aspects of a game and to do specific things. Most of the time they have a sprite associated with them so that you see them in the game rooms, but sometimes they are used as a \"behind the scenes\" controller to do things related to the user or for timing, etc... They can be given behaviours and they can react to certain events as well as to each other, and most of the things you see in a game are based on objects and their interactions. Now, we say \"based on\" because you don't actually place objects directly into the game rooms, but rather you place ","instances"," of these objects which are basically copies (or clones if you prefer) of the object resource. This is a very important thing to remember as instances and objects ","are not the same thing"," and each have their own set of functions that can affect them."," ","To clarify this, think of a game made with ","GameMaker",". All the characters, monsters, balls, walls, etc... are all objects you create in the ","Asset Browser",". You then drag the ","object ","into a room in the ","Room Editor"," to create an ","instance ","copied from the basic object template. The instance in the room can then be changed in the editor itself or through code, so that it can be scaled, or coloured, or have other details modified from the \"base\" object. So when we talk about something affecting or changing an ","instance",", we mean it affects that ","one particular copy of an object in a room",". Only that single instance is being affected while all the rest are not. But, when we talk about affecting or changing an ","object",", we mean that we are modifying the object in the Asset Browser and anything we do to it will be reflected in all the instances created from that point on too. So, the object is the template for the instance, and the instance is what we place in a room to make our game."," ","To create an object in your game, you can right click "," on the Asset Browser and click the ","Create Object"," option. This will open the window pictured at the top of this page with the following sections:"," "," ","Details"," "," ","Here you can give your object a name. This name should never contain spaces nor unauthorized characters (only alpha-numeric characters and the underbar \"_\" are allowed) and should be short but memorable so that you can easily identify resources\n      later when you may have many of them. For example many people use a prefix or a suffix to identify the differences between resources, like \"","obj_Ship","\" or \"","Ship_obj","\"."," ","Next you can choose the sprite for the object should you wish it to have one. Click with the left mouse button "," on the sprite box and the ","Asset Explorer"," will appear with a list of all the available sprites from the Asset Browser:"," ","You can then select the one you want to use for the object. With a sprite assigned to the object you can click the ","Edit Sprite"," button "," to change the ","sprite properties",", or - if you do not have a sprite for the object but wish to create one - you can click\n      the ","Add Sprite"," button "," to create a new sprite asset and assign that. You can also edit the sprite asset image that has been\n      assigned by clicking the ","Edit Image"," button "," to open the ","Image Editor","."," "," ","Collision Mask"," "," ","Beneath the sprite assignment area you have a button for choosing a specific ","Collision Mask",". By default an object will generate collision properties based off of the sprite assigned to it, but there are cases whereby you may want\n      collisions to be based off a different shape from a different sprite. For example, you may have a top down game where the main sprite has a rectangular collision mask, but to make collisions smoother a circular mask may be better. In these cases\n      you can click the Collision Mask button and select another sprite resource, so now instances of the object will ","draw ","the assigned sprite, but base ","collisions ","off of the mask sprite. You can find out more information about collision\n      masks from the page on the ","Sprite Editor","."," "," ","Properties"," "," ","Here you are presented with the following options for your object:"," ","Visible",": Visible indicates whether instances of this object are visible when the room starts. Normally most instances are visible but sometimes it is useful to have invisible ones - for example, you can use them for way-points to control a moving monster, or to keep track values and perform certain timed actions. Invisible objects will still react to events and if they have a sprite or a mask assigned to them, they will also react should other instances collide with them... they just cannot be seen and do ","not ","perform their ","Draw Event",". By default, the visible flag is checked."," ","Solid",": When you flag an instance as being solid, you are telling ","GameMaker"," that it should try to resolve any collisions before triggering a ","Collision Event",". This is a very basic functionality, and in reality all it does is move the instance back to the position it was in the moment before a collision was detected before performing any code or GML Visual that is in the Collision Event itself, and as such is of limited use."," ","Persistent",": A persistent object is one that does not go away when the room is changed, but rather it \"persists\" and is carried over into the new room. It will only disappear when you explicitly destroy it, either with a destroy action or in code. This means that if you place a persistent object in one room, it will still be available in all subsequent rooms and will continue to perform any actions assigned to the events in its object properties, ","except ","the ","Create Event",", which is only fired ","once ","when it is created initially and not when you change to a new room. This is handy for when you have, for example, a main character that moves from room to room and you want to maintain the variables within the instance the same, but you should take great care to create and destroy persistent objects correctly as you can easily get errors creeping into your project by mistake."," "," ","Persistence And Room Layers"," "," ","When you create an instance with persistence enabled in a room, it will be assigned a layer or a depth (depending on which function you used to create the instance of the object). When the room is changed, and if the following room does not have a layer with the same name or depth as the one assigned, then"," a new layer will be created for the instance that is persisting across the rooms",". If you gave a named layer when the instance was created, then the new layer will also be named the same as original layer, while if you assigned a depth to the instance then the new layer will be named \"","_layer_XXX","\", where \"","XXX","\" is a hex value used to give the layer a unique name. These layers will be removed from the room on ","Room End","."," ","\n        Another thing to note about layers and persistent instances is that if you have assigned the instance a named layer on creation, and there is another layer in the following rooms with the same name, then the persisted instance will be assigned to the layer with the same name regardless of the depth of the layer."," ","\n        Finally, if a persisted instance moves to a room with a layer at the ","same"," depth as the instance was created on, it will ","not ","be assigned to this layer, but instead a new layer will be created at the same depth (following the naming convention explained above).\n      "," "," ","Persistence And Events"," "," ","As mentioned previously, a persistent object will only run its ","Create Event"," ","once",", but it will also have its ","Game Start",", ","Game End",", ","Room Start"," and ","Room End"," events triggered at the appropriate times. However if you restart the game (with, for example, the ","game_restart()"," function) ","all persistent objects will be removed and only exist when created again by the game","."," ","\n        Also note that if you ","deactivate ","a persistent object, it will no longer pass from one room to another unless re-activated before the ","Room End"," event is triggered. Re-activation ","requires a full game step to occur",", so using the actual ","Room End"," event for this does not work, as it doesn't give the game a full step to reactivate the object, so you need to keep this in mind when using deactivation along with persistent objects and plan your code accordingly.\n      "," ","Uses Physics",": When you check the Uses Physics box you are telling ","GameMaker"," that this object should be part of a physics world (as set in the ","Room Editor",". Checking this will also open a further chained window where you can define the physical properties of all instances of this object. More information on this can be found in the section on ","Physics Objects","."," ","Managed",": Whether this object should be managed when using ","Rollback Multiplayer."," A managed object's state can be ","rolled back"," and predictions can be run on it. This feature is currently in beta versions only."," See ","Managed Objects","."," ","The last part of the Object Editor is taken up with the different object ","Options",", each of which is discussed on its on page, linked below:"," ","Object Events"," ","Parent Objects"," ","Physics Objects"," ","Object Variables"," ","Back: ","The Asset Editors"," ","Next: ","The Particle System Editor"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2737"})