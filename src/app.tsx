import { ChangeEvent, useState } from 'react'

import { NewNoteCard } from './components/new-note-card'
import { NoteCard } from './components/note-card'
import logo from './assets/logo-nlw-expert.svg'

interface Note {
  id: string
  date: Date
  content: string
}

export function App() {
  const [search, setSearch] = useState('')
  const [notes, setNotes] = useState<Note[]>(() => {
    const notesOnStorage = localStorage.getItem('notes')

    if (!notesOnStorage) {
      return []
    }

    return JSON.parse(notesOnStorage)
  })

  function onSaveNote(content: string) {
    const newNote = { id: crypto.randomUUID(), date: new Date(), content }

    const newNotes = [newNote, ...notes]

    setNotes(newNotes)

    localStorage.setItem('notes', JSON.stringify(newNotes))
  }

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value)
  }

  const filteredNotes =
    search !== ''
      ? notes.filter((note) =>
          note.content.toLowerCase().includes(search.toLowerCase()),
        )
      : notes

  return (
    <div className="max-w-[1140px] mx-auto my-12 px-6 space-y-6">
      <img src={logo} alt="NLW Expert" />

      <form>
        <input
          type="text"
          placeholder="Busque em suas notas..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500"
          onChange={handleSearch}
          value={search}
        />
      </form>

      <div className="h-px bg-slate-700" />

      <div className="grid grid-cols-3 auto-rows-[250px] gap-6">
        <NewNoteCard onSaveNote={onSaveNote} />

        {filteredNotes.map((note) => (
          <NoteCard
            key={note.id}
            note={{ content: note.content, date: note.date }}
          />
        ))}
      </div>
    </div>
  )
}
