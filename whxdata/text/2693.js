rh._.exports({"0":[[" ","Get Instance Variable"]],"1":[["GML Visual Action - Get Instance Variable"]],"2":[["Get Instance Variable"]],"3":[[" "," Get Instance Variable"]],"4":[[" ","With this action you can get any one of the listed ","built in"," variables. All instances of all objects have a number of variables already created within them to hold essential information like the current x/y position, the speed, the direction, visibility and many other things. The instance variables that you can get the values of are:"," ","X Coordinate","- The position along the x axis in the room."," ","Y Coordinate"," - The position along the y axis in the room."," ","Direction"," - The direction of movement for the instance (default is 0, where right is 0°, up is 90°, left is 180° and down is 270°)."," ","Speed"," - The speed (in pixels per game frame) that the instance is moving at."," ","Horizontal Speed"," - The horizontal speed (in pixels per game frame) that the instance is moving at. A negative speed means it is moving\n      left, a positive speed is right and the default is 0."," ","Vertical Speed"," - The vertical speed (in pixels per game frame) that the instance is moving at. A negative speed means it is moving up,\n      a positive speed is down and the default is 0."," ","Visible"," - The visibility toggle variable (default is ","true"," unless set otherwise in the ","Object Editor",",\n      set to ","false"," to make invisible). Note that an invisible instance still runs all its events ","except"," the Draw Event."," ","Persistent"," - The persistence toggle variable (default is ","false"," unless set otherwise in the ","Object Editor",",\n      set to ","true"," to make persistent). This will make an instance \"persist\" from room to room, ie: the instance will not be cleaned up on room end but instead will be carried over to the next room. Note that when an instance is persisted\n      it will ","not"," call its Create nor Destroy event, but will call the Clean Up, Room End, and Room Start events."," ","Layer"," - The layer that the instance has been assigned to."," ","Depth"," - The depth value assigned to the layer."," ","Sprite"," - The sprite resource assigned to the instance."," ","Image Index"," - The image index of the sprite assigned. This value sets the frame of the sprite assigned to the instance, and\n      if the value is greater than the number of frames in the animation it will \"loop\" such that a sprite with 5 frames if set to frame 7 will actually show frame 2."," ","Image Angle"," - The angle that the instance should be set to (default is 0, where right is 0°, up is 90°, left is 180° and down\n      is 270°)."," ","Image Alpha"," - The alpha value for the instance (default is 1) from 0 to 1, where 0 is full transparent and 1 is fully opaque."," ","Image Blend"," - The colour to be blended with the instance sprite (default is white)."," ","Image Speed"," - The animation speed for the instance."," ","In Sequence"," - This variable will return ","true"," if the instance is currently included in a sequence,\n      and ","false"," otherwise."," ","Horizontal Scale"," - The horizontal scale at which the instance sprite should be drawn (this will also affect the instance bounding\n      box and collisions). A scale of 1 indicates no scaling (1:1), smaller values will scale down (0.5, for example, will half the width of the sprite), larger values will scale up and negative values will mirror the sprite ","and"," scale it unless\n      the value used is exactly -1 (in which case the sprite is just mirrored along the y-axis with no scaling)."," ","Vertical Scale"," - The vertical scale at which the instance sprite should be drawn (this will also affect the instance bounding\n      box and collisions). A scale of 1 indicates no scaling (1:1), smaller values will scale down (0.5, for example, will half the height of the sprite), larger values will scale up and negative values will flip the sprite ","and"," scale it unless\n      the value used is exactly -1 (in which case the sprite is just flipped along the y-axis with no scaling)."," ","Mask","- The mask index for the instance. The default value is -1 (which means the instance will use the collision mask for the\n      currently assigned sprite index), but if set to any other sprite resource, the collision mask for that instance will be used instead of the sprite assigned to the sprite index."," ","Friction"," - The friction to use each game frame of the game to slow down the instance. This value will simply be deducted from the current\n      speed value each game frame (or added if the speed value is negative)."," ","Gravity"," - Gravity will apply a constant force in the gravity direction (see below) of the instance, influencing its speed (default is\n      0). Note that gravity is a cumulative force and will accelerate the object if you choose not to cap the final speed."," ","Gravity Direction","- This can be used to set the direction of movement when the instances gravity is greater than 0 (default\n      is 270). Note that directions in ","GameMaker"," are calculated as 0° being right, 90° being up, 180° being left and 270° being down."," ","Score"," - Set the ","score"," variable."," ","Lives"," - Set the ","lives"," variable."," ","Health"," - Set the ","health"," variable."," ","Once you select the built in variable to get, you then set the target variable to hold the returned value. If you flag this variable as a temporary variable then it will be created for you in the action and will be available only until the end of the\n    event or action script. You can also retrieve the values of additional variables in the same action by clicking the plus icon"," ","    beside the action, and selecting another instance variable and giving an accompanying variable to store the returned value."],[" ","Argument"," ","Description"," ","Variable"," ","The built in variable to get"," ","Target"," ","The target variable to use to hold the returned value"],[" ","The above action block code gets the values for the previous x/y position and then compares them to the current x/y position. If they are not the same, then the sprite index for the instance is changed and it's image index is set to 0."," ","Back: ","Instance Actions"," ","Next: ","Set Sprite"]],"5":[[" ","Action Syntax:"," ","Arguments:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2693"})