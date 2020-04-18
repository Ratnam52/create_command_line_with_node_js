const fs = require('fs')
const chalk = require('chalk')

const addNotes = function (title, body) {
    const readData = loadNotes()

    const duplicate = readData.filter(function (note) {
        if (note.title === title)
            return note
    })

    if (duplicate.length === 0) {
        readData.push({
            title: title,
            body: body
        })
        storeData(readData)
        console.log(chalk.green("Data add"));
    } else {
        console.log(chalk.red("Data already exist"));
    }
}

const removeNotes = function (title) {
    const readData = loadNotes()

    const duplicate = readData.filter(function (note) {
        if (note.title !== title)
            return note
    })

    if (duplicate.length < readData.length) {
        storeData(duplicate)
        console.log(chalk.green.inverse("Data remove"));
    } else {
        console.log(chalk.red.inverse("Data not exist"));
    }
}

const listNotes = () => {
    const note = loadNotes()
    console.log(chalk.inverse('Your notes'))
    note.forEach((element) => {
        console.log(element.title)
    });
}

const readNotes = (title) => {
    const note = loadNotes()
    const findNote = note.find((note) => {
        return note.title === title
    })

    debugger

    if(findNote) {
        console.log(chalk.inverse(findNote.title))
        console.log(findNote.body)
    } else {
        console.log(chalk.red.inverse('Note not found'))
    }
}

const storeData = function (readData) {
    const storeValue = JSON.stringify(readData)
    fs.writeFileSync('notes.json', storeValue)
}

const loadNotes = function () {
    try {
        const bufferData = fs.readFileSync('notes.json')
        const stringData = bufferData.toString()
        return JSON.parse(stringData)
    } catch (e) {
        return []
    }
}

module.exports = {
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
}