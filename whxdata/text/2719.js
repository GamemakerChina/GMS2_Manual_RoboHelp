rh._.exports({"0":[[" ","Guide To Using Blendmodes"]],"1":[["blendmodes,Guide To Using Blendmodes"]],"2":[["blendmodes,blending,blend modes"]],"3":[[" ","Guide To Using Blendmodes"]],"4":[[" ","If you've been using ","GameMaker"," for any length of time, you will almost certainly have come across ","blend modes",", and probably even used them in your games. Blend modes are a great way to change how something is drawn to give interesting and specific graphical effects, but do you know how they work and how do you use them? This is a subject that can confuse people and so in this section we hope to dispel some of the mystery surrounding blend modes and enable you to use them to their fullest extent in your games."],[" ","Blend modes basically tell your game to draw certain things blended with whatever else is already drawn beforehand. Everything you draw to the screen is made up of four component parts - red, green, blue and alpha - and by default they are drawn to the screen using the blend mode ","bm_normal",". This blend mode draws all pixels with their colour and alpha values essentially unchanged (although, later in this section you'll see that this isn't ","quite"," true...), but ","GameMaker"," has a number of built in blend modes that can be set to change this behaviour."," ","When ","GameMaker"," goes to draw a pixel there's a ","source colour"," (the colour of the pixel you are going to draw) and a ","destination colour"," (the colour that's already in the pixel we're drawing to). When determining the new colour of the pixel, GameMaker will combine the source and destination colours according to the ","blend mode",", as mentioned above. Each component of the colours is stored as a floating point value between 0 and 1, and the new colour is calculated by multiply each component of the source colour by some factor and by multiplying each component of destination colour by some other factor and then adding the results together component by component."],[" ","GameMaker"," uses the function ","gpu_set_blendmode()"," to change the blending that your game uses for drawing. You would call this before (for example) drawing a sprite, then set it back again afterwards, something like this:"," ","gpu_set_blendmode(bm_add);","\n    draw_self();","\n    gpu_set_blendmode(bm_normal);"," ","That code draws the instance sprite using an ","additive ","blend mode. The additive blend mode is set using one of the available GML constants, of which there are four for basic modes:"," ","bm_normal","\n    bm_add","\n    bm_subtract","\n    bm_max"," ","We have seen already how ","bm_normal"," looks - since that's what everything defaults to! - so let's continue on to look at the other three in a bit more detail..."," "," ","bm_add"," "," ","This blend mode adds the colours of the source and destination pixels together (but does not affect the alpha values). For example, if your background image is a solid colour with an RGB value of (100,15,70), and then you draw a rectangle with an RGB of (120,25,30), then (using bm_add) the fina RGB values for each pixel of the rectangle would be (220,40,100). Note that colour values can't go over 255 (or under 0), so anything that adds up to more than that will be clamped to 255."," ","Using this blend mode is a great way to get that \"neon glow\" look, and is most often used for lighting effects, or lasers or just about anything that you want to appear to glow or have luminescence."," "," ","bm_subtract"," "," ","This blend mode is a bit different to the previous one, as it it works on a percentage basis rather than a direct value. This percentage is what will be subtracted from the destination colour (the colour of the pixel being drawn to). To explain this better, let's look at an example."," ","Imagine you want to reduce the red value of all pixels drawn in an area of the room by 25%. You would first need to get 25% of 255, then convert that into an RGB colour value, and then finally use that along with bm_subtract to draw over the area. Something like this:"," ","var red = (25 / 100) * 255;","\n      var col = make_colour_rgb(red, 0, 0);","\n      gpu_set_blendmode(bm_subtract);","\n      draw_rectangle_colour(0, 0, 128, 256, col, col, col, col, false);","\n      gpu_set_blendmode(bm_normal);"," ","Following the same rule, if you wanted to simply reduce the brightness of a background by 50% then you would have a colour that is 50% red, 50% green and 50% blue, ie: RGB (128, 128, 128). This blend mode is mainly used for drawing shadows, or creating interesting fade out effects."," "," ","bm_max"," "," ","This blend mode is more complex to explain, but it basically multiplies the source colours by the source alpha, then adds them to the destination colour values multiplied by the inverse source colour values. The actual maths behind bm_max (and the other blend modes) we'll cover in part two of our article, but all you need to know is that the result will be a more \"saturated\" and brighter colour, without leading to the same pure white brilliance that using ","bm_add"," will cause."," ","This blend mode can be useful when you need to draw overlapping images without them becoming so bright that they can't be seen. The bright parts will become brighter, but they should still maintain a level of colour and hue. Note though that the alpha value of the source image will also influence in the final effect when using this blend mode."," ","Now you know the very basics behind using a blend mode in ","GameMaker",". It takes the RGB and alpha values for the source image (what is being drawn) and it then blends these with the RGB and alpha values of the destination (what is being drawn too). This blending is done by multiplying the individual components for each pixel colour and alpha by different amounts, depending on the effects that we wish to achieve. With this knowledge, you can start to use blend modes in your games to get glowing lasers, realistic shadows, or saturated transition effects, but there is still more to be learned here! Below we look at the ","extended blend modes",", as well as explore a bit of the maths behind them, so that you can create your own blending effects like multiply or overlay."],[" ","Above we have talked about the function ","gpu_set_blendmode()",", but now we are going to look at ","gpu_set_blendmode_ext()",". This is (as the name implies) an extended function to set ","custom ","blend modes, but how does this work? Let's just have a look at the dry technical answer first before we go any further:"," ","The function ","gpu_set_blendmode_ext","(src, dest)"," indicates what blend mode to use for both the source and destination colour. The new colour is some factor times the source and another factor times the destination. These factors are set with this function. To understand this, the source and destination both have a red, green, blue, and alpha component. So the ","source ","is (","Rs, Gs, Bs, As",") and the ","destination ","is (","Rd, Gd, Bd, Ad","). All values are considered to lie between 0 and 1."," ","Now, while that text is correct and explains what blend modes do, it's not really intuitive... so let's go into a bit more detail and explain what this is all about."," ","When we talk about the ","source ","we are talking about the colour and alpha values of the pixel that is being drawn, and when we talk about the ","destination ","we are talking about the colour and alpha values of the pixel that it is being drawn over. To keep things easier we can write out the source colour as it's components, like this:"," ","(Rs, Gs, Bs, As)"," = the RGB and Alpha of the colour you are going to draw."," ","And the destination would be like this:"," ","(Rd, Gd, Bd, Ad)"," = the RGB and Alpha of the colour you are going to draw on."," ","So when we draw something on the screen, our graphics processor is actually doing the following for every single pixel:"," ","final_pixel_colour =  (Rs,Gs,Bs,As) * source_blend_factor + (Rd,Gd,Bd,Ad) * destination_blend_factor"," ","The ","blend factors"," mentioned above are defined in ","GameMaker"," by a number of GML constants, and each one represents a factor by which the source or destination R, G, B and A values should be multiplied by. The factors available are:"," ","bm_zero",": Blend factor is (0, 0, 0, 0)"," ","bm_one",": Blend factor is (1, 1, 1, 1)"," ","bm_src_colour",": Blend factor is (Rs, Gs, Bs, As)"," ","bm_inv_src_colour",": Blend factor is (1-Rs, 1-Gs, 1-Bs, 1-As)"," ","bm_src_alpha",": Blend factor is (As, As, As, As)"," ","bm_inv_src_alpha",": Blend factor is (1-As, 1-As, 1-As, 1-As)"," ","bm_dest_alpha",": Blend factor is (Ad, Ad, Ad, Ad)"," ","bm_inv_dest_alpha",": Blend factor is (1-Ad, 1-Ad, 1-Ad, 1-Ad)"," ","bm_dest_colour",": Blend factor is (Rd, Gd, Bd, Ad)"," ","bm_inv_dest_colour",": Blend factor is (1-Rd, 1-Gd, 1-Bd, 1-Ad)"," ","bm_src_alpha_sat",": Blend factor is (f, f, f, 1); f = min(As, 1-Ad)"," ","The four \"basic\" blend modes that ","GameMaker"," has are actually composites of two of these blend factors."," "," ","Example of how bm_normal Works"," "," ","Time to look at a practical example of how this comes together for drawing in ","GameMaker",". For this, we are going to look at bm_normal, which is really:"," ","gpu_set_blendmode_ext(bm_src_alpha, bm_inv_src_alpha);"," ","One of the problems people have with blend modes is visualising the results, so to show the maths behind them, we'll use this blend mode as our test subject since it's the blend mode that everyone uses the most and we know exactly what to expect from it. Imagine we are drawing a rectangle with the colour (128, 255, 64, 255) over a background with the colour (64, 128, 255, 255):"," ","So, our blend mode looks like this:"," ","Source: (128, 255, 64, 255) = (0.5, 1, 0.25, 1)","\n      Destination: (64, 128, 255, 255) = (0.25, 0.5, 1, 1)","\n      bm_src_alpha (As, As, As, As) = (255, 255, 255, 255) = (1, 1, 1, 1)","\n      bm_inv_src_alpha (1-As, 1-As, 1-As, 1-As) =  (0, 0, 0, 0)","\n      (Rs,Gs,Bs,As) * bm_src_alpha + (Rd,Gd,Bd,Ad) * bm_inv_src_alpha","\n      (0.5, 1, 0.25, 1) * (1, 1, 1, 1) + (0.25, 0.5, 1, 1) * (0, 0, 0, 0)","\n      (0.5, 1, 0.25, 1) + (0, 0, 0, 0) = (0.5, 1, 0.25, 1) = (128, 255, 64, 255)"," ","As you can see, we multiply the destination values by 0, which gives them a value of 0 too, meaning that the source colours are unchanged, so our final colour value is ","(128, 255, 64, 255)",". You can see how the inclusion of alpha affects this value too:"," ","Source (128, 255, 64, 128) = (0.5, 1, 0.25, 0.5)","\n      Destination: (64, 128, 255, 255) = (0.25, 0.5, 1, 1)","\n      bm_src_alpha (As, As, As, As) = (128, 128, 128, 128) = (0.5, 0.5, 0.5, 0.5)","\n      bm_inv_src_alpha (1-As, 1-As, 1-As, 1-As) = (0.5, 0.5, 0.5, 0.5)","\n      (Rs,Gs,Bs,As) * bm_src_alpha + (Rd,Gd,Bd,Ad) * bm_inv_src_alpha","\n      (0.5, 1, 0.25, 0.5) * (0.5, 0.5, 0.5, 0.5) + (0.25, 0.5, 1, 1) * (0.5, 0.5, 0.5, 0.5)","\n      (0.25, 0.5, 0.125, 0.25) + (0.125, 0.25, 0.5, 0.5) = (0.375, 0.75, 0.625, 0.75) = (96, 192, 159, 192)"," ","This gives a final pixel colour (96, 192, 159, 192), and will give an image like that shown below:"," ","Hopefully you can see clearly now what the blend mode factors do, and how combining them can change what is drawn to create some interesting effects. We will now look at a practical example of how to combine these factors to create your own custom blend modes."," ","Now you know how setting blend modes works and have seen an example of it being used for everyday drawing, let's look at something abit more complex..."],[" ","Using the different factors available, you can create your own blend modes to achieve blending options that are not available to you normally. In this example, we are going to create a ","multiply ","effect like that used in Photoshop. We can simulate this blend mode using two of our above mentioned blend mode factor constants like this:"," ","gpu_set_blendmode_ext(bm_dest_colour, bm_zero);"," ","Before we actually draw something using this blend mode, let's have a look at how it should look in Photoshop:"," ","Using our extended blend mode we get the following:"," ","(Rs, Gs, Bs, As) * (Rd, Gd, Bd, Ad) + (Rd, Gd, Bd, Ad) * (0,0,0,0) = (Rs, Gs, Bs, As) * (Rd, Gd, Bd, Ad)","\n    Source colour * dest colour + dest colour * zero = source colour * dest colour"," ","The blend factor ","bm_zero"," effectively removes the destination colour from the equation (as zero times anything is zero), so we are left with the source colour multiplied by the blend factor of the destination colour, hence the name \"multiply\" for the mode. To use this in ","GameMaker",", you would simply have something like this in your ","Draw Event",":"," ","gpu_set_blendmode_ext(bm_dest_colour, bm_zero);","\n    draw_self();","\n    gpu_set_blendmode(bm_normal);"," ","The next image was taken from a test project in GameMaker using this exact code:"," ","Can you spot the difference? Probably not! There will, however, be some deviation between the two due to differences between the render tools used, but it's almost exactly as you would expect. Note though that not all the blend modes used by art programs are available to you within ","GameMaker"," due to the fact some of them can actually force the colour values to go over 255 and so create special effects, but that doesn't mean you can't create passable imitations of these effects, or even brand new effects, using them."," ","It's worth mentioning that with ","GameMaker"," you can take this one step further using the function ","gpu_set_blendmode_ext_sepalpha()",". This permits you to separate out the alpha component of the different blend mode factors and use them individually to create even more possible combinations. We won't cover this function here as it's explained in depth already in the manual, but it's worth mentioning just so you know it's available for use."],[" ","One final thing is worth noting about blend modes, and that is how they affect the ","alpha ","component of a colour. When simply drawing to the ","application surface"," or the ","display buffer",", you don't really need to take into consideration the destination alpha value as it will ","always ","be one. However surfaces that you make yourself are different, since you can clear a surface to have any alpha value from zero to one that you wish. This leads to some interesting effects that are contrary to what most people would expect."," ","To illustrate this, we are going to look at drawing using the basic default ","bm_normal",". Most people think that having a surface cleared to alpha 0, and then drawing something with an alpha of 0.5 will give a resulting alpha value 0.5 too... ","but this is not the case"," and is something that many people think is a \"bug\" in how ","GameMaker"," renders things. However, as you will see, it's not a bug at all!"," ","Say you have surface with every pixel at alpha 0, then you draw a circle on it with alpha 0.5 using the ","bm_normal"," blend mode. The entire surface is still going to be alpha 0, but in the circle the alpha will actually be 0.25, since:"," ","0.5 * 0.5 + 0 * 0.5 = 0.5 * 0.5 = 0.25"," ","If you then proceed to draw another circle in the existing circle, also with an alpha of 0.5, then the alpha outside the circles would be 0, in between the circles 0.25, and in the smaller circle it would be 0.375:"," ","0.5 * 0.5 + 0.25 * 0.5 = 0.25 + 0.125 = 0.375"," ","If you were to continue to draw a number of 0.5 alpha circles to a surface with 0 alpha, and then draw this surface to the room, you would be able to clearly see this:"," ","If you are still a bit confused about the alpha, try to picture it as just another colour. It behaves like a colour and all calculations on it are done in a similar manner. It's just not really visible, although the effect it has on other colours is. Which brings us to the final thing to note when using surfaces and blend modes (even ","bm_normal",")..."," ","Even if the alpha of the surface is 0, ","the colour components are still there and exist and will influence in all blending operations",". So drawing to a zero alpha cleared surface that has been cleared using the colour red (for example) will blend the source colours with the destination colours and give different effects to that which you may think. The above image was created on a surface cleared to black over a black background, but if we clear the surface to red, we get this instead:"," ","Hopefully you can now work out why this happens for yourself using the formulas I've outlined above and applying the appropriate figures for ","bm_normal","."," ","Back: ","Additional Information"," ","Next: ","Compatibility Functions"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"8":[[" ","OVERVIEW"],[" ","BASIC BLEND MODES"],[" ","Extended Blend Modes"],[" ","CREATING YOUR OWN BLEND MODES"],[" ","SURFACES AND ALPHA"]],"id":"2719"})