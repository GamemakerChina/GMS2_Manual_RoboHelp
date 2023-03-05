rh._.exports({"0":[[" ","Using Animation Curves"]],"1":[["Sequences - Animation Curves"]],"2":[["curves,animation curves"]],"3":[[" ","Using Animation Curves"]],"4":[[" ","An important feature of the ","dope sheet"," is the ability to assign ","Animation Curves"," to parameter tracks within the sequence to create ","parameter curves"," instead\n    of parameter keyframes. There are two types of curves that can be used for parameter tracks:"," ","Embedded Curves",": These are curves that are embedded in the sequence and are unique to the parameter track they are used on."," ","Shared Curves",": These are curves that are created independently of the sequence using the ","Animation Curve Editor","."," ","We'll start by explaining how to use an Animation Curve asset, which is simply a case of creating a new curve, setting up the channels in the Animation Curve Editor, and then dragging the curve asset into the dope sheet to apply it to a parameter\n    track:"," ","You can also use the right mouse button "," menu option ","Assign Shared Curve (Import)"," ","to add an animation curve asset\n    to the selected parameter track. This will open the Asset Explorer where you can select the required curve from the ones presented to you:"," ","It is important to note that the animation curve asset ","must have the correct number of channels for the track it is being applied to",", as each\n    type of parameter track will require a different number of channels in the animation curve. Any animation curves that do not have enough channels will be shown with a "," indicator in the asset browser."," ","Below is a list of the different parameter tracks and the channels that they will require in each curve asset (channels should be added in the order given for each parameter type):"," ","Position",": 2 channels, X and Y."," ","Rotation",": 1 channel."," ","Colour Multiply",": 4 channels, Alpha, Red, Green and Blue, and the range ","must"," be between 0 and 255."," ","Image Index",": 1 channel."," ","Image Speed",": 1 channel."," ","Origin",": 2 channels, X and Y."," ","Scale",": 2 channels, X scale and Y scale, and note that the value is a multiplier, so the base value is 1 (no scale) and greater than one will make the image bigger, and less than 1 will make it smaller. Negative values will flip or\n      mirror the image as well as apply scale."," ","Pitch",": 1 channel, which ","must"," be a minimum of 0, where 1 is the default pitch of the sound."," ","Volume",": 1 channel, which ","must ","be a minimum of 0 and a maximum of 1."," ","If you import an animation curve that does not have enough channels for the parameter track, you will be prompted to choose whether any missing channels should be added into the animation curve:"," ","Shared curves can also be made invalid if any required channels are deleted in an external animation curve editor. In such a case the shared curve will appear as invalid in the dope sheet, and you can click on \"Add Channel(s)\" to create any\n    missing channels which will make the curve valid again:"," ","By default, the animation curve will be applied along the entire length of the asset key it is attached to, however, much like with keyframes, you can click "," on a curve and drag it to re-position it on the timeline, and you can also hold down the "," key and and drag to resize the length of the curve\n    (this also applies to ","embedded curves","):"," ","The other way to add a parameter curve to a track is to embed it. This can be done by either clicking the right mouse button\n    "," on the parameter track and selecting \"","Convert to Curve","\", or by clicking on the ","Toggle Curve Mode"," "," button, which will show you the track as an animation curve in the full dope sheet area, and you can then click the ","Convert To Curve"," button:"," ","Once you have converted the parameter keyframe track to a curve it can be edited within the dope sheet, exactly the same way\n    that you can edit ","animation curve assets",", this includes adding or removing points, changing their position, changing the curve type (linear, smooth or bezier), applying presets, and renaming channels and the colours\n    associated with them."," ","IMPORTANT",": You can also edit animation curve assets that have been applied to parameter tracks in this way, however any changes you make ","will be applied to all tracks that use the animation curve",", as you are editing\n    the curve asset and not a single copy of it. To edit an animation curve asset that has been applied to a track ","only"," on that track, you must first use the right mouse menu "," on the parameter track and select ","Embed Curve",". This will duplicate the animation curve asset and embed it in the pararmeter track as an independent curve only for that track. Conversely, you can convert an embedded animation curve\n    into an Animation Curve asset using the right mouse button "," menu option ","Export To Shared Curve",". This will convert the embedded\n    curve into a new asset which can then be edited as normal as well as applied to other parameter tracks if required."," ","The image above shows how the embedded animation curve editor looks, and it's very similar to the ","Animation Curve Editor",". Expand each section below for more information on the different sections."," "," ","Curve Name"," "," ","This will be the name of the external animation curve asset or the name of the parameter track for an embedded curve."," "," ","Curve Library"," "," ","The "," button opens the ","Animation Curve Library"," window,\n      which allows you to change the Curve Type of the embedded or shared curve, and apply a preset to the selected channel."," ","See the section on ","Animation Curve Library"," for\n      information on Curve Types and Presets. Note that opening the window through the "," button will have the ","\"Overwrite\"","      Apply Mode selected by default."," "," ","Channel List"," "," ","The channel list is where you can edit the different channels that comprise your parameter curve. Each channel must have a unique name (using ","alphanumeric characters and the \"_\" underscore symbol only","),\n      and you can also set the colour for the channel by double clicking "," on the colour swatch to the left, which will open the colour picker to let you choose a new colour.\n      To rename the channel, you can do a slow double click "," and rename, and you can also use the right mouse button "," to open a menu where you can choose to rename, change the colour or copy the channel. Channels can be expanded by clicking the arrow beside the name to show each of the points on the channel curve, and these points can be edited manually by clicking\n      the current value and typing in the new value. You can also toggle the channel visibility in the dope sheet by clicking on the \"eye\" icon ","."," "," ","Conversion Control"," "," ","Here keyframes can be converted into parameter curves (as explained fiurther up this page) but there is also a button to convert parameter curves into keyframes. However, you should be aware that when doing this there are a couple of caveats. Keyframes\n      cannot be \"between\" frames, and so some curve values will need to be rounded to the nearest frame, which in turn will change the way the parameter track behaves. Also, if the parameter curve uses catmull-rom or bezier interpolation, ","this will be lost ","and\n      the interpolation between keyframes will be set to linear interpolation."," "," ","Curve Menu"," "," ","This menu contains options available elsewhere in the editor, but all in one place. The options are:"," ","Set Range",": Set the vertical range of the parameter curve (see ","Channel Range",", below)."," ","Convert To Curve",": Convert the selected parameter track using keyframes into a parameter curve."," ","Embed Curve",": Embed the shared curve asset being used by the parameter track into the track."," ","Assigned Shared Curve (Import)",": Assign an Animation Curve asset to be used as a shared curve for the parameter track."," ","Convert To Keys",": Convert the selected parameter track using parameter curves into keyframes."," ","Export to Shared Curve",": Convert the embedded curve into a shared curve asset."," "," ","Channel Range"," "," ","The Channel Range button is used for setting the visual vertical range for the Channel Editor. By default this will be set from -1 to 1, but clicking this button will open the following window:"," ","Changing these values will change the way the data is represented in the Channel Editor section, permitting you to have higher/lower values along the channel curve than just -1 to 1. Note that this is purely visual and does not clamp the values for\n      the channel."," "," ","Channel Editor"," "," ","The Channel Editor shows a visual representation of the different channels used in the parameter curve. By default, all channels will be shown here, but you can only edit the channel currently selected from the Channel List, which will be highlighted\n      in the editor. You can change the position of any of the points along the channel curve by clicking "," on them and dragging them around within the editor, but note that\n      the first and last point can only be changed along the vertical axis and their horizontal value will always be 0 and 1 respectively."," ","You can add points directly to the channel curve by moving the mouse close to the main channel line and then clicking "," when the cursor changes to the \"","Add Point","\"\n        tool, and you can then edit these points by clicking "," and dragging or by changing their values in the expanded channel options in the Channel List:"," ","You can edit multiple points at once by clicking "," and dragging within the editor to select all the points you want to edit or by using "," / "," + "," to add points to the selection individually. Releasing the mouse button and then clicking again on any of the points in the selection and dragging will move them all together:"," ","You can "," right-click anywhere in the Channel Editor to open the ","Animation Curve Library","      window (only when the selected Curve Type is ","Bezier","). Applying a preset in this way will affect the whole channel. To modify only a part of the channel, you can "," right-click on an individual line to apply a preset to it, or select multiple lines by clicking "," and dragging, then "," right-click on the selection to apply a preset to the selected lines."," ","Note that opening the ","Animation Curve Library"," window through the Channel Editor will have the ","\"Between\"","      Apply Mode selected by default."," ","Once you are finished editing the parameter curves you can go back to the regular dope sheet view of the different tracks by clicking on the the ","Toggle Curve Mode"," "," button."," ","Back: ","Sequences"," ","Next: ","Broadcast Messages"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2756"})