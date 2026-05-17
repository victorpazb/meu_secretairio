import { TOOL_LABELS, type ToolTab } from '../types/tool'

type TabSelectorProps = {
  activeTab: ToolTab
  onTabChange: (tab: ToolTab) => void
}

const tabs: ToolTab[] = ['corrector', 'summarizer', 'translator']

export function TabSelector({ activeTab, onTabChange }: TabSelectorProps) {
  return (
    <nav className="mb-4 grid grid-cols-3 gap-2 rounded-xl bg-slate-900/70 p-1.5 sm:mb-5">
      {tabs.map((tab) => {
        const isActive = tab === activeTab

        return (
          <button
            key={tab}
            type="button"
            onClick={() => onTabChange(tab)}
            className={`rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${
              isActive
                ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/30'
                : 'text-slate-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            {TOOL_LABELS[tab]}
          </button>
        )
      })}
    </nav>
  )
}
