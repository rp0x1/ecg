import fs from "node:fs/promises"

const DB_PATH = new URL("../db.json", import.meta.url)

// Get a overview of the database and its KV pairs
export const getDB = async () => {
    const db = await fs.readFile(DB_PATH, "utf-8")
    return JSON.parse(db)
}

// Save the current state of a database insertion into the database file
export const saveDB = async (db) => {
    await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2))
    return db
}

// Insert a note into the 'database'
export const insertDB = async(note) => {
    const db = await getDB()
    db.notes.push(note) 
    await saveDB(db)
    return note
}