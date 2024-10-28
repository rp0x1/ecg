import yargs from 'yargs'
import { createNote, getNotes, searchNotes, deleteNote, deleteAll } from './notes.js'
import { hideBin } from 'yargs/helpers'

const listNotes = notes => {
  notes.forEach(({id, content, tags}) => {
    console.log('\n')
    console.log('id: ', id)
    console.log('tags: ', tags.join(', ')),
    console.log('content: ', content)
  })
}

yargs(hideBin(process.argv))
  .command('new <note>', 'Create a new note', yargs => {
    return yargs.positional("note", {
      type: "string",
      description: "The content of the note to create",
    })
  }, async (argv) => {
    const tags = argv.tags ? argv.tags.split(',') : []
    const note = await createNote(argv.note, tags)

    console.log(`Note added! NID: ${note.id}`)
  })
  .option("tags", {
    alias: "t",
    type: "string",
    description: "tags to add to the note",
  })
  .command('all', 'get all notes', () => {}, async (argv) => {
    const notes = await getNotes()
    listNotes(notes)

  })
  .command('search <filter>', 'get matching notes', yargs => {
    return yargs.positional('filter', {
      describe: 'The search term to filter notes by, will be applied to note.content',
      type: 'string'
    })
  }, async (argv) => {
      const filteredNotes = await searchNotes(argv.filter)
      listNotes(filteredNotes)

  })
  .command('remove <id>', 'remove a note by id', yargs => {
    return yargs.positional('id', {
      type: 'number',
      description: 'The id of the note you want to remove'
    })
  }, async (argv) => {
    const id = await deleteNote(argv.id)
    console.log(id)
  })
  .command('web [port]', 'launch website to see notes', yargs => {
    return yargs
      .positional('port', {
        describe: 'port to bind on',
        default: 5000,
        type: 'number'
      })
  }, async (argv) => {
   
  })
  .command('clean', 'remove all notes', () => {}, async (argv) => {
    await deleteAll()
    console.log('DB SWEPT')
  })
  .demandCommand(1)
  .parse()