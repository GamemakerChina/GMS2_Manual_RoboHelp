rh._.exports({"0":[[" ","The Room Editor"]],"1":[["Room Editor"]],"2":[["room,rooms,room editor,convert image"]],"3":[[" ","The Room Editor"]],"4":[[" ","The room editor is where you create your game ","rooms",". Every game requires ","at least one room to run",", and in the room you can place instances, sprites, tiles, paths, backgrounds, sequences and particle systems. Each of these different assets can be placed on their own unique ","layer ","which can then be ordered however you wish in the ","Layers Editor",". Due to the complexity of the room editor, we'll give you first a brief overview of the most important features, and then you can find more in-depth details from the section links listed below."," ","When you create a room asset, you can right click "," on it in the Asset Browser to open the context menu, which will permit you to create ","child rooms ","(see the page on ","Inheritance"," for more information), open up the room for editing, add a new resource group to better organise the rooms, rename the room or delete it. Note that to change the room order and/or inheritance you need to use the ","Room Manager",", which you can open using the menu in the top right of the Asset Browser."," ","The room editor is itself a ","workspace"," and as such you can click "," on the tab and drag it off of the main window into a new window of its own - perhaps in another display, for example. You can also place it back into the main window by dragging the tab to the top of the IDE and releasing the mouse button."," ","The user interface for the room editor is simple to navigate and split in various discrete sections. Those parts of the editor that are docked - the ","Inspector"," that shows the ","room or layer properties"," and the ","layer editor"," - can also be removed from the dock by simply dragging them out into the workspace, and they can be added back into the docks again by dragging them to the sides or the bottom of the workspace."," ","Below is a brief overview of each of the Room Editor sections:"," "," ","Rulers / Guides"," "," ","The rulers along the edge of the canvas show you the position of the things that are placed within it, and are marked from (0, 0) which is the center of the canvas and the origin for the room. You can click and drag on the rulers to pull a horizontal or vertical guide into the room, and this guide can then be used to accurately position the different assets that are being used, as moving an asset close to one will \"snap\" it to the guide. While positioning assets within the room, smart guides will also be temporarily shown indicating the distance between assets, as well as the distance from the room boundary or center point."," ","The distance that assets \"snap\" to guides, as well as other properties, can be set in the ","Room Editor Preferences","."," "," ","Layer Editor"," "," ","The room editor places things onto layers within the room. Each layer is at a discrete \"depth\", where those that appear at the bottom of the list in the layer window will be drawn under those that appear near the top."," ","IMPORTANT"," There is a minimum and maximum layer depth of -16000 to 16000. Anything placed on a layer outside that range will not be drawn although all events will still run as normal for anything on the layer."," ","Layers are created by clicking  the appropriate button for the type of layer you want to create, which are:"," ","Instances"," ","This layer is for placing ","instances"," that will be used in the room."," ","Tile Maps"," ","This layer is for placing tiles from ","tile sets"," as ","tile map","s","."," ","Paths"," ","This layer is for showing and adding ","paths"," in the room."," ","Assets"," ","This layer is for visual assets to be added to the room, like ","sprites",", ","sequences"," and ","particles","."," ","Filter/Effect"," ","This type of layer defines a ","filter/effect"," that is applied to all layers below it."," ","Background"," ","This type of layer defines a background, which is essentially a single colour or sprite image that may be tiled over the whole room."," ","You can also create a layer folder using the folder button "," where you can group selected layers together, as well as delete the selected layers with the delete button ",". Each of these layer types are discussed ","here"," in more detail."," ","NOTE"," You can toggle ","inheritance"," for the layer editor which will affect layer order and visibility. The visibility itself can be set by clicking the eye icon "," beside each of the layers, or you can click the one at the very top to enable/disable all layers at once. You also have the possibility to \"lock\" a layer (or all of them) so that they cannot be changed by clicking the padlock icon ","."," ","NOTE"," Layers which are flagged as invisible will ","not"," be shown when the game is run."," "," ","Layer Properties"," "," ","The Inspector window will show layer properties depending on the currently selected layer in the layer editor."," "," Each window will have the different properties and lists associated with the currently selected layer type, and you will be able to edit fundamental details for how the layer is displayed and what is actually on the layer. Please see ","here"," for more detail."," "," ","Room Properties"," "," ","When the room asset is selected in the Asset Browser, the Inspector shows all the base properties for the room, like its size, whether it uses physics, or any cameras and viewports it requires. These can be changed here as well. This section is dicussed in more detail on the ","Room Properties page","."," "," ","Layer Toolbox"," "," ","Certain layer types will have additional tools added to the top of the IDE in the ","Layer Toolbox"," (for example, tile layers or path layers). The exact tools will change based on the layer type currently being edited, and so are explained on the page explaining each layer, ","here","."," "," ","Room Toolbox"," "," ","At the top of the main Room Editor canvas you have a few controls to deal with how things are displayed. They are:"," ","Toggle Canvas Grid",": This will toggle on/off the Room Editor canvas grid. This is a grid that ","GameMaker"," draws over the main canvas to divide it into sections, and by default is set to 32x32px in size. However if you click the Grid Menu icon "," you will open the grid options:","These options permit you to set the grid colour and alpha, as well as the cell values for the grid along the X and Y axis. You also have an option to enable or disable grid snapping here (enabled by default). You can use the keyboard shortcuts \"G\" and "," + \"G\" to toggle the grid visibility and grid snapping respectively."," ","Canvas Zoom Controls",": These buttons control the current canvas zoom level. You can zoom in or out and clicking the "," button will reset the canvas to be 1:1 with the room being edited. You can also click the Window Fit button "," to make the entire room canvas fit within the current editor workspace (this will zoom in/out as appropriate to make it fit). Note that you can also zoom in and out using the "," / "," and the Mouse Wheel ",", and pressing "," / "," + "," will set the room canvas to be 1:1 with the room settings."," "," Show Views",": Clicking this will enable or disable the view rectangle. When enabled you will see a highlighted area that signifies the different views that are enabled for the room."," "," Play Animations",": When adding sprites, sequences or animated tiles, you may want to get an idea of how these will look within the room itself without having to compile the whole project, and so you can click this to start all the different animations playing. Clicking it again will stop the animation."," "," Canvas Select From Any Layer",": By default when you click on an element in the room canvas you will only be able to select those assets that are on the layer currently being edited, however if you enable this option you can then click on any element and it will be selected, changing the target layer to the one that the element is on. You can use the keyboard shortcut \" ","P","\" to temporarily enable this (hold \"","P","\" to enable and release to disable)\n        "," "," ","Room Canvas"," "," ","The center of the room editor window is taken up with the area where all the actual editing takes place. Here is where you'll be placing your instances and assets, drawing your tiles, or positioning your paths. You can zoom in and out using the mouse wheel or the room controls at the top, and you can pan around by holding the middle mouse button "," down and moving the mouse around or using "," + "," while moving."," ","When creating asset layers or instance layers, you can place the asset or instance by simply dragging it from the Asset Browser and then dropping it where you want it to be positioned. Alternatively you can select an asset or instance from the Asset Browser and then press and hold "," to preview the resource \"in-situ\", and if you additionally click the left mouse button "," you can add the instance and even \"paint\" it into the room layer by maintaining the button pressed and dragging the mouse. Note that by default instances and sprites that are added to a room in this way will be snapped to the defined room grid settings, but you can hold down "," / "," to have the instance follow the mouse precisely and not snap (releasing "," / "," will permit snapping again)."," ","For paths you can create a new path layer and path resource right from within the Room Editor- or create a new path resource and then drag it into the main editor window as you would for an instance - and then edit the path and its connections in the editor window too. For tile sets, you can \"paint\" them in from the tile set editor."," ","Note that you can select and move or delete multiple assets from the same layer by holding down "," / "," + "," on the ones you want, and most resources in the room editor will permit you to rotate and scale them (singly or as a group) by clicking and holding "," along the outside edges or corners and dragging the mouse. You can also double click "," on any single asset (tiles, instances, sprites) to have the editor pan to it and open up the properties window for the selected asset in the Inspector."," "," ","Status Bar"," "," ","The status bar is used to show you context specific information. The status bar will always show you where in the room the mouse cursor is, but it will also show additional information based on the layer being edited, the tool being used and the state of that tool."," ","You can get more information about some of the above mentioned sections from the following pages:"," ","Layer Types And Properties"," ","Room Properties"," ","Room Inheritance"," ","Filters and Effects"],[" ","Apart from the in-editor tools, you will also see a drop down menu at the top of the IDE."," ","These menus are explained below:"," ","Layer View",": This will re-open the Layer Editor window should you have closed it at any time."," ","Instance Creation Order",": This will open the ","Instance Creation Order Window ","(which can also be opened by using the button in the ","Room Properties"," ","window):"," ","This window lists all the instances in the room in the order that they will be created (from top to bottom). Should you require a specific instance to be created before any other, you can simply click "," and drag it to the position your require.\n    "," ","Reset Windows On Current Desktop",": This will reset the room editor window layout to its default values for the desktop workspace currently focused."," ","Tile Editing",": When working with a tile layer, this option will be highlighted in the drop down menu. It has the following sub-menu:"," ","When editing the tile layer you can select multiple tiles by clicking, holding down and dragging the left mouse button ",", or you can select and group individual tiles using "," / "," + ",", or remove individual tiles from the selection using "," + ",". From this menu you can then clear the selection or invert it as well as cut, copy or paste the selection to another layer (or even the same layer but in another position). The final option will re-open the tile set editor docked window should you have closed it.\n    "," ","Convert Image To Tile Map",": The Convert Image To Tile Map option is a powerful tool that can be used to import a single image and then extract the tiles used from the image and recreate it as a tile map layer in the room editor, creating the required tile set and sprite as part of process. When you select this tool, you will be asked to supply an uncompressed image file (","PNG",", ","GIF ","or ","BMP",") which will then be loaded. On load you will be presented with the ","Image Import"," tool:"," ","Here you are given options on how to split up the tile when creating the tile set, and you can set the cell width and height as well as any offsets required around the edges. You can also set the approximate width (in pixels) for the final sprite that is created. For example, if the tile set is made up of 64x64 tile cells and you set a width here of 200, the final sprite that is created for use in the tile set will be 192 pixels wide (ie: 3 tile cells). If you leave it at the default value of 0, then ","GameMaker"," will attempt to make as \"square\" a sprite as possible with approximately the same number of horizontal and vertical tile cells."," ","\n      After setting the way the image is to be split, clicking the swatch beside the ","Remove Colour"," option will open the colour picker and permit you to select a colour that is to be removed from the final sprite. This is usually a background colour that you want to remove and setting this swatch to anything other than 100% transparent (alpha 0) will remove the selected colour on import."," ","\n      Finally, you have the option to name the sprite, tile set and tile map layer that will be created for you by this tool. When you finalise the import, a sprite with all the images laid out in a grid will be created, as well as a tile set from this sprite. In the room, a new tile map layer will be created and the image reproduced using the generated tile set. Note that the tool will ","not ","duplicate tiles and will instead recognise when a cell has image data that coincides with another cell (this includes rotated tiles). You can see this in the following image where only one flower tile has been created and one crate tile too, yet there are multiple instances of both, with some instances rotated in the base image:"," ","Back: ","The Asset Editors"," ","Next: ","The Script Editor"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"11":[[" ","Room Menu"]],"id":"2781"})