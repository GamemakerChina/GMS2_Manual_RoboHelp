rh._.exports({"0":[[" ","part_type_colour_hsv"]],"1":[["part_type_colour_hsv,part_type_color_hsv"]],"2":[["part_type_colour_hsv,part_type_color_hsv"]],"3":[[" ","part_type_colour_hsv"]],"4":[[" ","With this function you can set a hue, saturation and value range for all particles of the given type. You supply a minimum value and a maximum value for each of the three components and the particles created will have a random colour based on the given range of parameters. In this way you can create particles of the same hue but different saturations, or of different hues but the same value (luminosity) etc... All values must be between 0 and 255."],[" ","part_type_colour_hsv(ind, hmin, hmax, smin, smax, vmin, vmax);"," ","Argument"," ","Type"," ","Description"," ","ind"," ","Particle Type ID"," ","The index of the particle type to change."," ","hmin"," ","Real"," ","The minimum the final colour's hue component can be."," ","hmax"," ","Real"," ","The maximum the final colour's hue component can be."," ","smin"," ","Real"," ","The minimum the final colour's saturation component can be."," ","smax"," ","Real"," ","The maximum the final colour's saturation component can be."," ","vmin"," ","Real"," ","The minimum the final colour's value component can be."," ","vmax"," ","Real"," ","The maximum the final colour's value component can be."],[" ","N/A"],[" ","part_type_hsv(global.Stars, 0, 255, 0, 255, 255, 255 );"," ","The above code sets each particle emitted of the particle type indexed in the global variable \"Stars\" to have different colours and saturations, but the same value (luminosity)."," ","Back: ","Particle Types"," ","Next: ","part_type_colour1"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1818"})