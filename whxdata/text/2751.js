rh._.exports({"0":[[" ","Obsolete Functions"]],"1":[["Obsolete Functions"]],"2":[["Obsolete Functions"]],"3":[[" ","Obsolete Functions"]],"4":[[" ","Here you can find a list of all the functions that have been made obsolete when you compare ","GameMaker"," to legacy versions of the product. The functions listed here will be converted into ","compatibility scripts"," when you import a ","*.yyz"," made with a legacy version, and you can continue to work on the project as before. However, we recommend that you revise all the compatibility scripts created in a project, and ensure that future projects use the new functions/methods of working rather than depend on these scripts."," "," ","Backgrounds"," "," ","In legacy GameMaker you had a separate ","background ","resource, where you could add images to be used as backgrounds. In ","GameMaker"," all images are considered sprites, and the use you put them too will depend on the layer they are assigned to in the room. This means that there is no longer a \"background\" resource, and it also means that the following functions are obsolete:"," ","draw_background"," ","draw_background_ext"," ","draw_background_","\n            stretched"," ","draw_background_","\n            stretched_ext"," ","draw_background_","\n            part"," ","draw_background_","\n            part_ext"," ","draw_background_","\n            general"," ","draw_background_","\n            tiled"," ","draw_background_","\n            tiled_ext"," ","background_name"," ","background_exists"," ","background_get_","\n            name"," ","draw_background"," ","draw_background_ext"," ","draw_background_","\n            stretched"," ","draw_background_","\n            stretched_ext"," ","background_get_","\n            width"," ","background_get_","\n            height"," ","background_get_","\n            transparent"," ","background_get_","\n            smooth"," ","background_get_","\n            preload"," ","background_get_uvs"," ","background_get_","\n            texture"," ","background_set_alpha_","\n            from_background"," ","background_create_","\n            from_surface"," ","background_create_","\n            color"," ","background_create_","\n            colour"," ","background_create_","\n            gradient"," ","background_add"," ","background_replace"," ","background_add_","\n            alpha"," ","background_replace_","\n            alpha"," ","background_delete"," ","background_duplicate"," ","background_assign"," ","background_save"," ","background_prefetch"," ","background_","\n            prefetch_multi"," ","background_flush"," ","background_flush_","\n            multi"," ","room_set_background"," ","room_set_","\n            background_colour"," ","Legacy GameMaker lso had a number of different background variables that accessed the global background array. These are no longer required in ","GameMaker",":"," ","background_","\n            index[0..7]"," ","background_","\n            visible[0..7]"," ","background_","\n            alpha[0..7]"," ","background_","\n            blend[0..7]"," ","background_x[0..7]"," ","background_y[0..7]"," ","background_","\n            colour"," ","background_","\n            showcolour"," ","background_","\n            foreground[0..7]"," ","background_","\n            hspeed[0..7]"," ","background_","\n            vspeed[0..7]"," ","background_","\n            htiled[0..7]"," ","background_","\n            vtiled[0..7]"," ","background_","\n            width[0..7]"," ","background_","\n            height[0..7]"," ","background_","\n            xscale[0..7]"," ","background_","\n            yscale[0..7]"," ","You can find out more about ","Background Layers"," from the section on the ","Room Editor",", and for more information on the functions that control background layers using code see ","Background Layers","."," "," ","Tiles"," "," ","As with backgrounds (explained above) the ","tile ","resource from legacy GameMaker no longer exists, and instead we have ","Tile Sets"," in ","GameMaker",". In legacy GameMaker, tiles used a background resource and were placed at different depths in the room editor or through code, however the method used was not terribly flexible and was also not that efficient. To address these issues, in ","GameMaker"," tilesets are now created from a sprite resource, and can have various different properties (like animation or auto-tiling). They are then placed on a tilemap layer within the room editor or through code. Due to these changes the following functions are now obsolete:"," ","tile_get_x"," ","tile_get_y"," ","tile_get_left"," ","tile_get_top"," ","tile_get_width"," ","tile_get_height"," ","tile_get_depth"," ","tile_get_visible"," ","tile_get_xscale"," ","tile_get_yscale"," ","tile_get_alpha"," ","tile_get_background"," ","tile_set_visible"," ","tile_set_background"," ","tile_set_region"," ","tile_set_position"," ","tile_set_depth"," ","tile_set_scale"," ","tile_set_blend"," ","tile_set_alpha"," ","tile_get_count"," ","tile_get_id"," ","tile_get_ids"," ","tile_get_ids_at_depth"," ","tile_add"," ","tile_exists"," ","tile_delete"," ","tile_layer_hide"," ","tile_layer_show"," ","tile_layer_delete"," ","tile_layer_shift"," ","tile_layer_find"," ","tile_layer_delete_at"," ","tile_layer_depth"," ","room_tile_add"," ","room_tile_add_ext"," ","room_tile_clear"," ","You can find out more about Tile Sets from the manual section on the ","Tile Set Editor"," and about how to use them in the room editor from the section on ","Tile Layers",". For more information on the functions that control background layers using code see ","Tilemap Layers",". It is also worth noting that the GameMaker Language has some specific funtions related to using legacy tiles in imported projects, and you can find information on those ","here","."," "," ","Objects"," "," ","The way objects are treated in ","GameMaker"," has changed slightly due to the introduction of layers in the room editor. There still exists the \"depth\" variable, but it is now only really used for compatibility and you can no longer get or set the depth for objects, only instances. This makes the following functions obsolete:"," ","object_get_depth"," ","object_set_depth"," ","You can find out more about object resources from the manual section on the ","Object Editor"," and on the functions that control objects using code from the section ","Objects","."," "," ","Sounds"," "," ","Legacy GameMaker had two different sound API's, one which used the deprecated ","sound_"," functions (that was only really valid for the HTML5 target platform), and the other which used the ","audio_"," functions. The audio API has been improved and expanded in ","GameMaker",", making the legacy functions listed below obsolete:"," ","sound_name"," ","sound_exists"," ","sound_get_name"," ","sound_get_kind"," ","sound_get_preload"," ","sound_exists"," ","sound_restore"," ","sound_delete"," ","sound_play"," ","sound_loop"," ","sound_stop"," ","sound_stop_all"," ","sound_isplaying"," ","sound_volume"," ","sound_fade"," ","sound_global_volume"," ","audio_music_gain"," ","audio_music_is_playing"," ","audio_new_system"," ","audio_old_system"," ","audio_pause_music"," ","audio_play_music"," ","audio_resume_music"," ","audio_stop_music"," ","audio_system"," ","You can find out more about audio resources from the manual section on the ","Sound Editor"," and on the functions that control audio using code from the section on ","Audio",". "," "," ","D3D"," "," ","When using 3D models or primitives in legacy GameMaker, you had to use the ","d3d_"," functions. These used an obsolete API for drawing and in many cases were not related strictly to Direct 3D API, or even to using 3D itself. With the advent of vertex buffers, matrices and cameras in ","GameMaker",", the following functions have been made obsolete:"," ","d3d_start"," ","d3d_end"," ","d3d_set_perspective"," ","d3d_set_hidden"," ","d3d_set_depth"," ","d3d_set_lighting"," ","d3d_set_shading"," ","d3d_set_fog"," ","d3d_set_culling"," ","d3d_set_zwriteenable"," ","d3d_set_projection"," ","d3d_set_projection_ext"," ","d3d_set_projection_","\n            ortho"," ","d3d_set_projection_","\n            perspective"," ","d3d_transform_set_","\n            identity"," ","d3d_transform_","\n            set_translation"," ","d3d_transform_set_","\n            scaling"," ","d3d_transform_","\n            set_rotation_x"," ","d3d_transform_set_","\n            rotation_y"," ","d3d_transform_","\n            set_rotation_z"," ","d3d_transform_set_","\n            rotation_axis"," ","d3d_transform_","\n            add_translation"," ","d3d_transform_add_","\n            scaling"," ","d3d_transform_","\n            add_rotation_x"," ","d3d_transform_add_","\n            rotation_y"," ","d3d_transform_","\n            add_rotation_z"," ","d3d_transform_add_","\n            rotation_axis"," ","d3d_transform_","\n            stack_clear"," ","d3d_transform_stack_","\n            empty"," ","d3d_transform_","\n            stack_push"," ","d3d_transform_stack_","\n            pop"," ","d3d_transform_","\n            stack_top"," ","d3d_transform_stack_","\n            discard"," ","d3d_transform_vertex"," ","d3d_light_define_","\n            ambient"," ","d3d_light_define_","\n            direction"," ","d3d_light_define_point"," ","d3d_light_enable"," ","d3d_primitive_begin"," ","d3d_primitive_","\n            begin_texture"," ","d3d_primitive_end"," ","d3d_vertex"," ","d3d_vertex_color"," ","d3d_vertex_colour"," ","d3d_vertex_texture"," ","d3d_vertex_texture_","\n            color"," ","d3d_vertex_texture_","\n            colour"," ","d3d_vertex_normal"," ","d3d_vertex_normal_","\n            color"," ","d3d_vertex_normal_","\n            colour"," ","d3d_vertex_normal_","\n            texture"," ","d3d_vertex_normal_","\n            texture_color"," ","d3d_vertex_normal_","\n            texture_colour"," ","d3d_draw_block"," ","d3d_draw_cylinder"," ","d3d_draw_cone"," ","d3d_draw_ellipsoid"," ","d3d_draw_wall"," ","d3d_draw_floor"," ","d3d_model_create"," ","d3d_model_destroy"," ","d3d_model_clear"," ","d3d_model_load"," ","d3d_model_save"," ","d3d_model_draw"," ","d3d_model_primitive_","\n            begin"," ","d3d_model_","\n            primitive_end"," ","d3d_model_vertex"," ","d3d_model_vertex_","\n            color"," ","d3d_model_vertex_","\n            colour"," ","d3d_model_","\n            vertex_texture"," ","d3d_model_vertex_","\n            texture_color"," ","d3d_model_vertex_","\n            texture_colour"," ","d3d_model_vertex_","\n            normal"," ","d3d_model_","\n            vertex_normal_color"," ","d3d_model_vertex_","\n            normal_colour"," ","d3d_model_vertex_","\n            normal_texture"," ","d3d_model_vertex_","\n            normal_texture_color"," ","d3d_model_vertex_","\n            normal_texture_colour"," ","d3d_model_block"," ","d3d_model_cylinder"," ","d3d_model_cone"," ","d3d_model_ellipsoid"," ","d3d_model_wall"," ","d3d_model_floor"," ","You can find out more about vertex buffers ","here",", more about matrices ","here",", more about cameras ","here",", and more about the GPU functions ","here","."," "," ","View Variables And Window Functions"," "," ","With the advent of the camera functions in ","GameMaker",", it means that a number of view variables are no longer required, specifically those referring to the view into the room rather than the view_port (which is still used). There are also a few functions for controlling how things are displayed that were available in legacy versions of GameMaker Studio which are also no longer appropriate. These variables and functions are listed below:"," ","view_object"," ","view_angle"," ","view_xview"," ","view_yview"," ","view_hview"," ","view_wview"," ","view_hborder"," ","view_vborder"," ","view_hspeed"," ","view_vspeed"," ","display_set_windows_","\n            vertex_buffer_method"," ","display_get_windows_","\n            vertex_buffer_method"," ","display_set_windows_","\n            alternate_sync"," ","display_get_windows_","\n            alternate_sync"," ","room_set_view"," ","You can find out more about cameras from the manual section on ","Cameras And The Display","."," "," ","3rd Party Support"," "," ","GameMaker"," moves a lot of built in functionality from previous versions into ","extensions",", meaning that the following 3rd party support functions are considered obsolete:"," ","ads_enable"," ","ads_disable"," ","ads_move"," ","ads_get_display_","\n            width"," ","ads_get_display_","\n            height"," ","ads_interstitial_","\n            available"," ","ads_interstitial_","\n            display"," ","ads_setup"," ","ads_engagement_","\n            available"," ","ads_engagement_","\n            launch"," ","ads_engagement_","\n            active"," ","ads_event"," ","ads_event_preload"," ","ads_set_reward_","\n            callback"," ","playhaven_add_","\n            notification_badge"," ","playhaven_hide_","\n            notification_badge"," ","playhaven_position_","\n            notification_badge"," ","playhaven_update_","\n            notification_badge"," ","pocketchange_display_","\n            reward"," ","pocketchange_display_","\n            shop"," ","analytics_event"," ","analytics_event_ext"," ","facebook_init"," ","facebook_login"," ","facebook_request_","\n            publish_permissions"," ","facebook_request_","\n            read_permissions"," ","facebook_check_","\n            permission"," ","facebook_status"," ","facebook_accesstoken"," ","facebook_user_id"," ","facebook_graph_","\n            request"," ","facebook_dialog"," ","facebook_send_invite"," ","facebook_post_","\n            message "," ","facebook_logout"," ","facebook_launch_","\n            offerwall "," ","iap_event_queue"," ","iap_files_purchased"," ","iap_is_downloaded"," ","iap_product_files"," ","iap_product_status"," ","iap_store_status"," ","iap_data"," ","iap_activate"," ","iap_status"," ","iap_enumerate_products"," ","iap_restore_all"," ","iap_acquire"," ","iap_consume"," ","iap_product_details"," ","iap_purchase_details"," ","immersion_play_effect"," ","immersion_stop"," ","achievement_*"," ","win8_*"," ","uwp_appbar_*"," ","You can get our official extensions for advertising and other APIs from the ","Marketplace Page","."," "," ","GML Visual"," Actions"," "," ","Both legacy GameMaker and ","GameMaker"," have a visual scripting ","GML Visual"," interface for creating your games, however the way it is handled in ","GameMaker"," is quite different to the previous methods used. Previously, all GML Visual actions had their own corresponding function which worked \"behind the scenes\" to get the desired results, however this was not very transparent and added in extra overheads to the function calls, resulting in poorer performance. In ","GameMaker"," this has been changed, and now all actions compile to pure code (and can be shown as such if required), meaning that the following action functions are obsolete:"," ","action_path_old"," ","action_set_sprite"," ","action_draw_font"," ","action_draw_font_old"," ","action_fill_color"," ","action_fill_colour"," ","action_line_color"," ","action_line_colour"," ","action_highscore"," ","action_set_relative"," ","action_move"," ","action_set_motion"," ","action_set_hspeed"," ","action_set_vspeed"," ","action_set_gravity"," ","action_set_friction"," ","action_move_point"," ","action_move_to"," ","action_move_start"," ","action_move_random"," ","action_snap"," ","action_wrap"," ","action_reverse_xdir"," ","action_reverse_ydir"," ","action_move_contact"," ","action_bounce"," ","action_path"," ","action_path_end"," ","action_path_position"," ","action_path_speed"," ","action_linear_step"," ","action_potential_step"," ","action_kill_object"," ","action_create_object"," ","action_create_object_motion"," ","action_create_object_random"," ","action_change_object"," ","action_kill_position"," ","action_sprite_set"," ","action_sprite_transform"," ","action_sprite_color"," ","action_sprite_colour"," ","action_sound"," ","action_end_sound"," ","action_if_sound"," ","action_another_room"," ","action_current_room"," ","action_previous_room"," ","action_next_room"," ","action_if_previous_room"," ","action_if_next_room"," ","action_set_alarm"," ","action_sleep"," ","action_set_timeline"," ","action_timeline_set"," ","action_timeline_start"," ","action_timeline_stop"," ","action_timeline_pause"," ","action_set_timeline_position"," ","action_set_timeline_speed"," ","action_message"," ","action_show_info"," ","action_show_video"," ","action_end_game"," ","action_restart_game"," ","action_save_game"," ","action_load_game"," ","action_replace_sprite"," ","action_replace_sound"," ","action_replace_","\n            background"," ","action_if_empty"," ","action_if_collision"," ","action_if"," ","action_if_number"," ","action_if_object"," ","action_if_question"," ","action_if_dice"," ","action_if_mouse"," ","action_if_aligned"," ","action_execute_script"," ","action_inherited"," ","action_if_variable"," ","action_draw_variable"," ","action_set_score"," ","action_if_score"," ","action_draw_score"," ","action_highscore_show"," ","action_highscore_clear"," ","action_set_life"," ","action_if_life"," ","action_draw_life"," ","action_draw_life_images"," ","action_set_health"," ","action_if_health"," ","action_draw_health"," ","action_set_caption"," ","action_partsyst_create"," ","action_partsyst_destroy"," ","action_partsyst_clear"," ","action_parttype_create_old"," ","action_parttype_create"," ","action_parttype_color"," ","action_parttype_colour"," ","action_parttype_life"," ","action_parttype_speed"," ","action_parttype_gravity"," ","action_parttype_secondary"," ","action_partemit_create"," ","action_partemit_destroy"," ","action_partemit_burst"," ","action_partemit_stream"," ","action_cd_play"," ","action_cd_stop"," ","action_cd_pause"," ","action_cd_resume"," ","action_cd_present"," ","action_cd_playing"," ","action_set_cursor"," ","action_webpage"," ","action_splash_web"," ","action_draw_sprite"," ","action_draw_background"," ","action_draw_text"," ","action_draw_text_transformed"," ","action_draw_rectangle"," ","action_draw_gradient_hor"," ","action_draw_gradient_vert"," ","action_draw_ellipse"," ","action_draw_","\n            ellipse_gradient"," ","action_draw_line"," ","action_draw_arrow"," ","action_color"," ","action_colour"," ","action_font"," ","action_fullscreen"," ","action_snapshot"," ","action_effect"," ","You can find out more about the new GML Visual from the manual section on ","GML Visual","."," ","The following built-in global variables are also obsolete, although they are still considered reserved variables in GML so that the IDE can recognise them and flag them for updating/removing when a legacy project that uses them is imported (as are the variables listed under the Views and the Backgrounds sections, above):"," ","gamemaker_registered"," ","gamemaker_progamemaker_","\n          version"," ","secure_mode"," ","show_health"," ","show_score"," ","show_lives"," ","caption_score"," ","caption_lives"," ","caption_health"," ","argument_relative"," ","room_caption"," ","room_speed"," ","transition_steps"," ","transition_kind"," ","game_guid"," ","error_last"," ","error_occurred"," ","buffer_surface_copy"," ","Back: ","Additional Information"," ","Next: ","The File System"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2751"})