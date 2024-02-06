import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'

export function NewNoteCard() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="bg-slate-700 rounded-md p-5 flex flex-col gap-3 text-left outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
        <span className="text-sm font-medium">Adicionar nota</span>
        <p className="text-sm leading-6 text-slate-400">
          Grave uma nota em áudio que será convertida para texto
          automaticamente.
        </p>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/50" />
        <Dialog.Content className="fixed overflow-hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full h-[60vh] bg-slate-700 rounded-md flex flex-col outline-none">
          <Dialog.Close className="absolute top-0 right-0 p-1.5 bg-slate-800 text-slate-500 hover:text-slate-200 transition-colors">
            <X className="size-5" />
          </Dialog.Close>

          <div className="flex-1 flex flex-col gap-3 p-5">
            <span className="text-sm font-medium text-slate-300">
              Adicionar nota
            </span>
            <p className="text-sm leading-6 text-slate-400">
              Comece{' '}
              <button className="font-medium text-lime-400 underline-offset-2 hover:underline">
                gravando uma nota
              </button>{' '}
              em áudio ou se preferir{' '}
              <button className="font-medium text-lime-400 underline-offset-2 hover:underline">
                utilize apenas texto.
              </button>
            </p>
          </div>
          <button
            type="button"
            className="w-full py-5 bg-lime-400 text-sm font-semibold text-lime-950 outline-none hover:bg-lime-500 transition-colors"
          >
            Salvar nota
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
