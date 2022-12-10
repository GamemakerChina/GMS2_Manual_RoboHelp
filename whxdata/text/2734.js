rh._.exports({"0":[["FX Types & Parameters"]],"2":[["filters, effects, types, fx"]],"3":[["\n  ","\n  ","\n  ","\n  "],["\n  ","This page lists all the Filter/Effect types provided in ","GameMaker",", along with the following information about each FX:","\n  ","\n    ","Internal name (e.g. ","\"_filter_tintfilter\"",") which can be passed into ","fx_create()"," to create an FX at runtime","\n    ","Description","\n    ","Example image","\n    ","IDE Parameters, which can be edited through the ","Layer Properties","\n    ","Runtime Parameters, which can be used to modify FXs at runtime, using the ","Filter and Effect Functions","\n      ","\n        ","The Runtime parameters also mention their types, so you know what type of data to apply to which parameter.","\n      ","\n    ","\n  ","\n  "," ","\n  "," ","View Filters table"," ","\n  ","\n    ","\n      ","\n        ","\n        ","\n        ","\n        ","\n        ","\n      ","\n      ","\n        ","\n          ","Filters","\n        ","\n        ","\n          ","Type","\n          ","Description","\n          ","Example","\n          ","IDE Parameters","\n          ","Runtime Parameters","\n        ","\n        ","\n          ","Boxes","\n            ","\n            \"_filter_boxes\"\n          ","\n          ","Creates a tiled boxes effect with optional animation.","\n          ","\n          ","Scale","\n            Size","\n            Displacement","\n            Animation Speed","\n            Angle","\n            Rotation Speed","\n            Roundness","\n            Colour Speed","\n            Colour Count","\n            Sharpness","\n            Colour Palette","\n          ","g_BoxesScale"," (Real)","\n            ","g_BoxesSize"," (Real)","\n            ","g_BoxesDisplacement"," (Real)","\n            ","g_BoxesSpeed"," (Real)","\n            ","g_BoxesAngle"," (Real)","\n            ","g_BoxesRotation"," (Array)","\n            ","g_BoxesRoundness"," (Real)","\n            ","g_BoxesColourSpeed"," (Real)","\n            ","g_BoxesColours"," (Real)","\n            ","g_BoxesSharpness"," (Real)","\n            ","g_BoxesPalette"," (Real)\n          ","\n        ","\n        ","\n          ","Colour Balance","\n            ","\n            \"_filter_colour_balance\"\n          ","\n          ","Allows you to balance the highlights, midtones and shadows of the game.","\n          ","\n          ","Shadows RGB","\n            Midtones RGB","\n            Highlights RGB","\n          ","g_ColourBalanceShadows"," (Array)","\n            ","g_ColourBalanceMidtones"," (Array)","\n            ","g_ColourBalanceHighlights"," (Array)\n          ","\n        ","\n        ","\n          ","Colour Tint","\n            ","\n            \"_filter_tintfilter\"","\n          ","\n          ","Applies a colour tint to the rendered content.","\n          ","\n          ","Tint colour","\n          ","g_TintCol"," (Array)","\n        ","\n        ","\n          ","Colourise","\n            ","\n            \"_filter_colourise\"\n          ","\n          ","Changes everything to appear with the given hue and saturation.","\n          ","\n          ","Intensity","\n            Tint colour","\n          ","g_Intensity"," (Real)","\n            ","g_TintCol"," (Array)\n          ","\n        ","\n        ","\n          ","Constrast","\n            ","\n            \"_filter_contrast\"\n          ","\n          ","Allows you to change the contrast and brightness of the rendered content.","\n          "," ","\n          ","Contrast","\n            Brightness","\n          ","g_ContrastIntensity"," (Real)","\n            ","g_ContrastBrightness"," (Real)\n          ","\n        ","\n        ","\n          ","Desaturate","\n            ","\n            \"_filter_greyscale\"\n          ","\n          ","Reduces the saturation of the rendered content by the specified intensity value.","\n          ","\n          ","Intensity","\n          ","g_Intensity"," (Real)","\n        ","\n        ","\n          ","Distort","\n            ","\n            \"_filter_distort\"\n          ","\n          ","Applies distortion to the game, using a texture image.","\n          ","\n          ","Scale","\n            Amount","\n            Offset","\n            Distort texture","\n          ","g_DistortScale"," (Real)","\n            ","g_DistortAmount"," (Real)","\n            ","g_DistortOffset"," (Real)","\n            ","g_DistortTexture"," (Sampler)\n          ","\n        ","\n        ","\n          ","Dots Background","\n            ","\n            \"_filter_dots\"\n          ","\n          ","Applies a dotted effect to your game, with optional animation. You can create a noise effect by setting the scale to a low value.","\n          ","\n          ","Scale","\n            Size","\n            Offset","\n            Displacement","\n            Animation Speed","\n            Colour Speed","\n            Colour Count","\n            Sharpness","\n            Colour Palette","\n          ","g_DotsScale"," (Real)","\n            ","g_DotsSize"," (Real)","\n            ","g_DotsOffset"," (Real)","\n            ","g_DotsDisplacement"," (Real)","\n            ","g_DotsSpeed"," (Real)","\n            ","g_DotsColourSpeed"," (Real)","\n            ","g_DotsColours"," (Real)","\n            ","g_DotsSharpness"," (Real)","\n            ","g_DotsPalette"," (Sampler)\n          ","\n        ","\n        ","\n          ","Edge Detect","\n            ","\n            \"_filter_edgedetect\"\n          ","\n          ","Uses edge detection so only the edges in your game are visible.","\n          ","\n          ","Threshold","\n          ","g_Threshold"," (Real)","\n        ","\n        ","\n          ","Fractal Noise","\n            ","\n            \"_filter_fractal_noise\"\n          ","\n          ","Displays fractal noise with animation support","\n          "," ","\n          ","Scale","\n            Persistence","\n            Offset","\n            Animation Speed","\n            Tint Colour","\n            Noise Texture","\n          ","g_FractalNoiseScale"," (Real)","\n            ","g_FractalNoisePersistence"," (Real)","\n            ","g_FractalNoiseOffset"," (Array)","\n            ","g_FractalNoiseSpeed"," (Real)","\n            ","g_FractalNoiseTintColour"," (Array)","\n            ","g_FractalNoiseTexture"," (Sampler)\n          ","\n        ","\n        ","\n          ","Gradient","\n            ","\n            \"_filter_gradient\"\n          ","\n          ","Creates a gradient with the selected colours and mode. Transparent colours are supported.","\n          "," ","\n          ","Start Colour","\n            End Colour","\n            Start Point (0 - 1)","\n            End Point (0 - 1)","\n            Gradient Mode","\n          ","g_GradientColour1"," (Array)","\n            ","g_GradientColour2"," (Array)","\n            ","g_GradientPosition1"," (Array)","\n            ","g_GradientPosition2"," (Array)","\n            ","g_GradientMode"," (Real, 0 to 5)\n          ","\n        ","\n        ","\n          ","Heat Haze","\n            ","\n            \"_filter_heathaze\"\n          ","\n          ","Creates an animated heat haze effect and is useful for displaying hot environments.","\n          ","\n          ","Distort 1 Speed","\n            Distort 2 Speed","\n            Distort 1 Scale","\n            Distort 2 Scale","\n            Distort 1 Amount","\n            Distort 2 Amount","\n            Chroma Spread","\n            Camera Offset Scale","\n            Distort Texture","\n          ","g_Distort1Speed"," (Real)","\n            ","g_Distort2Speed"," (Real)","\n            ","g_Distort1Scale"," (Real)","\n            ","g_Distort2Scale"," (Real)","\n            ","g_Distort1Amount"," (Real)","\n            ","g_Distort2Amount"," (Real)","\n            ","g_ChromaSpreadAmount"," (Real)","\n            ","g_CamOffsetScale"," (Real)","\n            ","g_DistortTexture"," (Sampler)\n          ","\n        ","\n        ","\n          ","Large Blur","\n            ","\n            \"_filter_large_blur\"\n          ","\n          ","Blurs the image.","\n          ","\n          ","Radius","\n            Noise texture","\n          ","g_Radius"," (Real)","\n            ","g_NoiseTexture"," (Sampler)\n          ","\n        ","\n        ","\n          ","Linear Blur","\n            ","\n            \"_filter_linear_blur\"\n          ","\n          ","Creates a linear blur effect controlled by the given vector values (X and Y, between -128 and 128).","\n          ","\n          ","Vector","\n            Noise texture","\n          ","g_LinearBlurVector"," (Array)","\n            ","g_NoiseTexture"," (Sampler)\n          ","\n        ","\n        ","\n          ","LUT Colour Grading","\n            ","\n            \"_filter_lut_colour\"\n          ","\n          ","Allows you to apply LUT colour grading using a texture as the lookup table (LUT).","\n            ","\n            You can look up (heh) LUT textures on the internet to use in your game.\n          ","\n          "," ","\n          ","Intensity","\n            LUT Texture","\n          ","g_LUTColourIntensity"," (Real)","\n            ","g_LUTColourTexture"," (Sampler)\n          ","\n        ","\n        ","\n          ","Outline","\n            ","\n            \"_filter_outline\"\n          ","\n          ","Creates an outline around the opaque contents of the layer. Use this as a ","Single-Layer FX"," for the best effect.","\n          ","\n          ","Outline colour","\n            Radius","\n            Pixel scale","\n          ","g_OutlineColour"," (Array)","\n            ","g_OutlineRadius"," (Real)","\n            ","g_OutlinePixelScale"," (Real)\n          ","\n        ","\n        ","\n          ","Pixelate","\n            ","\n            \"_filter_pixelate\"\n          ","\n          ","Makes the rendered content look pixelated, allowing you to change the size of each pixel. This gives the rendered content a low resolution look.","\n          ","\n          ","Cell Size","\n          ","g_CellSize"," (Real)","\n        ","\n        ","\n          ","Posterise","\n            ","\n            \"_filter_posterise\"\n          ","\n          ","Applies a posterisation effect to the rendered content, allowing you to change the max colour levels for each hue.","\n          ","\n          ","Colour Levels","\n          ","g_ColourLevels"," (Real)","\n        ","\n        ","\n          ","RGB Noise","\n            ","\n            \"_filter_rgbnoise\"\n          ","\n          ","Displays coloured noise with optional animation.","\n          ","\n          ","Intensity","\n            Animation","\n            Tint Colour","\n            Noise Texture","\n          ","g_RGBNoiseIntensity"," (Real)","\n            ","g_RGBNoiseAnimation"," (Real)","\n            ","g_RGBNoiseColour"," (Array)","\n            ","g_RGBNoiseTexture"," (Sampler)\n          ","\n        ","\n        ","\n          ","Screen Shake","\n            ","\n            \"_filter_screenshake\"\n          ","\n          ","Makes the rendered content shake to simulate a camera shake effect. Works best when controlled at runtime.","\n          ","\n          ","Magnitude","\n            Shake speed","\n            Noise texture","\n          ","g_Magnitude"," (Real)","\n            ","g_ShakeSpeed"," (Real)","\n            ","g_NoiseTexture"," (Sampler)\n          ","\n        ","\n        ","\n          ","Stripes Background","\n            ","\n            \"_filter_stripes\"\n          ","\n          ","Creates an opaque, striped background effect.","\n          ","\n          ","Width","\n            Direction","\n            Offset","\n            Displacement","\n            Animation Speed","\n            Wave Scale","\n            Wave Amplitude","\n            Colour Count","\n            Sharpness","\n            Colour Palette","\n          ","g_StripesWidth"," (Real)","\n            ","g_StripesDirection"," (Real)","\n            ","g_StripesOffset"," (Real)","\n            ","g_StripesDisplacement"," (Real)","\n            ","g_StripesSpeed"," (Real)","\n            ","g_StripesFrequency"," (Real)","\n            ","g_StripesAmplitude"," (Real)","\n            ","g_StripesColours"," (Real)","\n            ","g_StripesSharpness"," (Real)","\n            ","g_StripesPalette"," (Sampler)\n          ","\n        ","\n        ","\n          ","Twirl Distort","\n            ","\n            \"_filter_twirl_distort\"\n          ","\n          ","Creates a twirl distort effect at the center of the camera (+ the offset).","\n          ","\n          ","Angle","\n            Radius","\n            Offset","\n          ","g_DistortAngle"," (Real)","\n            ","g_DistortRadius"," (Real)","\n            ","g_DistortOffset"," (Real)\n          ","\n        ","\n        ","\n          ","Twist Blur","\n            ","\n            \"_filter_twist_blur\"\n          ","\n          ","Applies a Twist Blur filter.","\n          "," ","\n          ","Position","\n            Intensity","\n            Noise Texture","\n          ","g_TwistBlurCenter"," (Array)","\n            ","g_TwistBlurIntensity"," (Real)","\n            ","g_TwistBlurTexture"," (Sampler)\n          ","\n        ","\n        ","\n          ","Underwater","\n            ","\n            \"_filter_underwater\"\n          ","\n          ","Makes the rendered content look like it is underwater.","\n          ","\n          ","Distort 1 Speed","\n            Distort 2 Speed","\n            Distort 1 Scale","\n            Distort 2 Scale","\n            Distort 1 Amount","\n            Distort 2 Amount","\n            Chroma Spread","\n            Camera Offset Scale","\n            Glint Colour","\n            Tint Colour","\n            Add Colour","\n            Distort Texture","\n          ","g_Distort1Speed"," (Real)","\n            ","g_Distort2Speed"," (Real)","\n            ","g_Distort1Scale"," (Real)","\n            ","g_Distort2Scale"," (Real)","\n            ","g_Distort1Amount"," (Real)","\n            ","g_Distort2Amount"," (Real)","\n            ","g_ChromaSpreadAmount"," (Real)","\n            ","g_CamOffsetScale"," (Real)","\n            ","g_GlintCol"," (Array)","\n            ","g_TintCol"," (Array)","\n            ","g_AddCol"," (Array)","\n            ","g_DistortTexture"," (Sampler)\n          ","\n        ","\n        ","\n          ","Vignette","\n            ","\n            \"_filter_vignette\"\n          ","\n          ","Displays a vignette around your game, with the ability to change the texture displayed on the Vignette.","\n          ","\n          ","Edges","\n            Sharpness","\n            Vignette Texture","\n          ","g_VignetteEdges"," (Array)","\n            ","g_VignetteSharpness"," (Real)","\n            ","g_VignetteTexture"," (Sampler)\n          ","\n        ","\n        ","\n          ","White Noise","\n            ","\n            \"_filter_whitenoise\"\n          ","\n          ","Adds white noise, with optional animation.","\n          ","\n          ","Intensity","\n            Animation","\n            Noise Texture","\n          ","g_WhiteNoiseIntensity"," (Real)","\n            ","g_WhiteNoiseAnimation"," (Real)","\n            ","g_WhiteNoiseTexture"," (Sampler)\n          ","\n        ","\n        ","\n          ","Zoom Blur","\n            ","\n            \"_filter_zoom_blur\"\n          ","\n          ","Displays a zooming motion blur filter.","\n          ","\n          ","Position","\n            Intensity","\n            Focus Radius","\n            Noise Texture","\n          ","g_ZoomBlurCenter"," (Array)","\n            ","g_ZoomBlurIntensity"," (Real)","\n            ","g_ZoomBlurFocusRadius"," (Real)","\n            ","g_ZoomBlurTexture"," (Sampler)\n          ","\n        ","\n      ","\n    ","\n  ","\n  "," ","View Effects Table"," ","\n  ","\n    ","\n      ","\n        ","\n        ","\n        ","\n        ","\n        ","\n      ","\n      ","\n        ","\n          ","Effects (in-game only)","\n        ","\n        ","\n          ","Type","\n          ","Description","\n          ","Example","\n          ","IDE Parameters","\n          ","Runtime Parameters","\n        ","\n        ","\n          ","Windblown Particles","\n            ","\n            \"_effect_windblown_particles\"\n          ","\n          ","Creates a windblown particles effect, showing a leaf sprite by default.","\n            ","\n            This is an Effect and can't be previewed in the Room Editor.\n          ","\n          ","\n          ","Sprite","\n            Number of particles","\n            Spawn time","\n            Spawn all at start","\n            Warmup frames","\n            Particle mass Min","\n            Particle mass Max","\n            Particle sprite scale (Start)","\n            Particle sprite scale (End)","\n            Particle colour 1","\n            Particle colour 1 Alt","\n            Particle colour 2","\n            Particle colour 2 Alt","\n            Particle colour 2 Pos","\n            Particle colour 2 Enabled","\n            Particle colour 3","\n            Particle colour 3 Alt","\n            Particle colour 3 Pos","\n            Particle colour 3 Enabled","\n            Particle colour 4","\n            Particle colour 4 Alt","\n            Particle initial velocity x Min","\n            Particle initial velocity x Max","\n            Particle initial velocity y Min","\n            Particle initial velocity y Max","\n            Particle initial rotation Min","\n            Particle initial rotation Max","\n            Particle rotation speed Min","\n            Particle rotation speed Max","\n            Particle align with velocity","\n            Particle lifetime Min","\n            Particle lifetime Max","\n            Particle update skip","\n            Particle spawn border margin","\n            Particle source blend","\n            Particle dest blend","\n            Draw trails only","\n            Trail spawn chance","\n            Trail lifetime Min","\n            Trail lifetime Max","\n            Trail thickness Min","\n            Trail thickness Max","\n            Trail colour 1","\n            Trail colour 1 Alt","\n            Trail colour 2","\n            Trail colour 2 Alt","\n            Trail colour 2 Pos","\n            Trail colour 2 Enabled","\n            Trail colour 3","\n            Trail colour 3 Alt","\n            Trail colour 3 Pos","\n            Trail colour 3 Enabled","\n            Trail colour 4","\n            Trail colour 4 Alt","\n            Trail min segment length","\n            Trail source blend","\n            Trail dest blend","\n            Number of blowers","\n            Blower size Min","\n            Blower size Max","\n            Blower speed Min","\n            Blower speed Max","\n            Blower rotation speed Min","\n            Blower rotation speed Max","\n            Blower force Min","\n            Blower force Max","\n            Blower camera offset scale","\n            Force grid resolution X","\n            Force grid resolution Y","\n            Wind force X","\n            Wind force Y","\n            Particle drag","\n            Gravity","\n            Enable debug mode","\n          ","param_sprite"," (Sprite)","\n            ","param_num_particles"," (Real)","\n            ","param_particle_spawn_time"," (Real)","\n            ","param_particle_spawn_all_at_start"," (Bool)","\n            ","param_warmup_frames"," (Real)","\n            ","param_particle_mass_min"," (Real)","\n            ","param_particle_mass_max"," (Real)","\n            ","param_particle_start_sprite_scale"," (Real)","\n            ","param_particle_end_sprite_scale"," (Real)","\n            ","param_particle_col_1"," (Array)","\n            ","param_particle_col_alt_1"," (Array)","\n            ","param_particle_col_2"," (Array)","\n            ","param_particle_col_alt_2"," (Array)","\n            ","param_particle_col_2_pos"," (Real)","\n            ","param_particle_col_enabled_2"," (Bool)","\n            ","param_particle_col_3"," (Array)","\n            ","param_particle_col_alt_3"," (Array)","\n            ","param_particle_col_3_pos"," (Real)","\n            ","param_particle_col_enabled_3"," (Bool)","\n            ","param_particle_col_4"," (Array)","\n            ","param_particle_col_alt_4"," (Array)","\n            ","param_particle_initial_velocity_range_x_min"," (Real)","\n            ","param_particle_initial_velocity_range_x_max"," (Real)","\n            ","param_particle_initial_velocity_range_y_min"," (Real)","\n            ","param_particle_initial_velocity_range_y_max"," (Real)","\n            ","param_particle_initial_rotation_min"," (Real)","\n            ","param_particle_initial_rotation_max"," (Real)","\n            ","param_particle_rot_speed_min"," (Real)","\n            ","param_particle_rot_speed_max"," (Real)","\n            ","param_particle_align_vel"," (Real)","\n            ","param_particle_lifetime_min"," (Real)","\n            ","param_particle_lifetime_max"," (Real)","\n            ","param_particle_update_skip"," (Real)","\n            ","param_particle_spawn_border_prop"," (Real)","\n            ","param_particle_src_blend"," (","Blend Mode Factor Constant",")","\n            ","param_particle_dest_blend"," (","Blend Mode Factor Constant",")","\n            ","param_trails_only"," (Bool)","\n            ","param_trail_chance"," (Real)","\n            ","param_trail_lifetime_min"," (Real)","\n            ","param_trail_lifetime_max"," (Real)","\n            ","param_trail_thickness_min"," (Real)","\n            ","param_trail_thickness_max"," (Real)","\n            ","param_trail_col_1"," (Array)","\n            ","param_trail_col_alt_1"," (Array)","\n            ","param_trail_col_2"," (Array)","\n            ","param_trail_col_alt_2"," (Array)","\n            ","param_trail_col_2_pos"," (Real)","\n            ","param_trail_col_enabled_2"," (Bool)","\n            ","param_trail_col_3"," (Array)","\n            ","param_trail_col_alt_3"," (Array)","\n            ","param_trail_col_3_pos"," (Real)","\n            ","param_trail_col_enabled_3"," (Bool)","\n            ","param_trail_col_4"," (Array)","\n            ","param_trail_col_alt_4"," (Array)","\n            ","param_trail_min_segment_length"," (Real)","\n            ","param_trail_src_blend"," (","Blend Mode Factor Constant",")","\n            ","param_trail_dest_blend"," (","Blend Mode Factor Constant",")","\n            ","param_num_blowers"," (Real)","\n            ","param_blower_size_min"," (Real)","\n            ","param_blower_size_max"," (Real)","\n            ","param_blower_speed_min"," (Real)","\n            ","param_blower_speed_max"," (Real)","\n            ","param_blower_rot_speed_min"," (Real)","\n            ","param_blower_rot_speed_max"," (Real)","\n            ","param_blower_force_min"," (Real)","\n            ","param_blower_force_max"," (Real)","\n            ","param_blower_camvec_scale"," (Real)","\n            ","param_force_grid_sizex"," (Real)","\n            ","param_force_grid_sizey"," (Real)","\n            ","param_wind_vector_x"," (Real)","\n            ","param_wind_vector_y"," (Real)","\n            ","param_dragcoeff"," (Real)","\n            ","param_grav_accel"," (Real)","\n            ","param_debug_grid"," (Bool)\n          ","\n        ","\n      ","\n    ","\n  ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Filters and Effects","\n        ","Next: ","Scripts","\n      ","\n    ","\n    "],["\n  ","\n  ","\n  ","\n\n","\n  ","\n  ","\n\n"]],"4":[["FX Types & Parameters"]],"6":[["© Copyright YoYo Games Ltd. 2022 All Rights Reserved"]],"id":"2734"})