import * as Dialog from '@radix-ui/react-dialog'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { X } from 'lucide-react'
import { toast } from 'sonner'

interface NoteCardProps {
  note: {
    id: string
    date: Date
    content: string
  }
  onDeleteNote: (id: string) => void
}

export function NoteCard({ note, onDeleteNote }: NoteCardProps) {
  function handleDeleteNote() {
    onDeleteNote(note.id)

    toast.success('Nota excluída com sucesso!')
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger className="flex flex-col gap-3 text-left bg-slate-800 rounded-md p-5 overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
        <span className="text-sm font-medium text-slate-300">
          {formatDistanceToNow(note.date, {
            locale: ptBR,
            addSuffix: true,
          })}
        </span>
        <p className="text-sm leading-6 text-slate-400">{note.content}</p>

        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/50" />
        <Dialog.Content className="fixed overflow-hidden inset-0 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[640px] w-full md:h-[60vh] bg-slate-700 md:rounded-md flex flex-col outline-none">
          <Dialog.Close className="absolute top-0 right-0 p-1.5 bg-slate-800 text-slate-500 hover:text-slate-200 transition-colors">
            <X className="size-5" />
          </Dialog.Close>

          <div className="flex-1 flex flex-col gap-3 p-5">
            <span className="text-sm font-medium text-slate-300">
              {formatDistanceToNow(note.date, {
                locale: ptBR,
                addSuffix: true,
              })}
            </span>
            <p className="text-sm leading-6 text-slate-400">{note.content}</p>
          </div>
          <button
            type="button"
            onClick={handleDeleteNote}
            className="w-full py-5 bg-slate-800 text-sm font-medium text-slate-300 outline-none group"
          >
            Deseja{' '}
            <span className="text-red-400 underline-offset-2 group-hover:underline">
              apagar essa nota
            </span>
            ?
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
