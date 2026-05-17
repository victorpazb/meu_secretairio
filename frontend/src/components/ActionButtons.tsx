import type { ActionOption } from '../types/tool'

type ActionButtonsProps = {
  options: ActionOption[]
  selectedAction: string
  onSelectAction: (action: string) => void
}

export function ActionButtons({ options, selectedAction, onSelectAction }: ActionButtonsProps) {
  return (
    <div className="mb-4 flex flex-wrap gap-2 sm:mb-5">
      {options.map((option) => {
        const isSelected = selectedAction === option.id

        return (
          <button
            key={option.id}
            type="button"
            onClick={() => onSelectAction(option.id)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
              isSelected
                ? 'bg-indigo-500 text-white shadow-md shadow-indigo-500/30'
                : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
            }`}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
