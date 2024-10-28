import { insertDB, getDB, saveDB } from "./db.js";

// Create a brand new note inside the 'database'
export const createNote = async (note, tags) => {
        const noteMetadata = {
                tags,
                id: Date.now(),
                content: note
        }

        await insertDB(noteMetadata)

        return noteMetadata
}

// Get all current notes inside the 'database'
export const getNotes = async () => {
        const { notes } = await getDB()
        return notes
}

// Search for notes which apply to the given filter
export const searchNotes = async (filter) => {
        const { notes } = await getDB()
        return notes.filter(note => note.content.toLowerCase().includes(filter.toLowerCase()))
}

// Delete a note from the 'database' with the given id
export const deleteNote = async (id) => {
        const { notes } = await getDB()
        const match = notes.find(note => note.id === id)

        if (match) {
                const newNotes = notes.filter(note => note.id !== id)

                await saveDB({notes: newNotes})
                return id
        }
}

// Delete all current note records inside the 'database'
export const deleteAll = () => saveDB({notes: []})
