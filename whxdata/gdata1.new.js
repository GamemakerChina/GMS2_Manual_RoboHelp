(function() {
var glossary =  {"type":"data","entrys":[{"type":"entry","name":"absolute","value":"An absolute value is one where the sign of the value is ignored, essentially converting all values into positive ones or zero. So - for example - an absolute value for -10 would be 10."},{"type":"entry","name":"algorithm","value":"An algorithm is basically a set of instructions or rules designed to solve a definite problem. The problem can be simple like adding two numbers or a complex one, such as converting a video file from one format to another or compressing audio into a smaller file size.."},{"type":"entry","name":"anti-aliasing","value":"This is a technique used to smooth otherwise jagged lines or textures by blending the color of an edge with the color of the pixels around it. The result should be a more pleasing and realistic appearance, depending on the intensity of the effect."},{"type":"entry","name":"API","value":"The acronym 'API' stands for Application Programming Interface, and this refers to sets of rules, routines, and protocols used to build software applications. APIs help in communication with third party programs or services, which can be used to build different software. Companies such as Facebook and Twitter actively use APIs to help developers gain easier access to their services, and in GameMaker Studio 2 you'll see the API scronym used when talking about extensions - for example, the Google Play Services API or the Amazon Game On API."},{"type":"entry","name":"application surface","value":"The application surface is a special built-in surface that GameMaker Studio 2 will draw everything to in the Draw Events of a game (a surface is essentially an area of memory reserved for graphics). This surface is then drawn to the display buffer at the end of each game frame, displaying its contents to the player."},{"type":"entry","name":"architectures","value":"The architecture of a processor chip (CPU) is a description of its basic components and of its basic operations. Each processor family has its own architecture, like ARM or x64.\r\n"},{"type":"entry","name":"ARGB","value":"This is an anacronym for Alpha, Red, Green, Blue, and is used to refer to the colour components specified as a hexadecimal value, eg: #FF53E270, where each set of two digits represents a single component. Breaking down the ARGB example above gives us the following component values: Alpha(FF), Red(53), Green(E2) and Blue(70). "},{"type":"entry","name":"argument","value":"An argument (also known as a parameter) is a value that is passed into a function. For example, the GameMaker Language function 'sqr(num)' is a function that will give you the square of a number that you provide as the argument, eg: 'a = sqr(4);' Here the argument is 4, and the function will return 16, which is stored in the variable 'a'."},{"type":"entry","name":"asset key","value":"A position on the timeline in the dope sheet where an asset has been placed. An asset key can be made to last multiple frames."},{"type":"entry","name":"asset track","value":"A track in the sequences track panel that holds a single asset, either a sprite, a sound, an instance, or a sequence."},{"type":"entry","name":"assignment","value":"An assignment is simply the term used when we set (assign) a value to a variable."},{"type":"entry","name":"backend","value":"The backend is the part of a program that is performed in the background and is opaque to the user, usually without the need for any user interaction. For example, the server side of things when doing network programming over the internet, or the data processing that goes on behind the scenes in an RPG game. This is essentially the oppositre of the frontend."},{"type":"entry","name":"bezier interpolation","value":"Bezier interpolation involves estimating a new value by connecting two adjacent known values with a mathematically generated spline curve which can be edited using \"handles\" attached to each point. You can then get the interpolated value by checking any point along the line."},{"type":"entry","name":"bit","value":"A single data value that can either be 1 or 0 (true or false). Bits are combined in blocks of 8 to create a byte."},{"type":"entry","name":"bit depth","value":"The bit depth refers to the number of bits in each sample of an audio file. Lower bit depth gives poorer quality sound but much smaller file size. Lower bit depths are usually used for small sound effects and patforms where memory may be an issue (like HTML5)."},{"type":"entry","name":"bit rate","value":"Bit rate is measured in Kilobits-per-sec(kbps or k) and is the number of bits encoded per second or the number of bits transmitted or received per second. The higher the bit rate and sampling rate, the higher the audio quality but the more processing power and bandwidth it needs. Lower bit rates create a smaller file size and use less processing and bandwidth, but with a drop in audio quality. For good quality music usually a bit rate of 64–128kbps (96kbps+ recommended) is preferred."},{"type":"entry","name":"bitmap","value":"A bitmap is the term used to describe any static image that is comprised of coloured pixels that are stored as bits (unlike vector images which are stored using mathematical algorithms). PNG, JPG and BMP are example of bitmap images, while SWF would be an example of a vector image."},{"type":"entry","name":"boolean","value":"A boolean is a type of variable that can return true or false based on its value, and can be used in conditions and expressions. The constants 'false' or 'true' can be applied to a boolean, which are the equivalent of the real values 0 and 1."},{"type":"entry","name":"bounding box","value":"For sprites, the bounding-box is the name given to the edges of the area that collisions will initially be detected in, and it doesn't have to be the same size as the sprite it's being applied to. For sequences, the bounding box is the outer edge of the total space that one or more assets occupy in the canvas."},{"type":"entry","name":"build tools","value":"Build tools are external applications that GameMaker Studio 2 requires to generate executable packages for the different target platforms."},{"type":"entry","name":"byte","value":"A byte is a unit of data that is eight binary digits long, and each of the digits that comprise a byte are called bits, ie: a byte is 8 bits, and a bit can be a 1 or a 0."},{"type":"entry","name":"Cache","value":"The cache is a collection of files that are generated by GameMaker once and then stored and re-used over multiple runs of a project. Note that this cache can sometimes become 'stale', meaning it must be cleared to force GameMaker to rebuild it from scratch, ensuring that no stale files corrupt your final game exectable."},{"type":"entry","name":"callback","value":"A callback is simply a function that runs and then triggers another function (or code block) when it has finished doing whatever it was assigned to do. For example, the funtion sprite_add() will trigger a callback in the asynchronous Image Loaded event when the sprite has been loaded."},{"type":"entry","name":"catmull-rom interpolation","value":"This is a type of non-linear interpolation based on mathematical splines. It is used to estimate a new value by connecting two adjacent known values using 'smooth' curves (splines), and a new value can be derived from any point along the line."},{"type":"entry","name":"Compiling","value":"Compiling is when GameMaker takes your code and collects it together in such a way as to create an executable package that will run on a device as a game."},{"type":"entry","name":"compression","value":"Compression is the use of mathematical algorithms to reduce the size of a file. This is used in particular for audio and image files, where formats like JPG (image) and MP3 (audio) are compressed formats. Compression usually results is much smaller file sizes, but with some data loss which may or may not be noticable depending on the type and strength of the compression used. Uncompressed formats would be BMP (image) or WAV (audio), which have larger file sizes, but no data loss."},{"type":"entry","name":"conditional","value":"Conditionals, conditional statements, and conditional expressions are features of general programming language, and they help the code make a choice whrere the result is either true or false. These can perform different actions depending on the need of the programmer, and multiple conditionals can be combined into a single condition, as long as the final value of the condition is either true or false. Examples of conditional statements are 'if' and 'while'."},{"type":"entry","name":"constant","value":"A constant is a term used to describe a named value that does not change throughout the execution of the program. GameMaker Studio 2 has a number of built-in constants - for example os_windows - but you can also create your own constant values for use in your projects (called Macros) and extensions."},{"type":"entry","name":"CPU overhead","value":"CPU overhead measures the amount of work a computer's central processing unit can perform and the percentage of that capacity that's used by individual computing tasks."},{"type":"entry","name":"deadzone","value":"The deadzone is the distance you have to move an analog stick before the game recognizes it's being moved. A low deadzone will make any slight movement of the analog stick move your player or aim or whatever. A high deadzone value means that the analog stick needs a much greater movement before the game will detect it and move whatever is being controlled."},{"type":"entry","name":"display buffer","value":"The display buffer is the 'canvas' where everything is finally drawn. Some events target this directly (like the Pre Draw event), while others will first draw to the application surface and then draw that to the display buffer."},{"type":"entry","name":"DNS","value":"Domain Name System - This system associates domain names (e.g. gamemaker.io) to other info, such as IP addresses. DNS records are returned from a DNS lookup."},{"type":"entry","name":"Dope Sheet","value":"The Dope Sheet is the visual representation of the sequence timeline, and where you can add, remove and edit the different asset keys and parameter keys that affect how the different tracks in the sequence will behave over time."},{"type":"entry","name":"downsampling","value":"Downsampling is the process of reducing samples in audio and, more generally, in signals. For audio it means that samples are thrown away and less samples remain, leading to a loss of information. The sample frequency of the audio is lowered as well as the quality of the audio. This change distorts the audio."},{"type":"entry","name":"encoding","value":"Encoding transforms data into another format using a scheme that is publicly available so that it can easily be reversed. This is not the same as encryption, as it does not require a key to decode it. Encoding is generally used to either change the data into a format for eaiser use by a different system (like sending data to a server), or for making data unreadable to the human eye."},{"type":"entry","name":"EULA","value":"The End User Licence Agreement (EULA) is a legal document that outlines the licence for a product that you are getting."},{"type":"entry","name":"exception","value":"A special, unexpected and anomalous condition encountered during the execution of a program is known as an exception. It can also be termed as an error or a condition which alters the way of the program or the microprocessor to a different path. An example of an exception can be the case when a program tries to access a variable, but the variable does not exist. Exceptions must be handled and eradicated in the program code to avoid any fatal error, a process called debugging."},{"type":"entry","name":"executable package","value":"A package of files that are used to execute a program. In GameMaker Studio this can be a single file - like an installer for windows - or multiple files - like the HTML5 output."},{"type":"entry","name":"expression","value":"An expression is a combination of one or more constants, variables, operators, and/or functions that are interpreted according to particular rules of precedence and association to return another value. A simple expression would be (5 + 5), which returns 10."},{"type":"entry","name":"falsy","value":"A value that is considered \"false\" when used as a boolean, for example in an if() condition."},{"type":"entry","name":"floating point","value":"Floating point numbers are numbers that contain decimal points. For example, the numbers 5.5, 0.001, and -2,345.6789 are floating point numbers. Numbers that do not have decimal places are called integers (e.g. 2, 56, 1400)."},{"type":"entry","name":"font","value":"A font is a collection of graphical glyphs used to represent text in a language. Fonts can be different weights, sizes, and styles and are used to display any written content in a project."},{"type":"entry","name":"framework","value":"A framework is a base foundation of code that may be altered and/or built upon by the user. A framework might include different software libraries, APIs, compilers and much more. In simpler terms, a framework provides a favorable environment for a certain type and level of programming for a project. In GameMaker Studio 2 you can, for example, create your own framework projects (via Local Asset Packages) that contain scripts and objects for general controls, stat management, networking, or anything else you commonly use in your projects, and then import these into new projects right at the beginning to give you the basic grounding to conntinue without having to reprogram these systems every time."},{"type":"entry","name":"frontend","value":"The frontend is the part of a program that is 'front facing', ie: the part that the end user interacts with. For example, in GameMaker Studio 2 the interface where you do the programming and add assets, etc... is the frontend of the program, as it is where you interact with the program and input values and files and other things. This is essentially the oppositre of the backend."},{"type":"entry","name":"GameMaker: Studio 1.4","value":"A previous version of the GameMaker software (often called Legacy GameMaker) that is no longer available nor supported. "},{"type":"entry","name":"garbage collector","value":"The garbage collector is an automated tool that is part of the game code and is used to remove certain things (like arrays and structs) from memory when they are no longer referenced in your code, without the need for you to explicitly remove them."},{"type":"entry","name":"gizmos","value":"Gizmo are directly manipulable, self contained, visual screen idioms - essentially anything that is visual and can be interacted with or manpulated by the user to generate an effect or a specific result. "},{"type":"entry","name":"GUI","value":"Short for 'Graphical User Interface', which is a user interface that includes graphical elements, such as windows, icons and buttons. In GameMaker you have a specific set of object events (Draw GUI Events) that can draw to this layer specifically designed for things like score, lives, inventories, etc..."},{"type":"entry","name":"hard-coded","value":"In computer programming, the term hard-coded is used to describe code that is considered fixed and not likely to change. Hardcoded features are built into hardware or software in such a way that they cannot be modified later on. For example, if you are making a game and 'hard-code' the player health to 10, then you would be using the value 10 throughout the game code rather than using a variable."},{"type":"entry","name":"hashing","value":"Hashing is the method of creating a string or value that relates to a single source - usually a file - and ONLY that source. For example., in GameMaker you can generate a hash for a save file, then, before accessing it later, generate another hash for it and check the original hash and the new hash to determine if the file has been tampered with."},{"type":"entry","name":"HSV","value":"This stands for Hue, Saturation and Value and is a way of expressing a colour usually using values from 0 to 255. The hue is the colour hue value, the saturation is amount of the colour to be used, and the value is the brightness of the colour. "},{"type":"entry","name":"HUD","value":"In games, the HUD stands for the Heads-Up Display. This is the method by which information is visually relayed to the player as part of a game's user interface, so things like the health bar, status icons, score, etc... all form part of the HUD, and normally HUD elements do not require user interaction."},{"type":"entry","name":"IDE","value":"The IDE, or Integrated Development Environment, is a software application that provides comprehensive facilities to computer programmers for software development. In this case, the entire frontend of GameMaker Studio 2 is considered the IDE, and includes sections to create graphics, add sounds, and add code to make your games."},{"type":"entry","name":"iteration","value":"An iteration is a single pass through a set of operations in your project code. One form of iteration in computer programming is via loops. A loop will repeat a certain segment of code until a condition is met and it can proceed further. Each time the computer runs a loop, it is known as an iteration. In simple terms, iteration is the process of repeating a particular snippet of code over and over again to perform a certain action."},{"type":"entry","name":"JSON","value":"JSON stands for JavaScript Object Notatio, and is a lightweight format for storing data. JSON is often used when data is sent from a server to a web page and is considered 'self-describing' and easy to understand and follow when viewed."},{"type":"entry","name":"keyframe","value":"A keyframe (also called a parameter key) is a point on the timeline in the dope sheet where a change in a parameter value is defined."},{"type":"entry","name":"keyword","value":"Keywords are special words that are reserved by a programming language or a program as they have a special meaning. These keywords are reserved to perform certain tasks, and they can be either commands or parameters. Each programming language has a set of reserved keywords (also known as reserved names) which cannot be used as variable names, and the GameMaker Language is no exception, where words like return, while, if and break are all reserved kewords used in the programming language."},{"type":"entry","name":"linear interpolation","value":"Linear interpolation involves estimating a new value by connecting two adjacent known values with a straight line. You can then get the interpolated value by checking any point along the line. In graphics, linear interpolation refers to a basic method of smoothing pixel edges."},{"type":"entry","name":"literal","value":"An explicit value written in code, e.g. when you write \"A TEXT STRING\" you are using a string literal, as opposed to returning a string through a variable or function. Similarly, [0, 1, 2] is an array literal."},{"type":"entry","name":"machine code","value":"Machine code is code that is directly executed by a CPU without the need for interpretation by an interpreter. It is the lowest level of code and contains the instructions that the processor executes.\r\nIt is specific to a processor architecture. As a consequence, it is optimized. It can also be generated from source code in a higher level programming language by a compiler.\r\nIn GameMaker the YoYo Compiler can be used to generate an executable containing optimized machine code for a variety of platforms."},{"type":"entry","name":"method","value":"In GameMaker, a method is the name given to a user-defined function that has been bound to an instance, so that the instance variable is the name of the funtion and what you use to call it."},{"type":"entry","name":"multicast","value":"Multicast is network communication where multiple receivers are addressed instead of a single receiver in a single transmission."},{"type":"entry","name":"operand","value":"An operand is a term used to denote the values which can be manipulated using different operators. In the expression A + B + C, A, B and C are the operands."},{"type":"entry","name":"operator","value":"An operator is a term used to denote something which can manipulate different operands. In the expression A + B - C, + and - are the operators. Examples of different operators are + (addition), - (subtrtaction), = (equals), != (not equal) and >= (greater than or equal to), but there are many more."},{"type":"entry","name":"parameter key","value":"A parameter key (also called a keyframe) is a point on the timeline in the dope sheet where a change in a parameter value is defined."},{"type":"entry","name":"parameter tracks","value":"A track that has been assigned to an asset track in the track panel and that changes a single parameter for the asset track it's linked to, like the position, or the image index."},{"type":"entry","name":"physics","value":"In GameMaker, when we talk about an object, instance or room using 'physics' we mean it is using the built-in physics simulation functions, based on the Box2D physics library."},{"type":"entry","name":"playhead","value":"The current 'play' position within the timeline in the Sequences dope sheet or the Sprite editor frame view. In sequences (and sprites), this will move as the animation is previewed, and you can place it on specific frames to see and edit the keys and keyframes at that position."},{"type":"entry","name":"port number","value":"A port number is a way to identify a specific process to which an Internet or other network message is to be forwarded when it arrives at a server."},{"type":"entry","name":"pure","value":"A pure function has no effect on the game, and does not create or change anything. It only returns a value. Given the same set of arguments, it always returns the same value."},{"type":"entry","name":"Remote Workers","value":"A Remote Worker is a special program that GameMaker Studio 2 will use on certain platforms to create your game executables without actually running the GameMaker Studio 2 IDE on that platform"},{"type":"entry","name":"rendered","value":"When something is rendered in GameMaker Studio 2, it generally means that it has simply been 'drawn to the display buffer' or 'drawn to a surface'.  Rendering can also refer to the process of turning some kind of vector source (like a font) into a bitmap image,."},{"type":"entry","name":"RSS","value":"Short for 'Rich Site Summary', and is a standardized system for the distribution of content from an online publisher to Internet users."},{"type":"entry","name":"Runtime","value":"The runtime in GameMaker Studio 2 is the collection of compiler assets that is required by the program to create a final executable package for a given target platform. These are installed seperately from the IDE, and can be changed and updated at any time."},{"type":"entry","name":"sample rate","value":"Sample rate is the number of samples of audio carried per second, measured in Hz or kHz (one kHz being 1000 Hz). The higher the sample rate, the more a sound will approximate the original analog waveform, but the larger the file size will be. In general sound effects are fine with a lower sample rate than music."},{"type":"entry","name":"SCM","value":"SCM stands for Source Control Management, which is a program (or suite of programs) responsible for maintining versions of the source code for a project. SCM permits you to store a running history of code changes, as well as review and undo any changes made to the source code, among other things."},{"type":"entry","name":"SDK","value":"SDK stands for 'Software Development Kit'. This usually refers to a collection of software and/or packages used for developing applications for a specific device or operating system."},{"type":"entry","name":"server","value":"In computing, a server is a computer program or a device that provides functionality for other programs or devices, called 'clients'.\r\n"},{"type":"entry","name":"shaders","value":"A shader is a collection of small programs that run directly on the GPU to create graphics and graphical effects. These are very fast to run and free up the CPU to do other things."},{"type":"entry","name":"smooth interpolation","value":"Smooth interpolation involves estimating a new value by connecting two adjacent known values with a mathematically generated spline curve . You can then get the interpolated value by checking any point along the line."},{"type":"entry","name":"source code","value":"Source code is the fundamental component of a computer program that is required for the program to run."},{"type":"entry","name":"spline","value":"A spline is basically a smooth curve used to join points. Mathematically speaking it is deifned as a sufficiently smooth polynomial function that is piecewise-defined, and possesses a high degree of smoothness at the places where the polynomial pieces connect."},{"type":"entry","name":"sprites","value":"A sprite is a bitmap graphic that is designed to be part of a larger scene. It can either be a static image or an animated graphic."},{"type":"entry","name":"statement","value":"In programming, a statement is a single line of code written legally in a programming language that expresses an action to be carried out. A statement might have internal components of its own, including expressions, operators and functions. An example of a statement is A = B + 5. A GameMaker Studio 2 program is nothing but a sequence of one or more statements that together perform a task (like move the player). "},{"type":"entry","name":"swatches","value":"A swatch is simply a small square sample of a colour or a material used to illustrate how it will look."},{"type":"entry","name":"syntax","value":"Similar to human languages, programming languages have their own set of rules on how statements can be conveyed, and this set of rules is known as the syntax. While a number of programming languages share many features, functions, and capabilities, they generally differ in syntax. Without the proper use of syntax, one cannot write an executable program, and wrong syntax will lead to errors when compiling."},{"type":"entry","name":"texel","value":"Texel (or texture element) is the fundamental unit of texture space, much like a pixel is the fundamental element of picture space. Textures are represented by arrays of Texels, just as pictures are represented by arrays of pixels. When texturing a 3D surface (a process known as texture mapping) the renderer maps texels to appropriate pixels in the output picture."},{"type":"entry","name":"texture atlas","value":"Another name for a texture page, which is simply a collection of images required by one or more sprites in your game, organised in an optimal way to use as little texture memory as possible."},{"type":"entry","name":"texture page","value":"A texture page (also called a texture atlas) is a collection of images (sprites, tilesets, font characters, etc...) that are grouped together in an optimal way so that they take up the least amount of texture memory when your game is run."},{"type":"entry","name":"tile map","value":"The tile map is the name given to a collection of tiles taken from a tile set and used to create levels in a game."},{"type":"entry","name":"tile sets","value":"A tile set is a collection of square or rectangular graphical assets laid out on a grid as a single image. Each item in the grid can then be placed multiple times in a room to create a larger scene called the 'tile map'."},{"type":"entry","name":"timelines","value":"A timeline in GameMaker Studio 2 is a linear collection of events that will be run in consecutive order. Each event can be given code or actions to perform a task and when the timeline is run, these tasks will be performed as each event in the tmeline is reached."},{"type":"entry","name":"Track Panel","value":"The area of the sequence editor that shows you all the different tracks in a sequence - asset tracks, parameter tracks, track groups and clip mask groups."},{"type":"entry","name":"truth table","value":"A truth table is a mathematical table used in logic - specifically in connection with boolean algebra and boolean functions - which sets out the functional values of logical expressions on each of their functional arguments, that is, for each combination of values taken by their logical variables."},{"type":"entry","name":"truthy","value":"A value that is considered \"true\" when used as a boolean, for example in an if() condition."},{"type":"entry","name":"typo","value":"Typographic error."},{"type":"entry","name":"URL","value":"Short for 'Universal Resource Locator', and is basically the address of something on the internet."},{"type":"entry","name":"v-sync","value":"V-sync or vertical synchronisation is used to synchronise your game update speed to the refresh rate of the monitor. This can reduce screen tearing - which is when your screen displays portions of multiple frames in one go - but can also cause performance issues or problems on monitors with high refresh-rates."},{"type":"entry","name":"variable","value":"A variable is a named value within a program which can be modified, stored and displayed whenever required. For example, if we have an integer variable with a name XYZ and it stores a value 10, we can then do things like A = XYZ + 10, which will set the value of the variable A to 20, since XYZ is 10 and we are adding 10 to it. You can also change variable values using operators, so doing XYZ = XYZ + 100 would modify the value of our XYZ variable to be equal to 110. Variables can also be used to store identifiers and references to different assets."},{"type":"entry","name":"vector","value":"A vector is a mathematical construct that has a size, called the magnitude, and a direction. In GameMaker, a vector is usually used to show the distance and direction something moved in. A vector can also be used to define images and certain image formats like SWF use vector maths to define the images they contain."},{"type":"entry","name":"Version Number","value":"A version number is a unique set of numbers assigned to a specific release of a software program, game or asset, normally with the format MAJOR.MINOR.MAINTENANCE, eg: v2.3.56. Typically, as updates and entirely new editions of a game or asset are released, the version number will increase."},{"type":"entry","name":"vertex","value":"A vertex is the name given to a single point of a polygon that contains various characteristics that define it's position, its colour and its texture. In computer graphics, this usually means a corner of a triangle that is used to create a primitive, and a combination of such primitives is what makes the graphics on the screen."},{"type":"entry","name":"Virtual Machine (VM)","value":"In GameMaker, the The VM (Virtual Machine) is a compiling method that uses a generic runner for each platform and then uses that to interpret the code for your game."},{"type":"entry","name":"VRAM","value":"VRAM is the amount of memory available for video, ie: the memory space that can store textures and images."},{"type":"entry","name":"weak reference","value":"A weak reference is a reference that does not protect the referenced object from collection by a garbage collector, and so can be used to check if a struct is still \"alive\" (referenced) or not somewhere in the game."},{"type":"entry","name":"YoYo Compiler (YYC)","value":"This is a special compiler for creating executable packages that use native code instead of interepreted code and a runner (wich is what the GameMaker VM compile uses). Compiled code is faster to run, but takes more time to compile the executable."}]};
window.rh.model.publish(rh.consts('KEY_TEMP_DATA'), glossary, { sync:true });
})();
