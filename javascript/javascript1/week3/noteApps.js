// NOnoN0nOYes (Note taking app)

const notes = [];

function saveNote(content, id) {
    notes.push({ content: content, id: id })
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes)

// Get a note with id number

function getNote(id) {
    let i;
    for (i = 0; i < notes.length; i++) {
        if (notes[i].id == id) {
            return notes[i].content
        }
    }
}
console.log(getNote(1))

// Log out notes

function logOutNotesFormatted() {
    for(i=0;i<notes.length;i++){
        console.log(`The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}`)
    }
}
logOutNotesFormatted()