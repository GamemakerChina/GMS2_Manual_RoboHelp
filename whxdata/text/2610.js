rh._.exports({"0":[[" ","Parent Objects"]],"1":[["Objects - Parents"]],"2":[["parent,child,inheritance,object parenting"]],"3":[[" ","Parent Objects"]],"4":[[" ","When working with objects in the ","GameMaker"," IDE, you can set up ","Parent ","/ Child hierarchies. This is done by clicking the \"Parent\" button in the object editor and then choosing another object from the Asset Browser to be the \"parent\" of the one being edited:"," ","So, every object in your game project can have a parent object, but what does this mean? Well, when an object has a parent assigned it can share code, actions and events with that parent. This sharing is called \"inheritance\" and an object that has a parent is called a \"child\" object. Not only can a child share code with its parent, but you can do checks and run code on parent objects and it will automatically include the child objects too, which saves a lot of time and energy."," ","If that sounds complicated, then another way to look at a parent object is as a way to \"group\" objects together under the same umbrella and have them share certain things without losing their own unique identity. Maybe that still doesn't clarify things too much, so let's give some examples..."," ","Say you have a \"player\" object and four different \"enemy\" objects. Now, you want the player to die if he touches any of these four objects and this would normally entail four different collision events with four different sets of actions or code, one for each of the enemy objects. BUT if we make a parent object for all the enemies, then we can create one collision event with the parent object only and it will trigger no matter which one of the four \"child\" enemy objects touch the player. Handy stuff! In the actual ","GameMaker"," object you would see something like this:"," ","On the left we have four separate collision events and on the right we have a single collision event, as we have created a \"parent\" object and assigned all the enemy objects to it. Note that a parent object doesn't have to have any events or code in it..."," ","Another example of parenting would be if you have a game where you want to create 10 different looking objects and have them all behave in the same way. For that you would create one parent object and in that have all your behaviour actions or code in the required events, and then you would create your ten objects with no actions or code, but different sprites, and assign them your parent object. Now, when you place these instances in a room they will all behave the same, but look different, since they will \"inherit\" the events of the parent."," ","Finally you can use parenting to \"mix and match\" events and behaviours. We'll illustrate this with one final example... Say you want two monsters: one that moves up and down, while another that moves left and right, but you also want the two of them to have the same health, shoot at the player and hurt the player if they collide with them. In this case you can see that almost all events should have the same actions except for one or two that govern movement. So, again, we can make one object the parent of the other, but in this case we also define certain events for the child object. These events \"override\" the parent events, meaning that whenever an event for the child object contains actions, these are executed instead of the actions contained in the event of the parent. If you also want to execute the parent event you can call the so-called \"inherited\" event using the function ","event_inherited()",", or the GML Visual action ","Call Parent Event","."," ","On the left above is the parent object with 5 events in it, and on the right you can see the \"child\" object. The child object also has 5 events in it, but two of them override the inherited events from the parent (the ","Step ","and ","Draw ","events) and the other three are greyed out as they are the events inherited from the parent. Inherited events will also have the \"parent override\" icon beside them in the Event Editor:"," ","When you click "," on an event that has been inherited, it will open the code editor to show the inherited parent code, but you will not be able to edit this code as you can only edit it in the parent object itself. You can click the right mouse button "," on any of the parent events to open the following menu of options:"," ","Here you can choose two ","Open ","the parent event to inspect the code, or you can choose to ","Inherit ","the event or ","Override ","the event. If you choose ","Inherit ","then the code editor will open with the function ","event_inherited()"," already added to it (or the ","Call Parent Event"," action if using GML Visual). Any further code you place in this event will now be run as well as the code that the parent object has. If you choose to ","Override ","the event, then the code window will also open, only now the ","event_inherited()"," function won't be called, so anything you add here will be run ","instead ","of the code in the parent object."," ","NOTE",": From the code editor you can quickly navigate to the parent object by clicking the right mouse button "," and selecting ","Go To Object"," from the pop-up menu, or (if the event has been overridden) you can select ","Open Inherited Event"," to go directly to a code editor with the parent event code in it."," ","Whenever you target a parent object in code, the code will also apply to the \"children\" of the parent object too. This happens when, in an action, you indicate that the action must be applied to instances of a certain object, and in code it happens when you use the ","with()"," statement. It will work like this too when you call code functions, like ","instance_position()",", ","instance_number()",", etc... where - if you supply a parent object - all instances of the parent ","and ","child instances will be included in the checks. Finally, parenting works when you refer to variables in other objects too, like in the above monster example if I set the enemy 1 speed to 10, then the enemy 2 speed will also go to ten as it is a child object of enemy 1."," ","It is generally considered good practice in most cases to create one base parent object and have this base object contain all the default behaviour but never use an instance of it in the game. Rather use all child objects and only use the parent in situations like those I have outlined above, for collisions, for referencing variables, etc... You should also realise that parents can have parents too! Obviously you can't create a cycle of \"parent 1 is child of parent 2 is child of parent 1\" but you can create what is called \"object hierarchy\" where \"","parent3 ","is child of ","parent2 ","is child of ","parent1","\". This is extremely useful to keep your game structured and you are strongly advised to learn to use this mechanism."," ","Back: ","The Object Editor"," ","Next: ","Physics Objects"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"2610"})