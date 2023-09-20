rh._.exports({"0":[[" ","FX Types & Parameters"]],"1":[["filters, effects, types, fx"]],"2":[[" ","FX Types & Parameters"]],"3":[[" ","This page lists all the Filter/Effect types provided in ","GameMaker",", along with the following information about each FX:"," ","Internal name"," (a string, e.g. ","\"_filter_tintfilter\"",") which can be passed into ","fx_create()"," to create an FX at runtime"," ","Description"," ","Example image/video"," ","IDE Parameters",", which can be edited through the ","Layer Types And Properties"," ","Runtime Parameters",", which can be used to modify FXs through code, using the ","Filter and Effect Functions"," ","Each parameter has a type, so you know what type of data to supply to which parameter. Real numbers are used for single values, and arrays are used for vector (","[x, y, ","z","*","]",") and colour (","[r, g, b, ","a","*","]",") parameters. Samplers are used to pass ","textures","."," ","*","Not always present"],[" ","There are some limitations to keep in mind when using filters/effects:"," ","Filters/effects will not work when the ","application surface is disabled",". It's enabled by default, and you shouldn't usually require disabling it, however you may do so to gain performance on mobile devices. In such cases you wouldn't be able to use filters/effects as they require the surface texture for shader manipulations."," ","Filters/effects that take a texture image, require that image to be on a separate texture page. You can set this through the ","sprite editor","."," "," ","View Filters Table"," "," ","Filters"," ","Type"," ","Description"," ","Example"," ","IDE Parameters"," ","Runtime Parameters"," ","Blocks Background"," ","\n            \"_filter_blocks\"\n          "," ","Creates a background with tiled 3D blocks."," ","View Position","\n            Perspective","\n            Shading","\n            Face Lighting","\n            Block Tiles","\n            Blocks Texture"," ","g_BlocksPosition"," (Array)"," ","g_BlocksPerspective"," (Real)"," ","g_BlocksShading"," (Real)"," ","g_BlocksFaceLight"," (Array)"," ","g_BlocksTiles"," (Array)"," ","g_BlocksTexture"," (Sampler)\n          "," ","Boxes"," ","\n            \"_filter_boxes\"\n          "," ","Creates a tiled boxes effect with optional animation."," ","Scale","\n            Size","\n            Displacement","\n            Animation Speed","\n            Angle","\n            Rotation Speed","\n            Roundness","\n            Colour Speed","\n            Colour Count","\n            Sharpness","\n            Colour Palette"," ","g_BoxesScale"," (Real)"," ","g_BoxesSize"," (Real)"," ","g_BoxesDisplacement"," (Real)"," ","g_BoxesSpeed"," (Real)"," ","g_BoxesAngle"," (Real)"," ","g_BoxesRotation"," (Array)"," ","g_BoxesRoundness"," (Real)"," ","g_BoxesColourSpeed"," (Real)"," ","g_BoxesColours"," (Real)"," ","g_BoxesSharpness"," (Real)"," ","g_BoxesPalette"," (Real)\n          "," ","Clouds"," ","\n            \"_filter_clouds\"\n          "," "," Adds animated clouds."," ","Scale","\n            Velocity","\n            Turbulence","\n            Cloud Level","\n            Wave Amount","\n            Shape","\n            Density","\n            Edge Fade","\n            Light Colour","\n            Shade Colour","\n            Shade Offset","\n            Shade Fade","\n            Clouds Texture"," ","g_CloudScale"," (Real)"," ","g_CloudVelocity"," (Array)"," ","g_CloudTurbulence"," (Real)"," ","g_CloudLevel"," (Real)"," ","g_CloudWaves"," (Real)"," ","g_CloudShape"," (Array)"," ","g_CloudDensity"," (Real)"," ","g_CloudFade"," (Real)"," ","g_CloudColour1"," (Array)"," ","g_CloudColour2"," (Array)"," ","g_CloudShadeOffset"," (Array)"," ","g_CloudShadeFade"," (Real)"," ","g_CloudTexture"," (Sampler)\n          "," ","Colour Balance"," ","\n            \"_filter_colour_balance\"\n          "," ","Allows you to balance the highlights, midtones and shadows of the game."," ","Shadows RGB","\n            Midtones RGB","\n            Highlights RGB"," ","g_ColourBalanceShadows"," (Array)"," ","g_ColourBalanceMidtones"," (Array)"," ","g_ColourBalanceHighlights"," (Array)\n          "," ","Colour Tint"," ","\n            \"_filter_tintfilter\""," ","Applies a colour tint to the rendered content."," ","Tint colour"," ","g_TintCol"," (Array)"," ","Colourise"," ","\n            \"_filter_colourise\"\n          "," ","Changes everything to appear with the given hue and saturation."," ","Intensity","\n            Tint colour"," ","g_Intensity"," (Real)"," ","g_TintCol"," (Array)\n          "," ","Constrast"," ","\n            \"_filter_contrast\"\n          "," ","Allows you to change the contrast and brightness of the rendered content."," ","Contrast","\n            Brightness"," ","g_ContrastIntensity"," (Real)"," ","g_ContrastBrightness"," (Real)\n          "," ","Desaturate"," ","\n            \"_filter_greyscale\"\n          "," ","Reduces the saturation of the rendered content by the specified intensity value."," ","Intensity"," ","g_Intensity"," (Real)"," ","Distort"," ","\n            \"_filter_distort\"\n          "," ","Applies distortion to the game, using a texture image."," ","Scale","\n            Amount","\n            Offset","\n            Distort texture"," ","g_DistortScale"," (Real)"," ","g_DistortAmount"," (Real)"," ","g_DistortOffset"," (Real)"," ","g_DistortTexture"," (Sampler)\n          "," ","Dots Background"," ","\n            \"_filter_dots\"\n          "," ","Applies a dotted effect to your game, with optional animation. You can create a noise effect by setting the scale to a low value."," ","Scale","\n            Size","\n            Offset","\n            Displacement","\n            Animation Speed","\n            Colour Speed","\n            Colour Count","\n            Sharpness","\n            Colour Palette"," ","g_DotsScale"," (Real)"," ","g_DotsSize"," (Real)"," ","g_DotsOffset"," (Real)"," ","g_DotsDisplacement"," (Real)"," ","g_DotsSpeed"," (Real)"," ","g_DotsColourSpeed"," (Real)"," ","g_DotsColours"," (Real)"," ","g_DotsSharpness"," (Real)"," ","g_DotsPalette"," (Sampler)\n          "," ","Edge Detect"," ","\n            \"_filter_edgedetect\"\n          "," ","Uses edge detection so only the edges in your game are visible."," ","Threshold"," ","g_Threshold"," (Real)"," ","Fractal Noise"," ","\n            \"_filter_fractal_noise\"\n          "," ","Displays fractal noise with animation support"," ","Scale","\n            Persistence","\n            Offset","\n            Animation Speed","\n            Tint Colour","\n            Noise Texture"," ","g_FractalNoiseScale"," (Real)"," ","g_FractalNoisePersistence"," (Real)"," ","g_FractalNoiseOffset"," (Array)"," ","g_FractalNoiseSpeed"," (Real)"," ","g_FractalNoiseTintColour"," (Array)"," ","g_FractalNoiseTexture"," (Sampler)\n          "," ","Gradient"," ","\n            \"_filter_gradient\"\n          "," ","Creates a gradient with the selected colours and mode. Transparent colours are supported."," ","Start Colour","\n            End Colour","\n            Start Point (0 - 1)","\n            End Point (0 - 1)","\n            Gradient Mode"," ","g_GradientColour1"," (Array)"," ","g_GradientColour2"," (Array)"," ","g_GradientPosition1"," (Array)"," ","g_GradientPosition2"," (Array)"," ","g_GradientMode"," (Real, 0 to 5)\n          "," ","Heat Haze"," ","\n            \"_filter_heathaze\"\n          "," ","Creates an animated heat haze effect and is useful for displaying hot environments."," ","Distort 1 Speed","\n            Distort 2 Speed","\n            Distort 1 Scale","\n            Distort 2 Scale","\n            Distort 1 Amount","\n            Distort 2 Amount","\n            Chroma Spread","\n            Camera Offset Scale","\n            Distort Texture"," ","g_Distort1Speed"," (Real)"," ","g_Distort2Speed"," (Real)"," ","g_Distort1Scale"," (Real)"," ","g_Distort2Scale"," (Real)"," ","g_Distort1Amount"," (Real)"," ","g_Distort2Amount"," (Real)"," ","g_ChromaSpreadAmount"," (Real)"," ","g_CamOffsetScale"," (Real)"," ","g_DistortTexture"," (Sampler)\n          "," ","Hue"," ","\n            \"_filter_hue\"\n          "," ","Allows you to shift the hue and change the saturation."," ","Hue Shift","\n            Saturation"," ","g_HueShift"," (Real)"," ","g_HueSaturation"," (Real)\n          "," ","Large Blur"," ","\n            \"_filter_large_blur\"\n          "," ","Blurs the image."," ","Radius","\n            Noise texture"," ","g_Radius"," (Real)"," ","g_NoiseTexture"," (Sampler)\n          "," ","Linear Blur"," ","\n            \"_filter_linear_blur\"\n          "," ","Creates a linear blur effect controlled by the given vector values (X and Y, between -128 and 128)."," ","Vector","\n            Noise texture"," ","g_LinearBlurVector"," (Array)"," ","g_NoiseTexture"," (Sampler)\n          "," ","LUT Colour Grading"," ","\n            \"_filter_lut_colour\"\n          "," ","Allows you to apply LUT colour grading using a texture as the lookup table (LUT)."," ","\n            You can look up (heh) LUT textures on the internet to use in your game.\n          "," ","Intensity","\n            LUT Texture"," ","g_LUTColourIntensity"," (Real)"," ","g_LUTColourTexture"," (Sampler)\n          "," ","Mask"," ","\n            \"_filter_mask\"\n          "," ","Masks the rendered content using the luminosity from the given sprite, where white is fully visible, and black is invisible."," ","Alpha Start","\n            Alpha End","\n            Mask Texture"," ","g_MaskStart"," (Real)"," ","g_MaskEnd"," (Real)"," ","g_MaskTexture"," (Sampler)\n          "," ","Old Film"," ","\n            \"_filter_old_film\"\n          "," ","Creates an old film filter."," ","Flicker Intensity","\n            Flicker Speed","\n            Jitter Intensity","\n            Saturation","\n            Speck Intensity","\n            Bar Scale","\n            Bar Speed","\n            Bar Frequency","\n            Ring Scale","\n            Ring Sharpness","\n            Ring Intensity","\n            Noise Texture"," ","g_OldFilmFlickerIntensity"," (Real)"," ","g_OldFilmFlickerSpeed"," (Real)"," ","g_OldFilmJitterIntensity"," (Real)"," ","g_OldFilmSaturation"," (Real)"," ","g_OldFilmSpeckIntensity"," (Real)"," ","g_OldFilmBarScale"," (Real)"," ","g_OldFilmBarSpeed"," (Real)"," ","g_OldFilmBarFrequency"," (Real)"," ","g_OldFilmRingScale"," (Real)"," ","g_OldFilmRingSharpness"," (Real)"," ","g_OldFilmRingIntensity"," (Real)"," ","g_OldFilmTexture"," (Sampler)\n          "," ","Outline"," ","\n            \"_filter_outline\"\n          "," ","Creates an outline around the opaque contents of the layer. Use this as a ","Single-Layer FX"," for the best effect."," ","Outline colour","\n            Radius","\n            Pixel scale"," ","g_OutlineColour"," (Array)"," ","g_OutlineRadius"," (Real)"," ","g_OutlinePixelScale"," (Real)\n          "," ","Panorama Background"," ","\n            \"_filter_panorama\"\n          "," ","Allows you to draw a panorama image with perspective parameters."," ","View Direction","\n            Perspective","\n            Cylinder","\n            Panorama Texture"," ","g_PanoramaDirection"," (Array)"," ","g_PanoramaPerspective"," (Real)"," ","g_PanoramaCylinder"," (Real)"," ","g_OldFilmTexture"," (Sampler)\n          "," ","Parallax Background"," ","\n            \"_filter_parallax\"\n          "," ","Allows you to draw an image with a flat 3D perspective, with fog and texture depth parameters."," ","NOTE"," This effect may reduce your game's performance on weaker devices."," ","View Direction","\n            Perspective","\n            View Position","\n            Texture Scale","\n            Texture Depth","\n            Fog Colour","\n            Fog Range","\n            Fog Depth","\n            Parallax Texture"," ","g_ParallaxDirection"," (Array)"," ","g_ParallaxPerspective"," (Real)"," ","g_ParallaxPosition"," (Array)"," ","g_ParallaxScale"," (Real)"," ","g_ParallaxDepth"," (Real)"," ","g_ParallaxFogColour"," (Array)"," ","g_ParallaxFogRange"," (Array)"," ","g_ParallaxFogDepth"," (Real)"," ","g_ParallaxTexture"," (Sampler)\n          "," ","Pixelate"," ","\n            \"_filter_pixelate\"\n          "," ","Makes the rendered content look pixelated, allowing you to change the size of each pixel. This gives the rendered content a low resolution look."," ","Cell Size"," ","g_CellSize"," (Real)"," ","Posterise"," ","\n            \"_filter_posterise\"\n          "," ","Applies a posterisation effect to the rendered content, allowing you to change the max colour levels for each hue."," ","Colour Levels"," ","g_ColourLevels"," (Real)"," ","RGB Noise"," ","\n            \"_filter_rgbnoise\"\n          "," ","Displays coloured noise with optional animation."," ","Intensity","\n            Animation","\n            Tint Colour","\n            Noise Texture"," ","g_RGBNoiseIntensity"," (Real)"," ","g_RGBNoiseAnimation"," (Real)"," ","g_RGBNoiseColour"," (Array)"," ","g_RGBNoiseTexture"," (Sampler)\n          "," ","Ripples"," ","\n            \"_filter_ripples\"\n          "," ","Creates an animated ripple effect."," ","Position","\n            Speed","\n            Widt","\n            Amplitude","\n            Radius"," ","g_RipplesPosition"," (Array)"," ","g_RipplesSpeed"," (Real)"," ","g_RipplesWidth"," (Real)"," ","g_RipplesAmplitude"," (Real)"," ","g_RipplesRadius"," (Real)\n          "," ","Screen Shake"," ","\n            \"_filter_screenshake\"\n          "," ","Makes the rendered content shake to simulate a camera shake effect. Works best when controlled at runtime."," ","Magnitude","\n            Shake speed","\n            Noise texture"," ","g_Magnitude"," (Real)"," ","g_ShakeSpeed"," (Real)"," ","g_NoiseTexture"," (Sampler)\n          "," ","Stripes Background"," ","\n            \"_filter_stripes\"\n          "," ","Creates an opaque, striped background effect."," ","Width","\n            Direction","\n            Offset","\n            Displacement","\n            Animation Speed","\n            Wave Scale","\n            Wave Amplitude","\n            Colour Count","\n            Sharpness","\n            Colour Palette"," ","g_StripesWidth"," (Real)"," ","g_StripesDirection"," (Real)"," ","g_StripesOffset"," (Real)"," ","g_StripesDisplacement"," (Real)"," ","g_StripesSpeed"," (Real)"," ","g_StripesFrequency"," (Real)"," ","g_StripesAmplitude"," (Real)"," ","g_StripesColours"," (Real)"," ","g_StripesSharpness"," (Real)"," ","g_StripesPalette"," (Sampler)\n          "," ","Twirl Distort"," ","\n            \"_filter_twirl_distort\"\n          "," ","Creates a twirl distort effect at the center of the camera (+ the offset)."," ","Angle","\n            Radius","\n            Offset"," ","g_DistortAngle"," (Real)"," ","g_DistortRadius"," (Real)"," ","g_DistortOffset"," (Real)\n          "," ","Twist Blur"," ","\n            \"_filter_twist_blur\"\n          "," ","Applies a Twist Blur filter."," ","Position","\n            Intensity","\n            Noise Texture"," ","g_TwistBlurCenter"," (Array)"," ","g_TwistBlurIntensity"," (Real)"," ","g_TwistBlurTexture"," (Sampler)\n          "," ","Underwater"," ","\n            \"_filter_underwater\"\n          "," ","Makes the rendered content look like it is underwater."," ","Distort 1 Speed","\n            Distort 2 Speed","\n            Distort 1 Scale","\n            Distort 2 Scale","\n            Distort 1 Amount","\n            Distort 2 Amount","\n            Chroma Spread","\n            Camera Offset Scale","\n            Glint Colour","\n            Tint Colour","\n            Add Colour","\n            Distort Texture"," ","g_Distort1Speed"," (Real)"," ","g_Distort2Speed"," (Real)"," ","g_Distort1Scale"," (Real)"," ","g_Distort2Scale"," (Real)"," ","g_Distort1Amount"," (Real)"," ","g_Distort2Amount"," (Real)"," ","g_ChromaSpreadAmount"," (Real)"," ","g_CamOffsetScale"," (Real)"," ","g_GlintCol"," (Array)"," ","g_TintCol"," (Array)"," ","g_AddCol"," (Array)"," ","g_DistortTexture"," (Sampler)\n          "," ","Vignette"," ","\n            \"_filter_vignette\"\n          "," ","Displays a vignette around your game, with the ability to change the texture displayed on the Vignette."," ","Edges","\n            Sharpness","\n            Vignette Texture"," ","g_VignetteEdges"," (Array)"," ","g_VignetteSharpness"," (Real)"," ","g_VignetteTexture"," (Sampler)\n          "," ","White Noise"," ","\n            \"_filter_whitenoise\"\n          "," ","Adds white noise, with optional animation."," ","Intensity","\n            Animation","\n            Noise Texture"," ","g_WhiteNoiseIntensity"," (Real)"," ","g_WhiteNoiseAnimation"," (Real)"," ","g_WhiteNoiseTexture"," (Sampler)\n          "," ","Zoom Blur"," ","\n            \"_filter_zoom_blur\"\n          "," ","Displays a zooming motion blur filter."," ","Position","\n            Intensity","\n            Focus Radius","\n            Noise Texture"," ","g_ZoomBlurCenter"," (Array)"," ","g_ZoomBlurIntensity"," (Real)"," ","g_ZoomBlurFocusRadius"," (Real)"," ","g_ZoomBlurTexture"," (Sampler)\n          "," "," ","View Effects Table"," "," ","Effects"," (in-game only)"," ","Type"," ","Description"," ","Example"," ","IDE Parameters"," ","Runtime Parameters"," ","Blend"," ","\n            \"_effect_blend\"\n          "," ","Apply a ","blend mode"," to the layer"," ","NOTE"," Only applicable to non-FX layers"," ","Blend Mode"," ","g_Blend"," (Real)"," ","Blend Ext"," ","\n            \"_effect_blend_ext\"\n          "," ","Apply an ","extended blend mode"," to the layer"," ","NOTE"," Only applicable to non-FX layers"," ","Source Blend Mode","\n            Destination Blend Mode","\n            Alpha Source Blend Mode","\n            Alpha Destination Blend Mode"," ","g_BlendExt_Src"," (Real)"," ","g_BlendExt_Dest"," (Real)"," ","g_BlendExt_AlphaSrc"," (Real)"," ","g_BlendExt_AlphaDest"," (Real)\n          "," ","Glow"," ","\n            \"_effect_glow\"\n          "," ","Adds a glow to the game."," ","NOTE"," This effect may reduce your game's performance on weaker devices."," ","Radius","\n            Quality","\n            Intensity","\n            Gamma","\n            Alpha"," ","g_GlowRadius"," (Real)"," ","g_GlowQuality"," (Real)"," ","g_GlowIntensity"," (Real)"," ","g_GlowGamma"," (Real)"," ","g_GlowAlpha"," (Real)\n          "," ","Recursive Blur"," ","\n            \"_effect_recursive_blur\"\n          "," ","Adds a blur effect. \"Recursive\" refers to the method used for achieving the blur, as this is faster than a regular blur filter."," ","NOTE"," ","This effect may reduce your game's performance on weaker devices","."," ","Radius","\n            Quality","\n            Gamma"," ","g_RecursiveBlurRadius"," (Real)"," ","g_RecursiveBlurQuality"," (Real)"," ","g_RecursiveBlurGamma"," (Real)\n          "," ","Windblown Particles"," ","\n            \"_effect_windblown_particles\"\n          "," ","Creates a windblown particles effect, showing a leaf sprite by default."," ","NOTE"," This effect may reduce your game's performance on weaker devices."," ","Sprite","\n            Number of particles","\n            Spawn time","\n            Spawn all at start","\n            Warmup frames","\n            Particle mass Min","\n            Particle mass Max","\n            Particle sprite scale (Start)","\n            Particle sprite scale (End)","\n            Particle colour 1","\n            Particle colour 1 Alt","\n            Particle colour 2","\n            Particle colour 2 Alt","\n            Particle colour 2 Pos","\n            Particle colour 2 Enabled","\n            Particle colour 3","\n            Particle colour 3 Alt","\n            Particle colour 3 Pos","\n            Particle colour 3 Enabled","\n            Particle colour 4","\n            Particle colour 4 Alt","\n            Particle initial velocity x Min","\n            Particle initial velocity x Max","\n            Particle initial velocity y Min","\n            Particle initial velocity y Max","\n            Particle initial rotation Min","\n            Particle initial rotation Max","\n            Particle rotation speed Min","\n            Particle rotation speed Max","\n            Particle align with velocity","\n            Particle lifetime Min","\n            Particle lifetime Max","\n            Particle update skip","\n            Particle spawn border margin","\n            Particle source blend","\n            Particle dest blend","\n            Draw trails only","\n            Trail spawn chance","\n            Trail lifetime Min","\n            Trail lifetime Max","\n            Trail thickness Min","\n            Trail thickness Max","\n            Trail colour 1","\n            Trail colour 1 Alt","\n            Trail colour 2","\n            Trail colour 2 Alt","\n            Trail colour 2 Pos","\n            Trail colour 2 Enabled","\n            Trail colour 3","\n            Trail colour 3 Alt","\n            Trail colour 3 Pos","\n            Trail colour 3 Enabled","\n            Trail colour 4","\n            Trail colour 4 Alt","\n            Trail min segment length","\n            Trail source blend","\n            Trail dest blend","\n            Number of blowers","\n            Blower size Min","\n            Blower size Max","\n            Blower speed Min","\n            Blower speed Max","\n            Blower rotation speed Min","\n            Blower rotation speed Max","\n            Blower force Min","\n            Blower force Max","\n            Blower camera offset scale","\n            Force grid resolution X","\n            Force grid resolution Y","\n            Wind force X","\n            Wind force Y","\n            Particle drag","\n            Gravity","\n            Enable debug mode"," ","param_sprite"," (Sprite)"," ","param_num_particles"," (Real)"," ","param_particle_spawn_time"," (Real)"," ","param_particle_spawn_all_at_start"," (Bool)"," ","param_warmup_frames"," (Real)"," ","param_particle_mass_min"," (Real)"," ","param_particle_mass_max"," (Real)"," ","param_particle_start_sprite_scale"," (Real)"," ","param_particle_end_sprite_scale"," (Real)"," ","param_particle_col_1"," (Array)"," ","param_particle_col_alt_1"," (Array)"," ","param_particle_col_2"," (Array)"," ","param_particle_col_alt_2"," (Array)"," ","param_particle_col_2_pos"," (Real)"," ","param_particle_col_enabled_2"," (Bool)"," ","param_particle_col_3"," (Array)"," ","param_particle_col_alt_3"," (Array)"," ","param_particle_col_3_pos"," (Real)"," ","param_particle_col_enabled_3"," (Bool)"," ","param_particle_col_4"," (Array)"," ","param_particle_col_alt_4"," (Array)"," ","param_particle_initial_velocity_range_x_min"," (Real)"," ","param_particle_initial_velocity_range_x_max"," (Real)"," ","param_particle_initial_velocity_range_y_min"," (Real)"," ","param_particle_initial_velocity_range_y_max"," (Real)"," ","param_particle_initial_rotation_min"," (Real)"," ","param_particle_initial_rotation_max"," (Real)"," ","param_particle_rot_speed_min"," (Real)"," ","param_particle_rot_speed_max"," (Real)"," ","param_particle_align_vel"," (Real)"," ","param_particle_lifetime_min"," (Real)"," ","param_particle_lifetime_max"," (Real)"," ","param_particle_update_skip"," (Real)"," ","param_particle_spawn_border_prop"," (Real)"," ","param_particle_src_blend"," (","Blend Mode Factor Constant",")"," ","param_particle_dest_blend"," (","Blend Mode Factor Constant",")"," ","param_trails_only"," (Bool)"," ","param_trail_chance"," (Real)"," ","param_trail_lifetime_min"," (Real)"," ","param_trail_lifetime_max"," (Real)"," ","param_trail_thickness_min"," (Real)"," ","param_trail_thickness_max"," (Real)"," ","param_trail_col_1"," (Array)"," ","param_trail_col_alt_1"," (Array)"," ","param_trail_col_2"," (Array)"," ","param_trail_col_alt_2"," (Array)"," ","param_trail_col_2_pos"," (Real)"," ","param_trail_col_enabled_2"," (Bool)"," ","param_trail_col_3"," (Array)"," ","param_trail_col_alt_3"," (Array)"," ","param_trail_col_3_pos"," (Real)"," ","param_trail_col_enabled_3"," (Bool)"," ","param_trail_col_4"," (Array)"," ","param_trail_col_alt_4"," (Array)"," ","param_trail_min_segment_length"," (Real)"," ","param_trail_src_blend"," (","Blend Mode Factor Constant",")"," ","param_trail_dest_blend"," (","Blend Mode Factor Constant",")"," ","param_num_blowers"," (Real)"," ","param_blower_size_min"," (Real)"," ","param_blower_size_max"," (Real)"," ","param_blower_speed_min"," (Real)"," ","param_blower_speed_max"," (Real)"," ","param_blower_rot_speed_min"," (Real)"," ","param_blower_rot_speed_max"," (Real)"," ","param_blower_force_min"," (Real)"," ","param_blower_force_max"," (Real)"," ","param_blower_camvec_scale"," (Real)"," ","param_force_grid_sizex"," (Real)"," ","param_force_grid_sizey"," (Real)"," ","param_wind_vector_x"," (Real)"," ","param_wind_vector_y"," (Real)"," ","param_dragcoeff"," (Real)"," ","param_grav_accel"," (Real)"," ","param_debug_grid"," (Bool)\n          "," ","Back: ","Filters and Effects"," ","Next: ","The Script Editor"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"7":[[" ","Limitations"]],"id":"2806"})