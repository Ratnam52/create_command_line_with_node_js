# create_command_line_with_node_js

Hi, In this session we going to create our own command line with Node.js.

In node js we have default component named as ‘process.argv’. The ‘process.argv’ property returns an array containing the command line arguments passed when the Node.js process was launched.
But we here we using the ‘Yargs’ plugin. Yargs helps you build interactive command line tools, by parsing arguments and generating an elegant user interface.

1. Create new node js project

2. npm install yargs

3. My Code

const yargs = require('yargs')

yargs.command({
         command: 'add',
         describe: 'add new describe',
         handler: function() {
                   console.log("Your command has executed")
         }
})

yargs.parse()


4. Code Explanation
yargs.command :- Create a new command that named what we given into ‘command ’ field. In ‘describe’ field we can add some additional details.

5. Open your command prompt and run below command

node <file_name.js> add

note :- here ‘add’ is a keyword

Output:-
Your command has executed

In handler field we can execute some function as like your wise.

Hope, This will help you.
