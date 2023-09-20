rh._.exports({"0":[[" ","Set Emitter Region"]],"1":[["Set Emitter Region"]],"2":[[" "," Set Emitter Region"]],"3":[[" ","This action is used to set the region and shape of an emitter within a particle system. You supply the particle system ID that the emitter belongs to (as returned by the action ","Create Particle System",") and then\n    the actual emitter ID (as returned by the action ","Create Particle Emitter","), and then give a shape for the emitter to take within the given bounding box values. The possible emitter shapes are:"," ","To define your shapes, you give the coordinates for a \"bounding box\" into which the given\n    shape will be placed (in the case of rectangle, ellipse and diamond shapes) or the first and second coordinates for the start and finish points (in the case of a line). All particles that are burst or streamed from the emitter will be created within\n    the confines of the shape within this bounding box. You can also set the distribution of the particles with the option of:"," ","Linear",": Particles will be created anywhere at random within the given shape."," ","Gaussian",": Particles will be created predominantly in the middle of the shape with fewer along the edges."," ","Inverse Gaussian",": Particles will be created predominantly along the edges of the shape with fewer in the middle."],[" ","Argument"," ","Description"," ","System"," ","The unique ID of the system the emitter belongs to"," ","Emitter"," ","The unique ID of the emitter to set the shape of"," ","Shape"," ","The particle shape that is to be used"," ","Distribution"," ","The distribution of particles within the given shape"," ","Left"," ","The position of the left side of the shape bounding box (in pixels)"," ","Top"," ","The position of the top of the shape bounding box (in pixels)"," ","Right"," ","The position of the right side of the shape bounding box (in pixels)"," ","Bottom"," ","The position of the bottom of the shape bounding box (in pixels)"],[" ","The above action block code will create a particle emitter, set it's\n    region, and then set it to emit a stream of particles."," ","Back: ","Particle Actions"," ","Next: ","Do Effect"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["GML Visual Action - Set Emitter Region"]],"6":[[" ","Action Syntax:"," ","Arguments:"],[" ","Example:"]],"id":"2128"})