rh._.exports({"0":[[" ","Reverting Files"]],"1":[["Source Control - Reverting Files"]],"2":[["revert files"]],"3":[[" ","Reverting Files"]],"4":[[" ","In the previous sections you've seen how to ","create a repository"," and ","commit things to it",", but what happens if you make a mistake and want to \"roll back\" to a previous commit? Let's make a deliberate error and see how we can deal with it then..."," ","First of all create a new resource - in this example we'll make a Script resource - and initially you'll see no status icon since as far as source control is concerned it doesn't exist exist yet. In the script resource add a simple line of code, like:"," ","show_debug_message(\"Hello World\");"," ","If you now close the code editor, the script will save and the modified file icon "," will appear beside it in the ","Asset Browser",". Now, open up the ","Commit ","window and you'll see there are four staged changes, as new resources automatically get added:"," ","The changes staged will be:"," ","the ",".yyp"," project file"," ","a view file"," ","the GML script itself"," ","the ",".yy"," file referencing it"," ","You should type in a commit message and then click the ","Commit ","button, just as we explained previously. Now, we go back to our script and change the line of code to (for example):"," ","show_debug_message(\"Hello World, how are you?\");"," ","When we close the code editor, again a red icon "," will be shown beside the script, but we've realised that we made a mistake with our code and we want to roll back to a previous version to fix it (obviously, you could just open the script and fix it easily, since the example is so simple, but in large projects that's not normally a feasible approach). What we need to do is ","revert ","our changes."," ","To revert a change we first need to open up the commit window again, so we go to ","Source Control"," > ","Commit Changes"," once more. Our changed file will again be staged ready for committing, but this isn't what we want so we click the button ","Unstage All"," to take it out of the staging area."," ","If we now right click "," on the file we changed we'll get a context menu with an option to ","Revert Path",":"," ","When you select this option, you will revert the files back to the previous state that they were in."," ","IMPORTANT!"," When you revert you will get a message asking you to reload or save the current project due to the file checker detecting changes on disk:"," ","You must hit Reload and not save, as saving will save what is memory rather than reloading the reverted files.\n  "," ","That's all great for when you edit something and want to change back without having already performed a commit, but what about when you have committed one or more changes and want to roll back to a ","previous ","commit? Well, let's edit our script again to say:"," ","show_debug_message(\"This is a bad idea\");"," ","Now we commit it as before to get it under source control. So, this was a bad idea and we want to roll back, which means to start with we need to open the ","Source Control"," > ","View History"," window. Here we will see a list of all previous commits now in this window, starting with the initial commit, the commit for the script, and then the commit for the script that we have edited as a \"bad idea\":"," ","We now have two choices. We can revert an entire revision - which will revert all files that were changed to those of the chosen commit - or we can choose to revert a path - which will simply revert a single file. Let's do the first option to start with:"," ","Right click "," our second commit in the ","Commit History"," pane (the \"Hello World\" commit)."," ","Select ","Revert To This Revision"," and then choose ","ReLoad"," on the warning message."," ","You should see that the script now has a red status icon ",", and if we open it up, we'll have the following:"," ","We can then do a commit on the project and we'll be back to where we were once again. However we can also undo that action for the file and get our \"bad idea\" commit back by doing the following:"," ","Open the ","Commit Changes"," window."," ","Unstage the script with the \"Hello World\" code in it."," ","Right click "," and ","Revert Path","."," ","Now we are back to having the erroneous file in the project again! Well, we can take this opportunity to revert only that file path instead of reverting everything to a previous revision. For that we need to do the following:"," ","Open the ","View History"," window."," ","Click on the second commit (the \"Hello World\" commit)."," ","Right click "," on our script GML in the Files pane and select ","Revert Path","."," ","We should be back to having our \"Hello World\" code and we can then do a fresh commit to update the source control again with the corrected file."," ","Back: ","Source Control"," ","Next: ","Cloning A Repository"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2582"})