import { NewNoteCard } from './components/new-note-card'
import { NoteCard } from './components/note-card'
import logo from './assets/logo-nlw-expert.svg'

export function App() {
  return (
    <div className="max-w-[1140px] mx-auto my-12 px-6 space-y-6">
      <img src={logo} alt="NLW Expert" />

      <form>
        <input
          type="text"
          placeholder="Busque em suas notas..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500"
        />
      </form>

      <div className="h-px bg-slate-700" />

      <div className="grid grid-cols-3 auto-rows-[250px] gap-6">
        <NewNoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
      </div>
    </div>
  )
}
