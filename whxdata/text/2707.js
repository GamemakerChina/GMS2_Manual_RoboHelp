rh._.exports({"0":[[" ","Layer Properties"]],"1":[["Rooms - Layers"]],"2":[["layers,layer types,layer properties"]],"3":[[" ","Layer Types And Properties"]],"4":[[" ","Everything that goes into the room you create in the ","Room Editor"," is placed on a ","layer",". Layers can be added, removed, and sorted from the Layer Editor, and come in a variety of different types, each with their own set of options and way of working. You aren't limited to the number of each type of layer, and can have multiple tile layers, or path layers, or instance layers, etc... Each type of layer has its own ","properties window"," where you can set different things depending on the layer type. You can also toggle the layer's visibility, with invisible layers ","not ","being processed at runtime (but you can make them visible again at any time using the appropriate ","layer function",")."," ","The image above shows the layer editor, with the current layers being listed at the top, and the different buttons for creating layers at the bottom. You can rename any layer from this editor by doing a slow double click on the name (note that you cannot use anything except letters numbers and the underbar \"_\" character for names) and you can also switch its visibility on or off by clicking the eye icon ",". If the room has inherited layers from a parent room, you can toggle the inheritance from the button at the bottom, but note that this will affect all layers (see ","here"," for more information on inheritance). You can also use "," or "," / "," and left click "," on multiple layers to select them for duplication or deletion (these options are also available from the right mouse "," menu)."," ","To help with ordering your layers and keeping them tidy, you can create groups of layers in a layer folder by clicking the folder icon ",". You can also delete one or more selected layers by clicking the delete button ",". All layers will have a ","depth ","value, which defines where in the draw order that layer will be placed when its contents are ","rendered"," in the room. Layers are drawn from the ","highest ","depth to the ","lowest",", so a layer at a depth of -100 will be drawn ","over ","a layer with a depth of 200."," ","IMPORTANT"," There is a minimum and maximum layer depth of -16000 to 16000. Anything placed on a layer outside that range will not be drawn although all events will still run as normal for anything on the layer."," ","If you right-click "," on any layer you get the layer menu:"," ","Here you can open the layer properties window for the selected layer, delete the layer, rename the layer, or add a ","sub layer",". If you choose to add a sub layer, the new layer will be created under it, tabbed to the right. You can then choose to have the sub layer inherit its properties from the parent layer, and also set whether it should inherit the visibility from the parent layer."," ","Note that you can drag layers up or down in the window to re-order them, and you can select and move multiple layers too using either "," + "," to select from one layer to another (including all those in between) or "," / "," + "," to select layers one at a time. If you place the layers on top of a layer folder, they will be moved and set as sub-layers of the folder you dropped them on to. You can also lock layers so that they cannot be edited by mistake using the lock button ","."," ","NOTE"," In the actual editor window where you place the different assets on their layers, you can hold down \"","P","\" + click anywhere to instantly select an asset and skip to the layer that it has been placed on."," ","Below you can find an overview of each of the available layer types as well as the editable properties for that layer:"," "," ","Backgrounds"," "," ","You can add a new background layer by clicking on the "," button. This will add the new layer, and then open up the background properties window:"," ","When you create a new background layer it does not have a sprite set by default and so ","GameMaker"," fills the layer with a solid colour instead (you can click the preview box to open the colour picker and change the colour used). When using a simple colour, none of the other layer settings are used in-game."," ","If you choose a sprite instead, then you can tile that image horizontally or vertically, choose whether to stretch the image so it fills the whole room, and offset the image as you wish. Additionally, if you want to have the background scroll in a direction, you can set the horizontal and/or vertical speed too (each game step it will move along the given axis by the number of pixels that you set here), and you can also re-position the background image by setting the x and y offset values. You can also set the animation speed for the background if the sprite resource that you have selected has multiple sub-images, although this is locked by default to the value that you set in the Sprite Editor for the image used. Finally you can set the depth for the layer explicitly, although again by default this is locked and you can simply drag and reorder the layer order in the Layer Editor to change this value."," ","Note that you can toggle the inheritance for a background from this window too by clicking the button at the very top."," "," ","Instances"," "," ","You can add a new instance layer by clicking on the "," button. This will add the new layer, and then open up the instance properties window:"," ","This window simply shows a list of all the instances that are currently on the layer. You can add more instances to a layer by opening up the ","Asset Browser"," and then dragging objects from there into the room, or alternatively you can select an instance from the Asset Browser and then press and hold "," to preview the resource \"in-situ\", and if you additionally click the left mouse button "," you can add the instance and even \"paint\" it into the room layer by maintaining the button pressed and moving the mouse."," ","The layer list can be ordered by clicking "," and dragging an instance in the list to the position required, but it is worth noting that this is purely for organisational purposes within the room editor and if you want to set a specific creation order, please use the ","Creation Order Window",", which can be opened from the ","Room Properties"," window, or from the ","Room context menu","."," ","Double-clicking "," on any instance - either in the room editor itself or in the properties list - will open a new window to let you modify aspects of that single unique instance:"," ","By default the instance will have a name like \"","inst_38B0BFF","\", but this can be changed to anything you want as long as the name uses only alpha-numeric characters and the under-bar \"_\" (and no spaces). However it's worth noting that the name given here (whether it's one you give, or the default one that the IDE gives) is considered a ","constant"," and so ","must be ","unique ","to the instance",". This also means that it can be used in code n your game to identify the instance, but only if you are in the same room as the instance."," ","Below the instance name you have buttons to set whether the instance is to inherit from the parent room, change the object that you want it to be an instance of or even open up the ","Object Editor",", should you wish to change anything there. There is a button to check and edit variables through the ","Object Variable"," window and you can change the initial characteristics of this instance too, setting a colour to blend it with (white by default), or rotating and flipping it. You can also scale the instance along either or both the axis, and set its position within the room, as well as the image speed and initial frame for the sprite to use."," ","Finally you can give the instance some creation code which will run directly after the object creation event code, and is unique to this instance (so you can, say, set a variable in the object which all instance will have then modify it in the creation code so that it's a unique value for one instance). Clicking this will chain a ","script window"," to the instance where you can add any functions or modify any variables and this code will be run directly after the instance has been created and the instance ","Create Event"," has been run. Note that you can toggle inheritance of creation code on or off ","independently ","of the instance inheritance."," ","It is worth noting that each instance on a layer is automatically flagged for exporting when the game is made. However, especially when working with inheritance, it may be that you don't ","want ","specific instances to be added to the room in the final game (or you may have a debug instance in every room and simply want to exclude it from the final game). If that is the case, then simply un-checking the \"","Export","\" checkbox to the left of the instance in the list will prevent it from being exported as part of the executable. It is important to note, however, that if you have any code that references the instance, ","then the game will not run correctly",", so use this feature with care."," "," ","Tile Maps"," "," ","You can add a new ","tile map"," layer by clicking on the "," button. This will add the new layer, and then open up the ","Tile Map Layer Properties"," window and the ","Tile Editing ","window:"," ","In the ","Tile Map Layer Properties"," you can toggle the inheritance for the layer, change the tile set that is being used and set the x or y offset for the layer if you want the layer grid to not align exactly with the (0, 0) position of the room. You can also set the depth that the layer should be ","rendered"," at (which has it's own unique inheritance button) and you can \"lock\" this depth too, which will prevent any further editing after it has been created."," ","When the layer properties window opens it will also open the ","Tile Editing"," window, which shows the tile set being used (if you close this window by mistake, you can open it again from the ","Room ","> ","Tile Editing"," menu at the top of the IDE). You can click "," on any tile to select it as the current ","brush ","and then draw them to the layer in the room editor by clicking "," on the room canvas, or, if you want to draw multiple tiles together you can select them as a group by clicking the left mouse "," and dragging to select them from the tileset before drawing. If the range of tiles that you want to draw together is not in a block, then you can hold down "," / "," and then select individual tiles using the left mouse button "," and create a custom brush that way (you can also remove tiles from a custom brush using "," + ","). Note that creating custom brushes this way is temporary and designed for one-off uses, however you can use the ","Editing Mode"," in the ","Brushes"," tab to create permanent brushes that will be stored in the tile set asset:"," ","Note that the Tile Editing window permits you to zoom in and out on the tile with the mouse wheel or the buttons at the top, and you can pan using the "," middle mouse button or "," + ",". Note that there is a grid option too which can be toggled on or off to delimit the tiles in the window, and you can set the colour of the grid as well, although tiles will ","always"," be snapped to the grid whether it is visible or not."," ","The Tile Editing window also permits you to select ","Brushes",", ","Animated Tiles"," and ","Auto Tiles"," from the Libraries tab, all of which are covered in the section on the ","Tile Set Editor","."," ","At the top of the room editor, when you have a tile layer selected, you will see a set of tools that are specific to tiles:"," ","Pencil"," ","This is the pencil tool. It uses the selected tile to paint in the Room Editor with the left mouse button "," and you can erase with the right mouse button ",". Note that the index value for the tile is shown at the bottom in the Room Status Bar in the Room Editor, and if you have multiple tiles selected for painting (ie: a ","brush",") then a list of all the tile indices used will be shown."," ","Eraser"," ","With the eraser tool you can use the left mouse button "," to erase a given tile in the room editor. Essentially, all this does is set the tile index to 0, which is the reserved \"empty\" tile."," ","Fill"," ","The fill tool permits you to fill an entire tilemap layer or a selection of tiles with the current tile brush. The brush you use can be a single tile or a composite brush made up of multiple tiles, or even a tile from the animation library and clicking "," on a layer will then fill in the tiles using the chosen brush. If you have not used the Selection Tool then the fill will work on all consecutive ","empty ","tiles, or all consecutive tiles ","of the same index",". If you have a selection within the layer, then fill will be constrained to within that selection."," ","Line"," ","When you select the Line Tool, clicking "," then dragging and releasing will create a line of tiles between where you clicked and where you released. If you have an area of the tile map layer selected using the Selection Tool, then the line will only be added within the selection bounds. Lines can be drawn using a single tile brush, a composite brush of various tiles, or an animated tile from the library."," ","Rectangle"," ","When you select the Rectangle Tool, clicking "," then dragging and releasing will create a filled rectangle of tiles with the top left corner being where you click and the bottom right corner being where you release. If you have an area of the tilemap layer selected using the Section Tool, then the rectangle will only be added within the selection bounds. Rectangles can be drawn using a single tile brush, a composite brush of various tiles, or an animated tile from the library."," ","Selection"," ","This is the selection tool, which can be used to define an area of the tile layer for working on. You can click the left mouse button "," and then drag the mouse to create a rectangular area, or you can press "," / "," + "," to add multiple selections and "," + "," to clear a part of the selection. To clear the whole selection you can press ",". When you have an area of a tile layer selected, the rest of the tools (Pencil, Flip, Rotate, etc...) will only work within the selected area. Note that you can also copy ("," / ","+ \"","C","\"), cut ("," / "," + \"","X","\") and paste ("," / "," + \" ","V","\") selected tiles within the room editor which will then switch the tool to the Pencil and permit you to paint the room layer with the selected tiles."," ","AutoTile"," ","Clicking this tool enables the Auto tiling paint style. When this is active you can select any tile from the Autotile Libraries tab, and then paint it into the room layer and ","GameMaker"," will automatically change it to match the surrounding tiles, as long as you have correctly set up the ","Auto Tile Tab",". Note that selecting a tile from the tile set that is not part of the autotile libraries will reset the drawing tool to the standard Pencil tool."," ","Inheritance"," ","With this tool you can enable/disable ","inheritance"," for specific tiles on a given layer. For this to work, the room must first be a child room and the layer must have it's inheritance switched ","on ","in the layer properties. When in this state, the room editor will colour all inherited tiles red by default, and clicking the right mouse button "," will switch off inheritance for that tile, and clicking the left mouse button "," will switch it back on again. In this way you can re-use elements from \"base\" rooms, only selectively changing the tiles that you require while inheriting all the rest."," ","Flip"," ","Clicking the Flip tool with the left mouse button "," (or using the keyboard shortcut \"","X","\" ) will flip the tile currently selected for drawing along the ","horizontal ","axis, without changing drawing tool (if you have a custom brush selected for drawing, the whole brush will flip). If you have no tile selected for drawing, but do have a group of tiles selected on a layer, then the flip tool will Flip the selected tiles."," ","Mirror"," ","Clicking the Mirror tool with the left mouse button "," (or using the keyboard shortcut \" ","Y","\" ) will mirror the tile currently selected for drawing along the ","vertical ","axis, without changing drawing tool (if you have a custom brush selected for drawing, the whole brush will mirror). If you have no tile selected for drawing, but do have a group of tiles selected on a layer, then the Mirror tool will mirror the selected tiles."," ","Rotate"," ","Clicking the Rotate tool with the left mouse button "," (or using the keyboard shortcut \" ","Z","\" ) will rotate the tile currently selected for drawing 90° ","clockwise",", without changing drawing tool (if you have a custom brush selected for drawing, the whole brush will rotate). If you have no tile selected for drawing, but do have a group of tiles selected on a layer, then the Rotate tool will rotate the selected tiles."," ","Note that if you use the Selection Tool "," to select a group of tiles in the room editor canvas and then either cut or copy them, they will temporarily become the current brush for painting."," "," ","Paths"," "," ","You can add a new path layer by clicking on the "," button. This will add the new layer, and then open up the path properties window:"," ","Here you can select the path from the Asset Browser to use for the layer and then change the defined connection type (either using ","smooth interpolation"," or straight), as well as whether it is closed or not and the precision with which the path should be created. Note too that you can toggle the ","inheritance"," here, and that you can set the path to be a specific colour (default is red) to make seeing them better in the editor. If you have no path resource defined, you can click the ","New ","button to create one. Path layers also have a depth value associated with them (locked by default) even though nothing is actually ","rendered"," in your game when using them."," ","It is worth noting that you can also add points to the path by clicking the left mouse button ",", as well as remove points using the right mouse button ",", or select a point by clicking on it and dragging it around, ","all within the actual room editor",", making creating and editing paths very easy (although you can still edit the path in the ","Path Editor"," as normal too). If you hold down "," / "," + "," on different path points, then they will all be selected and you can move them together or delete them all from the menu option (explained below)."," ","If you right click "," in the room editor window while manipulating a path then you'll get the following options:"," ","Here you can reverse the path direction (this will have little visible effect, but reverses the order in which the path points are counted so the start point becomes the end point and vice-versa), as well as flip them horizontally or vertically. You can also delete the selected point from this menu. Note that you can hold down \"","T","\", \" ","S","\" or \"","R","\" then click "," and drag to translate, scale or rotate the entire path."," "," ","Assets"," "," ","You can add a new asset layer by clicking on the "," button. This will add the new layer, and then open up the asset layer properties window:"," ","An asset layer is simply a graphical asset (sprite or sequence) that has been placed into the room independently of instances, and you can place them by either dragging them in from the ","Asset Browser"," or by selecting the one you want in the Asset Browser and then using "," + "," to \"paint\" them. Sprite assets are similar to tiles, only they can be fully animated - if the sprite used has sub-images they will be shown - without the restrictions that are in place for tiles, ie: they aren't forced to a grid and animations can be any length and speed. Sequences are \"collections\" of sprites, sounds and instances that will play when the room is entered."," ","While placing assets on the asset layer they will snap to the grid snap values set at the top of the room editor for the grid, but if you want to place them freehand, simply switch off the grid or use the keys "," / "," and the left mouse button ",". While those keys are held down, you will be free to place the asset anywhere, without it snapping to the grid resolution."," ","Once you place an asset in the room, you have a certain amount of control over how it looks by double clicking "," on it to open the asset properties window:"," ","From here you can give the asset a unique name, set whether it is to inherit from the parent room, or change the sprite or sequence that you want it to display. For sequeunces, you can set the animation speed and the initial ","playhead"," frame, as well as the colour to blend with it (white by default) and the position in the room. You can change the characteristics of sprite assets too, setting a colour to blend it with (white by default), or rotating and flipping it. You can also scale sprites along either or both the axis, and set their position within the room. If the sprite has sub-images, you can choose the animation speed as well as set the initial frame to be shown."," ","It is worth noting that each asset on the layer is automatically flagged for exporting when the game is made. However, especially when working with ","inheritance",", it may be that you don't want specific sprites to be added to the room in the final game. If that is the case, then simply un-checking the \"","Export","\" checkbox to the left of the sprite in the layer properties list will prevent it from being exported as part of the executable. It is important to note, however, that if you have any code that references that asset, then the game will not run correctly, so use this feature with care."," "," ","Filter/Effect"," "," ","You can add a new Filter/Effect layer by clicking on the "," button. This will add the new layer, and then open up the asset layer properties window:"," ","A Filter/Effect (or FX) layer is used to apply a visual filter or effect to some layers. Adding an FX layer and selecting an effect from the \"Effect Type\" drop-down menu will apply that effect to all layers that are ","below"," the selected FX layer, as demonstrated in this visual:"," ","This means that all \"affected\" layers will have the selected filter applied to them (here, \"Desaturate\") as they are below an FX layer. Any layers above the FX layer will remain unaffected."," ","You can create Single-Layer FX using ","The Inspector","."," ","To learn more about Filter/Effect layers, read ","Filter and Effects","."],[" ","In the layer properties shown within the ","Inspector",", you can apply a filter or effect to the selected layer. This will be applied as a \"single layer\" effect, i.e. its effect will only be applied on that particular layer and not on other layers below it."," ","Back: ","The Room Editor"," ","Next: ","Room Properties"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"8":[[" ","Filter/Effects"]],"id":"2707"})