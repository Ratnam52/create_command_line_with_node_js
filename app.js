const yargs = require('yargs')
const notes = require('./notes.js')

// console.log(process.argv)

yargs.command({
    command: 'add',
    describe: 'add new describe',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        // console.log("Title: "+ argv.title)
        // console.log("Body: "+ argv.body)
        notes.addNotes(argv.title,argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove describe',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        },        
    },
    handler: function(argv) {
        notes.removeNotes(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'list describe',   
    handler() {
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'read describe',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNotes(argv.title)
    }
})


yargs.parse()
// console.log(yargs.argv)